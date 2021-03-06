import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['friends-graph'],

	navLinks: function () {
		return [
			{
				name: 'New',
				route: 'posts.new'
			}, {
				name: 'Index',
				route: 'posts.index'
			}
		]
	}.property(),

	leftSidebarClass: 'friends-graph',

	setupDefaultShownConnection: function () {
		this.set('controllers.friends-graph.defaultShownConnection', this.get('content'));
	}
});
