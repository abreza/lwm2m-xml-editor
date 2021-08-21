import { createMuiTheme } from '@material-ui/core';
import typography from './typography';
import theme from './theme';

const MuiTheme = createMuiTheme({
  ...theme,
  typography,
} as any);

export default MuiTheme;
