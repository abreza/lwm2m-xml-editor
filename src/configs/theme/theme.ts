const theme = {
  palette: {
    primary: {
      main: '#ED5513',
    },
    grey: {
      100: '#fefefe',
      300: '#f8f9ff',
      400: 'rgba(0,0,0,0.1)',
    },
    secondary: {
      main: '#50C7DF',
      dark: '#317DB0',
    },
    error: {
      main: '#EB1748',
    },
    success: {
      main: '#1bc943',
    },
    warning: {
      main: '#f4772e',
    },
    helpers: {
      primary: '#27dcf3',
      main: 'rgba(25, 46, 91, .09)',
    },
    contrastThreshold: 3,
    tonalOffset: 0.1,
  },
  shape: {
    borderRadius: '0.5rem',
  },
  overrides: {
    MuiButton: {
      text: {
        paddingLeft: '14px',
        paddingRight: '14px',
      },
      containedSizeSmall: {
        paddingLeft: '14px',
        paddingRight: '14px',
      },
      root: {
        textTransform: 'none',
        fontWeight: 'normal',
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: '#070919',
        padding: '8px 16px',
        fontSize: '13px',
      },
      arrow: {
        color: '#070919',
      },
    },
  },
};

export default theme;
