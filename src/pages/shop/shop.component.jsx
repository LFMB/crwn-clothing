import React from 'react';
// import {withRouter} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionPage from '../collection/collection.component';
// import SHOP_DATA from './shop.data';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

/*
const ShopPage = ({match}) => {
	return(
		<div className="shop-page">
			<Route exact path={`${match.path}`} component={CollectionsOverview} />
			<Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
		</div>
	)
}
*/


class ShopPage extends React.Component {
	unsubscribeFromSnapshot = null;

	componentDidMount(){
		const { updateCollections } = this.props;

		// to get users use 'users' 
		const collectionRef = firestore.collection('collections');

		this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
			// console.log('snapshot', snapshot)
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			// console.log('collectionsMap', collectionsMap)
			updateCollections(collectionsMap);

		})
	}

	render(){
		const { match } = this.props;

		return(
			<div className="shop-page">
				<Route exact path={`${match.path}`} component={CollectionsOverview} />
				<Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
			</div>			
		)
	}
}
	
const mapDispatchToProps = dispatch => ({
	updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);