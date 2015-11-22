import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [];
    },
    actions: {
        loading(transition, originRoute) {
            console.log('I am status.index loading event');
            return true;
        },
        error(transition, originRoute) {
            console.log('I am status.index error event');
            return true;
        },
    }
});