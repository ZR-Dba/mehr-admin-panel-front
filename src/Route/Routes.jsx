import Dashboard from "../Components/Pages/Dashboard/dashboard";
import Orderable from "../Components/Pages/OrderableProducts";
import Products from "../Components/Pages/Products/productLists";
import Users from "../Components/Pages/Users/users";

export const routes = [

	{
		path: `${process.env.PUBLIC_URL}/Dashboard/:layout`,
		Component: <Dashboard />,
	},
	{
		path: `${process.env.PUBLIC_URL}/products/productList/:layout`,
		Component: <Products />,
	},
	{
		path: `${process.env.PUBLIC_URL}/products/orderableProduct/:layout`,
		Component: <Orderable />,
	},
	{
		path: `${process.env.PUBLIC_URL}/users/usersList/:layout`,
		Component: <Users />,
	},
];
