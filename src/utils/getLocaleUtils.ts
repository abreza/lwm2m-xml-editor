import { languageType } from 'types/generalTypes';

const getLocale = () => {
  const language = localStorage.getItem('language') as languageType;
  return language ? language : 'fa';
};

export default getLocale;
