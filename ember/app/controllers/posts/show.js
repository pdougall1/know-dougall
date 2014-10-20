import Ember from 'ember';

export default Ember.ObjectController.extend({

	actions: {
		showAnnotation: function (id) {
			var ann = this.store.find('annotation', id);
			this.set('currentAnnotation', ann);
		}
	}

});
