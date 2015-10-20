import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return new Ember.RSVP.Promise(function(resolve, reject){
            setTimeout(function(){
                resolve([{name:'hello I am fetched from google'}]);
            }, 5000);
        });
    },
    actions: {
        loading(transition, originRoute) {
            console.log('I am status.google loading event');
            // Bubble the event
            return true;
        },
        error(transition, originRoute) {
            console.log('I am google error event');
            // Bubble the event
            return true;
        },
    }
});