import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Driver from 'pages/Driver';
import Pickup from 'pages/Pickup';


import { ReactComponent as HomeIcon } from 'assets/icons/icons8-home.svg';
import { ReactComponent as DriverIcon } from 'assets/icons/user.svg';
import { ReactComponent as PickupIcon } from 'assets/icons/icons8-calendar.svg';

export const menuRoutes = [
	{
		name: "Beranda",
		path: "/",
		component: Home,
		icon: <HomeIcon />
	},
	{
		name: "Driver Management",
		path: "/driver",
		component: Driver,
		icon: <DriverIcon />
	},
	{
		name: "Pickup",
		path: "/pickup",
		component: Pickup,
		icon: <PickupIcon />
	}
]

const Routes = () => {
	return (
		<Switch>
			{
				menuRoutes.map(route => (
					<Route key={route.name} {...route} exact/>
				))
			}
		</Switch>
	)
}

export default Routes;