export default ({ fetchMock, delay, mock, toSuccess, toError }) => {
	return {
		'/api/tree/getDept': (options) => {
			return toSuccess(
				[
					{
						title: 'Manager',
						key: '0-0',
						children: [
							{
								title: 'Technical Director',
								key: '0-0-0',
								children: [
									{ title: 'Production Department', key: '0-0-0-0' },
									{ title: 'R & D department', key: '0-0-0-1' },
									{ title: 'Test Department', key: '0-0-0-2' }
								]
							},
							{
								title: 'Sales Director',
								key: '0-0-1',
								children: [
									{ title: 'Order Management Department', key: '0-0-1-0' },
									{ title: 'Blowing Water Training Center', key: '0-0-1-1' },
									{ title: 'Subsidiary', key: '0-0-1-2' }
								]
							},
							{
								title: 'CFO',
								key: '0-0-2'
							}
						]
					},
					{
						title: 'Manager wife',
						key: '0-1',
						children: [
							{ title: 'Driver Xiao Liu', key: '0-1-0-0' },
							{ title: 'Driver Chen Chen', key: '0-1-0-1' },
							{ title: 'Driver Pony', key: '0-1-0-2' }
						]
					},
					{
						title: 'The next king',
						key: '0-2'
					}
				],
				400
			);
		},
		//Asynchronous tree
		'/api/tree/getAsyncData': (options) => {
			let key = '0';
			if (options.body) {
				key = JSON.parse(options.body);
			}
			return toSuccess(
				[
					{
						title: 'Subnode 0' + key,
						key: '0' + key
					},
					{
						title: 'Subnode 1' + key,
						key: '1' + key
					},
					{
						title: 'Subnode 2' + key,
						key: '2' + key,
						isLeaf: true
					}
				],
				400
			);
		},
		'/api/tree/getAsyncSearchData': (options) => {
			let title = '0';
			if (options.body) {
				const data = JSON.parse(options.body);
				title = data.search;
			}
			return toSuccess(
				[
					{
						title: `Child Node 2 $ {title}`,
						key: `2 $ {title}`
					}
				],
				400
			);
		},
		// Asynchronous selection tree
		'/api/tree/getAsyncTreeSelect': (options) => {
			let key = '0';
			if (options.body) {
				key = JSON.parse(options.body);
			}
			return toSuccess(
				[
					{
						title: 'Subnode 0' + key,
						value: '0' + key,
						key: '0' + key
					},
					{
						title: 'Subnode 1' + key,
						value: '1' + key,
						key: '1' + key
					},
					{
						title: 'Subnode 2' + key,
						value: '2' + key,
						key: '2' + key,
						isLeaf: true
					}
				],
				400
			);
		},
		//provincial urban data
		'/api/tree/getData': (options) =>
			toSuccess(
				[
					{
						key: '123123',
						title: 'Only one level'
					},
					{
						key: '340000',
						title: 'Anhui Province',
						children: [
							{
								key: '341500',
								title: "Lu'an City",
								children: [
									{
										key: '341522',
										title: 'Huoqiu County'
									},
									{
										key: '341525',
										title: 'Huoshan County'
									},
									{
										key: '341502',
										title: "Jin'an District"
									},
									{
										key: '341524',
										title: 'Jinzhai County'
									},
									{
										key: '341526',
										title: 'Other Areas'
									},
									{
										key: '341521',
										title: 'Shou County'
									},
									{
										key: '341523',
										title: 'Shucheng County'
									},
									{
										key: '341503',
										title: "Yu'an District"
									}
								]
							},
							{
								key: '340500',
								title: 'Maanshan City',
								children: [
									{
										key: '340506',
										title: 'Bowang District'
									}
								]
							},
							{
								key: '341800',
								title: 'Xuancheng City',
								children: [
									{
										key: '341822',
										title: 'Guangde County'
									},
									{
										key: '341824',
										title: 'Jixi County'
									},
									{
										key: '341825',
										title: 'Jude County'
									}
								]
							}
						]
					},
					{
						key: '820000',
						title: 'Macau Special Administrative Region',
						children: [
							{
								key: '820100',
								title: 'Macau Peninsula'
							},
							{
								key: '820200',
								title: 'Island'
							}
						]
					},
					{
						key: '110000',
						title: 'Beijing',
						children: [
							{
								key: '110100',
								title: 'Beijing',
								children: [
									{
										key: '110114',
										title: 'Changping District'
									},
									{
										key: '110105',
										title: 'Chaoyang District'
									},
									{
										key: '110103',
										title: 'Chongwen District'
									},
									{
										key: '110115',
										title: 'Daxing District'
									},
									{
										key: '110101',
										title: 'Dongcheng District'
									},
									{
										key: '110111',
										title: 'Fangshan District'
									},
									{
										key: '110106',
										title: 'Fengtai District'
									},
									{
										key: '110108',
										title: 'Haidian District'
									},
									{
										key: '110116',
										title: 'Huairou District'
									},
									{
										key: '110109',
										title: 'Moutougou District'
									},
									{
										key: '110228',
										title: 'Miyun County'
									},
									{
										key: '110117',
										title: 'Pinggu District'
									},
									{
										key: '110230',
										title: 'Other Areas'
									},
									{
										key: '110107',
										title: 'Shijingshan District'
									},
									{
										key: '110113',
										title: 'Shunyi District'
									},
									{
										key: '110112',
										title: 'Tongzhou District'
									},
									{
										key: '110102',
										title: 'Xicheng District'
									},
									{
										key: '110104',
										title: 'Xuanwu District'
									},
									{
										key: '110229',
										title: 'Yanqing County'
									}
								]
							}
						]
					},
					{
						key: '450000',
						title: 'Guangxi Zhuang Autonomous Region',
						children: [
							{
								key: '450500',
								title: 'Beihai City',
								children: [
									{
										key: '450502',
										title: 'Haicheng District'
									},
									{
										key: '450521',
										title: 'Hepu County'
									},
									{
										key: '450522',
										title: 'Other Areas'
									},
									{
										key: '450512',
										title: 'Tieshan Port Area'
									},
									{
										key: '450503',
										title: 'Yinhai District'
									}
								]
							},
							{
								key: '451000',
								title: 'Bose City',
								children: [
									{
										key: '451024',
										title: 'Debao County'
									},
									{
										key: '451025',
										title: 'Jingxi County'
									},
									{
										key: '451028',
										title: 'Leye County'
									},
									{
										key: '451027',
										title: 'Lingyun County'
									},
									{
										key: '451031',
										title: 'Longlin County Autonomous County'
									},
									{
										key: '451026',
										title: 'Napo County'
									},
									{
										key: '451023',
										title: 'Pingguo County'
									},
									{
										key: '451032',
										title: 'Other Areas'
									},
									{
										key: '451022',
										title: 'Tiandong County'
									},
									{
										key: '451029',
										title: 'Tianlin County'
									},
									{
										key: '451021',
										title: 'Tianyang County'
									},
									{
										key: '451030',
										title: 'Xiling County'
									},
									{
										key: '451002',
										title: 'Youjiang District'
									}
								]
							},
							{
								key: '451400',
								title: 'Chongzuo City',
								children: [
									{
										key: '451424',
										title: 'Daxin County'
									},
									{
										key: '451421',
										title: 'Fusui County'
									},
									{
										key: '451402',
										title: 'Jiangzhou District'
									},
									{
										key: '451423',
										title: 'Longzhou County'
									},
									{
										key: '451422',
										title: 'Ningming County'
									},
									{
										key: '451481',
										title: 'Pingxiang City'
									},
									{
										key: '451482',
										title: 'Other Areas'
									},
									{
										key: '451425',
										title: 'Tianxian County'
									}
								]
							},
							{
								key: '450600',
								title: 'Fangchenggang City',
								children: [
									{
										key: '450681',
										title: 'Dongxing City'
									},
									{
										key: '450603',
										title: 'Anti-urban area'
									},
									{
										key: '450602',
										title: 'Port Area'
									},
									{
										key: '450682',
										title: 'Other Areas'
									},
									{
										key: '450621',
										title: 'Shangsi County'
									}
								]
							},
							{
								key: '450800',
								title: 'Guigang City',
								children: [
									{
										key: '450802',
										title: 'Gangbei District'
									},
									{
										key: '450803',
										title: 'Gangnan District'
									},
									{
										key: '450881',
										title: 'Guiping City'
									},
									{
										key: '450821',
										title: 'Pingnan County'
									},
									{
										key: '450882',
										title: 'Other Areas'
									},
									{
										key: '450804',
										title: 'Qiantang District'
									}
								]
							},
							{
								key: '450300',
								title: 'Guilin City',
								children: [
									{
										key: '450303',
										title: 'Stacking area'
									},
									{
										key: '450332',
										title: 'Gongcheng Yao Autonomous County'
									},
									{
										key: '450327',
										title: 'Yangyang County'
									},
									{
										key: '450331',
										title: 'Zhapu County'
									},
									{
										key: '450322',
										title: 'Lingui District'
									},
									{
										key: '450323',
										title: 'Lingchuan County'
									},
									{
										key: '450328',
										title: 'Longsheng County Autonomous County'
									},
									{
										key: '450330',
										title: 'Pingle County'
									},
									{
										key: '450333',
										title: 'Other Areas'
									},
									{
										key: '450305',
										title: 'Seven Star District'
									},
									{
										key: '450324',
										title: 'Jingzhou County'
									},
									{
										key: '450304',
										title: 'Xiangshan District'
									},
									{
										key: '450325',
										title: "Xing'an County"
									},
									{
										key: '450302',
										title: 'Xiufeng District'
									},
									{
										key: '450311',
										title: 'Yanshan District'
									},
									{
										key: '450321',
										title: 'Yangshuo County'
									},
									{
										key: '450326',
										title: 'Yongfu County'
									},
									{
										key: '450329',
										title: 'Resource County'
									}
								]
							},
							{
								key: '451200',
								title: 'Hechi City',
								children: [
									{
										key: '451227',
										title: 'Bama Yao Autonomous County'
									},
									{
										key: '451229',
										title: 'Dahua Yao Autonomous County'
									},
									{
										key: '451224',
										title: 'Donglan County'
									},
									{
										key: '451228',
										title: "Du'an Yao Autonomous County"
									},
									{
										key: '451223',
										title: 'Fengshan County'
									},
									{
										key: '451226',
										title: 'Huanjiang Maonan Autonomous County'
									},
									{
										key: '451202',
										title: 'Jinchengjiang District'
									},
									{
										key: '451225',
										title: 'Luocheng Yi Autonomous County'
									},
									{
										key: '451221',
										title: 'Nandan County'
									},
									{
										key: '451282',
										title: 'Other Areas'
									},
									{
										key: '451222',
										title: 'Tianzhu County'
									},
									{
										key: '451281',
										title: 'Yizhou City'
									}
								]
							},
							{
								key: '451100',
								title: 'Hezhou City',
								children: [
									{
										key: '451102',
										title: 'Eight Steps'
									},
									{
										key: '451123',
										title: 'Fuchuan Yao Autonomous County'
									},
									{
										key: '451119',
										title: 'Pinggui Management District'
									},
									{
										key: '451124',
										title: 'Other Areas'
									},
									{
										key: '451121',
										title: 'Zhaoping County'
									},
									{
										key: '451122',
										title: 'Zhongshan County'
									}
								]
							},
							{
								key: '451300',
								title: 'Laibin City',
								children: [
									{
										key: '451381',
										title: 'Heshan City'
									},
									{
										key: '451324',
										title: 'Jinxiu Yao Autonomous County'
									},
									{
										key: '451382',
										title: 'Other Areas'
									},
									{
										key: '451323',
										title: 'Wuxuan County'
									},
									{
										key: '451322',
										title: 'Xiangzhou County'
									},
									{
										key: '451321',
										title: 'Yucheng County'
									},
									{
										key: '451302',
										title: 'Xingbin District'
									}
								]
							},
							{
								key: '450200',
								title: 'Liuzhou City',
								children: [
									{
										key: '450202',
										title: 'City Center'
									},
									{
										key: '450205',
										title: 'Liubei District'
									},
									{
										key: '450222',
										title: 'Liucheng County'
									},
									{
										key: '450221',
										title: 'Liujiang County'
									},
									{
										key: '450204',
										title: 'Liu Nan District'
									},
									{
										key: '450223',
										title: 'Luzhai County'
									},
									{
										key: '450227',
										title: 'Other Areas'
									},
									{
										key: '450224',
										title: "Rong'an County"
									},
									{
										key: '450225',
										title: 'Rongshui Miao Autonomous County'
									},
									{
										key: '450226',
										title: 'Sanjiang Yi Autonomous County'
									},
									{
										key: '450203',
										title: 'Fish Peak District'
									}
								]
							},
							{
								key: '450100',
								title: 'Nanning City',
								children: [
									{
										key: '450126',
										title: 'Binyang County'
									},
									{
										key: '450127',
										title: 'Huangxian'
									},
									{
										key: '450105',
										title: 'Jiangnan District'
									},
									{
										key: '450108',
										title: 'Good Qing District'
									},
									{
										key: '450123',
										title: "Long'an County"
									},
									{
										key: '450124',
										title: 'Mashan County'
									},
									{
										key: '450128',
										title: 'Other Areas'
									},
									{
										key: '450103',
										title: 'Qingxiu District'
									},
									{
										key: '450125',
										title: 'Shanglin County'
									},
									{
										key: '450122',
										title: 'Wuming District'
									},
									{
										key: '450107',
										title: 'Xixiangtang District'
									},
									{
										key: '450102',
										title: 'Xingning District'
									},
									{
										key: '450109',
										title: 'Suining District'
									}
								]
							},
							{
								key: '450700',
								title: 'Qinzhou City',
								children: [
									{
										key: '450721',
										title: 'Lingshan County'
									},
									{
										key: '450722',
										title: 'Pubei County'
									},
									{
										key: '450723',
										title: 'Other Areas'
									},
									{
										key: '450703',
										title: 'Qinbei District'
									},
									{
										key: '450702',
										title: 'Qinnan District'
									}
								]
							},
							{
								key: '450400',
								title: 'Chuzhou City',
								children: [
									{
										key: '450421',
										title: 'Cangwu County'
									},
									{
										key: '450481',
										title: 'Cityi City'
									},
									{
										key: '450405',
										title: 'Changzhou District'
									},
									{
										key: '450404',
										title: 'Butterfly Mountain'
									},
									{
										key: '450406',
										title: 'Longyan District'
									},
									{
										key: '450423',
										title: 'Mengshan County'
									},
									{
										key: '450482',
										title: 'Other Areas'
									},
									{
										key: '450422',
										title: 'Teng County'
									},
									{
										key: '450403',
										title: 'Wanxiu District'
									}
								]
							},
							{
								key: '450900',
								title: 'Yulin City',
								children: [
									{
										key: '450981',
										title: 'Beiliu City'
									},
									{
										key: '450923',
										title: 'Bobai County'
									},
									{
										key: '450903',
										title: 'Fu Mian District'
									},
									{
										key: '450922',
										title: 'Luchuan County'
									},
									{
										key: '450982',
										title: 'Other Areas'
									},
									{
										key: '450921',
										title: 'Rong County'
									},
									{
										key: '450924',
										title: 'Xingye County'
									},
									{
										key: '450902',
										title: 'Yuzhou District'
									}
								]
							}
						]
					},
					{
						key: '810000',
						title: 'Hong Kong Special Administrative Region',
						children: [
							{
								key: '810200',
								title: 'Kowloon',
								children: [
									{
										key: '810205',
										title: 'Kwun Tong District'
									},
									{
										key: '810204',
										title: 'Wong Tai Sin District'
									},
									{
										key: '810201',
										title: 'Kowloon City District'
									},
									{
										key: '810203',
										title: 'Sham Shui Po District'
									},
									{
										key: '810202',
										title: 'Yau Tsim Mong District'
									}
								]
							},
							{
								key: '810100',
								title: 'Hong Kong Island',
								children: [
									{
										key: '810103',
										title: 'East District'
									},
									{
										key: '810104',
										title: 'Southern District'
									},
									{
										key: '810102',
										title: 'Wan Chai'
									},
									{
										key: '810101',
										title: 'Central and Western District'
									}
								]
							},
							{
								key: '810300',
								title: 'New Territories',
								children: [
									{
										key: '810301',
										title: 'North District'
									},
									{
										key: '810302',
										title: 'Tai Po District'
									},
									{
										key: '810308',
										title: 'Kwai Tsing District'
									},
									{
										key: '810309',
										title: 'Island Area'
									},
									{
										key: '810307',
										title: 'Liwan District'
									},
									{
										key: '810303',
										title: 'Shatian District'
									},
									{
										key: '810306',
										title: 'Tuen Mun District'
									},
									{
										key: '810304',
										title: 'Saigon District'
									},
									{
										key: '810305',
										title: 'Yuen Long District'
									}
								]
							}
						]
					},
					{
						key: '330000',
						title: 'Zhejiang Province',
						children: [
							{
								key: '330100',
								title: 'Hangzhou City',
								children: [
									{
										key: '330108',
										title: 'Binjiang District'
									},
									{
										key: '330127',
										title: "Zi'an County"
									},
									{
										key: '330183',
										title: 'Fuyang District'
									},
									{
										key: '330105',
										title: 'Gongshu District'
									},
									{
										key: '330182',
										title: 'Jiande City'
									},
									{
										key: '330104',
										title: 'Jianggan District'
									},
									{
										key: '330185',
										title: "Lin'an City"
									},
									{
										key: '330186',
										title: 'Other Areas'
									},
									{
										key: '330102',
										title: 'Uptown'
									},
									{
										key: '330122',
										title: 'Tonglu County'
									},
									{
										key: '330106',
										title: 'West Lake District'
									},
									{
										key: '330103',
										title: 'Lower City'
									},
									{
										key: '330109',
										title: 'Xiaoshan District'
									},
									{
										key: '330110',
										title: 'Yuhang District'
									}
								]
							},
							{
								key: '330500',
								title: 'Huzhou City',
								children: [
									{
										key: '330523',
										title: 'Anji County'
									},
									{
										key: '330522',
										title: 'Changxing County'
									},
									{
										key: '330521',
										title: 'Deqing County'
									},
									{
										key: '330503',
										title: 'Nanjing District'
									},
									{
										key: '330524',
										title: 'Other Areas'
									},
									{
										key: '330502',
										title: 'Wu Xing District'
									}
								]
							},
							{
								key: '330400',
								title: 'Jiaxing City',
								children: [
									{
										key: '330481',
										title: 'Haining City'
									},
									{
										key: '330424',
										title: 'Haiyan County'
									},
									{
										key: '330421',
										title: 'Jiashan County'
									},
									{
										key: '330402',
										title: 'South Lake District'
									},
									{
										key: '330482',
										title: 'Pinghu City'
									},
									{
										key: '330484',
										title: 'Other Areas'
									},
									{
										key: '330483',
										title: 'Tongxiang City'
									},
									{
										key: '330411',
										title: 'Xiuzhou District'
									}
								]
							},
							{
								key: '330700',
								title: 'Jinhua City',
								children: [
									{
										key: '330783',
										title: 'Dongyang City'
									},
									{
										key: '330703',
										title: 'Jindong District'
									},
									{
										key: '330781',
										title: 'Lanxi City'
									},
									{
										key: '330727',
										title: "Zi'an County"
									},
									{
										key: '330726',
										title: 'Pujiang County'
									},
									{
										key: '330785',
										title: 'Other Areas'
									},
									{
										key: '330702',
										title: 'Yucheng District'
									},
									{
										key: '330723',
										title: 'Wuyi County'
									},
									{
										key: '330782',
										title: 'Yiwu City'
									},
									{
										key: '330784',
										title: 'Yongkang City'
									}
								]
							},
							{
								key: '331100',
								title: 'Lishui City',
								children: [
									{
										key: '331122',
										title: 'Jinyun County'
									},
									{
										key: '331127',
										title: 'Jingning Yi Autonomous County'
									},
									{
										key: '331102',
										title: 'Liandu District'
									},
									{
										key: '331181',
										title: 'Longquan City'
									},
									{
										key: '331182',
										title: 'Other Areas'
									},
									{
										key: '331121',
										title: 'Qingtian County'
									},
									{
										key: '331126',
										title: 'Qingyuan County'
									},
									{
										key: '331124',
										title: 'Songyang County'
									},
									{
										key: '331123',
										title: 'Suichang County'
									},
									{
										key: '331125',
										title: 'Yunhe County'
									}
								]
							},
							{
								key: '330200',
								title: 'Ningbo City',
								children: [
									{
										key: '330206',
										title: 'Beilun District'
									},
									{
										key: '330282',
										title: 'Cixi City'
									},
									{
										key: '330283',
										title: 'Fenghua City'
									},
									{
										key: '330203',
										title: 'Haicang District'
									},
									{
										key: '330205',
										title: 'Jiangbei District'
									},
									{
										key: '330204',
										title: 'Jiangdong District'
									},
									{
										key: '330226',
										title: 'Ninghai County'
									},
									{
										key: '330284',
										title: 'Other Areas'
									},
									{
										key: '330225',
										title: 'Xiangshan County'
									},
									{
										key: '330212',
										title: 'Yuzhou District'
									},
									{
										key: '330281',
										title: 'Yuyao City'
									},
									{
										key: '330211',
										title: 'Zhenhai District'
									}
								]
							},
							{
								key: '330800',
								title: 'Chuzhou City',
								children: [
									{
										key: '330822',
										title: 'Changshan County'
									},
									{
										key: '330881',
										title: 'Jiangshan City'
									},
									{
										key: '330824',
										title: 'Kaihua County'
									},
									{
										key: '330802',
										title: 'Kecheng District'
									},
									{
										key: '330825',
										title: 'Longyou County'
									},
									{
										key: '330882',
										title: 'Other Areas'
									},
									{
										key: '330803',
										title: 'Qianjiang District'
									}
								]
							},
							{
								key: '330600',
								title: 'Shaoxing City',
								children: [
									{
										key: '330621',
										title: 'Keqiao District'
									},
									{
										key: '330684',
										title: 'Other Areas'
									},
									{
										key: '330682',
										title: 'Shangyu District'
									},
									{
										key: '330683',
										title: 'Chuzhou City'
									},
									{
										key: '330624',
										title: 'Xinchang County'
									},
									{
										key: '330602',
										title: 'Vietnam District'
									},
									{
										key: '330681',
										title: 'Zhuji City'
									}
								]
							},
							{
								key: '331000',
								title: 'Taizhou City',
								children: [
									{
										key: '331003',
										title: 'Huangyan District'
									},
									{
										key: '331002',
										title: 'Jiaojiang District'
									},
									{
										key: '331082',
										title: 'Linhai City'
									},
									{
										key: '331004',
										title: 'Luqiao District'
									},
									{
										key: '331083',
										title: 'Other Areas'
									},
									{
										key: '331022',
										title: 'Sanmen County'
									},
									{
										key: '331023',
										title: 'Tiantai County'
									},
									{
										key: '331081',
										title: 'Wenling City'
									},
									{
										key: '331024',
										title: 'Xianju County'
									},
									{
										key: '331021',
										title: 'Yuhuan County'
									}
								]
							},
							{
								key: '330300',
								title: 'Wenzhou City',
								children: [
									{
										key: '330327',
										title: 'Cangnan County'
									},
									{
										key: '330322',
										title: 'Dongtou County'
									},
									{
										key: '330303',
										title: 'Longwan District'
									},
									{
										key: '330302',
										title: 'Lucheng District'
									},
									{
										key: '330304',
										title: 'Bohai District'
									},
									{
										key: '330326',
										title: 'Pingyang County'
									},
									{
										key: '330383',
										title: 'Other Areas'
									},
									{
										key: '330381',
										title: 'Ruian City'
									},
									{
										key: '330329',
										title: 'Taishun County'
									},
									{
										key: '330328',
										title: 'Wencheng County'
									},
									{
										key: '330324',
										title: 'Yongjia County'
									},
									{
										key: '330382',
										title: 'Yueqing City'
									}
								]
							},
							{
								key: '330900',
								title: 'Zhoushan City',
								children: [
									{
										key: '330921',
										title: 'Yushan County'
									},
									{
										key: '330902',
										title: 'Dinghai District'
									},
									{
										key: '330903',
										title: 'Putuo District'
									},
									{
										key: '330923',
										title: 'Other Areas'
									},
									{
										key: '330922',
										title: 'Ji County'
									}
								]
							}
						]
					}
				],
				400
			)
	};
};
