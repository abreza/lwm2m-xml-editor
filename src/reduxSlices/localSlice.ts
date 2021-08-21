import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { directionType, languageType } from 'types/generalTypes';

type localSliceStateType = {
  language: languageType;
  direction: directionType;
};

const localStorageLanguage = localStorage.getItem('language') as languageType;

const defineLanguage = () => {
  if (!localStorageLanguage) {
    localStorage.setItem('language', 'fa');
    return 'fa';
  } else {
    return localStorageLanguage;
  }
};

const defineDirection = () => {
  if (localStorageLanguage) {
    if (localStorageLanguage === 'fa') {
      return 'rtl';
    } else {
      return 'ltr';
    }
  } else {
    return 'rtl';
  }
};

const initialState: localSliceStateType = {
  language: defineLanguage(),
  direction: defineDirection(),
};

if (!localStorageLanguage) {
  localStorage.setItem('language', 'fa');
}

const translatorSlice = createSlice({
  name: 'translator',
  initialState,
  reducers: {
    setLocal: (_, { payload }: PayloadAction<languageType>) => {
      localStorage.setItem('language', payload);
      return {
        language: payload,
        direction: payload === 'fa' ? 'rtl' : 'ltr',
      } as localSliceStateType;
    },
  },
});

export const { setLocal: setLocalAction } = translatorSlice.actions;

export const { reducer: translatorReducer } = translatorSlice;
