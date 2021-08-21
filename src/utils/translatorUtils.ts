import dictionary from 'constants/dictionary';
import { languageType } from 'types/generalTypes';

export const translator = (word: string) => {
  const language = localStorage.getItem('language') as languageType;
  return (dictionary[language] as any)[word];
};
