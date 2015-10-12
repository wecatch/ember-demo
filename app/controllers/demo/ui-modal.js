import Ember from 'ember';

export default Ember.Controller.extend({
	display: false,
	display1: false,
	actions: {
		clickHandler(){
			this.set('display', true)
		},
		clickHandler1(){
			this.set('display1', true)
		},
		onShow: function (argument) {
			console.log('onShow');	
		},
		onHide: function (argument) {
			console.log('onHide');	
		}
	},
});
