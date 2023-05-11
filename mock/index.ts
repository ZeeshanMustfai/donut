import { c3, y1, d1, c4, p1, c1, o1, c7 } from "@/assets"

export const navItems = [
	{
		id: 'home_id',
		path: '/home',
		name: 'Home',
	},
	{
		id: 'about_id',
		path: '/about',
		name: 'About Us',
	},
	{
		id: 'product_id',
		path: '/products',
		name: 'Products',
	},
	{
		id: 'review_id',
		path: '/review',
		name: 'Reviews',
	},
	{
		id: 'location_id',
		path: '/location',
		name: 'Locations',
	},
]

export const otherItem = [
	{
		id: 'contact_us',
		path: '/contact_us',
		name: 'Contact Us',
	},
	{
		id: 'privacy_policy',
		path: '/policy',
		name: 'Privacy Policy',
	},
	{
		id: 'terms_and_condition',
		path: '/terms-condition',
		name: 'Terms and condition',
	},
	{
		id: 'other_location_id',
		path: '/other_location',
		name: 'Other Locations',
	},
]

export const aboutDummy = {
	tagLine: 'The Donut Zone',
	title: 'About',
	subTitle: 'Us',
	description:
		'Lorem ipsum dolor sit amet, consentuetur adipiscing elit.Lorem ipsum dolor sit amet, consentuetur adipiscing elit.',
	buttonText: 'Order Now',
}

export const socialFeedDummy = {
	tagLine: 'Follow Us',
	title: '',
	subTitle: 'Social',
	lastTitle: 'Feed',
	description:
		'',
	buttonText: 'Order Now',
}

export const outLocationsDummy = {
	tagLine: 'Our Locations',
	title: 'Come Say',
	subTitle: 'Hey',
	description:
		'Find your closest Donut Zone Stores',
	buttonText: 'View Locations',
}

export const orderOnlineDummy = {
	tagLine: 'Find Us Online',
	title: 'Order',
	subTitle: 'Online',
	lastTitle: '!',
	description:
		'Lorem ipsum dolor sit amet, consentuetur adipiscing elit. Lorem ipsum dolor sit amet, consentuetur adipiscing elit. Lorem ipsum dolor sit amet, consentuetur adipiscing elit.',
	buttonText: 'Order Now',
}

export const galleryImages = [
	{
		id:'c1',
		bgImg: y1.src,
		frontImg: c3.src,
	},
	{
		id:'c2',
		bgImg: d1.src,
		frontImg: c4.src,
	},
	{
		id:'c3',
		bgImg: p1.src,
		frontImg: c1.src,
	},
	{
		id:'c4',
		bgImg: o1.src,
		frontImg: c7.src,
	}
]