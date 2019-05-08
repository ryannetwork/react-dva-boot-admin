/**
 * Simulation request data
 * @param {FetchMock} fetchMock can be extended using fetchMock when existing conditions are not met
 * @param {function} delay Increase delay time ms Example: delay(mockData) or delay(mockData, 200)
 * @param {function} mock Use mock to generate data, for example:

   Mock({
     'string|1-10': '★' // Generate at least 1 and up to 10 star characters
   })

   // {'string': '★★★★★★'}

  More usage reference http://mockjs.com/examples.html
 */
export default ({ fetchMock, delay, mock, toSuccess, toError }) => {
	// If the existing extension does not meet the requirements, you can use the fetchMock method directly.
	// fetchMock.mock(/httpbin.org\/post/, {/* response */}, {/* options */});

	return {
		'/api/user/login': (options) => {
			if (options.body) {
				const user = JSON.parse(options.body);
				if (user.userName === 'admin' && user.password === 'admin') {
					return toSuccess(
						mock({
							userName: 'admin', // username
							name: '@cname', // Chinese name
							'age|1-100': 100, // a random integer within 100
							birthday: '@date("yyyy-MM-dd")', // date
							city: '@city(true)', // Chinese cities
							phone: /^1[385][1-9]\d{8}/, // mobile number
							token: '@guid' // token
						}),
						400
					);
				} else {
					return toError('username or password error admin/admin');
				}
			} else {
				return toError('Please enter username and password');
			}
		},
		'/api/user/register': (options) => toSuccess(),
		'/api/user/menu': (options) =>
			toSuccess(
				[
					{
						name: 'dashboard',
						icon: 'dashboard',
						path: '/dashboard'
					},
					{
						name: 'component',
						icon: 'desktop',
						path: '/component',
						children: [
							{
								name: 'toolbar',
								path: '/toolbar'
							},
							{
								name: 'BaseComponent',
								path: '/baseComponent'
							},
							{
								name: 'Columns',
								path: '/column'
							},
							{
								name: 'search bar',
								path: '/searchBar'
							},
							{
								name: 'data table',
								path: '/datatable'
							},
							{
								name: 'form',
								path: '/form'
							},
							{
								name: 'shuttle tree',
								path: '/transferTree'
							},
							{
								name: 'chart',
								path: '/charts',
								children: [
									{
										name: 'ECharts',
										path: '/charts/ec'
									},
									{
										name: 'G2',
										path: '/charts/g2'
									}
								]
							},
							{
								name: 'print',
								path: '/print'
							},
							{
								name: 'Banner management',
								path: '/banner'
							}
						]
					},
					{
						name: 'UI element',
						icon: 'share-alt',
						path: '/ui',
						children: [
							{
								name: 'button',
								path: '/button'
							},
							{
								name: 'message',
								path: '/alerts'
							},
							{
								name: 'animation',
								path: '/animations'
							},
							{
								name: 'icon',
								path: '/icons'
							},
							{
								name: 'rich text',
								path: '/editor'
							},
							{
								name: 'modal window',
								path: '/modal'
							},
							{
								name: 'mask',
								path: '/mask'
							}
						]
					},
					{
						name: 'page',
						icon: 'book',
						path: '/page',
						children: [
							{
								name: 'login page',
								path: '/sign/login'
							},
							{
								name: 'registration page',
								path: '/sign/register'
							},
							{
								name: 'lock screen',
								path: '/lock'
							},
							{
								name: 'Gallery',
								path: '/gallery'
							},
							{
								name: 'blank page',
								path: '/blank'
							},
							{
								name: 'Result page',
								path: '/result'
							},
							{
								name: 'Coming Soon',
								path: '/coming'
							},
							{
								name: '403',
								path: '/403'
							},
							{
								name: '404',
								path: '/404'
							},
							{
								name: '500',
								path: '/500'
							},
							{
								name: 'multi-level routing',
								path: '/level-route/:sub?'
							}
						]
					},
					{
						name: 'general scene',
						icon: 'bulb',
						path: '/business',
						children: [
							{
								name: 'CRUD',
								path: '/crud'
							}
						]
					}
				],
				400
			)
	};
};
