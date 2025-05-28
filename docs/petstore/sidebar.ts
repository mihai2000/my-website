import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
	apisidebar: [
		{
			type: "doc",
			id: "petstore/swagger-petstore-yaml",
		},
		{
			type: "category",
			label: "Users",
			link: {
				type: "doc",
				id: "petstore/user",
			},
			items: [
				{
					type: "doc",
					id: "petstore/login-user",
					label: "Logs user into the system",
					className: "api-method get",
				},
				{
					type: "doc",
					id: "petstore/logout-user",
					label: "Logs out current logged in user session",
					className: "api-method get",
				},
			],
		},
	],
};

export default sidebar.apisidebar;
