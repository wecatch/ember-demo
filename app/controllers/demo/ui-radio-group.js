import Ember from 'ember';

export default Ember.Controller.extend({
    checkvalue: 'google',
    checkvalue2: null,
    checkvalue3: null,
    checkvalueObserver: Ember.observer('checkvalue', function() {
        // body...
    }),
    options: [
        {'label':'google', 'value':'google'},
        {'label':'apple', 'value':'apple'},
        {'label':'dropbox', 'value':'dropbox'},
    ],
});
