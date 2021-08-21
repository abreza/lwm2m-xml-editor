import ScrollToTop from 'components/atoms/scrollToTop/ScrollToTop';
import Homepage from 'pages/Homepage';
import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

type RootDevProps = {};

const Root: FC<RootDevProps> = () => {
  return (
    <ScrollToTop>
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </ScrollToTop>
  );
};

export default Root;
