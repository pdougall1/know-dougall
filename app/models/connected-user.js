import DS from 'ember-data';

export default DS.Model.extend({
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
	headline: DS.attr('string'),
	linkedinProfileUrl: DS.attr('string'),
	createdAt: DS.attr('date'),
	updatedAt: DS.attr('date'),
	linkedinId: DS.attr('string'),
	industry: DS.attr('string'),
	distance: DS.attr('number'),
	numConnections: DS.attr('number'),
	pictureUrl: DS.attr('string'),
	largePictureUrl: DS.attr('string'),
	email: DS.attr('string'), 
	user: DS.belongsTo('user')
});
