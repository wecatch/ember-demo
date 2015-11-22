import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return new Ember.RSVP.Promise(function(resolve, reject){
            setTimeout(function(){
                reject({message: 'something wrong'});
            }, 5000);
        });
    },
    actions: {
        loading(transition, originRoute) {
            console.log('I am facebook loading event');
            // Bubble the event
            return true;
        },
        error(transition, originRoute) {
            console.log('I am facebook error event');
            // Bubble the event
            return true;
        },
    }
});