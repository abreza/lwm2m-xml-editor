import { persianConverter } from './commonUtils';
import { phoneNumberRegex, iranianNationalIdRegex } from './regexUtils';

// get a string (user phone number) and check it with phoneNumberRegex.
// if it be true, return true and for else, return false
export const phoneNumberValidation = (
  number: string | null | undefined
): boolean => {
  if (!number) return false;
  const validation = phoneNumberRegex.test(number);
  if (validation) {
    return true;
  } else {
    return false;
  }
};

// get a string (phone number) and return a brand new string that
// contain the last 10 number of phone number and return that
// with what you need to add before it, like (0 or +98) in beginning
export const correctedPhoneNumber: (phoneNumber: string) => string = (
  phoneNumber
) => {
  return phoneNumber.replace(phoneNumberRegex, (match, g1, g2) => `0${g2}`);
};

// validate iranian nationalId
export const nationalIdValidation = (value: string | null | undefined) => {
  if (!value || !iranianNationalIdRegex.test(value)) return false;
  value = persianConverter(value, true);
  const valueLength = value.length;

  const newValue = ('0000' + value).substr(valueLength + 4 - 10);
  const check = +value[9];

  var s = 0;
  for (let i = 0; i < 9; i++) s += +newValue[i] * (10 - i);

  s = s % 11;
  return (s < 2 && check === s) || (s >= 2 && check === 11 - s);
};
