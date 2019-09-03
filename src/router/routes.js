// 导入文件时, 如果没有 ./, 默认从node_modules查找文件
import routesComponent from './routesComponent.js'

//路由配置
export default [

	{
		path: '/test',
		name: 'Test',
		component: routesComponent.Test
	},
	
	{
		path: '/v',
		name: 'V',
		component: routesComponent.V
	},
	
	{
		path: '/register',
		name: 'Register',
		component: routesComponent.Register
	},
	
	{
		path: '/order',
		name: 'Order',
		component: routesComponent.Order
	},
	
	{
		path: '/address',
		name: 'Address',
		component: routesComponent.Address
	},

	{
		path: '/login',
		name: 'Login',
		component: routesComponent.Login
	},
	
	{
		path: '/search',
		name: 'Search',
		component: routesComponent.Search
	},


	{
		path: '/',
		name: 'Main',
		component: routesComponent.Main,

		children: [
			{
				path: '/index',
				name: 'Index',
				component: routesComponent.Index
			},

			{
				path: '/shopcart',
				name: 'Shopcart',
				component: routesComponent.Shopcart
			},

			{
				path: '/my',
				name: 'My',
				component: routesComponent.My
			},
			
			{
				path: '/snake',
				name: 'Snake',
				component: routesComponent.Snake
			},
			
			{
				path: '/classify',
				name: 'Classify',
				component: routesComponent.Classify,
				children: [
					{					
						path: '/classify/newproducts',
						name: 'NewProducts',
						component: routesComponent.NewProducts
					},
					
					{					
						path: '/classify/phone',
						name: 'Phone',
						component: routesComponent.Phone
					},
					
					{					
						path: '/classify/homeappliance',
						name: 'HomeAppliance',
						component: routesComponent.HomeAppliance
					},
					
					{
						path: '*',
						redirect: {name: 'NewProducts'}
					}
				]
			},

			{
				path: '*',
				redirect: {name: 'Index'}
			}
		]
	},

	{
		path: '/detail/:pid',
		name: 'Detail',
		component: routesComponent.Detail
	}
]