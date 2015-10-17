import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.createRecord('user');
    },
    actions: {
        cancel(){
            console.log('cancel new record created');
            this.transitionTo('user');
        },
        fail(action, reason){
            console.log(`${action} ${reason}`);
        },
        success(action, data){
            console.log(`${action} ${data}`);
        }
    }
});