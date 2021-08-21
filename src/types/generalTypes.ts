import { ChangeEvent } from 'react';

export type indexType = string | number;

export type languageType = 'fa' | 'en';

export type reduxAction = {
  type: string;
  payload: any;
};

export type directionType = 'rtl' | 'ltr';

export type inputEventType = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export type onChangeFuncType = (e: inputEventType) => void;
