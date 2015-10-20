import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.find('user');
    },
    actions: {
        error(error){
            console.log(error);
        }
    }
});