import React from "react";
import { RouteObject } from "react-router-dom";
import Quizes from "./Quizes";
import Admin from "./Admin";
import Layout from "./Layout";

export const routes: RouteObject[] = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Quizes />,
			},
			{
				path: "/admin",
				element: <Admin />,
			},
		],
	},
];
