/**
 *Suspense is a component that wraps the custom components and
 *enables them to communicate to React that 
 they're waiting for some data to load before the component is rendered. 
 */

import Grid from '@mui/material/Grid';
import React, { Suspense } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { localRoutes } from '../constants/constants';
import Loading from './Loading/loading';
import Login from './login/login';

//  const Dashboard = React.lazy(() => import('./dashboard/Dashboard'));

const ContentSwitch = () => {
  //    const user = useSelector((state: IState) => state.core.user);
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path={localRoutes.chat} component={Login} />

        {/* {hasAnyRole(user, [
           appPermissions.roleUserEdit,
           appPermissions.roleUserView,
         ]) && <Route path={localRoutes.users} component={UserControl} />} */}

        <Route component={NoMatch} />
      </Switch>
    </Suspense>
  );
};

const NoMatch = () => (
  <Grid>
    <h2>Oops nothing here!!</h2>
    <Link to="/">Take me home</Link>
  </Grid>
);

export default ContentSwitch;
