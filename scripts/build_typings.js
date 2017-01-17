const fs = require('fs')
const docs = require('../dist/date_fns_docs.json')

// Common

const lowerCaseTypes = ['String', 'Number', 'Boolean']

function camelCaseToSnakeCase (string) {
  return string
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/([A-Z])([A-Z])([a-z])/g, '$1_$2$3').toLowerCase()
}

function correctTypeCase (type) {
  if (lowerCaseTypes.includes(type)) {
    return type.toLowerCase()
  }
  return type
}

function getParams (params, {indent = 1, leftBorder = '{', rightBorder = '}'} = {}) {
  if (params.length === 0) {
    return '()'
  }

  const props = params
    .filter(param => param.name.includes('.'))
    .map(param => {
      const [parent, name] = param.name.split('.')
      const {type, variable, optional} = param
      return {
        parent,
        name,
        type,
        variable,
        optional
      }
    })

  const paramIndent = '  '.repeat(indent + 1)
  const borderIndent = '  '.repeat(indent)

  return [leftBorder]
    .concat(params
      .filter(param => !param.name.includes('.'))
      .map(param => {
        const name = param.name
        const type = getType(param.type.names, {
          props: props.filter(param => param.parent === name),
          forceArray: param.variable,
          indent
        })
        return `${paramIndent}${param.variable ? '...' : ''}${name}${param.optional ? '?' : ''}: ${type}`
      })
      .join(',\n')
    )
    .concat(borderIndent + rightBorder)
    .join('\n')
}

function getType (types, {props = [], forceArray = false, indent = 1} = {}) {
  const typeStrings = types.map(type => {
    if (type === '*') {
      return 'any'
    }

    if (type === 'function') {
      return 'Function'
    }

    if (type.startsWith('Array.')) {
      const [, arrayType] = type.match(/^Array\.<(\w+)>$/i)
      return `${correctTypeCase(arrayType)}[]`
    }

    if (props.length > 0) {
      return getParams(props, {indent: indent + 1})
    }

    const caseCorrectedType = correctTypeCase(type)
    if (forceArray) {
      return `${caseCorrectedType}[]`
    }

    return caseCorrectedType
  })

  const allArrayTypes = typeStrings.length > 1 && typeStrings.every(type => type.endsWith('[]'))
  if (allArrayTypes) {
    return `(${typeStrings.map(type => type.replace('[]', '')).join(' | ')})[]`
  }

  return typeStrings.join(' | ')
}

function getFpFnType (params, returns) {
  const fpParams = params
    .filter(param => !param.name.includes('.'))
    .reverse()
    .filter((_, index) => index !== 0)
    .map(param => param.type.names)

  fpParams.push(returns)

  return fpParams
    .map(type => `(${getType(type)})`)
    .join(' => ')
}

function getFpFnWithOptionsType (params, returns) {
  const fpParams = params
    .filter(param => !param.name.includes('.'))
    .reverse()
    .map(param => param.type.names)

  fpParams.push(returns)

  return fpParams
    .map(type => `(${getType(type)})`)
    .join(' => ')
}

// TypeScript

function getTypeScriptTypeAlias (type) {
  const name = type.content.name
  const properties = getParams(type.content.properties, {indent: 0})

  return `type ${name} = ${properties}`
}

function getTypeScriptDateFnsModuleDefinition (fns) {
  const definition = ['declare module \'date-fns\' {']
    .concat(fns.map(getTypeScriptFnDefinition).join('\n\n'))
    .concat('}')
    .join('\n')

  return {
    name: 'date-fns',
    definition
  }
}

function getTypeScriptDateFnsFpModuleDefinition (fns) {
  const fpFns = fns.map(fn => {
    return {
      name: fn.content.name,
      definition: getTypeScriptFpFnDefinition(fn)
    }
  })

  const fpFnsWithOptions = fns.map(fn => {
    return {
      name: `${fn.content.name}WithOption`,
      definition: getTypeScriptFpFnWithOptionsDefinition(fn)
    }
  })

  const fnDefinitions = fpFns
    .concat(fpFnsWithOptions)
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(fn => fn.definition)
    .join('\n\n')

  const definition = ['declare module \'date-fns/fp\' {']
    .concat(fnDefinitions)
    .concat('}')
    .join('\n')

  return {
    name: 'date-fns/fp',
    definition
  }
}

function getTypeScriptFnDefinition (fn) {
  const name = fn.content.name

  const params = getParams(fn.content.params, {indent: 1, leftBorder: '(', rightBorder: ')'})
  const returns = getType(fn.content.returns[0].type.names)

  return [`  function ${name} ${params}: ${returns}`]
    .concat(`  namespace ${name} {}`)
    .join('\n')
}

function getTypeScriptFpFnDefinition (fn) {
  const name = fn.content.name

  const type = getFpFnType(fn.content.params, fn.content.returns[0].type.names)

  return [`  let ${name}: ${type}`]
    .concat(`  namespace ${name} {}`)
    .join('\n')
}

function getTypeScriptFpFnWithOptionsDefinition (fn) {
  const name = fn.content.name

  const type = getFpFnWithOptionsType(fn.content.params, fn.content.returns[0].type.names)

  return [`  let ${name}WithOptions: ${type}`]
    .concat(`  namespace ${name}WithOptions {}`)
    .join('\n')
}

