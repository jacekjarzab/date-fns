// This file is generated automatically by `scripts/build_typings.js`. Please, don't change it.

type Range = {
  start: Date | string | number,
  end: Date | string | number
}

type Options = {
  weekStartsOn?: number,
  additionalDigits?: 0 | 1 | 2,
  locale?: Locale,
  unit?: 's' | 'm' | 'h' | 'd' | 'M' | 'Y',
  partialMethod?: 'floor' | 'ceil' | 'round'
}

type Locale = {
  distanceInWords?: {
    localize?: Function
  },
  format?: {
    formatters?: Object,
    formattingTokensRegExp?: RegExp
  },
  parse?: {
    units?: Object,
    parsers?: Object,
    parsingTokensRegExp?: RegExp
  }
}

declare module 'date-fns' {
  function addDays (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addDays {}

  function addHours (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addHours {}

  function addISOYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addISOYears {}

  function addMilliseconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addMilliseconds {}

  function addMinutes (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addMinutes {}

  function addMonths (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addMonths {}

  function addQuarters (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addQuarters {}

  function addSeconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addSeconds {}

  function addWeeks (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addWeeks {}

  function addYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addYears {}

  function areRangesOverlapping (
    rangeLeft: Range,
    rangeRight: Range,
    options?: Options
  ): boolean
  namespace areRangesOverlapping {}

  function closestIndexTo (
    dateToCompare: Date | string | number,
    datesArray: (Date | string | number)[],
    options?: Options
  ): number
  namespace closestIndexTo {}

  function closestTo (
    dateToCompare: Date | string | number,
    datesArray: (Date | string | number)[],
    options?: Options
  ): Date
  namespace closestTo {}

  function compareAsc (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace compareAsc {}

  function compareDesc (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace compareDesc {}

  function differenceInCalendarDays (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarDays {}

  function differenceInCalendarISOWeeks (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarISOWeeks {}

  function differenceInCalendarISOYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarISOYears {}

  function differenceInCalendarMonths (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarMonths {}

  function differenceInCalendarQuarters (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarQuarters {}

  function differenceInCalendarWeeks (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: {
      weekStartsOn?: number
    }
  ): number
  namespace differenceInCalendarWeeks {}

  function differenceInCalendarYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarYears {}

  function differenceInDays (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInDays {}

  function differenceInHours (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInHours {}

  function differenceInISOYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInISOYears {}

  function differenceInMilliseconds (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInMilliseconds {}

  function differenceInMinutes (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInMinutes {}

  function differenceInMonths (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInMonths {}

  function differenceInQuarters (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInQuarters {}

  function differenceInSeconds (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInSeconds {}

  function differenceInWeeks (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInWeeks {}

  function differenceInYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInYears {}

  function distanceInWords (
    dateToCompare: Date | string | number,
    date: Date | string | number,
    options?: {
      includeSeconds?: boolean,
      addSuffix?: boolean,
      locale?: Locale
    }
  ): string
  namespace distanceInWords {}

  function distanceInWordsStrict (
    dateToCompare: Date | string | number,
    date: Date | string | number,
    options?: {
      addSuffix?: boolean,
      unit?: 's' | 'm' | 'h' | 'd' | 'M' | 'Y',
      partialMethod?: 'floor' | 'ceil' | 'round',
      locale?: Locale
    }
  ): string
  namespace distanceInWordsStrict {}

  function eachDay (
    startDate: Date | string | number,
    endDate: Date | string | number,
    options?: Options
  ): Date[]
  namespace eachDay {}

  function endOfDay (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfDay {}

  function endOfHour (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfHour {}

  function endOfISOWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfISOWeek {}

  function endOfISOYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfISOYear {}

  function endOfMinute (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfMinute {}

  function endOfMonth (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfMonth {}

  function endOfQuarter (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfQuarter {}

  function endOfSecond (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfSecond {}

  function endOfWeek (
    date: Date | string | number,
    options?: {
      weekStartsOn?: number
    }
  ): Date
  namespace endOfWeek {}

  function endOfYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfYear {}

  function format (
    date: Date | string | number,
    format: string,
    options?: {
      locale?: Locale
    }
  ): string
  namespace format {}

  function getDate (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDate {}

  function getDay (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDay {}

  function getDayOfYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDayOfYear {}

  function getDaysInMonth (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDaysInMonth {}

  function getDaysInYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDaysInYear {}

  function getHours (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getHours {}

  function getISODay (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISODay {}

  function getISOWeek (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISOWeek {}

  function getISOWeeksInYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISOWeeksInYear {}

  function getISOYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISOYear {}

  function getMilliseconds (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getMilliseconds {}

  function getMinutes (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getMinutes {}

  function getMonth (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getMonth {}

  function getOverlappingDaysInRanges (
    rangeLeft: Range,
    rangeRight: Range,
    options?: Options
  ): number
  namespace getOverlappingDaysInRanges {}

  function getQuarter (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getQuarter {}

  function getSeconds (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getSeconds {}

  function getTime (
    date: Date | string | number
  ): number
  namespace getTime {}

  function getYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getYear {}

  function isAfter (
    date: Date | string | number,
    dateToCompare: Date | string | number,
    options?: Options
  ): boolean
  namespace isAfter {}

  function isBefore (
    date: Date | string | number,
    dateToCompare: Date | string | number,
    options?: Options
  ): boolean
  namespace isBefore {}

  function isDate (
    argument: any,
    options?: Options
  ): boolean
  namespace isDate {}

  function isEqual (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isEqual {}

  function isFirstDayOfMonth (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isFirstDayOfMonth {}

  function isFriday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isFriday {}

  function isLastDayOfMonth (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isLastDayOfMonth {}

  function isLeapYear (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isLeapYear {}

  function isMonday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isMonday {}

  function isSameDay (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameDay {}

  function isSameHour (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameHour {}

  function isSameISOWeek (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameISOWeek {}

  function isSameISOYear (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameISOYear {}

  function isSameMinute (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameMinute {}

  function isSameMonth (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameMonth {}

  function isSameQuarter (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameQuarter {}

  function isSameSecond (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameSecond {}

  function isSameWeek (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: {
      weekStartsOn?: number
    }
  ): boolean
  namespace isSameWeek {}

  function isSameYear (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameYear {}

  function isSaturday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isSaturday {}

  function isSunday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isSunday {}

  function isThursday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isThursday {}

  function isTuesday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isTuesday {}

  function isValid (
    date: Date,
    options?: Options
  ): boolean
  namespace isValid {}

  function isWednesday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isWednesday {}

  function isWeekend (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isWeekend {}

  function isWithinRange (
    date: Date | string | number,
    range: Range,
    options?: Options
  ): boolean
  namespace isWithinRange {}

  function lastDayOfISOWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfISOWeek {}

  function lastDayOfISOYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfISOYear {}

  function lastDayOfMonth (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfMonth {}

  function lastDayOfQuarter (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfQuarter {}

  function lastDayOfWeek (
    date: Date | string | number,
    options?: {
      weekStartsOn?: number
    }
  ): Date
  namespace lastDayOfWeek {}

  function lastDayOfYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfYear {}

  function max (
    datesArray: (Date | string | number)[]
  ): Date
  namespace max {}

  function min (
    datesArray: (Date | string | number)[]
  ): Date
  namespace min {}

  function parse (
    dateString: string,
    formatString: string,
    baseDate: Date | string | number,
    options?: {
      locale?: Locale
    }
  ): Date
  namespace parse {}

  function setDate (
    date: Date | string | number,
    dayOfMonth: number,
    options?: Options
  ): Date
  namespace setDate {}

  function setDay (
    date: Date | string | number,
    day: number,
    options?: {
      weekStartsOn?: number
    }
  ): Date
  namespace setDay {}

  function setDayOfYear (
    date: Date | string | number,
    dayOfYear: number,
    options?: Options
  ): Date
  namespace setDayOfYear {}

  function setHours (
    date: Date | string | number,
    hours: number,
    options?: Options
  ): Date
  namespace setHours {}

  function setISODay (
    date: Date | string | number,
    day: number,
    options?: Options
  ): Date
  namespace setISODay {}

  function setISOWeek (
    date: Date | string | number,
    isoWeek: number,
    options?: Options
  ): Date
  namespace setISOWeek {}

  function setISOYear (
    date: Date | string | number,
    isoYear: number,
    options?: Options
  ): Date
  namespace setISOYear {}

  function setMilliseconds (
    date: Date | string | number,
    milliseconds: number,
    options?: Options
  ): Date
  namespace setMilliseconds {}

  function setMinutes (
    date: Date | string | number,
    minutes: number,
    options?: Options
  ): Date
  namespace setMinutes {}

  function setMonth (
    date: Date | string | number,
    month: number,
    options?: Options
  ): Date
  namespace setMonth {}

  function setQuarter (
    date: Date | string | number,
    quarter: number,
    options?: Options
  ): Date
  namespace setQuarter {}

  function setSeconds (
    date: Date | string | number,
    seconds: number,
    options?: Options
  ): Date
  namespace setSeconds {}

  function setYear (
    date: Date | string | number,
    year: number,
    options?: Options
  ): Date
  namespace setYear {}

  function startOfDay (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfDay {}

  function startOfHour (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfHour {}

  function startOfISOWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfISOWeek {}

  function startOfISOYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfISOYear {}

  function startOfMinute (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfMinute {}

  function startOfMonth (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfMonth {}

  function startOfQuarter (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfQuarter {}

  function startOfSecond (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfSecond {}

  function startOfWeek (
    date: Date | string | number,
    options?: {
      weekStartsOn?: number
    }
  ): Date
  namespace startOfWeek {}

  function startOfYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfYear {}

  function subDays (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subDays {}

  function subHours (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subHours {}

  function subISOYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subISOYears {}

  function subMilliseconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subMilliseconds {}

  function subMinutes (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subMinutes {}

  function subMonths (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subMonths {}

  function subQuarters (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subQuarters {}

  function subSeconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subSeconds {}

  function subWeeks (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subWeeks {}

  function subYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subYears {}

  function toDate (
    argument: Date | string | number,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date
  namespace toDate {}
}

declare module 'date-fns/fp' {
  let addDays: (number) => (Date | string | number) => (Date)
  namespace addDays {}

  let addDaysWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace addDaysWithOptions {}

  let addHours: (number) => (Date | string | number) => (Date)
  namespace addHours {}

  let addHoursWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace addHoursWithOptions {}

  let addISOYears: (number) => (Date | string | number) => (Date)
  namespace addISOYears {}

  let addISOYearsWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace addISOYearsWithOptions {}

  let addMilliseconds: (number) => (Date | string | number) => (Date)
  namespace addMilliseconds {}

  let addMillisecondsWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace addMillisecondsWithOptions {}

  let addMinutes: (number) => (Date | string | number) => (Date)
  namespace addMinutes {}

  let addMinutesWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace addMinutesWithOptions {}

  let addMonths: (number) => (Date | string | number) => (Date)
  namespace addMonths {}

  let addMonthsWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace addMonthsWithOptions {}

  let addQuarters: (number) => (Date | string | number) => (Date)
  namespace addQuarters {}

  let addQuartersWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace addQuartersWithOptions {}

  let addSeconds: (number) => (Date | string | number) => (Date)
  namespace addSeconds {}

  let addSecondsWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace addSecondsWithOptions {}

  let addWeeks: (number) => (Date | string | number) => (Date)
  namespace addWeeks {}

  let addWeeksWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace addWeeksWithOptions {}

  let addYears: (number) => (Date | string | number) => (Date)
  namespace addYears {}

  let addYearsWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace addYearsWithOptions {}

  let areRangesOverlapping: (Range) => (Range) => (boolean)
  namespace areRangesOverlapping {}

  let areRangesOverlappingWithOptions: (Options) => (Range) => (Range) => (boolean)
  namespace areRangesOverlappingWithOptions {}

  let closestIndexTo: ((Date | string | number)[]) => (Date | string | number) => (number)
  namespace closestIndexTo {}

  let closestIndexToWithOptions: (Options) => ((Date | string | number)[]) => (Date | string | number) => (number)
  namespace closestIndexToWithOptions {}

  let closestTo: ((Date | string | number)[]) => (Date | string | number) => (Date)
  namespace closestTo {}

  let closestToWithOptions: (Options) => ((Date | string | number)[]) => (Date | string | number) => (Date)
  namespace closestToWithOptions {}

  let compareAsc: (Date | string | number) => (Date | string | number) => (number)
  namespace compareAsc {}

  let compareAscWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (number)
  namespace compareAscWithOptions {}

  let compareDesc: (Date | string | number) => (Date | string | number) => (number)
  namespace compareDesc {}

  let compareDescWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (number)
  namespace compareDescWithOptions {}

  let differenceInCalendarDays: (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInCalendarDays {}

  let differenceInCalendarDaysWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInCalendarDaysWithOptions {}

  let differenceInCalendarISOWeeks: (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInCalendarISOWeeks {}

  let differenceInCalendarISOWeeksWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInCalendarISOWeeksWithOptions {}

  let differenceInCalendarISOYears: (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInCalendarISOYears {}

  let differenceInCalendarISOYearsWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInCalendarISOYearsWithOptions {}

  let differenceInCalendarMonths: (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInCalendarMonths {}

  let differenceInCalendarMonthsWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInCalendarMonthsWithOptions {}

  let differenceInCalendarQuarters: (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInCalendarQuarters {}

  let differenceInCalendarQuartersWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInCalendarQuartersWithOptions {}

  let differenceInCalendarWeeks: (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInCalendarWeeks {}

  let differenceInCalendarWeeksWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInCalendarWeeksWithOptions {}

  let differenceInCalendarYears: (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInCalendarYears {}

  let differenceInCalendarYearsWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInCalendarYearsWithOptions {}

  let differenceInDays: (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInDays {}

  let differenceInDaysWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInDaysWithOptions {}

  let differenceInHours: (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInHours {}

  let differenceInHoursWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInHoursWithOptions {}

  let differenceInISOYears: (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInISOYears {}

  let differenceInISOYearsWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInISOYearsWithOptions {}

  let differenceInMilliseconds: (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInMilliseconds {}

  let differenceInMillisecondsWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInMillisecondsWithOptions {}

  let differenceInMinutes: (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInMinutes {}

  let differenceInMinutesWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInMinutesWithOptions {}

  let differenceInMonths: (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInMonths {}

  let differenceInMonthsWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInMonthsWithOptions {}

  let differenceInQuarters: (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInQuarters {}

  let differenceInQuartersWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInQuartersWithOptions {}

  let differenceInSeconds: (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInSeconds {}

  let differenceInSecondsWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInSecondsWithOptions {}

  let differenceInWeeks: (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInWeeks {}

  let differenceInWeeksWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInWeeksWithOptions {}

  let differenceInYears: (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInYears {}

  let differenceInYearsWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (number)
  namespace differenceInYearsWithOptions {}

  let distanceInWords: (Date | string | number) => (Date | string | number) => (string)
  namespace distanceInWords {}

  let distanceInWordsStrict: (Date | string | number) => (Date | string | number) => (string)
  namespace distanceInWordsStrict {}

  let distanceInWordsStrictWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (string)
  namespace distanceInWordsStrictWithOptions {}

  let distanceInWordsWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (string)
  namespace distanceInWordsWithOptions {}

  let eachDay: (Date | string | number) => (Date | string | number) => (Date[])
  namespace eachDay {}

  let eachDayWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (Date[])
  namespace eachDayWithOptions {}

  let endOfDay: (Date | string | number) => (Date)
  namespace endOfDay {}

  let endOfDayWithOptions: (Options) => (Date | string | number) => (Date)
  namespace endOfDayWithOptions {}

  let endOfHour: (Date | string | number) => (Date)
  namespace endOfHour {}

  let endOfHourWithOptions: (Options) => (Date | string | number) => (Date)
  namespace endOfHourWithOptions {}

  let endOfISOWeek: (Date | string | number) => (Date)
  namespace endOfISOWeek {}

  let endOfISOWeekWithOptions: (Options) => (Date | string | number) => (Date)
  namespace endOfISOWeekWithOptions {}

  let endOfISOYear: (Date | string | number) => (Date)
  namespace endOfISOYear {}

  let endOfISOYearWithOptions: (Options) => (Date | string | number) => (Date)
  namespace endOfISOYearWithOptions {}

  let endOfMinute: (Date | string | number) => (Date)
  namespace endOfMinute {}

  let endOfMinuteWithOptions: (Options) => (Date | string | number) => (Date)
  namespace endOfMinuteWithOptions {}

  let endOfMonth: (Date | string | number) => (Date)
  namespace endOfMonth {}

  let endOfMonthWithOptions: (Options) => (Date | string | number) => (Date)
  namespace endOfMonthWithOptions {}

  let endOfQuarter: (Date | string | number) => (Date)
  namespace endOfQuarter {}

  let endOfQuarterWithOptions: (Options) => (Date | string | number) => (Date)
  namespace endOfQuarterWithOptions {}

  let endOfSecond: (Date | string | number) => (Date)
  namespace endOfSecond {}

  let endOfSecondWithOptions: (Options) => (Date | string | number) => (Date)
  namespace endOfSecondWithOptions {}

  let endOfWeek: (Date | string | number) => (Date)
  namespace endOfWeek {}

  let endOfWeekWithOptions: (Options) => (Date | string | number) => (Date)
  namespace endOfWeekWithOptions {}

  let endOfYear: (Date | string | number) => (Date)
  namespace endOfYear {}

  let endOfYearWithOptions: (Options) => (Date | string | number) => (Date)
  namespace endOfYearWithOptions {}

  let format: (string) => (Date | string | number) => (string)
  namespace format {}

  let formatWithOptions: (Options) => (string) => (Date | string | number) => (string)
  namespace formatWithOptions {}

  let getDate: (Date | string | number) => (number)
  namespace getDate {}

  let getDateWithOptions: (Options) => (Date | string | number) => (number)
  namespace getDateWithOptions {}

  let getDay: (Date | string | number) => (number)
  namespace getDay {}

  let getDayOfYear: (Date | string | number) => (number)
  namespace getDayOfYear {}

  let getDayOfYearWithOptions: (Options) => (Date | string | number) => (number)
  namespace getDayOfYearWithOptions {}

  let getDaysInMonth: (Date | string | number) => (number)
  namespace getDaysInMonth {}

  let getDaysInMonthWithOptions: (Options) => (Date | string | number) => (number)
  namespace getDaysInMonthWithOptions {}

  let getDaysInYear: (Date | string | number) => (number)
  namespace getDaysInYear {}

  let getDaysInYearWithOptions: (Options) => (Date | string | number) => (number)
  namespace getDaysInYearWithOptions {}

  let getDayWithOptions: (Options) => (Date | string | number) => (number)
  namespace getDayWithOptions {}

  let getHours: (Date | string | number) => (number)
  namespace getHours {}

  let getHoursWithOptions: (Options) => (Date | string | number) => (number)
  namespace getHoursWithOptions {}

  let getISODay: (Date | string | number) => (number)
  namespace getISODay {}

  let getISODayWithOptions: (Options) => (Date | string | number) => (number)
  namespace getISODayWithOptions {}

  let getISOWeek: (Date | string | number) => (number)
  namespace getISOWeek {}

  let getISOWeeksInYear: (Date | string | number) => (number)
  namespace getISOWeeksInYear {}

  let getISOWeeksInYearWithOptions: (Options) => (Date | string | number) => (number)
  namespace getISOWeeksInYearWithOptions {}

  let getISOWeekWithOptions: (Options) => (Date | string | number) => (number)
  namespace getISOWeekWithOptions {}

  let getISOYear: (Date | string | number) => (number)
  namespace getISOYear {}

  let getISOYearWithOptions: (Options) => (Date | string | number) => (number)
  namespace getISOYearWithOptions {}

  let getMilliseconds: (Date | string | number) => (number)
  namespace getMilliseconds {}

  let getMillisecondsWithOptions: (Options) => (Date | string | number) => (number)
  namespace getMillisecondsWithOptions {}

  let getMinutes: (Date | string | number) => (number)
  namespace getMinutes {}

  let getMinutesWithOptions: (Options) => (Date | string | number) => (number)
  namespace getMinutesWithOptions {}

  let getMonth: (Date | string | number) => (number)
  namespace getMonth {}

  let getMonthWithOptions: (Options) => (Date | string | number) => (number)
  namespace getMonthWithOptions {}

  let getOverlappingDaysInRanges: (Range) => (Range) => (number)
  namespace getOverlappingDaysInRanges {}

  let getOverlappingDaysInRangesWithOptions: (Options) => (Range) => (Range) => (number)
  namespace getOverlappingDaysInRangesWithOptions {}

  let getQuarter: (Date | string | number) => (number)
  namespace getQuarter {}

  let getQuarterWithOptions: (Options) => (Date | string | number) => (number)
  namespace getQuarterWithOptions {}

  let getSeconds: (Date | string | number) => (number)
  namespace getSeconds {}

  let getSecondsWithOptions: (Options) => (Date | string | number) => (number)
  namespace getSecondsWithOptions {}

  let getTime: (number)
  namespace getTime {}

  let getTimeWithOptions: (Date | string | number) => (number)
  namespace getTimeWithOptions {}

  let getYear: (Date | string | number) => (number)
  namespace getYear {}

  let getYearWithOptions: (Options) => (Date | string | number) => (number)
  namespace getYearWithOptions {}

  let isAfter: (Date | string | number) => (Date | string | number) => (boolean)
  namespace isAfter {}

  let isAfterWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (boolean)
  namespace isAfterWithOptions {}

  let isBefore: (Date | string | number) => (Date | string | number) => (boolean)
  namespace isBefore {}

  let isBeforeWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (boolean)
  namespace isBeforeWithOptions {}

  let isDate: (any) => (boolean)
  namespace isDate {}

  let isDateWithOptions: (Options) => (any) => (boolean)
  namespace isDateWithOptions {}

  let isEqual: (Date | string | number) => (Date | string | number) => (boolean)
  namespace isEqual {}

  let isEqualWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (boolean)
  namespace isEqualWithOptions {}

  let isFirstDayOfMonth: (Date | string | number) => (boolean)
  namespace isFirstDayOfMonth {}

  let isFirstDayOfMonthWithOptions: (Options) => (Date | string | number) => (boolean)
  namespace isFirstDayOfMonthWithOptions {}

  let isFriday: (Date | string | number) => (boolean)
  namespace isFriday {}

  let isFridayWithOptions: (Options) => (Date | string | number) => (boolean)
  namespace isFridayWithOptions {}

  let isLastDayOfMonth: (Date | string | number) => (boolean)
  namespace isLastDayOfMonth {}

  let isLastDayOfMonthWithOptions: (Options) => (Date | string | number) => (boolean)
  namespace isLastDayOfMonthWithOptions {}

  let isLeapYear: (Date | string | number) => (boolean)
  namespace isLeapYear {}

  let isLeapYearWithOptions: (Options) => (Date | string | number) => (boolean)
  namespace isLeapYearWithOptions {}

  let isMonday: (Date | string | number) => (boolean)
  namespace isMonday {}

  let isMondayWithOptions: (Options) => (Date | string | number) => (boolean)
  namespace isMondayWithOptions {}

  let isSameDay: (Date | string | number) => (Date | string | number) => (boolean)
  namespace isSameDay {}

  let isSameDayWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (boolean)
  namespace isSameDayWithOptions {}

  let isSameHour: (Date | string | number) => (Date | string | number) => (boolean)
  namespace isSameHour {}

  let isSameHourWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (boolean)
  namespace isSameHourWithOptions {}

  let isSameISOWeek: (Date | string | number) => (Date | string | number) => (boolean)
  namespace isSameISOWeek {}

  let isSameISOWeekWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (boolean)
  namespace isSameISOWeekWithOptions {}

  let isSameISOYear: (Date | string | number) => (Date | string | number) => (boolean)
  namespace isSameISOYear {}

  let isSameISOYearWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (boolean)
  namespace isSameISOYearWithOptions {}

  let isSameMinute: (Date | string | number) => (Date | string | number) => (boolean)
  namespace isSameMinute {}

  let isSameMinuteWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (boolean)
  namespace isSameMinuteWithOptions {}

  let isSameMonth: (Date | string | number) => (Date | string | number) => (boolean)
  namespace isSameMonth {}

  let isSameMonthWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (boolean)
  namespace isSameMonthWithOptions {}

  let isSameQuarter: (Date | string | number) => (Date | string | number) => (boolean)
  namespace isSameQuarter {}

  let isSameQuarterWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (boolean)
  namespace isSameQuarterWithOptions {}

  let isSameSecond: (Date | string | number) => (Date | string | number) => (boolean)
  namespace isSameSecond {}

  let isSameSecondWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (boolean)
  namespace isSameSecondWithOptions {}

  let isSameWeek: (Date | string | number) => (Date | string | number) => (boolean)
  namespace isSameWeek {}

  let isSameWeekWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (boolean)
  namespace isSameWeekWithOptions {}

  let isSameYear: (Date | string | number) => (Date | string | number) => (boolean)
  namespace isSameYear {}

  let isSameYearWithOptions: (Options) => (Date | string | number) => (Date | string | number) => (boolean)
  namespace isSameYearWithOptions {}

  let isSaturday: (Date | string | number) => (boolean)
  namespace isSaturday {}

  let isSaturdayWithOptions: (Options) => (Date | string | number) => (boolean)
  namespace isSaturdayWithOptions {}

  let isSunday: (Date | string | number) => (boolean)
  namespace isSunday {}

  let isSundayWithOptions: (Options) => (Date | string | number) => (boolean)
  namespace isSundayWithOptions {}

  let isThursday: (Date | string | number) => (boolean)
  namespace isThursday {}

  let isThursdayWithOptions: (Options) => (Date | string | number) => (boolean)
  namespace isThursdayWithOptions {}

  let isTuesday: (Date | string | number) => (boolean)
  namespace isTuesday {}

  let isTuesdayWithOptions: (Options) => (Date | string | number) => (boolean)
  namespace isTuesdayWithOptions {}

  let isValid: (Date) => (boolean)
  namespace isValid {}

  let isValidWithOptions: (Options) => (Date) => (boolean)
  namespace isValidWithOptions {}

  let isWednesday: (Date | string | number) => (boolean)
  namespace isWednesday {}

  let isWednesdayWithOptions: (Options) => (Date | string | number) => (boolean)
  namespace isWednesdayWithOptions {}

  let isWeekend: (Date | string | number) => (boolean)
  namespace isWeekend {}

  let isWeekendWithOptions: (Options) => (Date | string | number) => (boolean)
  namespace isWeekendWithOptions {}

  let isWithinRange: (Range) => (Date | string | number) => (boolean)
  namespace isWithinRange {}

  let isWithinRangeWithOptions: (Options) => (Range) => (Date | string | number) => (boolean)
  namespace isWithinRangeWithOptions {}

  let lastDayOfISOWeek: (Date | string | number) => (Date)
  namespace lastDayOfISOWeek {}

  let lastDayOfISOWeekWithOptions: (Options) => (Date | string | number) => (Date)
  namespace lastDayOfISOWeekWithOptions {}

  let lastDayOfISOYear: (Date | string | number) => (Date)
  namespace lastDayOfISOYear {}

  let lastDayOfISOYearWithOptions: (Options) => (Date | string | number) => (Date)
  namespace lastDayOfISOYearWithOptions {}

  let lastDayOfMonth: (Date | string | number) => (Date)
  namespace lastDayOfMonth {}

  let lastDayOfMonthWithOptions: (Options) => (Date | string | number) => (Date)
  namespace lastDayOfMonthWithOptions {}

  let lastDayOfQuarter: (Date | string | number) => (Date)
  namespace lastDayOfQuarter {}

  let lastDayOfQuarterWithOptions: (Options) => (Date | string | number) => (Date)
  namespace lastDayOfQuarterWithOptions {}

  let lastDayOfWeek: (Date | string | number) => (Date)
  namespace lastDayOfWeek {}

  let lastDayOfWeekWithOptions: (Options) => (Date | string | number) => (Date)
  namespace lastDayOfWeekWithOptions {}

  let lastDayOfYear: (Date | string | number) => (Date)
  namespace lastDayOfYear {}

  let lastDayOfYearWithOptions: (Options) => (Date | string | number) => (Date)
  namespace lastDayOfYearWithOptions {}

  let max: (Date)
  namespace max {}

  let maxWithOptions: ((Date | string | number)[]) => (Date)
  namespace maxWithOptions {}

  let min: (Date)
  namespace min {}

  let minWithOptions: ((Date | string | number)[]) => (Date)
  namespace minWithOptions {}

  let parse: (Date | string | number) => (string) => (string) => (Date)
  namespace parse {}

  let parseWithOptions: (Object) => (Date | string | number) => (string) => (string) => (Date)
  namespace parseWithOptions {}

  let setDate: (number) => (Date | string | number) => (Date)
  namespace setDate {}

  let setDateWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace setDateWithOptions {}

  let setDay: (number) => (Date | string | number) => (Date)
  namespace setDay {}

  let setDayOfYear: (number) => (Date | string | number) => (Date)
  namespace setDayOfYear {}

  let setDayOfYearWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace setDayOfYearWithOptions {}

  let setDayWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace setDayWithOptions {}

  let setHours: (number) => (Date | string | number) => (Date)
  namespace setHours {}

  let setHoursWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace setHoursWithOptions {}

  let setISODay: (number) => (Date | string | number) => (Date)
  namespace setISODay {}

  let setISODayWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace setISODayWithOptions {}

  let setISOWeek: (number) => (Date | string | number) => (Date)
  namespace setISOWeek {}

  let setISOWeekWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace setISOWeekWithOptions {}

  let setISOYear: (number) => (Date | string | number) => (Date)
  namespace setISOYear {}

  let setISOYearWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace setISOYearWithOptions {}

  let setMilliseconds: (number) => (Date | string | number) => (Date)
  namespace setMilliseconds {}

  let setMillisecondsWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace setMillisecondsWithOptions {}

  let setMinutes: (number) => (Date | string | number) => (Date)
  namespace setMinutes {}

  let setMinutesWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace setMinutesWithOptions {}

  let setMonth: (number) => (Date | string | number) => (Date)
  namespace setMonth {}

  let setMonthWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace setMonthWithOptions {}

  let setQuarter: (number) => (Date | string | number) => (Date)
  namespace setQuarter {}

  let setQuarterWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace setQuarterWithOptions {}

  let setSeconds: (number) => (Date | string | number) => (Date)
  namespace setSeconds {}

  let setSecondsWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace setSecondsWithOptions {}

  let setYear: (number) => (Date | string | number) => (Date)
  namespace setYear {}

  let setYearWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace setYearWithOptions {}

  let startOfDay: (Date | string | number) => (Date)
  namespace startOfDay {}

  let startOfDayWithOptions: (Options) => (Date | string | number) => (Date)
  namespace startOfDayWithOptions {}

  let startOfHour: (Date | string | number) => (Date)
  namespace startOfHour {}

  let startOfHourWithOptions: (Options) => (Date | string | number) => (Date)
  namespace startOfHourWithOptions {}

  let startOfISOWeek: (Date | string | number) => (Date)
  namespace startOfISOWeek {}

  let startOfISOWeekWithOptions: (Options) => (Date | string | number) => (Date)
  namespace startOfISOWeekWithOptions {}

  let startOfISOYear: (Date | string | number) => (Date)
  namespace startOfISOYear {}

  let startOfISOYearWithOptions: (Options) => (Date | string | number) => (Date)
  namespace startOfISOYearWithOptions {}

  let startOfMinute: (Date | string | number) => (Date)
  namespace startOfMinute {}

  let startOfMinuteWithOptions: (Options) => (Date | string | number) => (Date)
  namespace startOfMinuteWithOptions {}

  let startOfMonth: (Date | string | number) => (Date)
  namespace startOfMonth {}

  let startOfMonthWithOptions: (Options) => (Date | string | number) => (Date)
  namespace startOfMonthWithOptions {}

  let startOfQuarter: (Date | string | number) => (Date)
  namespace startOfQuarter {}

  let startOfQuarterWithOptions: (Options) => (Date | string | number) => (Date)
  namespace startOfQuarterWithOptions {}

  let startOfSecond: (Date | string | number) => (Date)
  namespace startOfSecond {}

  let startOfSecondWithOptions: (Options) => (Date | string | number) => (Date)
  namespace startOfSecondWithOptions {}

  let startOfWeek: (Date | string | number) => (Date)
  namespace startOfWeek {}

  let startOfWeekWithOptions: (Options) => (Date | string | number) => (Date)
  namespace startOfWeekWithOptions {}

  let startOfYear: (Date | string | number) => (Date)
  namespace startOfYear {}

  let startOfYearWithOptions: (Options) => (Date | string | number) => (Date)
  namespace startOfYearWithOptions {}

  let subDays: (number) => (Date | string | number) => (Date)
  namespace subDays {}

  let subDaysWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace subDaysWithOptions {}

  let subHours: (number) => (Date | string | number) => (Date)
  namespace subHours {}

  let subHoursWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace subHoursWithOptions {}

  let subISOYears: (number) => (Date | string | number) => (Date)
  namespace subISOYears {}

  let subISOYearsWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace subISOYearsWithOptions {}

  let subMilliseconds: (number) => (Date | string | number) => (Date)
  namespace subMilliseconds {}

  let subMillisecondsWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace subMillisecondsWithOptions {}

  let subMinutes: (number) => (Date | string | number) => (Date)
  namespace subMinutes {}

  let subMinutesWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace subMinutesWithOptions {}

  let subMonths: (number) => (Date | string | number) => (Date)
  namespace subMonths {}

  let subMonthsWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace subMonthsWithOptions {}

  let subQuarters: (number) => (Date | string | number) => (Date)
  namespace subQuarters {}

  let subQuartersWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace subQuartersWithOptions {}

  let subSeconds: (number) => (Date | string | number) => (Date)
  namespace subSeconds {}

  let subSecondsWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace subSecondsWithOptions {}

  let subWeeks: (number) => (Date | string | number) => (Date)
  namespace subWeeks {}

  let subWeeksWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace subWeeksWithOptions {}

  let subYears: (number) => (Date | string | number) => (Date)
  namespace subYears {}

  let subYearsWithOptions: (Options) => (number) => (Date | string | number) => (Date)
  namespace subYearsWithOptions {}

  let toDate: (Date | string | number) => (Date)
  namespace toDate {}

  let toDateWithOptions: (Options) => (Date | string | number) => (Date)
  namespace toDateWithOptions {}
}

declare module 'date-fns/add_days' {
  import {addDays} from 'date-fns'
  export = addDays
}

declare module 'date-fns/add_hours' {
  import {addHours} from 'date-fns'
  export = addHours
}

declare module 'date-fns/add_iso_years' {
  import {addISOYears} from 'date-fns'
  export = addISOYears
}

declare module 'date-fns/add_milliseconds' {
  import {addMilliseconds} from 'date-fns'
  export = addMilliseconds
}

declare module 'date-fns/add_minutes' {
  import {addMinutes} from 'date-fns'
  export = addMinutes
}

declare module 'date-fns/add_months' {
  import {addMonths} from 'date-fns'
  export = addMonths
}

declare module 'date-fns/add_quarters' {
  import {addQuarters} from 'date-fns'
  export = addQuarters
}

declare module 'date-fns/add_seconds' {
  import {addSeconds} from 'date-fns'
  export = addSeconds
}

declare module 'date-fns/add_weeks' {
  import {addWeeks} from 'date-fns'
  export = addWeeks
}

declare module 'date-fns/add_years' {
  import {addYears} from 'date-fns'
  export = addYears
}

declare module 'date-fns/are_ranges_overlapping' {
  import {areRangesOverlapping} from 'date-fns'
  export = areRangesOverlapping
}

declare module 'date-fns/closest_index_to' {
  import {closestIndexTo} from 'date-fns'
  export = closestIndexTo
}

declare module 'date-fns/closest_to' {
  import {closestTo} from 'date-fns'
  export = closestTo
}

declare module 'date-fns/compare_asc' {
  import {compareAsc} from 'date-fns'
  export = compareAsc
}

declare module 'date-fns/compare_desc' {
  import {compareDesc} from 'date-fns'
  export = compareDesc
}

declare module 'date-fns/difference_in_calendar_days' {
  import {differenceInCalendarDays} from 'date-fns'
  export = differenceInCalendarDays
}

declare module 'date-fns/difference_in_calendar_iso_weeks' {
  import {differenceInCalendarISOWeeks} from 'date-fns'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/difference_in_calendar_iso_years' {
  import {differenceInCalendarISOYears} from 'date-fns'
  export = differenceInCalendarISOYears
}

declare module 'date-fns/difference_in_calendar_months' {
  import {differenceInCalendarMonths} from 'date-fns'
  export = differenceInCalendarMonths
}

declare module 'date-fns/difference_in_calendar_quarters' {
  import {differenceInCalendarQuarters} from 'date-fns'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/difference_in_calendar_weeks' {
  import {differenceInCalendarWeeks} from 'date-fns'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/difference_in_calendar_years' {
  import {differenceInCalendarYears} from 'date-fns'
  export = differenceInCalendarYears
}

declare module 'date-fns/difference_in_days' {
  import {differenceInDays} from 'date-fns'
  export = differenceInDays
}

declare module 'date-fns/difference_in_hours' {
  import {differenceInHours} from 'date-fns'
  export = differenceInHours
}

declare module 'date-fns/difference_in_iso_years' {
  import {differenceInISOYears} from 'date-fns'
  export = differenceInISOYears
}

declare module 'date-fns/difference_in_milliseconds' {
  import {differenceInMilliseconds} from 'date-fns'
  export = differenceInMilliseconds
}

declare module 'date-fns/difference_in_minutes' {
  import {differenceInMinutes} from 'date-fns'
  export = differenceInMinutes
}

declare module 'date-fns/difference_in_months' {
  import {differenceInMonths} from 'date-fns'
  export = differenceInMonths
}

declare module 'date-fns/difference_in_quarters' {
  import {differenceInQuarters} from 'date-fns'
  export = differenceInQuarters
}

declare module 'date-fns/difference_in_seconds' {
  import {differenceInSeconds} from 'date-fns'
  export = differenceInSeconds
}

declare module 'date-fns/difference_in_weeks' {
  import {differenceInWeeks} from 'date-fns'
  export = differenceInWeeks
}

declare module 'date-fns/difference_in_years' {
  import {differenceInYears} from 'date-fns'
  export = differenceInYears
}

declare module 'date-fns/distance_in_words' {
  import {distanceInWords} from 'date-fns'
  export = distanceInWords
}

declare module 'date-fns/distance_in_words_strict' {
  import {distanceInWordsStrict} from 'date-fns'
  export = distanceInWordsStrict
}

declare module 'date-fns/each_day' {
  import {eachDay} from 'date-fns'
  export = eachDay
}

declare module 'date-fns/end_of_day' {
  import {endOfDay} from 'date-fns'
  export = endOfDay
}

declare module 'date-fns/end_of_hour' {
  import {endOfHour} from 'date-fns'
  export = endOfHour
}

declare module 'date-fns/end_of_iso_week' {
  import {endOfISOWeek} from 'date-fns'
  export = endOfISOWeek
}

declare module 'date-fns/end_of_iso_year' {
  import {endOfISOYear} from 'date-fns'
  export = endOfISOYear
}

declare module 'date-fns/end_of_minute' {
  import {endOfMinute} from 'date-fns'
  export = endOfMinute
}

declare module 'date-fns/end_of_month' {
  import {endOfMonth} from 'date-fns'
  export = endOfMonth
}

declare module 'date-fns/end_of_quarter' {
  import {endOfQuarter} from 'date-fns'
  export = endOfQuarter
}

declare module 'date-fns/end_of_second' {
  import {endOfSecond} from 'date-fns'
  export = endOfSecond
}

declare module 'date-fns/end_of_week' {
  import {endOfWeek} from 'date-fns'
  export = endOfWeek
}

declare module 'date-fns/end_of_year' {
  import {endOfYear} from 'date-fns'
  export = endOfYear
}

declare module 'date-fns/format' {
  import {format} from 'date-fns'
  export = format
}

declare module 'date-fns/get_date' {
  import {getDate} from 'date-fns'
  export = getDate
}

declare module 'date-fns/get_day' {
  import {getDay} from 'date-fns'
  export = getDay
}

declare module 'date-fns/get_day_of_year' {
  import {getDayOfYear} from 'date-fns'
  export = getDayOfYear
}

declare module 'date-fns/get_days_in_month' {
  import {getDaysInMonth} from 'date-fns'
  export = getDaysInMonth
}

declare module 'date-fns/get_days_in_year' {
  import {getDaysInYear} from 'date-fns'
  export = getDaysInYear
}

declare module 'date-fns/get_hours' {
  import {getHours} from 'date-fns'
  export = getHours
}

declare module 'date-fns/get_iso_day' {
  import {getISODay} from 'date-fns'
  export = getISODay
}

declare module 'date-fns/get_iso_week' {
  import {getISOWeek} from 'date-fns'
  export = getISOWeek
}

declare module 'date-fns/get_iso_weeks_in_year' {
  import {getISOWeeksInYear} from 'date-fns'
  export = getISOWeeksInYear
}

declare module 'date-fns/get_iso_year' {
  import {getISOYear} from 'date-fns'
  export = getISOYear
}

declare module 'date-fns/get_milliseconds' {
  import {getMilliseconds} from 'date-fns'
  export = getMilliseconds
}

declare module 'date-fns/get_minutes' {
  import {getMinutes} from 'date-fns'
  export = getMinutes
}

declare module 'date-fns/get_month' {
  import {getMonth} from 'date-fns'
  export = getMonth
}

declare module 'date-fns/get_overlapping_days_in_ranges' {
  import {getOverlappingDaysInRanges} from 'date-fns'
  export = getOverlappingDaysInRanges
}

declare module 'date-fns/get_quarter' {
  import {getQuarter} from 'date-fns'
  export = getQuarter
}

declare module 'date-fns/get_seconds' {
  import {getSeconds} from 'date-fns'
  export = getSeconds
}

declare module 'date-fns/get_time' {
  import {getTime} from 'date-fns'
  export = getTime
}

declare module 'date-fns/get_year' {
  import {getYear} from 'date-fns'
  export = getYear
}

declare module 'date-fns/is_after' {
  import {isAfter} from 'date-fns'
  export = isAfter
}

declare module 'date-fns/is_before' {
  import {isBefore} from 'date-fns'
  export = isBefore
}

declare module 'date-fns/is_date' {
  import {isDate} from 'date-fns'
  export = isDate
}

declare module 'date-fns/is_equal' {
  import {isEqual} from 'date-fns'
  export = isEqual
}

declare module 'date-fns/is_first_day_of_month' {
  import {isFirstDayOfMonth} from 'date-fns'
  export = isFirstDayOfMonth
}

declare module 'date-fns/is_friday' {
  import {isFriday} from 'date-fns'
  export = isFriday
}

declare module 'date-fns/is_last_day_of_month' {
  import {isLastDayOfMonth} from 'date-fns'
  export = isLastDayOfMonth
}

declare module 'date-fns/is_leap_year' {
  import {isLeapYear} from 'date-fns'
  export = isLeapYear
}

declare module 'date-fns/is_monday' {
  import {isMonday} from 'date-fns'
  export = isMonday
}

declare module 'date-fns/is_same_day' {
  import {isSameDay} from 'date-fns'
  export = isSameDay
}

declare module 'date-fns/is_same_hour' {
  import {isSameHour} from 'date-fns'
  export = isSameHour
}

declare module 'date-fns/is_same_iso_week' {
  import {isSameISOWeek} from 'date-fns'
  export = isSameISOWeek
}

declare module 'date-fns/is_same_iso_year' {
  import {isSameISOYear} from 'date-fns'
  export = isSameISOYear
}

declare module 'date-fns/is_same_minute' {
  import {isSameMinute} from 'date-fns'
  export = isSameMinute
}

declare module 'date-fns/is_same_month' {
  import {isSameMonth} from 'date-fns'
  export = isSameMonth
}

declare module 'date-fns/is_same_quarter' {
  import {isSameQuarter} from 'date-fns'
  export = isSameQuarter
}

declare module 'date-fns/is_same_second' {
  import {isSameSecond} from 'date-fns'
  export = isSameSecond
}

declare module 'date-fns/is_same_week' {
  import {isSameWeek} from 'date-fns'
  export = isSameWeek
}

declare module 'date-fns/is_same_year' {
  import {isSameYear} from 'date-fns'
  export = isSameYear
}

declare module 'date-fns/is_saturday' {
  import {isSaturday} from 'date-fns'
  export = isSaturday
}

declare module 'date-fns/is_sunday' {
  import {isSunday} from 'date-fns'
  export = isSunday
}

declare module 'date-fns/is_thursday' {
  import {isThursday} from 'date-fns'
  export = isThursday
}

declare module 'date-fns/is_tuesday' {
  import {isTuesday} from 'date-fns'
  export = isTuesday
}

declare module 'date-fns/is_valid' {
  import {isValid} from 'date-fns'
  export = isValid
}

declare module 'date-fns/is_wednesday' {
  import {isWednesday} from 'date-fns'
  export = isWednesday
}

declare module 'date-fns/is_weekend' {
  import {isWeekend} from 'date-fns'
  export = isWeekend
}

declare module 'date-fns/is_within_range' {
  import {isWithinRange} from 'date-fns'
  export = isWithinRange
}

declare module 'date-fns/last_day_of_iso_week' {
  import {lastDayOfISOWeek} from 'date-fns'
  export = lastDayOfISOWeek
}

declare module 'date-fns/last_day_of_iso_year' {
  import {lastDayOfISOYear} from 'date-fns'
  export = lastDayOfISOYear
}

declare module 'date-fns/last_day_of_month' {
  import {lastDayOfMonth} from 'date-fns'
  export = lastDayOfMonth
}

declare module 'date-fns/last_day_of_quarter' {
  import {lastDayOfQuarter} from 'date-fns'
  export = lastDayOfQuarter
}

declare module 'date-fns/last_day_of_week' {
  import {lastDayOfWeek} from 'date-fns'
  export = lastDayOfWeek
}

declare module 'date-fns/last_day_of_year' {
  import {lastDayOfYear} from 'date-fns'
  export = lastDayOfYear
}

declare module 'date-fns/max' {
  import {max} from 'date-fns'
  export = max
}

declare module 'date-fns/min' {
  import {min} from 'date-fns'
  export = min
}

declare module 'date-fns/parse' {
  import {parse} from 'date-fns'
  export = parse
}

declare module 'date-fns/set_date' {
  import {setDate} from 'date-fns'
  export = setDate
}

declare module 'date-fns/set_day' {
  import {setDay} from 'date-fns'
  export = setDay
}

declare module 'date-fns/set_day_of_year' {
  import {setDayOfYear} from 'date-fns'
  export = setDayOfYear
}

declare module 'date-fns/set_hours' {
  import {setHours} from 'date-fns'
  export = setHours
}

declare module 'date-fns/set_iso_day' {
  import {setISODay} from 'date-fns'
  export = setISODay
}

declare module 'date-fns/set_iso_week' {
  import {setISOWeek} from 'date-fns'
  export = setISOWeek
}

declare module 'date-fns/set_iso_year' {
  import {setISOYear} from 'date-fns'
  export = setISOYear
}

declare module 'date-fns/set_milliseconds' {
  import {setMilliseconds} from 'date-fns'
  export = setMilliseconds
}

declare module 'date-fns/set_minutes' {
  import {setMinutes} from 'date-fns'
  export = setMinutes
}

declare module 'date-fns/set_month' {
  import {setMonth} from 'date-fns'
  export = setMonth
}

declare module 'date-fns/set_quarter' {
  import {setQuarter} from 'date-fns'
  export = setQuarter
}

declare module 'date-fns/set_seconds' {
  import {setSeconds} from 'date-fns'
  export = setSeconds
}

declare module 'date-fns/set_year' {
  import {setYear} from 'date-fns'
  export = setYear
}

declare module 'date-fns/start_of_day' {
  import {startOfDay} from 'date-fns'
  export = startOfDay
}

declare module 'date-fns/start_of_hour' {
  import {startOfHour} from 'date-fns'
  export = startOfHour
}

declare module 'date-fns/start_of_iso_week' {
  import {startOfISOWeek} from 'date-fns'
  export = startOfISOWeek
}

declare module 'date-fns/start_of_iso_year' {
  import {startOfISOYear} from 'date-fns'
  export = startOfISOYear
}

declare module 'date-fns/start_of_minute' {
  import {startOfMinute} from 'date-fns'
  export = startOfMinute
}

declare module 'date-fns/start_of_month' {
  import {startOfMonth} from 'date-fns'
  export = startOfMonth
}

declare module 'date-fns/start_of_quarter' {
  import {startOfQuarter} from 'date-fns'
  export = startOfQuarter
}

declare module 'date-fns/start_of_second' {
  import {startOfSecond} from 'date-fns'
  export = startOfSecond
}

declare module 'date-fns/start_of_week' {
  import {startOfWeek} from 'date-fns'
  export = startOfWeek
}

declare module 'date-fns/start_of_year' {
  import {startOfYear} from 'date-fns'
  export = startOfYear
}

declare module 'date-fns/sub_days' {
  import {subDays} from 'date-fns'
  export = subDays
}

declare module 'date-fns/sub_hours' {
  import {subHours} from 'date-fns'
  export = subHours
}

declare module 'date-fns/sub_iso_years' {
  import {subISOYears} from 'date-fns'
  export = subISOYears
}

declare module 'date-fns/sub_milliseconds' {
  import {subMilliseconds} from 'date-fns'
  export = subMilliseconds
}

declare module 'date-fns/sub_minutes' {
  import {subMinutes} from 'date-fns'
  export = subMinutes
}

declare module 'date-fns/sub_months' {
  import {subMonths} from 'date-fns'
  export = subMonths
}

declare module 'date-fns/sub_quarters' {
  import {subQuarters} from 'date-fns'
  export = subQuarters
}

declare module 'date-fns/sub_seconds' {
  import {subSeconds} from 'date-fns'
  export = subSeconds
}

declare module 'date-fns/sub_weeks' {
  import {subWeeks} from 'date-fns'
  export = subWeeks
}

declare module 'date-fns/sub_years' {
  import {subYears} from 'date-fns'
  export = subYears
}

declare module 'date-fns/to_date' {
  import {toDate} from 'date-fns'
  export = toDate
}

declare module 'date-fns/add_days/index' {
  import {addDays} from 'date-fns'
  export = addDays
}

declare module 'date-fns/add_hours/index' {
  import {addHours} from 'date-fns'
  export = addHours
}

declare module 'date-fns/add_iso_years/index' {
  import {addISOYears} from 'date-fns'
  export = addISOYears
}

declare module 'date-fns/add_milliseconds/index' {
  import {addMilliseconds} from 'date-fns'
  export = addMilliseconds
}

declare module 'date-fns/add_minutes/index' {
  import {addMinutes} from 'date-fns'
  export = addMinutes
}

declare module 'date-fns/add_months/index' {
  import {addMonths} from 'date-fns'
  export = addMonths
}

declare module 'date-fns/add_quarters/index' {
  import {addQuarters} from 'date-fns'
  export = addQuarters
}

declare module 'date-fns/add_seconds/index' {
  import {addSeconds} from 'date-fns'
  export = addSeconds
}

declare module 'date-fns/add_weeks/index' {
  import {addWeeks} from 'date-fns'
  export = addWeeks
}

declare module 'date-fns/add_years/index' {
  import {addYears} from 'date-fns'
  export = addYears
}

declare module 'date-fns/are_ranges_overlapping/index' {
  import {areRangesOverlapping} from 'date-fns'
  export = areRangesOverlapping
}

declare module 'date-fns/closest_index_to/index' {
  import {closestIndexTo} from 'date-fns'
  export = closestIndexTo
}

declare module 'date-fns/closest_to/index' {
  import {closestTo} from 'date-fns'
  export = closestTo
}

declare module 'date-fns/compare_asc/index' {
  import {compareAsc} from 'date-fns'
  export = compareAsc
}

declare module 'date-fns/compare_desc/index' {
  import {compareDesc} from 'date-fns'
  export = compareDesc
}

declare module 'date-fns/difference_in_calendar_days/index' {
  import {differenceInCalendarDays} from 'date-fns'
  export = differenceInCalendarDays
}

declare module 'date-fns/difference_in_calendar_iso_weeks/index' {
  import {differenceInCalendarISOWeeks} from 'date-fns'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/difference_in_calendar_iso_years/index' {
  import {differenceInCalendarISOYears} from 'date-fns'
  export = differenceInCalendarISOYears
}

declare module 'date-fns/difference_in_calendar_months/index' {
  import {differenceInCalendarMonths} from 'date-fns'
  export = differenceInCalendarMonths
}

declare module 'date-fns/difference_in_calendar_quarters/index' {
  import {differenceInCalendarQuarters} from 'date-fns'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/difference_in_calendar_weeks/index' {
  import {differenceInCalendarWeeks} from 'date-fns'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/difference_in_calendar_years/index' {
  import {differenceInCalendarYears} from 'date-fns'
  export = differenceInCalendarYears
}

declare module 'date-fns/difference_in_days/index' {
  import {differenceInDays} from 'date-fns'
  export = differenceInDays
}

declare module 'date-fns/difference_in_hours/index' {
  import {differenceInHours} from 'date-fns'
  export = differenceInHours
}

declare module 'date-fns/difference_in_iso_years/index' {
  import {differenceInISOYears} from 'date-fns'
  export = differenceInISOYears
}

declare module 'date-fns/difference_in_milliseconds/index' {
  import {differenceInMilliseconds} from 'date-fns'
  export = differenceInMilliseconds
}

declare module 'date-fns/difference_in_minutes/index' {
  import {differenceInMinutes} from 'date-fns'
  export = differenceInMinutes
}

declare module 'date-fns/difference_in_months/index' {
  import {differenceInMonths} from 'date-fns'
  export = differenceInMonths
}

declare module 'date-fns/difference_in_quarters/index' {
  import {differenceInQuarters} from 'date-fns'
  export = differenceInQuarters
}

declare module 'date-fns/difference_in_seconds/index' {
  import {differenceInSeconds} from 'date-fns'
  export = differenceInSeconds
}

declare module 'date-fns/difference_in_weeks/index' {
  import {differenceInWeeks} from 'date-fns'
  export = differenceInWeeks
}

declare module 'date-fns/difference_in_years/index' {
  import {differenceInYears} from 'date-fns'
  export = differenceInYears
}

declare module 'date-fns/distance_in_words/index' {
  import {distanceInWords} from 'date-fns'
  export = distanceInWords
}

declare module 'date-fns/distance_in_words_strict/index' {
  import {distanceInWordsStrict} from 'date-fns'
  export = distanceInWordsStrict
}

declare module 'date-fns/each_day/index' {
  import {eachDay} from 'date-fns'
  export = eachDay
}

declare module 'date-fns/end_of_day/index' {
  import {endOfDay} from 'date-fns'
  export = endOfDay
}

declare module 'date-fns/end_of_hour/index' {
  import {endOfHour} from 'date-fns'
  export = endOfHour
}

declare module 'date-fns/end_of_iso_week/index' {
  import {endOfISOWeek} from 'date-fns'
  export = endOfISOWeek
}

declare module 'date-fns/end_of_iso_year/index' {
  import {endOfISOYear} from 'date-fns'
  export = endOfISOYear
}

declare module 'date-fns/end_of_minute/index' {
  import {endOfMinute} from 'date-fns'
  export = endOfMinute
}

declare module 'date-fns/end_of_month/index' {
  import {endOfMonth} from 'date-fns'
  export = endOfMonth
}

declare module 'date-fns/end_of_quarter/index' {
  import {endOfQuarter} from 'date-fns'
  export = endOfQuarter
}

declare module 'date-fns/end_of_second/index' {
  import {endOfSecond} from 'date-fns'
  export = endOfSecond
}

declare module 'date-fns/end_of_week/index' {
  import {endOfWeek} from 'date-fns'
  export = endOfWeek
}

declare module 'date-fns/end_of_year/index' {
  import {endOfYear} from 'date-fns'
  export = endOfYear
}

declare module 'date-fns/format/index' {
  import {format} from 'date-fns'
  export = format
}

declare module 'date-fns/get_date/index' {
  import {getDate} from 'date-fns'
  export = getDate
}

declare module 'date-fns/get_day/index' {
  import {getDay} from 'date-fns'
  export = getDay
}

declare module 'date-fns/get_day_of_year/index' {
  import {getDayOfYear} from 'date-fns'
  export = getDayOfYear
}

declare module 'date-fns/get_days_in_month/index' {
  import {getDaysInMonth} from 'date-fns'
  export = getDaysInMonth
}

declare module 'date-fns/get_days_in_year/index' {
  import {getDaysInYear} from 'date-fns'
  export = getDaysInYear
}

declare module 'date-fns/get_hours/index' {
  import {getHours} from 'date-fns'
  export = getHours
}

declare module 'date-fns/get_iso_day/index' {
  import {getISODay} from 'date-fns'
  export = getISODay
}

declare module 'date-fns/get_iso_week/index' {
  import {getISOWeek} from 'date-fns'
  export = getISOWeek
}

declare module 'date-fns/get_iso_weeks_in_year/index' {
  import {getISOWeeksInYear} from 'date-fns'
  export = getISOWeeksInYear
}

declare module 'date-fns/get_iso_year/index' {
  import {getISOYear} from 'date-fns'
  export = getISOYear
}

declare module 'date-fns/get_milliseconds/index' {
  import {getMilliseconds} from 'date-fns'
  export = getMilliseconds
}

declare module 'date-fns/get_minutes/index' {
  import {getMinutes} from 'date-fns'
  export = getMinutes
}

declare module 'date-fns/get_month/index' {
  import {getMonth} from 'date-fns'
  export = getMonth
}

declare module 'date-fns/get_overlapping_days_in_ranges/index' {
  import {getOverlappingDaysInRanges} from 'date-fns'
  export = getOverlappingDaysInRanges
}

declare module 'date-fns/get_quarter/index' {
  import {getQuarter} from 'date-fns'
  export = getQuarter
}

declare module 'date-fns/get_seconds/index' {
  import {getSeconds} from 'date-fns'
  export = getSeconds
}

declare module 'date-fns/get_time/index' {
  import {getTime} from 'date-fns'
  export = getTime
}

declare module 'date-fns/get_year/index' {
  import {getYear} from 'date-fns'
  export = getYear
}

declare module 'date-fns/is_after/index' {
  import {isAfter} from 'date-fns'
  export = isAfter
}

declare module 'date-fns/is_before/index' {
  import {isBefore} from 'date-fns'
  export = isBefore
}

declare module 'date-fns/is_date/index' {
  import {isDate} from 'date-fns'
  export = isDate
}

declare module 'date-fns/is_equal/index' {
  import {isEqual} from 'date-fns'
  export = isEqual
}

declare module 'date-fns/is_first_day_of_month/index' {
  import {isFirstDayOfMonth} from 'date-fns'
  export = isFirstDayOfMonth
}

declare module 'date-fns/is_friday/index' {
  import {isFriday} from 'date-fns'
  export = isFriday
}

declare module 'date-fns/is_last_day_of_month/index' {
  import {isLastDayOfMonth} from 'date-fns'
  export = isLastDayOfMonth
}

declare module 'date-fns/is_leap_year/index' {
  import {isLeapYear} from 'date-fns'
  export = isLeapYear
}

declare module 'date-fns/is_monday/index' {
  import {isMonday} from 'date-fns'
  export = isMonday
}

declare module 'date-fns/is_same_day/index' {
  import {isSameDay} from 'date-fns'
  export = isSameDay
}

declare module 'date-fns/is_same_hour/index' {
  import {isSameHour} from 'date-fns'
  export = isSameHour
}

declare module 'date-fns/is_same_iso_week/index' {
  import {isSameISOWeek} from 'date-fns'
  export = isSameISOWeek
}

declare module 'date-fns/is_same_iso_year/index' {
  import {isSameISOYear} from 'date-fns'
  export = isSameISOYear
}

declare module 'date-fns/is_same_minute/index' {
  import {isSameMinute} from 'date-fns'
  export = isSameMinute
}

declare module 'date-fns/is_same_month/index' {
  import {isSameMonth} from 'date-fns'
  export = isSameMonth
}

declare module 'date-fns/is_same_quarter/index' {
  import {isSameQuarter} from 'date-fns'
  export = isSameQuarter
}

declare module 'date-fns/is_same_second/index' {
  import {isSameSecond} from 'date-fns'
  export = isSameSecond
}

declare module 'date-fns/is_same_week/index' {
  import {isSameWeek} from 'date-fns'
  export = isSameWeek
}

declare module 'date-fns/is_same_year/index' {
  import {isSameYear} from 'date-fns'
  export = isSameYear
}

declare module 'date-fns/is_saturday/index' {
  import {isSaturday} from 'date-fns'
  export = isSaturday
}

declare module 'date-fns/is_sunday/index' {
  import {isSunday} from 'date-fns'
  export = isSunday
}

declare module 'date-fns/is_thursday/index' {
  import {isThursday} from 'date-fns'
  export = isThursday
}

declare module 'date-fns/is_tuesday/index' {
  import {isTuesday} from 'date-fns'
  export = isTuesday
}

declare module 'date-fns/is_valid/index' {
  import {isValid} from 'date-fns'
  export = isValid
}

declare module 'date-fns/is_wednesday/index' {
  import {isWednesday} from 'date-fns'
  export = isWednesday
}

declare module 'date-fns/is_weekend/index' {
  import {isWeekend} from 'date-fns'
  export = isWeekend
}

declare module 'date-fns/is_within_range/index' {
  import {isWithinRange} from 'date-fns'
  export = isWithinRange
}

declare module 'date-fns/last_day_of_iso_week/index' {
  import {lastDayOfISOWeek} from 'date-fns'
  export = lastDayOfISOWeek
}

declare module 'date-fns/last_day_of_iso_year/index' {
  import {lastDayOfISOYear} from 'date-fns'
  export = lastDayOfISOYear
}

declare module 'date-fns/last_day_of_month/index' {
  import {lastDayOfMonth} from 'date-fns'
  export = lastDayOfMonth
}

declare module 'date-fns/last_day_of_quarter/index' {
  import {lastDayOfQuarter} from 'date-fns'
  export = lastDayOfQuarter
}

declare module 'date-fns/last_day_of_week/index' {
  import {lastDayOfWeek} from 'date-fns'
  export = lastDayOfWeek
}

declare module 'date-fns/last_day_of_year/index' {
  import {lastDayOfYear} from 'date-fns'
  export = lastDayOfYear
}

declare module 'date-fns/max/index' {
  import {max} from 'date-fns'
  export = max
}

declare module 'date-fns/min/index' {
  import {min} from 'date-fns'
  export = min
}

declare module 'date-fns/parse/index' {
  import {parse} from 'date-fns'
  export = parse
}

declare module 'date-fns/set_date/index' {
  import {setDate} from 'date-fns'
  export = setDate
}

declare module 'date-fns/set_day/index' {
  import {setDay} from 'date-fns'
  export = setDay
}

declare module 'date-fns/set_day_of_year/index' {
  import {setDayOfYear} from 'date-fns'
  export = setDayOfYear
}

declare module 'date-fns/set_hours/index' {
  import {setHours} from 'date-fns'
  export = setHours
}

declare module 'date-fns/set_iso_day/index' {
  import {setISODay} from 'date-fns'
  export = setISODay
}

declare module 'date-fns/set_iso_week/index' {
  import {setISOWeek} from 'date-fns'
  export = setISOWeek
}

declare module 'date-fns/set_iso_year/index' {
  import {setISOYear} from 'date-fns'
  export = setISOYear
}

declare module 'date-fns/set_milliseconds/index' {
  import {setMilliseconds} from 'date-fns'
  export = setMilliseconds
}

declare module 'date-fns/set_minutes/index' {
  import {setMinutes} from 'date-fns'
  export = setMinutes
}

declare module 'date-fns/set_month/index' {
  import {setMonth} from 'date-fns'
  export = setMonth
}

declare module 'date-fns/set_quarter/index' {
  import {setQuarter} from 'date-fns'
  export = setQuarter
}

declare module 'date-fns/set_seconds/index' {
  import {setSeconds} from 'date-fns'
  export = setSeconds
}

declare module 'date-fns/set_year/index' {
  import {setYear} from 'date-fns'
  export = setYear
}

declare module 'date-fns/start_of_day/index' {
  import {startOfDay} from 'date-fns'
  export = startOfDay
}

declare module 'date-fns/start_of_hour/index' {
  import {startOfHour} from 'date-fns'
  export = startOfHour
}

declare module 'date-fns/start_of_iso_week/index' {
  import {startOfISOWeek} from 'date-fns'
  export = startOfISOWeek
}

declare module 'date-fns/start_of_iso_year/index' {
  import {startOfISOYear} from 'date-fns'
  export = startOfISOYear
}

declare module 'date-fns/start_of_minute/index' {
  import {startOfMinute} from 'date-fns'
  export = startOfMinute
}

declare module 'date-fns/start_of_month/index' {
  import {startOfMonth} from 'date-fns'
  export = startOfMonth
}

declare module 'date-fns/start_of_quarter/index' {
  import {startOfQuarter} from 'date-fns'
  export = startOfQuarter
}

declare module 'date-fns/start_of_second/index' {
  import {startOfSecond} from 'date-fns'
  export = startOfSecond
}

declare module 'date-fns/start_of_week/index' {
  import {startOfWeek} from 'date-fns'
  export = startOfWeek
}

declare module 'date-fns/start_of_year/index' {
  import {startOfYear} from 'date-fns'
  export = startOfYear
}

declare module 'date-fns/sub_days/index' {
  import {subDays} from 'date-fns'
  export = subDays
}

declare module 'date-fns/sub_hours/index' {
  import {subHours} from 'date-fns'
  export = subHours
}

declare module 'date-fns/sub_iso_years/index' {
  import {subISOYears} from 'date-fns'
  export = subISOYears
}

declare module 'date-fns/sub_milliseconds/index' {
  import {subMilliseconds} from 'date-fns'
  export = subMilliseconds
}

declare module 'date-fns/sub_minutes/index' {
  import {subMinutes} from 'date-fns'
  export = subMinutes
}

declare module 'date-fns/sub_months/index' {
  import {subMonths} from 'date-fns'
  export = subMonths
}

declare module 'date-fns/sub_quarters/index' {
  import {subQuarters} from 'date-fns'
  export = subQuarters
}

declare module 'date-fns/sub_seconds/index' {
  import {subSeconds} from 'date-fns'
  export = subSeconds
}

declare module 'date-fns/sub_weeks/index' {
  import {subWeeks} from 'date-fns'
  export = subWeeks
}

declare module 'date-fns/sub_years/index' {
  import {subYears} from 'date-fns'
  export = subYears
}

declare module 'date-fns/to_date/index' {
  import {toDate} from 'date-fns'
  export = toDate
}

declare module 'date-fns/fp/addDays' {
  import {addDays} from 'date-fns/fp'
  export = addDays
}

declare module 'date-fns/fp/addHours' {
  import {addHours} from 'date-fns/fp'
  export = addHours
}

declare module 'date-fns/fp/addISOYears' {
  import {addISOYears} from 'date-fns/fp'
  export = addISOYears
}

declare module 'date-fns/fp/addMilliseconds' {
  import {addMilliseconds} from 'date-fns/fp'
  export = addMilliseconds
}

declare module 'date-fns/fp/addMinutes' {
  import {addMinutes} from 'date-fns/fp'
  export = addMinutes
}

declare module 'date-fns/fp/addMonths' {
  import {addMonths} from 'date-fns/fp'
  export = addMonths
}

declare module 'date-fns/fp/addQuarters' {
  import {addQuarters} from 'date-fns/fp'
  export = addQuarters
}

declare module 'date-fns/fp/addSeconds' {
  import {addSeconds} from 'date-fns/fp'
  export = addSeconds
}

declare module 'date-fns/fp/addWeeks' {
  import {addWeeks} from 'date-fns/fp'
  export = addWeeks
}

declare module 'date-fns/fp/addYears' {
  import {addYears} from 'date-fns/fp'
  export = addYears
}

declare module 'date-fns/fp/areRangesOverlapping' {
  import {areRangesOverlapping} from 'date-fns/fp'
  export = areRangesOverlapping
}

declare module 'date-fns/fp/closestIndexTo' {
  import {closestIndexTo} from 'date-fns/fp'
  export = closestIndexTo
}

declare module 'date-fns/fp/closestTo' {
  import {closestTo} from 'date-fns/fp'
  export = closestTo
}

declare module 'date-fns/fp/compareAsc' {
  import {compareAsc} from 'date-fns/fp'
  export = compareAsc
}

declare module 'date-fns/fp/compareDesc' {
  import {compareDesc} from 'date-fns/fp'
  export = compareDesc
}

declare module 'date-fns/fp/differenceInCalendarDays' {
  import {differenceInCalendarDays} from 'date-fns/fp'
  export = differenceInCalendarDays
}

declare module 'date-fns/fp/differenceInCalendarISOWeeks' {
  import {differenceInCalendarISOWeeks} from 'date-fns/fp'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/fp/differenceInCalendarISOYears' {
  import {differenceInCalendarISOYears} from 'date-fns/fp'
  export = differenceInCalendarISOYears
}

declare module 'date-fns/fp/differenceInCalendarMonths' {
  import {differenceInCalendarMonths} from 'date-fns/fp'
  export = differenceInCalendarMonths
}

declare module 'date-fns/fp/differenceInCalendarQuarters' {
  import {differenceInCalendarQuarters} from 'date-fns/fp'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/fp/differenceInCalendarWeeks' {
  import {differenceInCalendarWeeks} from 'date-fns/fp'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/fp/differenceInCalendarYears' {
  import {differenceInCalendarYears} from 'date-fns/fp'
  export = differenceInCalendarYears
}

declare module 'date-fns/fp/differenceInDays' {
  import {differenceInDays} from 'date-fns/fp'
  export = differenceInDays
}

declare module 'date-fns/fp/differenceInHours' {
  import {differenceInHours} from 'date-fns/fp'
  export = differenceInHours
}

declare module 'date-fns/fp/differenceInISOYears' {
  import {differenceInISOYears} from 'date-fns/fp'
  export = differenceInISOYears
}

declare module 'date-fns/fp/differenceInMilliseconds' {
  import {differenceInMilliseconds} from 'date-fns/fp'
  export = differenceInMilliseconds
}

declare module 'date-fns/fp/differenceInMinutes' {
  import {differenceInMinutes} from 'date-fns/fp'
  export = differenceInMinutes
}

declare module 'date-fns/fp/differenceInMonths' {
  import {differenceInMonths} from 'date-fns/fp'
  export = differenceInMonths
}

declare module 'date-fns/fp/differenceInQuarters' {
  import {differenceInQuarters} from 'date-fns/fp'
  export = differenceInQuarters
}

declare module 'date-fns/fp/differenceInSeconds' {
  import {differenceInSeconds} from 'date-fns/fp'
  export = differenceInSeconds
}

declare module 'date-fns/fp/differenceInWeeks' {
  import {differenceInWeeks} from 'date-fns/fp'
  export = differenceInWeeks
}

declare module 'date-fns/fp/differenceInYears' {
  import {differenceInYears} from 'date-fns/fp'
  export = differenceInYears
}

declare module 'date-fns/fp/distanceInWords' {
  import {distanceInWords} from 'date-fns/fp'
  export = distanceInWords
}

declare module 'date-fns/fp/distanceInWordsStrict' {
  import {distanceInWordsStrict} from 'date-fns/fp'
  export = distanceInWordsStrict
}

declare module 'date-fns/fp/eachDay' {
  import {eachDay} from 'date-fns/fp'
  export = eachDay
}

declare module 'date-fns/fp/endOfDay' {
  import {endOfDay} from 'date-fns/fp'
  export = endOfDay
}

declare module 'date-fns/fp/endOfHour' {
  import {endOfHour} from 'date-fns/fp'
  export = endOfHour
}

declare module 'date-fns/fp/endOfISOWeek' {
  import {endOfISOWeek} from 'date-fns/fp'
  export = endOfISOWeek
}

declare module 'date-fns/fp/endOfISOYear' {
  import {endOfISOYear} from 'date-fns/fp'
  export = endOfISOYear
}

declare module 'date-fns/fp/endOfMinute' {
  import {endOfMinute} from 'date-fns/fp'
  export = endOfMinute
}

declare module 'date-fns/fp/endOfMonth' {
  import {endOfMonth} from 'date-fns/fp'
  export = endOfMonth
}

declare module 'date-fns/fp/endOfQuarter' {
  import {endOfQuarter} from 'date-fns/fp'
  export = endOfQuarter
}

declare module 'date-fns/fp/endOfSecond' {
  import {endOfSecond} from 'date-fns/fp'
  export = endOfSecond
}

declare module 'date-fns/fp/endOfWeek' {
  import {endOfWeek} from 'date-fns/fp'
  export = endOfWeek
}

declare module 'date-fns/fp/endOfYear' {
  import {endOfYear} from 'date-fns/fp'
  export = endOfYear
}

declare module 'date-fns/fp/format' {
  import {format} from 'date-fns/fp'
  export = format
}

declare module 'date-fns/fp/getDate' {
  import {getDate} from 'date-fns/fp'
  export = getDate
}

declare module 'date-fns/fp/getDay' {
  import {getDay} from 'date-fns/fp'
  export = getDay
}

declare module 'date-fns/fp/getDayOfYear' {
  import {getDayOfYear} from 'date-fns/fp'
  export = getDayOfYear
}

declare module 'date-fns/fp/getDaysInMonth' {
  import {getDaysInMonth} from 'date-fns/fp'
  export = getDaysInMonth
}

declare module 'date-fns/fp/getDaysInYear' {
  import {getDaysInYear} from 'date-fns/fp'
  export = getDaysInYear
}

declare module 'date-fns/fp/getHours' {
  import {getHours} from 'date-fns/fp'
  export = getHours
}

declare module 'date-fns/fp/getISODay' {
  import {getISODay} from 'date-fns/fp'
  export = getISODay
}

declare module 'date-fns/fp/getISOWeek' {
  import {getISOWeek} from 'date-fns/fp'
  export = getISOWeek
}

declare module 'date-fns/fp/getISOWeeksInYear' {
  import {getISOWeeksInYear} from 'date-fns/fp'
  export = getISOWeeksInYear
}

declare module 'date-fns/fp/getISOYear' {
  import {getISOYear} from 'date-fns/fp'
  export = getISOYear
}

declare module 'date-fns/fp/getMilliseconds' {
  import {getMilliseconds} from 'date-fns/fp'
  export = getMilliseconds
}

declare module 'date-fns/fp/getMinutes' {
  import {getMinutes} from 'date-fns/fp'
  export = getMinutes
}

declare module 'date-fns/fp/getMonth' {
  import {getMonth} from 'date-fns/fp'
  export = getMonth
}

declare module 'date-fns/fp/getOverlappingDaysInRanges' {
  import {getOverlappingDaysInRanges} from 'date-fns/fp'
  export = getOverlappingDaysInRanges
}

declare module 'date-fns/fp/getQuarter' {
  import {getQuarter} from 'date-fns/fp'
  export = getQuarter
}

declare module 'date-fns/fp/getSeconds' {
  import {getSeconds} from 'date-fns/fp'
  export = getSeconds
}

declare module 'date-fns/fp/getTime' {
  import {getTime} from 'date-fns/fp'
  export = getTime
}

declare module 'date-fns/fp/getYear' {
  import {getYear} from 'date-fns/fp'
  export = getYear
}

declare module 'date-fns/fp/isAfter' {
  import {isAfter} from 'date-fns/fp'
  export = isAfter
}

declare module 'date-fns/fp/isBefore' {
  import {isBefore} from 'date-fns/fp'
  export = isBefore
}

declare module 'date-fns/fp/isDate' {
  import {isDate} from 'date-fns/fp'
  export = isDate
}

declare module 'date-fns/fp/isEqual' {
  import {isEqual} from 'date-fns/fp'
  export = isEqual
}

declare module 'date-fns/fp/isFirstDayOfMonth' {
  import {isFirstDayOfMonth} from 'date-fns/fp'
  export = isFirstDayOfMonth
}

declare module 'date-fns/fp/isFriday' {
  import {isFriday} from 'date-fns/fp'
  export = isFriday
}

declare module 'date-fns/fp/isLastDayOfMonth' {
  import {isLastDayOfMonth} from 'date-fns/fp'
  export = isLastDayOfMonth
}

declare module 'date-fns/fp/isLeapYear' {
  import {isLeapYear} from 'date-fns/fp'
  export = isLeapYear
}

declare module 'date-fns/fp/isMonday' {
  import {isMonday} from 'date-fns/fp'
  export = isMonday
}

declare module 'date-fns/fp/isSameDay' {
  import {isSameDay} from 'date-fns/fp'
  export = isSameDay
}

declare module 'date-fns/fp/isSameHour' {
  import {isSameHour} from 'date-fns/fp'
  export = isSameHour
}

declare module 'date-fns/fp/isSameISOWeek' {
  import {isSameISOWeek} from 'date-fns/fp'
  export = isSameISOWeek
}

declare module 'date-fns/fp/isSameISOYear' {
  import {isSameISOYear} from 'date-fns/fp'
  export = isSameISOYear
}

declare module 'date-fns/fp/isSameMinute' {
  import {isSameMinute} from 'date-fns/fp'
  export = isSameMinute
}

declare module 'date-fns/fp/isSameMonth' {
  import {isSameMonth} from 'date-fns/fp'
  export = isSameMonth
}

declare module 'date-fns/fp/isSameQuarter' {
  import {isSameQuarter} from 'date-fns/fp'
  export = isSameQuarter
}

declare module 'date-fns/fp/isSameSecond' {
  import {isSameSecond} from 'date-fns/fp'
  export = isSameSecond
}

declare module 'date-fns/fp/isSameWeek' {
  import {isSameWeek} from 'date-fns/fp'
  export = isSameWeek
}

declare module 'date-fns/fp/isSameYear' {
  import {isSameYear} from 'date-fns/fp'
  export = isSameYear
}

declare module 'date-fns/fp/isSaturday' {
  import {isSaturday} from 'date-fns/fp'
  export = isSaturday
}

declare module 'date-fns/fp/isSunday' {
  import {isSunday} from 'date-fns/fp'
  export = isSunday
}

declare module 'date-fns/fp/isThursday' {
  import {isThursday} from 'date-fns/fp'
  export = isThursday
}

declare module 'date-fns/fp/isTuesday' {
  import {isTuesday} from 'date-fns/fp'
  export = isTuesday
}

declare module 'date-fns/fp/isValid' {
  import {isValid} from 'date-fns/fp'
  export = isValid
}

declare module 'date-fns/fp/isWednesday' {
  import {isWednesday} from 'date-fns/fp'
  export = isWednesday
}

declare module 'date-fns/fp/isWeekend' {
  import {isWeekend} from 'date-fns/fp'
  export = isWeekend
}

declare module 'date-fns/fp/isWithinRange' {
  import {isWithinRange} from 'date-fns/fp'
  export = isWithinRange
}

declare module 'date-fns/fp/lastDayOfISOWeek' {
  import {lastDayOfISOWeek} from 'date-fns/fp'
  export = lastDayOfISOWeek
}

declare module 'date-fns/fp/lastDayOfISOYear' {
  import {lastDayOfISOYear} from 'date-fns/fp'
  export = lastDayOfISOYear
}

declare module 'date-fns/fp/lastDayOfMonth' {
  import {lastDayOfMonth} from 'date-fns/fp'
  export = lastDayOfMonth
}

declare module 'date-fns/fp/lastDayOfQuarter' {
  import {lastDayOfQuarter} from 'date-fns/fp'
  export = lastDayOfQuarter
}

declare module 'date-fns/fp/lastDayOfWeek' {
  import {lastDayOfWeek} from 'date-fns/fp'
  export = lastDayOfWeek
}

declare module 'date-fns/fp/lastDayOfYear' {
  import {lastDayOfYear} from 'date-fns/fp'
  export = lastDayOfYear
}

declare module 'date-fns/fp/max' {
  import {max} from 'date-fns/fp'
  export = max
}

declare module 'date-fns/fp/min' {
  import {min} from 'date-fns/fp'
  export = min
}

declare module 'date-fns/fp/parse' {
  import {parse} from 'date-fns/fp'
  export = parse
}

declare module 'date-fns/fp/setDate' {
  import {setDate} from 'date-fns/fp'
  export = setDate
}

declare module 'date-fns/fp/setDay' {
  import {setDay} from 'date-fns/fp'
  export = setDay
}

declare module 'date-fns/fp/setDayOfYear' {
  import {setDayOfYear} from 'date-fns/fp'
  export = setDayOfYear
}

declare module 'date-fns/fp/setHours' {
  import {setHours} from 'date-fns/fp'
  export = setHours
}

declare module 'date-fns/fp/setISODay' {
  import {setISODay} from 'date-fns/fp'
  export = setISODay
}

declare module 'date-fns/fp/setISOWeek' {
  import {setISOWeek} from 'date-fns/fp'
  export = setISOWeek
}

declare module 'date-fns/fp/setISOYear' {
  import {setISOYear} from 'date-fns/fp'
  export = setISOYear
}

declare module 'date-fns/fp/setMilliseconds' {
  import {setMilliseconds} from 'date-fns/fp'
  export = setMilliseconds
}

declare module 'date-fns/fp/setMinutes' {
  import {setMinutes} from 'date-fns/fp'
  export = setMinutes
}

declare module 'date-fns/fp/setMonth' {
  import {setMonth} from 'date-fns/fp'
  export = setMonth
}

declare module 'date-fns/fp/setQuarter' {
  import {setQuarter} from 'date-fns/fp'
  export = setQuarter
}

declare module 'date-fns/fp/setSeconds' {
  import {setSeconds} from 'date-fns/fp'
  export = setSeconds
}

declare module 'date-fns/fp/setYear' {
  import {setYear} from 'date-fns/fp'
  export = setYear
}

declare module 'date-fns/fp/startOfDay' {
  import {startOfDay} from 'date-fns/fp'
  export = startOfDay
}

declare module 'date-fns/fp/startOfHour' {
  import {startOfHour} from 'date-fns/fp'
  export = startOfHour
}

declare module 'date-fns/fp/startOfISOWeek' {
  import {startOfISOWeek} from 'date-fns/fp'
  export = startOfISOWeek
}

declare module 'date-fns/fp/startOfISOYear' {
  import {startOfISOYear} from 'date-fns/fp'
  export = startOfISOYear
}

declare module 'date-fns/fp/startOfMinute' {
  import {startOfMinute} from 'date-fns/fp'
  export = startOfMinute
}

declare module 'date-fns/fp/startOfMonth' {
  import {startOfMonth} from 'date-fns/fp'
  export = startOfMonth
}

declare module 'date-fns/fp/startOfQuarter' {
  import {startOfQuarter} from 'date-fns/fp'
  export = startOfQuarter
}

declare module 'date-fns/fp/startOfSecond' {
  import {startOfSecond} from 'date-fns/fp'
  export = startOfSecond
}

declare module 'date-fns/fp/startOfWeek' {
  import {startOfWeek} from 'date-fns/fp'
  export = startOfWeek
}

declare module 'date-fns/fp/startOfYear' {
  import {startOfYear} from 'date-fns/fp'
  export = startOfYear
}

declare module 'date-fns/fp/subDays' {
  import {subDays} from 'date-fns/fp'
  export = subDays
}

declare module 'date-fns/fp/subHours' {
  import {subHours} from 'date-fns/fp'
  export = subHours
}

declare module 'date-fns/fp/subISOYears' {
  import {subISOYears} from 'date-fns/fp'
  export = subISOYears
}

declare module 'date-fns/fp/subMilliseconds' {
  import {subMilliseconds} from 'date-fns/fp'
  export = subMilliseconds
}

declare module 'date-fns/fp/subMinutes' {
  import {subMinutes} from 'date-fns/fp'
  export = subMinutes
}

declare module 'date-fns/fp/subMonths' {
  import {subMonths} from 'date-fns/fp'
  export = subMonths
}

declare module 'date-fns/fp/subQuarters' {
  import {subQuarters} from 'date-fns/fp'
  export = subQuarters
}

declare module 'date-fns/fp/subSeconds' {
  import {subSeconds} from 'date-fns/fp'
  export = subSeconds
}

declare module 'date-fns/fp/subWeeks' {
  import {subWeeks} from 'date-fns/fp'
  export = subWeeks
}

declare module 'date-fns/fp/subYears' {
  import {subYears} from 'date-fns/fp'
  export = subYears
}

declare module 'date-fns/fp/toDate' {
  import {toDate} from 'date-fns/fp'
  export = toDate
}

declare module 'date-fns/fp/addDays/index' {
  import {addDays} from 'date-fns/fp'
  export = addDays
}

declare module 'date-fns/fp/addHours/index' {
  import {addHours} from 'date-fns/fp'
  export = addHours
}

declare module 'date-fns/fp/addISOYears/index' {
  import {addISOYears} from 'date-fns/fp'
  export = addISOYears
}

declare module 'date-fns/fp/addMilliseconds/index' {
  import {addMilliseconds} from 'date-fns/fp'
  export = addMilliseconds
}

declare module 'date-fns/fp/addMinutes/index' {
  import {addMinutes} from 'date-fns/fp'
  export = addMinutes
}

declare module 'date-fns/fp/addMonths/index' {
  import {addMonths} from 'date-fns/fp'
  export = addMonths
}

declare module 'date-fns/fp/addQuarters/index' {
  import {addQuarters} from 'date-fns/fp'
  export = addQuarters
}

declare module 'date-fns/fp/addSeconds/index' {
  import {addSeconds} from 'date-fns/fp'
  export = addSeconds
}

declare module 'date-fns/fp/addWeeks/index' {
  import {addWeeks} from 'date-fns/fp'
  export = addWeeks
}

declare module 'date-fns/fp/addYears/index' {
  import {addYears} from 'date-fns/fp'
  export = addYears
}

declare module 'date-fns/fp/areRangesOverlapping/index' {
  import {areRangesOverlapping} from 'date-fns/fp'
  export = areRangesOverlapping
}

declare module 'date-fns/fp/closestIndexTo/index' {
  import {closestIndexTo} from 'date-fns/fp'
  export = closestIndexTo
}

declare module 'date-fns/fp/closestTo/index' {
  import {closestTo} from 'date-fns/fp'
  export = closestTo
}

declare module 'date-fns/fp/compareAsc/index' {
  import {compareAsc} from 'date-fns/fp'
  export = compareAsc
}

declare module 'date-fns/fp/compareDesc/index' {
  import {compareDesc} from 'date-fns/fp'
  export = compareDesc
}

declare module 'date-fns/fp/differenceInCalendarDays/index' {
  import {differenceInCalendarDays} from 'date-fns/fp'
  export = differenceInCalendarDays
}

declare module 'date-fns/fp/differenceInCalendarISOWeeks/index' {
  import {differenceInCalendarISOWeeks} from 'date-fns/fp'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/fp/differenceInCalendarISOYears/index' {
  import {differenceInCalendarISOYears} from 'date-fns/fp'
  export = differenceInCalendarISOYears
}

declare module 'date-fns/fp/differenceInCalendarMonths/index' {
  import {differenceInCalendarMonths} from 'date-fns/fp'
  export = differenceInCalendarMonths
}

declare module 'date-fns/fp/differenceInCalendarQuarters/index' {
  import {differenceInCalendarQuarters} from 'date-fns/fp'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/fp/differenceInCalendarWeeks/index' {
  import {differenceInCalendarWeeks} from 'date-fns/fp'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/fp/differenceInCalendarYears/index' {
  import {differenceInCalendarYears} from 'date-fns/fp'
  export = differenceInCalendarYears
}

declare module 'date-fns/fp/differenceInDays/index' {
  import {differenceInDays} from 'date-fns/fp'
  export = differenceInDays
}

declare module 'date-fns/fp/differenceInHours/index' {
  import {differenceInHours} from 'date-fns/fp'
  export = differenceInHours
}

declare module 'date-fns/fp/differenceInISOYears/index' {
  import {differenceInISOYears} from 'date-fns/fp'
  export = differenceInISOYears
}

declare module 'date-fns/fp/differenceInMilliseconds/index' {
  import {differenceInMilliseconds} from 'date-fns/fp'
  export = differenceInMilliseconds
}

declare module 'date-fns/fp/differenceInMinutes/index' {
  import {differenceInMinutes} from 'date-fns/fp'
  export = differenceInMinutes
}

declare module 'date-fns/fp/differenceInMonths/index' {
  import {differenceInMonths} from 'date-fns/fp'
  export = differenceInMonths
}

declare module 'date-fns/fp/differenceInQuarters/index' {
  import {differenceInQuarters} from 'date-fns/fp'
  export = differenceInQuarters
}

declare module 'date-fns/fp/differenceInSeconds/index' {
  import {differenceInSeconds} from 'date-fns/fp'
  export = differenceInSeconds
}

declare module 'date-fns/fp/differenceInWeeks/index' {
  import {differenceInWeeks} from 'date-fns/fp'
  export = differenceInWeeks
}

declare module 'date-fns/fp/differenceInYears/index' {
  import {differenceInYears} from 'date-fns/fp'
  export = differenceInYears
}

declare module 'date-fns/fp/distanceInWords/index' {
  import {distanceInWords} from 'date-fns/fp'
  export = distanceInWords
}

declare module 'date-fns/fp/distanceInWordsStrict/index' {
  import {distanceInWordsStrict} from 'date-fns/fp'
  export = distanceInWordsStrict
}

declare module 'date-fns/fp/eachDay/index' {
  import {eachDay} from 'date-fns/fp'
  export = eachDay
}

declare module 'date-fns/fp/endOfDay/index' {
  import {endOfDay} from 'date-fns/fp'
  export = endOfDay
}

declare module 'date-fns/fp/endOfHour/index' {
  import {endOfHour} from 'date-fns/fp'
  export = endOfHour
}

declare module 'date-fns/fp/endOfISOWeek/index' {
  import {endOfISOWeek} from 'date-fns/fp'
  export = endOfISOWeek
}

declare module 'date-fns/fp/endOfISOYear/index' {
  import {endOfISOYear} from 'date-fns/fp'
  export = endOfISOYear
}

declare module 'date-fns/fp/endOfMinute/index' {
  import {endOfMinute} from 'date-fns/fp'
  export = endOfMinute
}

declare module 'date-fns/fp/endOfMonth/index' {
  import {endOfMonth} from 'date-fns/fp'
  export = endOfMonth
}

declare module 'date-fns/fp/endOfQuarter/index' {
  import {endOfQuarter} from 'date-fns/fp'
  export = endOfQuarter
}

declare module 'date-fns/fp/endOfSecond/index' {
  import {endOfSecond} from 'date-fns/fp'
  export = endOfSecond
}

declare module 'date-fns/fp/endOfWeek/index' {
  import {endOfWeek} from 'date-fns/fp'
  export = endOfWeek
}

declare module 'date-fns/fp/endOfYear/index' {
  import {endOfYear} from 'date-fns/fp'
  export = endOfYear
}

declare module 'date-fns/fp/format/index' {
  import {format} from 'date-fns/fp'
  export = format
}

declare module 'date-fns/fp/getDate/index' {
  import {getDate} from 'date-fns/fp'
  export = getDate
}

declare module 'date-fns/fp/getDay/index' {
  import {getDay} from 'date-fns/fp'
  export = getDay
}

declare module 'date-fns/fp/getDayOfYear/index' {
  import {getDayOfYear} from 'date-fns/fp'
  export = getDayOfYear
}

declare module 'date-fns/fp/getDaysInMonth/index' {
  import {getDaysInMonth} from 'date-fns/fp'
  export = getDaysInMonth
}

declare module 'date-fns/fp/getDaysInYear/index' {
  import {getDaysInYear} from 'date-fns/fp'
  export = getDaysInYear
}

declare module 'date-fns/fp/getHours/index' {
  import {getHours} from 'date-fns/fp'
  export = getHours
}

declare module 'date-fns/fp/getISODay/index' {
  import {getISODay} from 'date-fns/fp'
  export = getISODay
}

declare module 'date-fns/fp/getISOWeek/index' {
  import {getISOWeek} from 'date-fns/fp'
  export = getISOWeek
}

declare module 'date-fns/fp/getISOWeeksInYear/index' {
  import {getISOWeeksInYear} from 'date-fns/fp'
  export = getISOWeeksInYear
}

declare module 'date-fns/fp/getISOYear/index' {
  import {getISOYear} from 'date-fns/fp'
  export = getISOYear
}

declare module 'date-fns/fp/getMilliseconds/index' {
  import {getMilliseconds} from 'date-fns/fp'
  export = getMilliseconds
}

declare module 'date-fns/fp/getMinutes/index' {
  import {getMinutes} from 'date-fns/fp'
  export = getMinutes
}

declare module 'date-fns/fp/getMonth/index' {
  import {getMonth} from 'date-fns/fp'
  export = getMonth
}

declare module 'date-fns/fp/getOverlappingDaysInRanges/index' {
  import {getOverlappingDaysInRanges} from 'date-fns/fp'
  export = getOverlappingDaysInRanges
}

declare module 'date-fns/fp/getQuarter/index' {
  import {getQuarter} from 'date-fns/fp'
  export = getQuarter
}

declare module 'date-fns/fp/getSeconds/index' {
  import {getSeconds} from 'date-fns/fp'
  export = getSeconds
}

declare module 'date-fns/fp/getTime/index' {
  import {getTime} from 'date-fns/fp'
  export = getTime
}

declare module 'date-fns/fp/getYear/index' {
  import {getYear} from 'date-fns/fp'
  export = getYear
}

declare module 'date-fns/fp/isAfter/index' {
  import {isAfter} from 'date-fns/fp'
  export = isAfter
}

declare module 'date-fns/fp/isBefore/index' {
  import {isBefore} from 'date-fns/fp'
  export = isBefore
}

declare module 'date-fns/fp/isDate/index' {
  import {isDate} from 'date-fns/fp'
  export = isDate
}

declare module 'date-fns/fp/isEqual/index' {
  import {isEqual} from 'date-fns/fp'
  export = isEqual
}

declare module 'date-fns/fp/isFirstDayOfMonth/index' {
  import {isFirstDayOfMonth} from 'date-fns/fp'
  export = isFirstDayOfMonth
}

declare module 'date-fns/fp/isFriday/index' {
  import {isFriday} from 'date-fns/fp'
  export = isFriday
}

declare module 'date-fns/fp/isLastDayOfMonth/index' {
  import {isLastDayOfMonth} from 'date-fns/fp'
  export = isLastDayOfMonth
}

declare module 'date-fns/fp/isLeapYear/index' {
  import {isLeapYear} from 'date-fns/fp'
  export = isLeapYear
}

declare module 'date-fns/fp/isMonday/index' {
  import {isMonday} from 'date-fns/fp'
  export = isMonday
}

declare module 'date-fns/fp/isSameDay/index' {
  import {isSameDay} from 'date-fns/fp'
  export = isSameDay
}

declare module 'date-fns/fp/isSameHour/index' {
  import {isSameHour} from 'date-fns/fp'
  export = isSameHour
}

declare module 'date-fns/fp/isSameISOWeek/index' {
  import {isSameISOWeek} from 'date-fns/fp'
  export = isSameISOWeek
}

declare module 'date-fns/fp/isSameISOYear/index' {
  import {isSameISOYear} from 'date-fns/fp'
  export = isSameISOYear
}

declare module 'date-fns/fp/isSameMinute/index' {
  import {isSameMinute} from 'date-fns/fp'
  export = isSameMinute
}

declare module 'date-fns/fp/isSameMonth/index' {
  import {isSameMonth} from 'date-fns/fp'
  export = isSameMonth
}

declare module 'date-fns/fp/isSameQuarter/index' {
  import {isSameQuarter} from 'date-fns/fp'
  export = isSameQuarter
}

declare module 'date-fns/fp/isSameSecond/index' {
  import {isSameSecond} from 'date-fns/fp'
  export = isSameSecond
}

declare module 'date-fns/fp/isSameWeek/index' {
  import {isSameWeek} from 'date-fns/fp'
  export = isSameWeek
}

declare module 'date-fns/fp/isSameYear/index' {
  import {isSameYear} from 'date-fns/fp'
  export = isSameYear
}

declare module 'date-fns/fp/isSaturday/index' {
  import {isSaturday} from 'date-fns/fp'
  export = isSaturday
}

declare module 'date-fns/fp/isSunday/index' {
  import {isSunday} from 'date-fns/fp'
  export = isSunday
}

declare module 'date-fns/fp/isThursday/index' {
  import {isThursday} from 'date-fns/fp'
  export = isThursday
}

declare module 'date-fns/fp/isTuesday/index' {
  import {isTuesday} from 'date-fns/fp'
  export = isTuesday
}

declare module 'date-fns/fp/isValid/index' {
  import {isValid} from 'date-fns/fp'
  export = isValid
}

declare module 'date-fns/fp/isWednesday/index' {
  import {isWednesday} from 'date-fns/fp'
  export = isWednesday
}

declare module 'date-fns/fp/isWeekend/index' {
  import {isWeekend} from 'date-fns/fp'
  export = isWeekend
}

declare module 'date-fns/fp/isWithinRange/index' {
  import {isWithinRange} from 'date-fns/fp'
  export = isWithinRange
}

declare module 'date-fns/fp/lastDayOfISOWeek/index' {
  import {lastDayOfISOWeek} from 'date-fns/fp'
  export = lastDayOfISOWeek
}

declare module 'date-fns/fp/lastDayOfISOYear/index' {
  import {lastDayOfISOYear} from 'date-fns/fp'
  export = lastDayOfISOYear
}

declare module 'date-fns/fp/lastDayOfMonth/index' {
  import {lastDayOfMonth} from 'date-fns/fp'
  export = lastDayOfMonth
}

declare module 'date-fns/fp/lastDayOfQuarter/index' {
  import {lastDayOfQuarter} from 'date-fns/fp'
  export = lastDayOfQuarter
}

declare module 'date-fns/fp/lastDayOfWeek/index' {
  import {lastDayOfWeek} from 'date-fns/fp'
  export = lastDayOfWeek
}

declare module 'date-fns/fp/lastDayOfYear/index' {
  import {lastDayOfYear} from 'date-fns/fp'
  export = lastDayOfYear
}

declare module 'date-fns/fp/max/index' {
  import {max} from 'date-fns/fp'
  export = max
}

declare module 'date-fns/fp/min/index' {
  import {min} from 'date-fns/fp'
  export = min
}

declare module 'date-fns/fp/parse/index' {
  import {parse} from 'date-fns/fp'
  export = parse
}

declare module 'date-fns/fp/setDate/index' {
  import {setDate} from 'date-fns/fp'
  export = setDate
}

declare module 'date-fns/fp/setDay/index' {
  import {setDay} from 'date-fns/fp'
  export = setDay
}

declare module 'date-fns/fp/setDayOfYear/index' {
  import {setDayOfYear} from 'date-fns/fp'
  export = setDayOfYear
}

declare module 'date-fns/fp/setHours/index' {
  import {setHours} from 'date-fns/fp'
  export = setHours
}

declare module 'date-fns/fp/setISODay/index' {
  import {setISODay} from 'date-fns/fp'
  export = setISODay
}

declare module 'date-fns/fp/setISOWeek/index' {
  import {setISOWeek} from 'date-fns/fp'
  export = setISOWeek
}

declare module 'date-fns/fp/setISOYear/index' {
  import {setISOYear} from 'date-fns/fp'
  export = setISOYear
}

declare module 'date-fns/fp/setMilliseconds/index' {
  import {setMilliseconds} from 'date-fns/fp'
  export = setMilliseconds
}

declare module 'date-fns/fp/setMinutes/index' {
  import {setMinutes} from 'date-fns/fp'
  export = setMinutes
}

declare module 'date-fns/fp/setMonth/index' {
  import {setMonth} from 'date-fns/fp'
  export = setMonth
}

declare module 'date-fns/fp/setQuarter/index' {
  import {setQuarter} from 'date-fns/fp'
  export = setQuarter
}

declare module 'date-fns/fp/setSeconds/index' {
  import {setSeconds} from 'date-fns/fp'
  export = setSeconds
}

declare module 'date-fns/fp/setYear/index' {
  import {setYear} from 'date-fns/fp'
  export = setYear
}

declare module 'date-fns/fp/startOfDay/index' {
  import {startOfDay} from 'date-fns/fp'
  export = startOfDay
}

declare module 'date-fns/fp/startOfHour/index' {
  import {startOfHour} from 'date-fns/fp'
  export = startOfHour
}

declare module 'date-fns/fp/startOfISOWeek/index' {
  import {startOfISOWeek} from 'date-fns/fp'
  export = startOfISOWeek
}

declare module 'date-fns/fp/startOfISOYear/index' {
  import {startOfISOYear} from 'date-fns/fp'
  export = startOfISOYear
}

declare module 'date-fns/fp/startOfMinute/index' {
  import {startOfMinute} from 'date-fns/fp'
  export = startOfMinute
}

declare module 'date-fns/fp/startOfMonth/index' {
  import {startOfMonth} from 'date-fns/fp'
  export = startOfMonth
}

declare module 'date-fns/fp/startOfQuarter/index' {
  import {startOfQuarter} from 'date-fns/fp'
  export = startOfQuarter
}

declare module 'date-fns/fp/startOfSecond/index' {
  import {startOfSecond} from 'date-fns/fp'
  export = startOfSecond
}

declare module 'date-fns/fp/startOfWeek/index' {
  import {startOfWeek} from 'date-fns/fp'
  export = startOfWeek
}

declare module 'date-fns/fp/startOfYear/index' {
  import {startOfYear} from 'date-fns/fp'
  export = startOfYear
}

declare module 'date-fns/fp/subDays/index' {
  import {subDays} from 'date-fns/fp'
  export = subDays
}

declare module 'date-fns/fp/subHours/index' {
  import {subHours} from 'date-fns/fp'
  export = subHours
}

declare module 'date-fns/fp/subISOYears/index' {
  import {subISOYears} from 'date-fns/fp'
  export = subISOYears
}

declare module 'date-fns/fp/subMilliseconds/index' {
  import {subMilliseconds} from 'date-fns/fp'
  export = subMilliseconds
}

declare module 'date-fns/fp/subMinutes/index' {
  import {subMinutes} from 'date-fns/fp'
  export = subMinutes
}

declare module 'date-fns/fp/subMonths/index' {
  import {subMonths} from 'date-fns/fp'
  export = subMonths
}

declare module 'date-fns/fp/subQuarters/index' {
  import {subQuarters} from 'date-fns/fp'
  export = subQuarters
}

declare module 'date-fns/fp/subSeconds/index' {
  import {subSeconds} from 'date-fns/fp'
  export = subSeconds
}

declare module 'date-fns/fp/subWeeks/index' {
  import {subWeeks} from 'date-fns/fp'
  export = subWeeks
}

declare module 'date-fns/fp/subYears/index' {
  import {subYears} from 'date-fns/fp'
  export = subYears
}

declare module 'date-fns/fp/toDate/index' {
  import {toDate} from 'date-fns/fp'
  export = toDate
}

declare module 'date-fns/fp/addDaysWithOptions' {
  import {addDaysWithOptions} from 'date-fns/fp'
  export = addDaysWithOptions
}

declare module 'date-fns/fp/addHoursWithOptions' {
  import {addHoursWithOptions} from 'date-fns/fp'
  export = addHoursWithOptions
}

declare module 'date-fns/fp/addISOYearsWithOptions' {
  import {addISOYearsWithOptions} from 'date-fns/fp'
  export = addISOYearsWithOptions
}

declare module 'date-fns/fp/addMillisecondsWithOptions' {
  import {addMillisecondsWithOptions} from 'date-fns/fp'
  export = addMillisecondsWithOptions
}

declare module 'date-fns/fp/addMinutesWithOptions' {
  import {addMinutesWithOptions} from 'date-fns/fp'
  export = addMinutesWithOptions
}

declare module 'date-fns/fp/addMonthsWithOptions' {
  import {addMonthsWithOptions} from 'date-fns/fp'
  export = addMonthsWithOptions
}

declare module 'date-fns/fp/addQuartersWithOptions' {
  import {addQuartersWithOptions} from 'date-fns/fp'
  export = addQuartersWithOptions
}

declare module 'date-fns/fp/addSecondsWithOptions' {
  import {addSecondsWithOptions} from 'date-fns/fp'
  export = addSecondsWithOptions
}

declare module 'date-fns/fp/addWeeksWithOptions' {
  import {addWeeksWithOptions} from 'date-fns/fp'
  export = addWeeksWithOptions
}

declare module 'date-fns/fp/addYearsWithOptions' {
  import {addYearsWithOptions} from 'date-fns/fp'
  export = addYearsWithOptions
}

declare module 'date-fns/fp/areRangesOverlappingWithOptions' {
  import {areRangesOverlappingWithOptions} from 'date-fns/fp'
  export = areRangesOverlappingWithOptions
}

declare module 'date-fns/fp/closestIndexToWithOptions' {
  import {closestIndexToWithOptions} from 'date-fns/fp'
  export = closestIndexToWithOptions
}

declare module 'date-fns/fp/closestToWithOptions' {
  import {closestToWithOptions} from 'date-fns/fp'
  export = closestToWithOptions
}

declare module 'date-fns/fp/compareAscWithOptions' {
  import {compareAscWithOptions} from 'date-fns/fp'
  export = compareAscWithOptions
}

declare module 'date-fns/fp/compareDescWithOptions' {
  import {compareDescWithOptions} from 'date-fns/fp'
  export = compareDescWithOptions
}

declare module 'date-fns/fp/differenceInCalendarDaysWithOptions' {
  import {differenceInCalendarDaysWithOptions} from 'date-fns/fp'
  export = differenceInCalendarDaysWithOptions
}

declare module 'date-fns/fp/differenceInCalendarISOWeeksWithOptions' {
  import {differenceInCalendarISOWeeksWithOptions} from 'date-fns/fp'
  export = differenceInCalendarISOWeeksWithOptions
}

declare module 'date-fns/fp/differenceInCalendarISOYearsWithOptions' {
  import {differenceInCalendarISOYearsWithOptions} from 'date-fns/fp'
  export = differenceInCalendarISOYearsWithOptions
}

declare module 'date-fns/fp/differenceInCalendarMonthsWithOptions' {
  import {differenceInCalendarMonthsWithOptions} from 'date-fns/fp'
  export = differenceInCalendarMonthsWithOptions
}

declare module 'date-fns/fp/differenceInCalendarQuartersWithOptions' {
  import {differenceInCalendarQuartersWithOptions} from 'date-fns/fp'
  export = differenceInCalendarQuartersWithOptions
}

declare module 'date-fns/fp/differenceInCalendarWeeksWithOptions' {
  import {differenceInCalendarWeeksWithOptions} from 'date-fns/fp'
  export = differenceInCalendarWeeksWithOptions
}

declare module 'date-fns/fp/differenceInCalendarYearsWithOptions' {
  import {differenceInCalendarYearsWithOptions} from 'date-fns/fp'
  export = differenceInCalendarYearsWithOptions
}

declare module 'date-fns/fp/differenceInDaysWithOptions' {
  import {differenceInDaysWithOptions} from 'date-fns/fp'
  export = differenceInDaysWithOptions
}

declare module 'date-fns/fp/differenceInHoursWithOptions' {
  import {differenceInHoursWithOptions} from 'date-fns/fp'
  export = differenceInHoursWithOptions
}

declare module 'date-fns/fp/differenceInISOYearsWithOptions' {
  import {differenceInISOYearsWithOptions} from 'date-fns/fp'
  export = differenceInISOYearsWithOptions
}

declare module 'date-fns/fp/differenceInMillisecondsWithOptions' {
  import {differenceInMillisecondsWithOptions} from 'date-fns/fp'
  export = differenceInMillisecondsWithOptions
}

declare module 'date-fns/fp/differenceInMinutesWithOptions' {
  import {differenceInMinutesWithOptions} from 'date-fns/fp'
  export = differenceInMinutesWithOptions
}

declare module 'date-fns/fp/differenceInMonthsWithOptions' {
  import {differenceInMonthsWithOptions} from 'date-fns/fp'
  export = differenceInMonthsWithOptions
}

declare module 'date-fns/fp/differenceInQuartersWithOptions' {
  import {differenceInQuartersWithOptions} from 'date-fns/fp'
  export = differenceInQuartersWithOptions
}

declare module 'date-fns/fp/differenceInSecondsWithOptions' {
  import {differenceInSecondsWithOptions} from 'date-fns/fp'
  export = differenceInSecondsWithOptions
}

declare module 'date-fns/fp/differenceInWeeksWithOptions' {
  import {differenceInWeeksWithOptions} from 'date-fns/fp'
  export = differenceInWeeksWithOptions
}

declare module 'date-fns/fp/differenceInYearsWithOptions' {
  import {differenceInYearsWithOptions} from 'date-fns/fp'
  export = differenceInYearsWithOptions
}

declare module 'date-fns/fp/distanceInWordsWithOptions' {
  import {distanceInWordsWithOptions} from 'date-fns/fp'
  export = distanceInWordsWithOptions
}

declare module 'date-fns/fp/distanceInWordsStrictWithOptions' {
  import {distanceInWordsStrictWithOptions} from 'date-fns/fp'
  export = distanceInWordsStrictWithOptions
}

declare module 'date-fns/fp/eachDayWithOptions' {
  import {eachDayWithOptions} from 'date-fns/fp'
  export = eachDayWithOptions
}

declare module 'date-fns/fp/endOfDayWithOptions' {
  import {endOfDayWithOptions} from 'date-fns/fp'
  export = endOfDayWithOptions
}

declare module 'date-fns/fp/endOfHourWithOptions' {
  import {endOfHourWithOptions} from 'date-fns/fp'
  export = endOfHourWithOptions
}

declare module 'date-fns/fp/endOfISOWeekWithOptions' {
  import {endOfISOWeekWithOptions} from 'date-fns/fp'
  export = endOfISOWeekWithOptions
}

declare module 'date-fns/fp/endOfISOYearWithOptions' {
  import {endOfISOYearWithOptions} from 'date-fns/fp'
  export = endOfISOYearWithOptions
}

declare module 'date-fns/fp/endOfMinuteWithOptions' {
  import {endOfMinuteWithOptions} from 'date-fns/fp'
  export = endOfMinuteWithOptions
}

declare module 'date-fns/fp/endOfMonthWithOptions' {
  import {endOfMonthWithOptions} from 'date-fns/fp'
  export = endOfMonthWithOptions
}

declare module 'date-fns/fp/endOfQuarterWithOptions' {
  import {endOfQuarterWithOptions} from 'date-fns/fp'
  export = endOfQuarterWithOptions
}

declare module 'date-fns/fp/endOfSecondWithOptions' {
  import {endOfSecondWithOptions} from 'date-fns/fp'
  export = endOfSecondWithOptions
}

declare module 'date-fns/fp/endOfWeekWithOptions' {
  import {endOfWeekWithOptions} from 'date-fns/fp'
  export = endOfWeekWithOptions
}

declare module 'date-fns/fp/endOfYearWithOptions' {
  import {endOfYearWithOptions} from 'date-fns/fp'
  export = endOfYearWithOptions
}

declare module 'date-fns/fp/formatWithOptions' {
  import {formatWithOptions} from 'date-fns/fp'
  export = formatWithOptions
}

declare module 'date-fns/fp/getDateWithOptions' {
  import {getDateWithOptions} from 'date-fns/fp'
  export = getDateWithOptions
}

declare module 'date-fns/fp/getDayWithOptions' {
  import {getDayWithOptions} from 'date-fns/fp'
  export = getDayWithOptions
}

declare module 'date-fns/fp/getDayOfYearWithOptions' {
  import {getDayOfYearWithOptions} from 'date-fns/fp'
  export = getDayOfYearWithOptions
}

declare module 'date-fns/fp/getDaysInMonthWithOptions' {
  import {getDaysInMonthWithOptions} from 'date-fns/fp'
  export = getDaysInMonthWithOptions
}

declare module 'date-fns/fp/getDaysInYearWithOptions' {
  import {getDaysInYearWithOptions} from 'date-fns/fp'
  export = getDaysInYearWithOptions
}

declare module 'date-fns/fp/getHoursWithOptions' {
  import {getHoursWithOptions} from 'date-fns/fp'
  export = getHoursWithOptions
}

declare module 'date-fns/fp/getISODayWithOptions' {
  import {getISODayWithOptions} from 'date-fns/fp'
  export = getISODayWithOptions
}

declare module 'date-fns/fp/getISOWeekWithOptions' {
  import {getISOWeekWithOptions} from 'date-fns/fp'
  export = getISOWeekWithOptions
}

declare module 'date-fns/fp/getISOWeeksInYearWithOptions' {
  import {getISOWeeksInYearWithOptions} from 'date-fns/fp'
  export = getISOWeeksInYearWithOptions
}

declare module 'date-fns/fp/getISOYearWithOptions' {
  import {getISOYearWithOptions} from 'date-fns/fp'
  export = getISOYearWithOptions
}

declare module 'date-fns/fp/getMillisecondsWithOptions' {
  import {getMillisecondsWithOptions} from 'date-fns/fp'
  export = getMillisecondsWithOptions
}

declare module 'date-fns/fp/getMinutesWithOptions' {
  import {getMinutesWithOptions} from 'date-fns/fp'
  export = getMinutesWithOptions
}

declare module 'date-fns/fp/getMonthWithOptions' {
  import {getMonthWithOptions} from 'date-fns/fp'
  export = getMonthWithOptions
}

declare module 'date-fns/fp/getOverlappingDaysInRangesWithOptions' {
  import {getOverlappingDaysInRangesWithOptions} from 'date-fns/fp'
  export = getOverlappingDaysInRangesWithOptions
}

declare module 'date-fns/fp/getQuarterWithOptions' {
  import {getQuarterWithOptions} from 'date-fns/fp'
  export = getQuarterWithOptions
}

declare module 'date-fns/fp/getSecondsWithOptions' {
  import {getSecondsWithOptions} from 'date-fns/fp'
  export = getSecondsWithOptions
}

declare module 'date-fns/fp/getTimeWithOptions' {
  import {getTimeWithOptions} from 'date-fns/fp'
  export = getTimeWithOptions
}

declare module 'date-fns/fp/getYearWithOptions' {
  import {getYearWithOptions} from 'date-fns/fp'
  export = getYearWithOptions
}

declare module 'date-fns/fp/isAfterWithOptions' {
  import {isAfterWithOptions} from 'date-fns/fp'
  export = isAfterWithOptions
}

declare module 'date-fns/fp/isBeforeWithOptions' {
  import {isBeforeWithOptions} from 'date-fns/fp'
  export = isBeforeWithOptions
}

declare module 'date-fns/fp/isDateWithOptions' {
  import {isDateWithOptions} from 'date-fns/fp'
  export = isDateWithOptions
}

declare module 'date-fns/fp/isEqualWithOptions' {
  import {isEqualWithOptions} from 'date-fns/fp'
  export = isEqualWithOptions
}

declare module 'date-fns/fp/isFirstDayOfMonthWithOptions' {
  import {isFirstDayOfMonthWithOptions} from 'date-fns/fp'
  export = isFirstDayOfMonthWithOptions
}

declare module 'date-fns/fp/isFridayWithOptions' {
  import {isFridayWithOptions} from 'date-fns/fp'
  export = isFridayWithOptions
}

declare module 'date-fns/fp/isLastDayOfMonthWithOptions' {
  import {isLastDayOfMonthWithOptions} from 'date-fns/fp'
  export = isLastDayOfMonthWithOptions
}

declare module 'date-fns/fp/isLeapYearWithOptions' {
  import {isLeapYearWithOptions} from 'date-fns/fp'
  export = isLeapYearWithOptions
}

declare module 'date-fns/fp/isMondayWithOptions' {
  import {isMondayWithOptions} from 'date-fns/fp'
  export = isMondayWithOptions
}

declare module 'date-fns/fp/isSameDayWithOptions' {
  import {isSameDayWithOptions} from 'date-fns/fp'
  export = isSameDayWithOptions
}

declare module 'date-fns/fp/isSameHourWithOptions' {
  import {isSameHourWithOptions} from 'date-fns/fp'
  export = isSameHourWithOptions
}

declare module 'date-fns/fp/isSameISOWeekWithOptions' {
  import {isSameISOWeekWithOptions} from 'date-fns/fp'
  export = isSameISOWeekWithOptions
}

declare module 'date-fns/fp/isSameISOYearWithOptions' {
  import {isSameISOYearWithOptions} from 'date-fns/fp'
  export = isSameISOYearWithOptions
}

declare module 'date-fns/fp/isSameMinuteWithOptions' {
  import {isSameMinuteWithOptions} from 'date-fns/fp'
  export = isSameMinuteWithOptions
}

declare module 'date-fns/fp/isSameMonthWithOptions' {
  import {isSameMonthWithOptions} from 'date-fns/fp'
  export = isSameMonthWithOptions
}

declare module 'date-fns/fp/isSameQuarterWithOptions' {
  import {isSameQuarterWithOptions} from 'date-fns/fp'
  export = isSameQuarterWithOptions
}

declare module 'date-fns/fp/isSameSecondWithOptions' {
  import {isSameSecondWithOptions} from 'date-fns/fp'
  export = isSameSecondWithOptions
}

declare module 'date-fns/fp/isSameWeekWithOptions' {
  import {isSameWeekWithOptions} from 'date-fns/fp'
  export = isSameWeekWithOptions
}

declare module 'date-fns/fp/isSameYearWithOptions' {
  import {isSameYearWithOptions} from 'date-fns/fp'
  export = isSameYearWithOptions
}

declare module 'date-fns/fp/isSaturdayWithOptions' {
  import {isSaturdayWithOptions} from 'date-fns/fp'
  export = isSaturdayWithOptions
}

declare module 'date-fns/fp/isSundayWithOptions' {
  import {isSundayWithOptions} from 'date-fns/fp'
  export = isSundayWithOptions
}

declare module 'date-fns/fp/isThursdayWithOptions' {
  import {isThursdayWithOptions} from 'date-fns/fp'
  export = isThursdayWithOptions
}

declare module 'date-fns/fp/isTuesdayWithOptions' {
  import {isTuesdayWithOptions} from 'date-fns/fp'
  export = isTuesdayWithOptions
}

declare module 'date-fns/fp/isValidWithOptions' {
  import {isValidWithOptions} from 'date-fns/fp'
  export = isValidWithOptions
}

declare module 'date-fns/fp/isWednesdayWithOptions' {
  import {isWednesdayWithOptions} from 'date-fns/fp'
  export = isWednesdayWithOptions
}

declare module 'date-fns/fp/isWeekendWithOptions' {
  import {isWeekendWithOptions} from 'date-fns/fp'
  export = isWeekendWithOptions
}

declare module 'date-fns/fp/isWithinRangeWithOptions' {
  import {isWithinRangeWithOptions} from 'date-fns/fp'
  export = isWithinRangeWithOptions
}

declare module 'date-fns/fp/lastDayOfISOWeekWithOptions' {
  import {lastDayOfISOWeekWithOptions} from 'date-fns/fp'
  export = lastDayOfISOWeekWithOptions
}

declare module 'date-fns/fp/lastDayOfISOYearWithOptions' {
  import {lastDayOfISOYearWithOptions} from 'date-fns/fp'
  export = lastDayOfISOYearWithOptions
}

declare module 'date-fns/fp/lastDayOfMonthWithOptions' {
  import {lastDayOfMonthWithOptions} from 'date-fns/fp'
  export = lastDayOfMonthWithOptions
}

declare module 'date-fns/fp/lastDayOfQuarterWithOptions' {
  import {lastDayOfQuarterWithOptions} from 'date-fns/fp'
  export = lastDayOfQuarterWithOptions
}

declare module 'date-fns/fp/lastDayOfWeekWithOptions' {
  import {lastDayOfWeekWithOptions} from 'date-fns/fp'
  export = lastDayOfWeekWithOptions
}

declare module 'date-fns/fp/lastDayOfYearWithOptions' {
  import {lastDayOfYearWithOptions} from 'date-fns/fp'
  export = lastDayOfYearWithOptions
}

declare module 'date-fns/fp/maxWithOptions' {
  import {maxWithOptions} from 'date-fns/fp'
  export = maxWithOptions
}

declare module 'date-fns/fp/minWithOptions' {
  import {minWithOptions} from 'date-fns/fp'
  export = minWithOptions
}

declare module 'date-fns/fp/parseWithOptions' {
  import {parseWithOptions} from 'date-fns/fp'
  export = parseWithOptions
}

declare module 'date-fns/fp/setDateWithOptions' {
  import {setDateWithOptions} from 'date-fns/fp'
  export = setDateWithOptions
}

declare module 'date-fns/fp/setDayWithOptions' {
  import {setDayWithOptions} from 'date-fns/fp'
  export = setDayWithOptions
}

declare module 'date-fns/fp/setDayOfYearWithOptions' {
  import {setDayOfYearWithOptions} from 'date-fns/fp'
  export = setDayOfYearWithOptions
}

declare module 'date-fns/fp/setHoursWithOptions' {
  import {setHoursWithOptions} from 'date-fns/fp'
  export = setHoursWithOptions
}

declare module 'date-fns/fp/setISODayWithOptions' {
  import {setISODayWithOptions} from 'date-fns/fp'
  export = setISODayWithOptions
}

declare module 'date-fns/fp/setISOWeekWithOptions' {
  import {setISOWeekWithOptions} from 'date-fns/fp'
  export = setISOWeekWithOptions
}

declare module 'date-fns/fp/setISOYearWithOptions' {
  import {setISOYearWithOptions} from 'date-fns/fp'
  export = setISOYearWithOptions
}

declare module 'date-fns/fp/setMillisecondsWithOptions' {
  import {setMillisecondsWithOptions} from 'date-fns/fp'
  export = setMillisecondsWithOptions
}

declare module 'date-fns/fp/setMinutesWithOptions' {
  import {setMinutesWithOptions} from 'date-fns/fp'
  export = setMinutesWithOptions
}

declare module 'date-fns/fp/setMonthWithOptions' {
  import {setMonthWithOptions} from 'date-fns/fp'
  export = setMonthWithOptions
}

declare module 'date-fns/fp/setQuarterWithOptions' {
  import {setQuarterWithOptions} from 'date-fns/fp'
  export = setQuarterWithOptions
}

declare module 'date-fns/fp/setSecondsWithOptions' {
  import {setSecondsWithOptions} from 'date-fns/fp'
  export = setSecondsWithOptions
}

declare module 'date-fns/fp/setYearWithOptions' {
  import {setYearWithOptions} from 'date-fns/fp'
  export = setYearWithOptions
}

declare module 'date-fns/fp/startOfDayWithOptions' {
  import {startOfDayWithOptions} from 'date-fns/fp'
  export = startOfDayWithOptions
}

declare module 'date-fns/fp/startOfHourWithOptions' {
  import {startOfHourWithOptions} from 'date-fns/fp'
  export = startOfHourWithOptions
}

declare module 'date-fns/fp/startOfISOWeekWithOptions' {
  import {startOfISOWeekWithOptions} from 'date-fns/fp'
  export = startOfISOWeekWithOptions
}

declare module 'date-fns/fp/startOfISOYearWithOptions' {
  import {startOfISOYearWithOptions} from 'date-fns/fp'
  export = startOfISOYearWithOptions
}

declare module 'date-fns/fp/startOfMinuteWithOptions' {
  import {startOfMinuteWithOptions} from 'date-fns/fp'
  export = startOfMinuteWithOptions
}

declare module 'date-fns/fp/startOfMonthWithOptions' {
  import {startOfMonthWithOptions} from 'date-fns/fp'
  export = startOfMonthWithOptions
}

declare module 'date-fns/fp/startOfQuarterWithOptions' {
  import {startOfQuarterWithOptions} from 'date-fns/fp'
  export = startOfQuarterWithOptions
}

declare module 'date-fns/fp/startOfSecondWithOptions' {
  import {startOfSecondWithOptions} from 'date-fns/fp'
  export = startOfSecondWithOptions
}

declare module 'date-fns/fp/startOfWeekWithOptions' {
  import {startOfWeekWithOptions} from 'date-fns/fp'
  export = startOfWeekWithOptions
}

declare module 'date-fns/fp/startOfYearWithOptions' {
  import {startOfYearWithOptions} from 'date-fns/fp'
  export = startOfYearWithOptions
}

declare module 'date-fns/fp/subDaysWithOptions' {
  import {subDaysWithOptions} from 'date-fns/fp'
  export = subDaysWithOptions
}

declare module 'date-fns/fp/subHoursWithOptions' {
  import {subHoursWithOptions} from 'date-fns/fp'
  export = subHoursWithOptions
}

declare module 'date-fns/fp/subISOYearsWithOptions' {
  import {subISOYearsWithOptions} from 'date-fns/fp'
  export = subISOYearsWithOptions
}

declare module 'date-fns/fp/subMillisecondsWithOptions' {
  import {subMillisecondsWithOptions} from 'date-fns/fp'
  export = subMillisecondsWithOptions
}

declare module 'date-fns/fp/subMinutesWithOptions' {
  import {subMinutesWithOptions} from 'date-fns/fp'
  export = subMinutesWithOptions
}

declare module 'date-fns/fp/subMonthsWithOptions' {
  import {subMonthsWithOptions} from 'date-fns/fp'
  export = subMonthsWithOptions
}

declare module 'date-fns/fp/subQuartersWithOptions' {
  import {subQuartersWithOptions} from 'date-fns/fp'
  export = subQuartersWithOptions
}

declare module 'date-fns/fp/subSecondsWithOptions' {
  import {subSecondsWithOptions} from 'date-fns/fp'
  export = subSecondsWithOptions
}

declare module 'date-fns/fp/subWeeksWithOptions' {
  import {subWeeksWithOptions} from 'date-fns/fp'
  export = subWeeksWithOptions
}

declare module 'date-fns/fp/subYearsWithOptions' {
  import {subYearsWithOptions} from 'date-fns/fp'
  export = subYearsWithOptions
}

declare module 'date-fns/fp/toDateWithOptions' {
  import {toDateWithOptions} from 'date-fns/fp'
  export = toDateWithOptions
}

declare module 'date-fns/fp/addDaysWithOptions/index' {
  import {addDaysWithOptions} from 'date-fns/fp'
  export = addDaysWithOptions
}

declare module 'date-fns/fp/addHoursWithOptions/index' {
  import {addHoursWithOptions} from 'date-fns/fp'
  export = addHoursWithOptions
}

declare module 'date-fns/fp/addISOYearsWithOptions/index' {
  import {addISOYearsWithOptions} from 'date-fns/fp'
  export = addISOYearsWithOptions
}

declare module 'date-fns/fp/addMillisecondsWithOptions/index' {
  import {addMillisecondsWithOptions} from 'date-fns/fp'
  export = addMillisecondsWithOptions
}

declare module 'date-fns/fp/addMinutesWithOptions/index' {
  import {addMinutesWithOptions} from 'date-fns/fp'
  export = addMinutesWithOptions
}

declare module 'date-fns/fp/addMonthsWithOptions/index' {
  import {addMonthsWithOptions} from 'date-fns/fp'
  export = addMonthsWithOptions
}

declare module 'date-fns/fp/addQuartersWithOptions/index' {
  import {addQuartersWithOptions} from 'date-fns/fp'
  export = addQuartersWithOptions
}

declare module 'date-fns/fp/addSecondsWithOptions/index' {
  import {addSecondsWithOptions} from 'date-fns/fp'
  export = addSecondsWithOptions
}

declare module 'date-fns/fp/addWeeksWithOptions/index' {
  import {addWeeksWithOptions} from 'date-fns/fp'
  export = addWeeksWithOptions
}

declare module 'date-fns/fp/addYearsWithOptions/index' {
  import {addYearsWithOptions} from 'date-fns/fp'
  export = addYearsWithOptions
}

declare module 'date-fns/fp/areRangesOverlappingWithOptions/index' {
  import {areRangesOverlappingWithOptions} from 'date-fns/fp'
  export = areRangesOverlappingWithOptions
}

declare module 'date-fns/fp/closestIndexToWithOptions/index' {
  import {closestIndexToWithOptions} from 'date-fns/fp'
  export = closestIndexToWithOptions
}

declare module 'date-fns/fp/closestToWithOptions/index' {
  import {closestToWithOptions} from 'date-fns/fp'
  export = closestToWithOptions
}

declare module 'date-fns/fp/compareAscWithOptions/index' {
  import {compareAscWithOptions} from 'date-fns/fp'
  export = compareAscWithOptions
}

declare module 'date-fns/fp/compareDescWithOptions/index' {
  import {compareDescWithOptions} from 'date-fns/fp'
  export = compareDescWithOptions
}

declare module 'date-fns/fp/differenceInCalendarDaysWithOptions/index' {
  import {differenceInCalendarDaysWithOptions} from 'date-fns/fp'
  export = differenceInCalendarDaysWithOptions
}

declare module 'date-fns/fp/differenceInCalendarISOWeeksWithOptions/index' {
  import {differenceInCalendarISOWeeksWithOptions} from 'date-fns/fp'
  export = differenceInCalendarISOWeeksWithOptions
}

declare module 'date-fns/fp/differenceInCalendarISOYearsWithOptions/index' {
  import {differenceInCalendarISOYearsWithOptions} from 'date-fns/fp'
  export = differenceInCalendarISOYearsWithOptions
}

declare module 'date-fns/fp/differenceInCalendarMonthsWithOptions/index' {
  import {differenceInCalendarMonthsWithOptions} from 'date-fns/fp'
  export = differenceInCalendarMonthsWithOptions
}

declare module 'date-fns/fp/differenceInCalendarQuartersWithOptions/index' {
  import {differenceInCalendarQuartersWithOptions} from 'date-fns/fp'
  export = differenceInCalendarQuartersWithOptions
}

declare module 'date-fns/fp/differenceInCalendarWeeksWithOptions/index' {
  import {differenceInCalendarWeeksWithOptions} from 'date-fns/fp'
  export = differenceInCalendarWeeksWithOptions
}

declare module 'date-fns/fp/differenceInCalendarYearsWithOptions/index' {
  import {differenceInCalendarYearsWithOptions} from 'date-fns/fp'
  export = differenceInCalendarYearsWithOptions
}

declare module 'date-fns/fp/differenceInDaysWithOptions/index' {
  import {differenceInDaysWithOptions} from 'date-fns/fp'
  export = differenceInDaysWithOptions
}

declare module 'date-fns/fp/differenceInHoursWithOptions/index' {
  import {differenceInHoursWithOptions} from 'date-fns/fp'
  export = differenceInHoursWithOptions
}

declare module 'date-fns/fp/differenceInISOYearsWithOptions/index' {
  import {differenceInISOYearsWithOptions} from 'date-fns/fp'
  export = differenceInISOYearsWithOptions
}

declare module 'date-fns/fp/differenceInMillisecondsWithOptions/index' {
  import {differenceInMillisecondsWithOptions} from 'date-fns/fp'
  export = differenceInMillisecondsWithOptions
}

declare module 'date-fns/fp/differenceInMinutesWithOptions/index' {
  import {differenceInMinutesWithOptions} from 'date-fns/fp'
  export = differenceInMinutesWithOptions
}

declare module 'date-fns/fp/differenceInMonthsWithOptions/index' {
  import {differenceInMonthsWithOptions} from 'date-fns/fp'
  export = differenceInMonthsWithOptions
}

declare module 'date-fns/fp/differenceInQuartersWithOptions/index' {
  import {differenceInQuartersWithOptions} from 'date-fns/fp'
  export = differenceInQuartersWithOptions
}

declare module 'date-fns/fp/differenceInSecondsWithOptions/index' {
  import {differenceInSecondsWithOptions} from 'date-fns/fp'
  export = differenceInSecondsWithOptions
}

declare module 'date-fns/fp/differenceInWeeksWithOptions/index' {
  import {differenceInWeeksWithOptions} from 'date-fns/fp'
  export = differenceInWeeksWithOptions
}

declare module 'date-fns/fp/differenceInYearsWithOptions/index' {
  import {differenceInYearsWithOptions} from 'date-fns/fp'
  export = differenceInYearsWithOptions
}

declare module 'date-fns/fp/distanceInWordsWithOptions/index' {
  import {distanceInWordsWithOptions} from 'date-fns/fp'
  export = distanceInWordsWithOptions
}

declare module 'date-fns/fp/distanceInWordsStrictWithOptions/index' {
  import {distanceInWordsStrictWithOptions} from 'date-fns/fp'
  export = distanceInWordsStrictWithOptions
}

declare module 'date-fns/fp/eachDayWithOptions/index' {
  import {eachDayWithOptions} from 'date-fns/fp'
  export = eachDayWithOptions
}

declare module 'date-fns/fp/endOfDayWithOptions/index' {
  import {endOfDayWithOptions} from 'date-fns/fp'
  export = endOfDayWithOptions
}

declare module 'date-fns/fp/endOfHourWithOptions/index' {
  import {endOfHourWithOptions} from 'date-fns/fp'
  export = endOfHourWithOptions
}

declare module 'date-fns/fp/endOfISOWeekWithOptions/index' {
  import {endOfISOWeekWithOptions} from 'date-fns/fp'
  export = endOfISOWeekWithOptions
}

declare module 'date-fns/fp/endOfISOYearWithOptions/index' {
  import {endOfISOYearWithOptions} from 'date-fns/fp'
  export = endOfISOYearWithOptions
}

declare module 'date-fns/fp/endOfMinuteWithOptions/index' {
  import {endOfMinuteWithOptions} from 'date-fns/fp'
  export = endOfMinuteWithOptions
}

declare module 'date-fns/fp/endOfMonthWithOptions/index' {
  import {endOfMonthWithOptions} from 'date-fns/fp'
  export = endOfMonthWithOptions
}

declare module 'date-fns/fp/endOfQuarterWithOptions/index' {
  import {endOfQuarterWithOptions} from 'date-fns/fp'
  export = endOfQuarterWithOptions
}

declare module 'date-fns/fp/endOfSecondWithOptions/index' {
  import {endOfSecondWithOptions} from 'date-fns/fp'
  export = endOfSecondWithOptions
}

declare module 'date-fns/fp/endOfWeekWithOptions/index' {
  import {endOfWeekWithOptions} from 'date-fns/fp'
  export = endOfWeekWithOptions
}

declare module 'date-fns/fp/endOfYearWithOptions/index' {
  import {endOfYearWithOptions} from 'date-fns/fp'
  export = endOfYearWithOptions
}

declare module 'date-fns/fp/formatWithOptions/index' {
  import {formatWithOptions} from 'date-fns/fp'
  export = formatWithOptions
}

declare module 'date-fns/fp/getDateWithOptions/index' {
  import {getDateWithOptions} from 'date-fns/fp'
  export = getDateWithOptions
}

declare module 'date-fns/fp/getDayWithOptions/index' {
  import {getDayWithOptions} from 'date-fns/fp'
  export = getDayWithOptions
}

declare module 'date-fns/fp/getDayOfYearWithOptions/index' {
  import {getDayOfYearWithOptions} from 'date-fns/fp'
  export = getDayOfYearWithOptions
}

declare module 'date-fns/fp/getDaysInMonthWithOptions/index' {
  import {getDaysInMonthWithOptions} from 'date-fns/fp'
  export = getDaysInMonthWithOptions
}

declare module 'date-fns/fp/getDaysInYearWithOptions/index' {
  import {getDaysInYearWithOptions} from 'date-fns/fp'
  export = getDaysInYearWithOptions
}

declare module 'date-fns/fp/getHoursWithOptions/index' {
  import {getHoursWithOptions} from 'date-fns/fp'
  export = getHoursWithOptions
}

declare module 'date-fns/fp/getISODayWithOptions/index' {
  import {getISODayWithOptions} from 'date-fns/fp'
  export = getISODayWithOptions
}

declare module 'date-fns/fp/getISOWeekWithOptions/index' {
  import {getISOWeekWithOptions} from 'date-fns/fp'
  export = getISOWeekWithOptions
}

declare module 'date-fns/fp/getISOWeeksInYearWithOptions/index' {
  import {getISOWeeksInYearWithOptions} from 'date-fns/fp'
  export = getISOWeeksInYearWithOptions
}

declare module 'date-fns/fp/getISOYearWithOptions/index' {
  import {getISOYearWithOptions} from 'date-fns/fp'
  export = getISOYearWithOptions
}

declare module 'date-fns/fp/getMillisecondsWithOptions/index' {
  import {getMillisecondsWithOptions} from 'date-fns/fp'
  export = getMillisecondsWithOptions
}

declare module 'date-fns/fp/getMinutesWithOptions/index' {
  import {getMinutesWithOptions} from 'date-fns/fp'
  export = getMinutesWithOptions
}

declare module 'date-fns/fp/getMonthWithOptions/index' {
  import {getMonthWithOptions} from 'date-fns/fp'
  export = getMonthWithOptions
}

declare module 'date-fns/fp/getOverlappingDaysInRangesWithOptions/index' {
  import {getOverlappingDaysInRangesWithOptions} from 'date-fns/fp'
  export = getOverlappingDaysInRangesWithOptions
}

declare module 'date-fns/fp/getQuarterWithOptions/index' {
  import {getQuarterWithOptions} from 'date-fns/fp'
  export = getQuarterWithOptions
}

declare module 'date-fns/fp/getSecondsWithOptions/index' {
  import {getSecondsWithOptions} from 'date-fns/fp'
  export = getSecondsWithOptions
}

declare module 'date-fns/fp/getTimeWithOptions/index' {
  import {getTimeWithOptions} from 'date-fns/fp'
  export = getTimeWithOptions
}

declare module 'date-fns/fp/getYearWithOptions/index' {
  import {getYearWithOptions} from 'date-fns/fp'
  export = getYearWithOptions
}

declare module 'date-fns/fp/isAfterWithOptions/index' {
  import {isAfterWithOptions} from 'date-fns/fp'
  export = isAfterWithOptions
}

declare module 'date-fns/fp/isBeforeWithOptions/index' {
  import {isBeforeWithOptions} from 'date-fns/fp'
  export = isBeforeWithOptions
}

declare module 'date-fns/fp/isDateWithOptions/index' {
  import {isDateWithOptions} from 'date-fns/fp'
  export = isDateWithOptions
}

declare module 'date-fns/fp/isEqualWithOptions/index' {
  import {isEqualWithOptions} from 'date-fns/fp'
  export = isEqualWithOptions
}

declare module 'date-fns/fp/isFirstDayOfMonthWithOptions/index' {
  import {isFirstDayOfMonthWithOptions} from 'date-fns/fp'
  export = isFirstDayOfMonthWithOptions
}

declare module 'date-fns/fp/isFridayWithOptions/index' {
  import {isFridayWithOptions} from 'date-fns/fp'
  export = isFridayWithOptions
}

declare module 'date-fns/fp/isLastDayOfMonthWithOptions/index' {
  import {isLastDayOfMonthWithOptions} from 'date-fns/fp'
  export = isLastDayOfMonthWithOptions
}

declare module 'date-fns/fp/isLeapYearWithOptions/index' {
  import {isLeapYearWithOptions} from 'date-fns/fp'
  export = isLeapYearWithOptions
}

declare module 'date-fns/fp/isMondayWithOptions/index' {
  import {isMondayWithOptions} from 'date-fns/fp'
  export = isMondayWithOptions
}

declare module 'date-fns/fp/isSameDayWithOptions/index' {
  import {isSameDayWithOptions} from 'date-fns/fp'
  export = isSameDayWithOptions
}

declare module 'date-fns/fp/isSameHourWithOptions/index' {
  import {isSameHourWithOptions} from 'date-fns/fp'
  export = isSameHourWithOptions
}

declare module 'date-fns/fp/isSameISOWeekWithOptions/index' {
  import {isSameISOWeekWithOptions} from 'date-fns/fp'
  export = isSameISOWeekWithOptions
}

declare module 'date-fns/fp/isSameISOYearWithOptions/index' {
  import {isSameISOYearWithOptions} from 'date-fns/fp'
  export = isSameISOYearWithOptions
}

declare module 'date-fns/fp/isSameMinuteWithOptions/index' {
  import {isSameMinuteWithOptions} from 'date-fns/fp'
  export = isSameMinuteWithOptions
}

declare module 'date-fns/fp/isSameMonthWithOptions/index' {
  import {isSameMonthWithOptions} from 'date-fns/fp'
  export = isSameMonthWithOptions
}

declare module 'date-fns/fp/isSameQuarterWithOptions/index' {
  import {isSameQuarterWithOptions} from 'date-fns/fp'
  export = isSameQuarterWithOptions
}

declare module 'date-fns/fp/isSameSecondWithOptions/index' {
  import {isSameSecondWithOptions} from 'date-fns/fp'
  export = isSameSecondWithOptions
}

declare module 'date-fns/fp/isSameWeekWithOptions/index' {
  import {isSameWeekWithOptions} from 'date-fns/fp'
  export = isSameWeekWithOptions
}

declare module 'date-fns/fp/isSameYearWithOptions/index' {
  import {isSameYearWithOptions} from 'date-fns/fp'
  export = isSameYearWithOptions
}

declare module 'date-fns/fp/isSaturdayWithOptions/index' {
  import {isSaturdayWithOptions} from 'date-fns/fp'
  export = isSaturdayWithOptions
}

declare module 'date-fns/fp/isSundayWithOptions/index' {
  import {isSundayWithOptions} from 'date-fns/fp'
  export = isSundayWithOptions
}

declare module 'date-fns/fp/isThursdayWithOptions/index' {
  import {isThursdayWithOptions} from 'date-fns/fp'
  export = isThursdayWithOptions
}

declare module 'date-fns/fp/isTuesdayWithOptions/index' {
  import {isTuesdayWithOptions} from 'date-fns/fp'
  export = isTuesdayWithOptions
}

declare module 'date-fns/fp/isValidWithOptions/index' {
  import {isValidWithOptions} from 'date-fns/fp'
  export = isValidWithOptions
}

declare module 'date-fns/fp/isWednesdayWithOptions/index' {
  import {isWednesdayWithOptions} from 'date-fns/fp'
  export = isWednesdayWithOptions
}

declare module 'date-fns/fp/isWeekendWithOptions/index' {
  import {isWeekendWithOptions} from 'date-fns/fp'
  export = isWeekendWithOptions
}

declare module 'date-fns/fp/isWithinRangeWithOptions/index' {
  import {isWithinRangeWithOptions} from 'date-fns/fp'
  export = isWithinRangeWithOptions
}

declare module 'date-fns/fp/lastDayOfISOWeekWithOptions/index' {
  import {lastDayOfISOWeekWithOptions} from 'date-fns/fp'
  export = lastDayOfISOWeekWithOptions
}

declare module 'date-fns/fp/lastDayOfISOYearWithOptions/index' {
  import {lastDayOfISOYearWithOptions} from 'date-fns/fp'
  export = lastDayOfISOYearWithOptions
}

declare module 'date-fns/fp/lastDayOfMonthWithOptions/index' {
  import {lastDayOfMonthWithOptions} from 'date-fns/fp'
  export = lastDayOfMonthWithOptions
}

declare module 'date-fns/fp/lastDayOfQuarterWithOptions/index' {
  import {lastDayOfQuarterWithOptions} from 'date-fns/fp'
  export = lastDayOfQuarterWithOptions
}

declare module 'date-fns/fp/lastDayOfWeekWithOptions/index' {
  import {lastDayOfWeekWithOptions} from 'date-fns/fp'
  export = lastDayOfWeekWithOptions
}

declare module 'date-fns/fp/lastDayOfYearWithOptions/index' {
  import {lastDayOfYearWithOptions} from 'date-fns/fp'
  export = lastDayOfYearWithOptions
}

declare module 'date-fns/fp/maxWithOptions/index' {
  import {maxWithOptions} from 'date-fns/fp'
  export = maxWithOptions
}

declare module 'date-fns/fp/minWithOptions/index' {
  import {minWithOptions} from 'date-fns/fp'
  export = minWithOptions
}

declare module 'date-fns/fp/parseWithOptions/index' {
  import {parseWithOptions} from 'date-fns/fp'
  export = parseWithOptions
}

declare module 'date-fns/fp/setDateWithOptions/index' {
  import {setDateWithOptions} from 'date-fns/fp'
  export = setDateWithOptions
}

declare module 'date-fns/fp/setDayWithOptions/index' {
  import {setDayWithOptions} from 'date-fns/fp'
  export = setDayWithOptions
}

declare module 'date-fns/fp/setDayOfYearWithOptions/index' {
  import {setDayOfYearWithOptions} from 'date-fns/fp'
  export = setDayOfYearWithOptions
}

declare module 'date-fns/fp/setHoursWithOptions/index' {
  import {setHoursWithOptions} from 'date-fns/fp'
  export = setHoursWithOptions
}

declare module 'date-fns/fp/setISODayWithOptions/index' {
  import {setISODayWithOptions} from 'date-fns/fp'
  export = setISODayWithOptions
}

declare module 'date-fns/fp/setISOWeekWithOptions/index' {
  import {setISOWeekWithOptions} from 'date-fns/fp'
  export = setISOWeekWithOptions
}

declare module 'date-fns/fp/setISOYearWithOptions/index' {
  import {setISOYearWithOptions} from 'date-fns/fp'
  export = setISOYearWithOptions
}

declare module 'date-fns/fp/setMillisecondsWithOptions/index' {
  import {setMillisecondsWithOptions} from 'date-fns/fp'
  export = setMillisecondsWithOptions
}

declare module 'date-fns/fp/setMinutesWithOptions/index' {
  import {setMinutesWithOptions} from 'date-fns/fp'
  export = setMinutesWithOptions
}

declare module 'date-fns/fp/setMonthWithOptions/index' {
  import {setMonthWithOptions} from 'date-fns/fp'
  export = setMonthWithOptions
}

declare module 'date-fns/fp/setQuarterWithOptions/index' {
  import {setQuarterWithOptions} from 'date-fns/fp'
  export = setQuarterWithOptions
}

declare module 'date-fns/fp/setSecondsWithOptions/index' {
  import {setSecondsWithOptions} from 'date-fns/fp'
  export = setSecondsWithOptions
}

declare module 'date-fns/fp/setYearWithOptions/index' {
  import {setYearWithOptions} from 'date-fns/fp'
  export = setYearWithOptions
}

declare module 'date-fns/fp/startOfDayWithOptions/index' {
  import {startOfDayWithOptions} from 'date-fns/fp'
  export = startOfDayWithOptions
}

declare module 'date-fns/fp/startOfHourWithOptions/index' {
  import {startOfHourWithOptions} from 'date-fns/fp'
  export = startOfHourWithOptions
}

declare module 'date-fns/fp/startOfISOWeekWithOptions/index' {
  import {startOfISOWeekWithOptions} from 'date-fns/fp'
  export = startOfISOWeekWithOptions
}

declare module 'date-fns/fp/startOfISOYearWithOptions/index' {
  import {startOfISOYearWithOptions} from 'date-fns/fp'
  export = startOfISOYearWithOptions
}

declare module 'date-fns/fp/startOfMinuteWithOptions/index' {
  import {startOfMinuteWithOptions} from 'date-fns/fp'
  export = startOfMinuteWithOptions
}

declare module 'date-fns/fp/startOfMonthWithOptions/index' {
  import {startOfMonthWithOptions} from 'date-fns/fp'
  export = startOfMonthWithOptions
}

declare module 'date-fns/fp/startOfQuarterWithOptions/index' {
  import {startOfQuarterWithOptions} from 'date-fns/fp'
  export = startOfQuarterWithOptions
}

declare module 'date-fns/fp/startOfSecondWithOptions/index' {
  import {startOfSecondWithOptions} from 'date-fns/fp'
  export = startOfSecondWithOptions
}

declare module 'date-fns/fp/startOfWeekWithOptions/index' {
  import {startOfWeekWithOptions} from 'date-fns/fp'
  export = startOfWeekWithOptions
}

declare module 'date-fns/fp/startOfYearWithOptions/index' {
  import {startOfYearWithOptions} from 'date-fns/fp'
  export = startOfYearWithOptions
}

declare module 'date-fns/fp/subDaysWithOptions/index' {
  import {subDaysWithOptions} from 'date-fns/fp'
  export = subDaysWithOptions
}

declare module 'date-fns/fp/subHoursWithOptions/index' {
  import {subHoursWithOptions} from 'date-fns/fp'
  export = subHoursWithOptions
}

declare module 'date-fns/fp/subISOYearsWithOptions/index' {
  import {subISOYearsWithOptions} from 'date-fns/fp'
  export = subISOYearsWithOptions
}

declare module 'date-fns/fp/subMillisecondsWithOptions/index' {
  import {subMillisecondsWithOptions} from 'date-fns/fp'
  export = subMillisecondsWithOptions
}

declare module 'date-fns/fp/subMinutesWithOptions/index' {
  import {subMinutesWithOptions} from 'date-fns/fp'
  export = subMinutesWithOptions
}

declare module 'date-fns/fp/subMonthsWithOptions/index' {
  import {subMonthsWithOptions} from 'date-fns/fp'
  export = subMonthsWithOptions
}

declare module 'date-fns/fp/subQuartersWithOptions/index' {
  import {subQuartersWithOptions} from 'date-fns/fp'
  export = subQuartersWithOptions
}

declare module 'date-fns/fp/subSecondsWithOptions/index' {
  import {subSecondsWithOptions} from 'date-fns/fp'
  export = subSecondsWithOptions
}

declare module 'date-fns/fp/subWeeksWithOptions/index' {
  import {subWeeksWithOptions} from 'date-fns/fp'
  export = subWeeksWithOptions
}

declare module 'date-fns/fp/subYearsWithOptions/index' {
  import {subYearsWithOptions} from 'date-fns/fp'
  export = subYearsWithOptions
}

declare module 'date-fns/fp/toDateWithOptions/index' {
  import {toDateWithOptions} from 'date-fns/fp'
  export = toDateWithOptions
}
