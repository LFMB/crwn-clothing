// just need reducer because this data isn't going to change

const INTIAL_STATE = {
	sections: [
		{
			title: 'hats',
			bgImgUrl: 'https://i.ibb.co/cvpntL1/hats.png',
			id: 1,
			linkUrl: 'shop/hats',
		},
		{
			title: 'jackets',
			bgImgUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
			id: 2,
			linkUrl: 'shop/jackets',
		},
		{
			title: 'sneakers',
			bgImgUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
			id: 3,
			linkUrl: 'shop/sneakers',
		},
		{
			title: 'mens',
			bgImgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
			id: 4,
			linkUrl: 'shop/mens',
			size: 'large'
		},
		{
			title: 'womens',
			bgImgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
			id: 5,
			linkUrl: 'shop/womens',
			size: 'large'
		}
	]
}


const directoryReducer = (state = INTIAL_STATE, action) => {
	switch (action.type){
		default:
			return state;
	}
}

export default directoryReducer;