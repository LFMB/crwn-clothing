import React from 'react';
// import {withRouter} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionPage from '../collection/collection.component';
// import SHOP_DATA from './shop.data';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

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

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);



class ShopPage extends React.Component {
	constructor(){
		super();

		this.state = {
			loading: true
		}
	}

	unsubscribeFromSnapshot = null;

	/*
	// observable/ observer pattern
	componentDidMount(){
		const { updateCollections } = this.props;

		// to get users use 'users' 
		const collectionRef = firestore.collection('collections');

		this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
			// console.log('snapshot', snapshot)
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			// console.log('collectionsMap', collectionsMap)
			updateCollections(collectionsMap);
			this.setState({loading: false});

		})
	}
	*/

	// promises pattern - data can only update on new mounts (ie data can be stale)
	// firebase project id: crwn-db-4f090
	// https://crwn-db-4f090.firebaseio.com end url in .json
	componentDidMount(){
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection('collections');

		/*
		fetch('https://firestore.googleapis.com/v1/projects/crwn-db-4f090/databases/(default)/documents/collections')
		.then(response => response.json())
		.then(collections => console.log('collections', collections));
		*/

		collectionRef.get().then(snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({loading: false});
		});
		
		
	}

	render(){
		const { match } = this.props;
		const { loading } = this.state;

		return(
			<div className="shop-page">
				<Route 
					exact path={`${match.path}`} 
					render={(props) => (
						<CollectionsOverviewWithSpinner isLoading={loading} {...props}/>
					)}
				/>
				<Route 
					path={`${match.path}/:collectionId`} 
					render={(props) => (
					 <CollectionPageWithSpinner isLoading={loading} {...props}/>
					)}
				/>
			</div>			
		)
	}
}
	
const mapDispatchToProps = dispatch => ({
	updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);