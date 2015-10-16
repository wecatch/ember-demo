import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [{
            site: 'https://github.com',
            name: 'github',
            _id: 1
        }, {
            site: 'https://google.com',
            name: 'google',
            _id: 2
        }];
    }
});