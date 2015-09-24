import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        clickMe: function (argument) {
            alert('clickMe');
        }
    }
});