function getTypeScriptFnModuleDefinition (moduleSuffix, fn) {
  const name = fn.content.name
  const moduleName = `date-fns/${camelCaseToSnakeCase(name)}${moduleSuffix}`

  const definition = [`declare module '${moduleName}' {`]
    .concat(`  import {${name}} from 'date-fns'`)
    .concat(`  export = ${name}`)
    .concat('}')
    .join('\n')

  return {
    name: moduleName,
    definition
  }
}

function getTypeScriptFpFnModuleDefinition (moduleSuffix, fn) {
  const name = fn.content.name
  const moduleName = `date-fns/fp/${name}${moduleSuffix}`

  const definition = [`declare module '${moduleName}' {`]
    .concat(`  import {${name}} from 'date-fns/fp'`)
    .concat(`  export = ${name}`)
    .concat('}')
    .join('\n')

  return {
    name: moduleName,
    definition
  }
}

function getTypeScriptFpFnWithOptionsModuleDefinition (moduleSuffix, fn) {
  const name = fn.content.name
  const moduleName = `date-fns/fp/${name}WithOptions${moduleSuffix}`

  const definition = [`declare module '${moduleName}' {`]
    .concat(`  import {${name}WithOptions} from 'date-fns/fp'`)
    .concat(`  export = ${name}WithOptions`)
    .concat('}')
    .join('\n')

  return {
    name: moduleName,
    definition
  }
}

function generateTypeScriptTypings (docs) {
  const fns = Object.keys(docs)
    .filter(key => key.endsWith(' Helpers'))
    .map(category => docs[category])
    .reduce((previousValue, newValue) => [...previousValue, ...newValue], [])
    .sort((a, b) => a.content.name.localeCompare(b.content.name))

  const typeDefinitions = docs['Types']
    .map(getTypeScriptTypeAlias)

  const moduleDefinitions = [getTypeScriptDateFnsModuleDefinition(fns)]
    .concat(fns.map(getTypeScriptFnModuleDefinition.bind(null, '')))
    .concat(fns.map(getTypeScriptFnModuleDefinition.bind(null, '/index')))
    .map(module => module.definition)

  const fpModuleDefinitions = [getTypeScriptDateFnsFpModuleDefinition(fns)]
    .concat(fns.map(getTypeScriptFpFnModuleDefinition.bind(null, '')))
    .concat(fns.map(getTypeScriptFpFnModuleDefinition.bind(null, '/index')))
    .concat(fns.map(getTypeScriptFpFnWithOptionsModuleDefinition.bind(null, '')))
    .concat(fns.map(getTypeScriptFpFnWithOptionsModuleDefinition.bind(null, '/index')))
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(module => module.definition)

  const definitionString = ['// This file is generated automatically by `scripts/build_typings.js`. Please, don\'t change it.']
    .concat(typeDefinitions)
    .concat(moduleDefinitions)
    .concat(fpModuleDefinitions)
    .join('\n\n')

  fs.writeFileSync('./typings.d.ts', `${definitionString}\n`)
}

// Flow

function generateFlowTypeAlias (type) {
  const name = type.content.name
  const properties = getParams(type.content.properties, {indent: 0})
  const filename = `./flow-typed/${name}.js.flow`

  const aliasString = ['// @flow']
    .concat('// This file is generated automatically by `scripts/build_typings.js`. Please, don\'t change it.')
    .concat('')
    .concat(`type ${name} = ${properties}\n`)
    .join('\n')

  fs.writeFileSync(filename, aliasString)
}

function generateFlowFnTyping (fn) {
  const filename = `./src/${camelCaseToSnakeCase(fn.content.name)}/index.js.flow`

  const params = getParams(fn.content.params, {indent: 0, leftBorder: '(', rightBorder: ')'})
  const returns = getType(fn.content.returns[0].type.names)

  const typingString =  ['// @flow']
    .concat('// This file is generated automatically by `scripts/build_typings.js`. Please, don\'t change it.')
    .concat('')
    .concat(`declare module.exports: ${params} => ${returns}\n`)
    .join('\n')

  fs.writeFileSync(filename, typingString)
}

function generateFlowFpFnTyping (fn) {
  const filename = `./src/fp/${fn.content.name}/index.js.flow`

  const type = getFpFnType(fn.content.params, fn.content.returns[0].type.names)

  const typingString = ['// @flow']
    .concat('// This file is generated automatically by `scripts/build_typings.js`. Please, don\'t change it.')
    .concat('')
    .concat(`declare module.exports: ${type}\n`)
    .join('\n')

  fs.writeFileSync(filename, typingString)
}

function generateFlowFpFnWithOptionsTyping (fn) {
  const filename = `./src/fp/${fn.content.name}WithOptions/index.js.flow`

  const type = getFpFnWithOptionsType(fn.content.params, fn.content.returns[0].type.names)

  const typingString = ['// @flow']
    .concat('// This file is generated automatically by `scripts/build_typings.js`. Please, don\'t change it.')
    .concat('')
    .concat(`declare module.exports: ${type}\n`)
    .join('\n')

  fs.writeFileSync(filename, typingString)
}

function generateFlowTypings (docs) {
  docs['Types']
    .forEach(generateFlowTypeAlias)

  Object.keys(docs)
    .filter(key => key.endsWith(' Helpers'))
    .map(category => docs[category])
    .reduce((previousValue, newValue) => [...previousValue, ...newValue], [])
    .forEach((fn) => {
      generateFlowFnTyping(fn)
      generateFlowFpFnTyping(fn)
      generateFlowFpFnWithOptionsTyping(fn)
    })
}

generateTypeScriptTypings(docs)
generateFlowTypings(docs)
