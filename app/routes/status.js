import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        loading(transition, originRoute) {
            console.log('I am status loading event');
            // Bubble the event
            return true;
        }
    }
});