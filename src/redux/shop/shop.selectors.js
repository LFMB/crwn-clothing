import { createSelector } from 'reselect';

/*
const COLLECTION_ID_MAP = {
	hats: 1,
	sneakers: 2,
	jackets: 3,
	womens: 4,
	mens: 5
}
*/

const selectShop = state => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	collections => collections ? Object.keys(collections).map( key => collections[key]) : []
)

// this is a curry function - aka a function 
// that just returns another function 
export const selectCollection = collectionUrlParam => 
	createSelector(
		[selectCollections],
		// iteration over arrays isn't very performant and should
		// be moved to an object structure
		// aka do data normalization
		/*
		collections => collections.find(
			collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
		)
		*/
		collections => (collections ? collections[collectionUrlParam] : null)
	)

	
