import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

import HomePage from '@/page/admin';
import User from '@/page/user/User';
import Index from '@/page/index/Index';
const RouterPage = () => {
	return (
		<HashRouter>
			<Switch>
				<Route path={'/'} component={Index} />
				<Route path={'/admin'} reac component={HomePage} />
				<Route path={'/user'} component={User} />
			</Switch>
			{/* <HomePage>
              <Switch>
                <PrivateRoute path="/doc" component={DocPage} />
                <PrivateRoute path="/home" component={PublicPage} />
                <PrivateRoute path="/custom" component={CustomPage} />
                <PrivateRoute path="/locale" component={LocalePage} />
                <PrivateRoute path="/icon" component={IconPage} />
                <PrivateRoute path="/table/base" component={TableList} />
                <PrivateRoute path="/table/edit" component={TableEdit} />
                <PrivateRoute path="/table/drag" component={TableDrag} />
                <PrivateRoute path="/auth" component={AuthPage} />
                <Redirect to="/home" />
              </Switch>
            </HomePage> */}
		</HashRouter>
	);
};
export default RouterPage;
