import jMoment from 'jalali-moment';
import { indexType, languageType } from '../types/generalTypes';

export const removeElementFromArray = (array: Array<any>, element: any) => {
  const index = array.indexOf(element);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
};

export const twoDigitNumber = (time: string) => {
  return ('0' + time).slice(-2);
};

export const clockFormat = (time: number): string => {
  const minutes = Math.floor(time / 60).toString();
  const seconds = (time % 60).toString();
  return `${persianConverter(twoDigitNumber(minutes))}:${persianConverter(
    twoDigitNumber(seconds)
  )}`;
};

export const persianConverter = (
  number: indexType,
  toEnglish: boolean = false
): string => {
  if (typeof number === 'number') {
    return number.toString();
  }
  const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  let convertedNumber = '';
  for (let i = 0; i < number.length; i++) {
    if (toEnglish) {
      const convertedChar = persianNumbers.indexOf(number[i]);
      convertedNumber += convertedChar === -1 ? number[i] : convertedChar;
    } else convertedNumber += persianNumbers[parseInt(number[i])];
  }
  return convertedNumber;
};

export const IBANRegex = () =>
  /^(\b(I|i)(R|r)[0-9]{2}(?:[ -]?[0-9]{4}){5}(?!(?:[ -]?[0-9]){3})(?:[ -]?[0-9]{2})?\b)$|^$/;

export const timeConverter: (
  date: indexType,
  language?: languageType
) => string = (date, language) => {
  let newTime;
  if (typeof date === 'string') {
    newTime = parseInt(date);
  }

  const localMoment = jMoment(newTime);

  if (language && language === 'en') {
    localMoment.locale('en');
  } else {
    localMoment.locale('fa');
  }

  return localMoment.format('l');
};

// const jalaali = require('jalaali-js');

// ECMAScript® 2015 (or ES6) calls timestamp, "time value(s)"
// export const convertJalaaliToGregorianTimestamp = (
//   dateRange: dateFilterType
// ) => {
//   let startDate: number | undefined | any = undefined,
//     endDate: number | undefined = undefined,
//     from: any,
//     to: any;

//   if (dateRange.from !== null && dateRange.to !== null) {
//     from = jalaali.toGregorian(
//       dateRange.from?.year,
//       dateRange.from?.month,
//       dateRange.from?.day
//     );

//     startDate = parseInt(
//       moment(`${from.gy}-${from.gm}-${from.gd}`, 'YYYY-MM-DD').format('x')
//     );

//     to = jalaali.toGregorian(
//       dateRange.to?.year,
//       dateRange.to?.month,
//       dateRange.to?.day
//     );

//     endDate = parseInt(
//       moment(`${to.gy}-${to.gm}-${to.gd}`, 'YYYY-MM-DD').format('x')
//     );
//   } else if (dateRange.from !== null && dateRange.to === null) {
//     from = jalaali.toGregorian(
//       dateRange.from?.year,
//       dateRange.from?.month,
//       dateRange.from?.day
//     );

//     startDate = parseInt(
//       moment(`${from.gy}-${from.gm}-${from.gd}`, 'YYYY-MM-DD').format('x')
//     );
//   } else {
//     console.log(
//       'some thing went wrong in convertJalaaliToGregorian util function'
//     );
//     return;
//   }

//   return {
//     startDate,
//     endDate,
//   };
// };

export const compareTimes = (array: any, keyOfDate?: any) => {
  let newArray = [];
  newArray = array.sort((a: any, b: any) => {
    // if (keyOfDate) {
    return (new Date(b[keyOfDate]) as any) - (new Date(a[keyOfDate]) as any);
    // } else {
    //     return new Date(b) - new Date(a);
    // }
  });
  return newArray;
};

export const sortArrayByFirstLetter: (array: any[]) => any[] = (array) => {
  return array.slice(0).sort((a, b) => -b.name.localeCompare(a.name));
};

export const checkEqualityObjectInArray = (
  object: any,
  prop: string,
  list: Array<any>
) => {
  let x = false;
  list.map((item) => (item[prop] === object[prop] ? (x = true) : undefined));
  return x;
};
