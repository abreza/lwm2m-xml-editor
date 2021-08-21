import { createMuiTheme } from '@material-ui/core/styles';
import typography from './typography';
import theme from './theme';

const rtlTheme = {
  ...theme,
  direction: 'rtl',
  typography: { ...typography, ...{ fontFamily: ['IRANSans'].join(',') } },
  overrides: {
    ...theme.overrides,
    MuiSvgIcon: {
      root: {
        'body[dir=rtl] &': {
          transform: 'scaleX(-1)',
        },
      },
    },
  },
};

const RTLMuiTheme = createMuiTheme(rtlTheme as any);

export default RTLMuiTheme;
