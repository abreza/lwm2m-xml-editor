// define last 10 number of phone number
export const phoneNumberRegex = /^(\+98|0)?(9\d{9})$/;

export const iranianNationalIdRegex = /^\d{8,10}$/;

export const convertToStringRegex =
  /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g;

// * Password must be between 8 and 20 characters long and contain at least a uppercase letter, a lowercase letter and a number
export const passwordValidationRegex =
  /^((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z])[^\s]{8,20}$/;
