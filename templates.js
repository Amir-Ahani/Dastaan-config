var appTemplates = {
	header: {
		customs: {
			SearchElement: {
				items: [
						{
							xtype: 'textfield',
							columnWidth: 0.15,
							height: 35,
							margin: '5  10 0 0 ',
							emptyText: 'Enter query seperated by space',
							enableKeyEvents: true,
							listeners: {
								keypress: function (textfield, e, eOpts) {
									if (e.getCharCode() == Ext.EventObject.ENTER) {
										var value = textfield.value;
										textfield.setValue('');
										while (value.indexOf('  ') != -1) value = value.replace('  ', ' ');
										//this.redirectTo('!search___' + value.split(' ').join('...'));
										window.location.hash = '!search___' + value.split(' ').join('...');
									}
								}
							}
						}
				]
			}
		},
		tpl: [
				'<div class="main_header_template_search">[*SearchElement*]</div>',
				'<a href="/" class="main_header_logo"></a>',
		]
	},
	productCell: [
	'<div class="product_products_cell_body" style="background:url({[util.get_imagefilename(values.vendor_uid,values.image_filename,"M")]})">',
	'<div class="product_products_cell_title">{collection_name} / {design_name}</div>',
	'</div>',
	'<tpl if="new_arrival==\'Y\'">',
	'<div class="product_cell_new_small">NEW</div>',
	'</tpl>'
	],
	groupCell: [
			'<div class="product_group_cell_body" style="background:url({[util.get_imagefilename(values.vendor_uid,values.image_filename,"M")]})">',
			'<div class="product_group_cell_header_border"><div class="product_group_cell_header"></div></div>',
			'<div class="product_group_cell_title">{title}</div>',
			'</div>'
	],
	productDetails: [
			'<div class="product_detail">',
			'<div class="product_detail_path">{collection_name} Collection &gt; {collection_name} {design_name}</div>',
			'<table class="product_detail_table"><tbody>',
			'<tr>',
			'<td width="32%" valign="top" class="product_detail_column1">',
			'<h1 class="product_detail_title">{collection_name} {design_name}</h1>',
			'<div class="info1_row"><span class="info1_title product_detail_part_title">Style:</span><span class="product_detail_part_value">{style_name}</span></div>',
			'<div class="info1_row"><span class="info1_title product_detail_part_title">Collection:</span><span class="product_detail_part_value">{collection_name}</span></div>',
			'<div class="info1_row"><span class="info1_title product_detail_part_title">Type:</span><span class="product_detail_part_value">{type_name}</span></div>',
			'<div class="info1_row"><span class="info1_title product_detail_part_title">Origin:</span><span class="product_detail_part_value">{origin_name}</span></div>',
			'<div class="info1_row"><span class="info1_title product_detail_part_title">SKU:</span><span class="product_detail_part_value">{[this.getItemValue(values.items, "sku_code")]}</span></div>',
			'<div class="info1_row"><span class="info1_title product_detail_part_title">Color:</span><span class="product_detail_part_value">{[this.getItemValue(values.items, "background_color_name")]}</span></div>',
			'<div class="info1_row"><span class="info1_title product_detail_part_title">Border:</span><span class="product_detail_part_value">{[this.getItemValue(values.items, "border_color_name")]}</span></div>',
			'<div class="info1_row"><span class="info1_title product_detail_part_title">Size:</span><span class="product_detail_part_value">{[this.getItemValue(values.items, "size_category")]}</span></div>',
			'<div class="info1_row"><span class="info1_title product_detail_part_title">Qty:</span><span class="product_detail_part_value">{[this.getItemValue(values.items, "qty")]}</span></div>',
			'<div class="info1_row"><span class="info1_title product_detail_part_title">Shape:</span><span class="product_detail_part_value">{[this.getItemValue(values.items, "shape_name")]}</span></div>',
			'<div class="info1_row"><span class="info1_title product_detail_part_title">Content:</span><span class="product_detail_part_value">{content_name}</span></div>',
			'</td>',
			'<td valign="top" class="col2">',
			'<div class="product_detail_image"><img src="{[util.get_imagefilename(values.vendor_uid,this.getItemValue(values.items, "image_filename"),"M")]}"></div>',
			'<div class="additional_title product_detail_part_title">Addintional images:</div>',
			'<div class="product_detail_all_images">',
			'<tpl for="this.loadAvailableImages(items, vendor_uid)">{elems}</tpl>',
			//'<tpl for="items">',
			//'<img src="{[util.get_imagefilename(values.vendor_uid,values.image_filename,"M")]}" onclick="{[this.additionalItem_click(xindex)]}">',
			//'</tpl>',
			'</div>',
			'</td>',
			'</tr>',
			'</tbody></table>',
			'<div class="line"></div>',
			'<table class="product_detail_table"><tbody>',
			'<tr>',
			'<td width="32%" valign="top" class="product_detail_column1">',
			'<hr/><div class="product_detail_part_title">Available Colors:</div>',
			'<div>',
			'<div class="product_detail_all_colors">',
			'<tpl for="this.loadAvailableColors(items, vendor_uid)">{elems}</tpl>',
			'</div>',
			'</div><br/><hr/>',
			'<div class="product_detail_part_title">Available Shapes:</div>',
			'<div class="product_detail_all_shapes">',
			'<tpl for="this.loadAvailableShapes(items, vendor_uid)">{elems}</tpl>',
			'</div><br/><hr/>',
			'<div class="product_detail_part_title">Available Sizes:</div>',
			'<div class="product_detail_all_sizes">',
			'<tpl for="this.loadAvailableSizes(items, vendor_uid)">{elems}</tpl>',
			'</div>',
			//<div class="additional_title de_title">Market Prices:</div>$3,233.00
			//<div class="additional_title de_title">Sale Prices:</div>$2,785.00
			'<td valign="top" class="col2"><div class="product_detail_part_title">Available sizes:</div>',
			'<table class="product_detail_available"><tbody>',
			'<tr><th>Item</th><th>Size</th><th>Sku</th><th>Shape</th><th>Color</th><th>Qty</th><th>Market Price</th><th>Sale Price</th></tr>',
			'<tpl for="items">',
			'<tr {[this.additionalSize_style(xindex)]} onclick="{[this.additionalItem_click(xindex)]}">',
			'<td><img height="30px" src="{[util.get_imagefilename(values.vendor_uid,values.image_filename,"T")]}"/></td>',
			'<td>{size_category}</td>',
			'<td>{sku_code}</td>',
			'<td><img height="30px" src="resources/images/shape_{shape_name}.png" title="{shape_name}"></td>',
			'<td><div class="product_detail_colors">{[this.makeColorElems(values.background_color_name)]}</div></td>',
			'<td>{qty}</td>',
			'<td>$***</td>',
			'<td>$***</td>',
			'</tr>',
			'</tpl>',
			'</tbody></table>',
			'</td>',
			'</tr>',
			'</tbody></table>',
			'</div>',
			{
				index: null,
				getItemValue: function (items, key) {
					if (!this.index) {
						this.index = 0;
						var parts = location.hash.split('/');
						var last = parts[parts.length - 1];
						if (!isNaN(parseFloat(last)) && isFinite(last))
							this.index = parseInt(last) - 1;
					}
					return items[this.index][key];
				},
				base: null,
				additionalItem_click: function (xindex) {
					if (!this.base) {
						var parts = location.hash.split('/');
						parts.splice(2, 1);
						this.base = parts.join('/') + '/';
					}
					return "window.location.hash = '" + this.base + util.encode(xindex) + "';setTimeout('window.scrollTo(0,'+window.scrollY+');',2000);";
				},
				additionalSize_style: function (xindex) {
					return this.index == xindex - 1 ? 'style="background-color:yellow;"' : '';
				},
				makeColorElems: function (color) {
					var elems = '';
					var colors = color.split('/');
					for (var k in colors) {
						var back = colors[k];
						switch (colors[k].toLowerCase()) {
							case "rust":
								back = '#B7410E';
								break;
							case "burgundy":
								back = '#8C001A';
								break;
							case "multi":
								back = ';background-image:url(\'resources/images/color_multi.jpg\');background-size:cover';
								break;
						}
						elems += '<div title="' + color + '" style="float:left;background:' + back + ';width:' + (100 / colors.length) + '%;height:100%;"></div>';
					}
					return elems;
				},
				loadAvailableImages: function (items, vendor_uid) {
					var distinct = [];
					for (var i = 0; i < items.length; i++) {
						var index = -1;
						for (var j = 0; j < distinct.length; j++)
							if (distinct[j].image == items[i].image_filename) {
								index = j;
								break;
							}

						if (index == -1) {
							distinct.push({
								image: items[i].image_filename,
								items: []
							});
							index = distinct.length - 1;
						}

						distinct[index].items.push(items[i]);
					}

					for (var k = 0; k < distinct.length; k++)
						distinct[k].elems = '<img src="' + util.get_imagefilename(vendor_uid, distinct[k].image, "T") + '" title="' + distinct[k].items.length + ' Item(s)" />';

					return distinct;
				},
				loadAvailableColors: function (items, vendor_uid) {
					var distinct = [];
					for (var i = 0; i < items.length; i++) {
						var index = -1;
						for (var j = 0; j < distinct.length; j++)
							if (distinct[j].color == items[i].background_color_name) {
								index = j;
								break;
							}

						if (index == -1) {
							distinct.push({
								color: items[i].background_color_name,
								elems: '<img src="' + util.get_imagefilename(vendor_uid, items[i].image_filename, "T") + '" title="' + items[i].background_color_name + '" />',
								items: []
							});
							index = distinct.length - 1;
						}

						distinct[index].items.push(items[i]);
					}
					return distinct;
				},
				loadAvailableShapes: function (items, vendor_uid) {
					var distinct = [];
					for (var i = 0; i < items.length; i++) {
						var index = -1;
						for (var j = 0; j < distinct.length; j++)
							if (distinct[j].shape == items[i].shape_name) {
								index = j;
								break;
							}

						if (index == -1) {
							distinct.push({
								shape: items[i].shape_name,
								//elems: '<img height="30px" src="resources/images/shape_' + items[i].shape_name + '.png">',
								elems: '<img src="' + util.get_imagefilename(vendor_uid, items[i].image_filename, "T") + '" title="' + items[i].shape_name + '" />',
								items: []
							});
							index = distinct.length - 1;
						}

						distinct[index].items.push(items[i]);
					}
					return distinct;
				},
				loadAvailableSizes: function (items, vendor_uid) {
					var distinct = [];
					for (var i = 0; i < items.length; i++) {
						var index = -1;
						for (var j = 0; j < distinct.length; j++)
							if (distinct[j].size == items[i].size_category) {
								index = j;
								break;
							}

						if (index == -1) {
							distinct.push({
								size: items[i].size_category,
								items: []
							});
							index = distinct.length - 1;
						}

						distinct[index].items.push(items[i]);
					}

					for (var k = 0; k < distinct.length; k++)
						distinct[k].elems = '<div alt="' + distinct[k].items.length + '">' + distinct[k].size + '</div>';

					return distinct;
				}
			}
	],
	poweredBy: [
			'<div style="padding:10px;height:30px;color:#8e8e8e;line-height: 30px;">',
			'<span style="float:left;margin-right:20px"><img src="resources/config/footer.png" /></span>All rights reserved',
			'<span style="float:right;margin-right:50px"> Powered by <a target="_blank" href="http://www.rminno.com" style="color:#8e8e8e;text-decoration: none;"><b>rminno</b></a></span>',
			'</div>'
	]
};
    
