import Ember from 'ember';

export default Ember.Controller.extend({
    value: ['c', 'd'],
    actions: {
        changeValue(){
            this.set('value', ['a', 'b']);
        }
    }
});
