import Ember from 'ember';

export default Ember.Controller.extend({
	value: 'cctv',
	value1: '',
	options: [
	    {'name':'google', 'value':'google'},
	    {'name':'apple', 'value':'apple'},
	    {'name':'dropbox', 'value':'dropbox'},
	    {'name':'sony', 'value':'sony'},
	    {'name':'twitter', 'value':'twitter'},
	    {'name':'facebook', 'value':'facebook'},
	    {'name':'abc', 'value':'abc'},
	    {'name':'htc', 'value':'htc'},
	    {'name':'cctv', 'value':'cctv'},
	],
});
