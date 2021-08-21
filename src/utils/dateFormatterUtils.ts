import jMoment from 'jalali-moment';
import moment from 'moment';
import { languageType } from 'types/generalTypes';
import getLocale from './getLocaleUtils';
import translateNumber from './translateNumberUtils';

const defaultType = {
  fa: 'jalali',
  en: 'gregorian',
};

type dateFormatterType = {
  date?: string | Date;
  lang?: languageType;
  format?: string;
};

export const dateFormatter = ({
  date,
  lang = getLocale(),
  format = 'YYYY/MM/DD',
}: dateFormatterType) => {
  let result = '';

  switch (defaultType[lang]) {
    case 'jalali':
      result = jMoment(date ? date : jMoment().toISOString())
        .locale('fa')
        .format(format);
      break;
    case 'gregorian':
    default:
      result = moment(date ? date : moment().toISOString()).format(format);
      break;
  }

  return translateNumber({
    lang,
    num: result,
  });
};
