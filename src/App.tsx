import { ThemeProvider } from '@material-ui/styles';
import MuiTheme from 'configs/theme/MuiTheme';
import RootDev from 'routes/Root.dev';
import RootProd from 'routes/Root.prod';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
import 'styles/app.css';

const AppRoute = () => {
  return (
    <>
      {process.env.NODE_ENV === 'production' ? <RootProd /> : <RootDev />}{' '}
      <ToastContainer limit={3} />
    </>
  );
};

const App = () => {
  document.body.dir = 'ltr';
  document.body.className = '';
  return (
    <ThemeProvider theme={MuiTheme}>
      <AppRoute />
    </ThemeProvider>
  );
};

export default App;
