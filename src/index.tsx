import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from 'App';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { store } from 'configs/redux/store';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
