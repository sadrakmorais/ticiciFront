import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';

const ApplicationRoutes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/'>
					<h1>Raiz</h1>
				</Route>
				<Route path='/login'>
					<Login />
				</Route>

				<Route path='/register'>
					<h1>CADASTRO</h1>
				</Route>

				<Route exact path='*'>
					<h1>404</h1>
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default ApplicationRoutes;