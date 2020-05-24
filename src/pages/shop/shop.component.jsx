import React from 'react';
// import {withRouter} from 'react-router-dom';
import { Route } from 'react-router-dom';

import CollectionPage from '../collection/collection.component';
// import SHOP_DATA from './shop.data';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = ({match}) => {
	return(
		<div className="shop-page">
			<Route exact path={`${match.path}`} component={CollectionsOverview} />
			<Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
		</div>
	)
}
	

export default ShopPage;