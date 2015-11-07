var appConfig = {
	templates: appTemplates,

	company: {
		title: 'RadiciUSA - Italian rug & broadloom *',
		name: 'Radichi USA',
		socialMedia: {
			profiles: [
					{
						address: 'mailto:customerservice@adessohome.com',
						tooltip: 'Send Email to customerservice[at]adessohome[.]com',
						icon: 'resources/images/media_email.png'
					},
					{
						address: 'http://www.facebook.com/pages/Adesso-Home/365468810132505?fref=ts',
						tooltip: 'Facebook profile: Adesso-Home',
						icon: 'resources/images/media_facebook.png'
					},
					{
						address: 'http://www.pinterest.com/AdessoHome/',
						tooltip: 'Pinterest profile: AdessoHome',
						icon: 'resources/images/media_pinterest.png'
					},
					{
						address: 'http://www.youtube.com/channel/UCBcvabyQEMarnujcYbxxovw',
						tooltip: 'Youtube channel',
						icon: 'resources/images/media_youtube.png'
					},
					{
						address: 'http://www.houzz.com/user/adessoamanda',
						tooltip: 'Houzz profile',
						icon: 'resources/images/media_houzz.png'
					}
			],
			sharings: [
					{
						address: 'mailto:customerservice@adessohome.com',
						tooltip: 'Send Email to customerservice[at]adessohome[.]com',
						icon: 'resources/images/media_email.png'
					},
					{
						address: 'http://www.facebook.com/pages/Adesso-Home/365468810132505?fref=ts',
						tooltip: 'Facebook profile: Adesso-Home',
						icon: 'resources/images/media_facebook.png'
					},
					{
						address: 'http://www.pinterest.com/AdessoHome/',
						tooltip: 'Pinterest profile: AdessoHome',
						icon: 'resources/images/media_pinterest.png'
					},
					{
						address: 'http://www.youtube.com/channel/UCBcvabyQEMarnujcYbxxovw',
						tooltip: 'Youtube channel',
						icon: 'resources/images/media_youtube.png'
					},
					{
						address: 'http://www.houzz.com/user/adessoamanda',
						tooltip: 'Houzz profile',
						icon: 'resources/images/media_houzz.png'
					}
			]
		}
	},

	ux: {
		pageWidth: 1050,
		pageSize: 12,
	},

	data: {
		apiAddress: 'http://54.212.119.216:50505',
		vendor: 'LR Resources',

		//useCache: true,

		//product list grouping and data
		product: {
			//FURNITURE

			//RUG
			id: ['collection_name', 'design_name'],
			separator: '---',
			field: ['vendor_uid', 'image_filename', 'new_arrival', 'collection_name', 'design_name'],
			array: ['background_color_name', 'shape_name'],
			detail: {
				field: ['vendor_uid', 'collection_name', 'design_name', 'style_name', 'type_name', 'origin_name', 'content_name'],
				array: ['vendor_uid','qty', 'size_category', 'sku_code', 'background_color_name', 'border_color_name', 'shape_name', 'image_filename', 'new_arrival' ]
			}
		},

		//document fields' dictionary
		fields: {
			item_name: 'sku_code',
			style: 'style_name',
			//RUG
			category: 'category',
			//FURNITURE
			//category: 'vendor_category',
		},

		//X(separator)X1(delimerter)Y(separator)Y1(adder)Y2
		separator: '___',
		delimeter: ',,,',
		adder: '...',

		map: {
			// FURNITURE
			//category: {
			//    type: 'hierarchy',
			//    field: ['vendor_category', 'vendor_category_1', 'vendor_category_2'],
			//    separator: '---'
			//},
			// RUG
			//price: {
			//    type: 'number',
			//    field: 'market_price',
			//},
			style: {
				type: 'single',
				field: 'parent_style_name',
			},
			subStyle: {
				type: 'single',
				field: 'child_style_name',
			},
			color: {
				type: 'single',
				field: 'background_color_name',
			},
			shape: {
				type: 'single',
				field: 'shape_name',
			},
			//size: {
			//    type: 'number^2',
			//    field: ['width_1', 'length_1'],
			//},
			content: {
				type: 'single',
				field: 'content_name',
			},
			collection: {
				type: 'single',
				field: 'collection_name',
			},
			design: {
				type: 'single',
				field: 'design_name',
			},
			//origin: {
			//    type: 'single',
			//    field: 'origin_name',
			//},
			//type: {
			//    type: 'single',
			//    field: 'type_name',
			//},
			//brand: {
			//    type: 'single',
			//    field: 'brand',
			//},
			new_arrival: {
				type: 'query',
				query: { new_arrival: 'Y' }
			},
			search: {
				type: 'search',
				field: ['collection_name', 'design_name', 'parent_style_name', 'background_color_name']
			}
		},

	},

	toolbar: [
			{
				text: 'Home',
				path: '~home'
			},
			{
				text: 'What\'s New',
				path: '!new_arrival',
			},
			{
				text: 'Products',
				path: '!products',
			},
			{
				text: 'Collections',
				path: '@collection'
			},
			// FURNITURE
			//{
			//    text: 'Lighting',
			//    path: '!category___lighting'
			//},
			//{
			//    text: 'Furniture',
			//    path: '!category___furniture'
			//},
			//{
			//    text: 'Accessories',
			//    path: '!category___accessories'
			//}
			//{
			//    text: 'Categories',
			//    path: '@category'
			//},
			{
				text: 'Styles',
				path: '@style'
			},
			{
				text: 'Colors',
				path: '@color'
			},
			{
				text: 'Contact Us',
				path: '~contact_us'
			}
	],

	filtering: [
			// FURNITURE
			//{
			//    key: 'category',
			//    type: 'hierarchy',
			//    title: 'Category',
			//},
			//RUG
			//{
			//    key: 'price',
			//    type: 'range',
			//    title: 'Price',
			//},
			{
				key: 'style',
				type: 'select',
				title: 'Style',
			},
			{
				key: 'subStyle',
				type: 'select',
				condition: 'parent_style_name',
				title: 'Sub style',
				collapsed: true,
			},
			{
				key: 'color',
				type: 'color',
				title: 'Color'
			},
			{
				key: 'shape',
				type: 'shape',
				title: 'Shape',
			},
			//{
			//    key: 'size',
			//    type: 'range^2',
			//    title: 'Size',
			//    labels: ['Width', 'Length']
			//},
			{
				key: 'content',
				type: 'select',
				title: 'Content name',
			},
			{
				key: 'collection',
				type: 'select',
				title: 'Collection',
				collapsed: true,
			},
			{
				key: 'design',
				type: 'select',
				condition: 'collection_name',
				title: 'Design',
				collapsed: true,
			},
			//{
			//    key: 'origin',
			//    type: 'select',
			//    title: 'Origin',
			//},
			//{
			//    key: 'type',
			//    type: 'select',
			//    title: 'Type',
			//},
			//{
			//    key: 'brand',
			//    type: 'select',
			//    title: 'Brand',
			//}
	],

	sections: [
	{
		title: 'Company',
		items: [
		{
			text: 'Store Locations',
			path: '~store_location'
		},
		{
			text: 'About us',
			path: '~about_us'
		},
		{
			text: 'Careers',
			path: '~careers'
		},
		{
			text: 'News',
			path: '~news'
		},
		{
			text: 'Contact Us',
			path: '~contact_us'
		},
		]
	},
{
	title: 'Support',
	items: [
	{
		text: 'Customer Care',
		path: '~customer_care'
	},
{
	text: 'Shopping',
	path: '~shopping'
},
{
	text: 'Returns',
	path: '~returns'
},
{
	text: 'Delivery Information',
	path: '~delivery_information'
},
{
	text: 'FAQ',
	path: '~faq'
},
{
	text: 'Care & Cleaning',
	path: '~care_cleaning'
},
	]
},
{
	title: 'Get Inspired',
	items: [
			{
				text: 'Blog',
				path: '~blog'
			},
			{
				text: 'Our Catalog',
				path: '~our_catalog'
			},
			{
				text: 'Room Planner',
				path: '~room_planner'
			},
			{
				text: 'A Hope to Dream',
				path: '~hope_dream'
			},
	]
},
	{
		title: 'Get In Touch',
		items: [
		{ text: 'Phone: +1 212321423' },
		{ text: 'Fax: +1 324234144' },
		{ text: 'Email: info@radiciusa.com' },
		{ text: 'Address: ' }
		]
	},
	],

	pages: appPages

};