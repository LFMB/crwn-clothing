import { createSelector } from 'reselect';

// we use this to manage mapstatetprops?

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
	[selectUser],
	user => user.currentUser
);