var appPages = {

		home: {
			type: 'complex',
			title: null,
			modules: [
					{
							type: 'crousel',
							delay: 5000,
							slides: [
							{ image: 'resources/config/home_1.jpg' },    
							{ image: 'resources/config/home_2.jpg' },    
					]
					},
					{
						type: 'rotator',
						title: 'Our best sellers',
						filter: { shape_name: 'Round' },
						limit: 4,
						template: [
								'<div class="product_rotator_cell_body" style="background:url({[util.get_imagefilename(values.vendor_uid,values.image_filename,"M")]})">',
								'<div class="product_rotator_cell_title">{collection_name} / {design_name}</div>',
								'</div>',
								'<tpl if="new_arrival==\'Y\'">',
								'<div class="product_cell_new">NEW</div>',
								'</tpl>'
						]
					},
					{
						type: 'rotator',
						title: 'New Arrivals',
						filter: { new_arrival: 'Y' },
						limit: 4,
						template: [
								'<div class="product_rotator_cell_body" style="background:url({[util.get_imagefilename(values.vendor_uid,values.image_filename,"M")]})">',
								'<div class="product_rotator_cell_title">{collection_name} / {design_name}</div>',
								'</div>',
								'<tpl if="new_arrival==\'Y\'">',
								'<div class="product_cell_new">NEW</div>',
								'</tpl>'
						],
						script: 'resources/config/x.js'
					},
					{
						type: 'rotator',
						title: 'Our special selections',
						filter: { collection_name: 'Vesuvio' },
						limit: 4,
						template: [
								'<div class="product_rotator_cell_body" style="background:url({[util.get_imagefilename(values.vendor_uid,values.image_filename,"M")]})">',
								'<div class="product_rotator_cell_title">{collection_name} / {design_name}</div>',
								'</div>',
								'<tpl if="new_arrival==\'Y\'">',
								'<div class="product_cell_new">NEW</div>',
								'</tpl>'
						]
					},
					{
						type: 'rotator',
						title: 'This month deal',
						filter: { parent_style_name: 'Botanical' },
						limit: 4,
						template: [
								'<div class="product_rotator_cell_body" style="background:url({[util.get_imagefilename(values.vendor_uid,values.image_filename,"M")]})">',
								'<div class="product_rotator_cell_title">{collection_name} / {design_name}</div>',
								'</div>',
								'<tpl if="new_arrival==\'Y\'">',
								'<div class="product_cell_new">NEW</div>',
								'</tpl>'
						]
					}
			],
			script: ['resources/config/y.js']
		},

		html: {
			type: 'html',
			title: 'Testing load text',
			path: '/resources/config/html.html',
		},

		about_us: {
			type: 'text',
			title: 'About Us',
			html: '<center style="height:450px"><b>About us page content</b><img style="" src=""/></center>',
		},
		store_location: {
			type: 'text',
			title: 'Store Locations',
			html: '<center style="height:450px"><b>Store Locations page content</b></center>',
		},
		careers: {
			type: 'text',
			title: 'Careers',
			html: '<center style="height:450px"><b>Careers page content</b></center>',
		},
		news: {
			type: 'text',
			title: 'News',
			html: '<center style="height:450px"><b>News page content</b></center>',
		},
		contact_us: {
			type: 'inquiry',
			target: 'contact@radiciusa.com',
			title: 'Contact Us',
			description: 'We appreciate your business.<br/>It is our pleasure to serve you.',
			fields: [
					{
						name: 'name',
						lable: 'Name',
						type: 'text'
					},
					{
						name: 'email',
						lable: 'Email',
						type: 'text'
					},
					{
						name: 'company',
						lable: 'Company',
						type: 'text'
					},
					{
						name: 'phone',
						lable: 'Phone',
						type: 'text'
					},
					{
						name: 'inquiry',
						lable: 'Inquiry Details',
						type: 'textarea'
					}
			],
			button: 'Send Inquiry to Customer Service'
		},


		customer_care: {
			type: 'text',
			title: 'Customer Care',
			html: '<center style="height:450px"><b>Customer Care page content</b></center>',
		},
		shopping: {
			type: 'text',
			title: 'Shopping',
			html: '<center style="height:450px"><b>Shopping page content</b></center>',
		},
		returns: {
			type: 'text',
			title: 'Returns',
			html: '<center style="height:450px"><b>Returns page content</b></center>',
		},
		delivery_information: {
			type: 'text',
			title: 'Delivery Information',
			html: '<center style="height:450px"><b>Delivery Information page content</b></center>',
		},
		faq: {
			type: 'text',
			title: 'FAQ',
			html: '<center style="height:450px"><b>FAQ page content</b></center>',
		},
		care_cleaning: {
			type: 'text',
			title: 'Care & Cleaning',
			html: '<center style="height:450px"><b>Care & Cleaning page content</b></center>',
		},

		blog: {
			type: 'text',
			title: 'Blog',
			html: '<center style="height:450px"><b>Blog page content</b></center>',
		},
		our_catalog: {
			type: 'text',
			title: 'Our Catalog',
			html: '<center style="height:450px"><b>Our Catalog page content</b></center>',
		},
		room_planner: {
			type: 'text',
			title: 'Room Planner',
			html: '<center style="height:450px"><b>Room Planner page content</b></center>',
		},
		hope_dream: {
			type: 'text',
			title: 'A Hope to Dream',
			html: '<center style="height:450px"><b>A Hope to Dream page content</b></center>',
		},

	};