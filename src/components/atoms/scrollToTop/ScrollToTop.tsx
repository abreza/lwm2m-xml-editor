import { FC, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop: FC<any> = ({ history, children, location }) => {
  useEffect(() => {
    const sc = new URLSearchParams(location?.search).get('sc');
    if (sc) {
      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [location, history]);

  return <>{children}</>;
};

export default withRouter(ScrollToTop);
