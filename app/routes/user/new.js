import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        this.store.createRecord('user');
    }
});