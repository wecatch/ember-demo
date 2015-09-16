import Ember from 'ember';

export default Ember.Controller.extend({
    isChecked: true,
    checkboxValue: null,
    checkboxValueObserver: Ember.observer('checkboxValue', function() {
        // body...
        console.log(this.get('checkboxValue'));
    })
});
