import Ember from 'ember';

export default Ember.Controller.extend({
    checkvalue: [],
    checkvalue2: ['google', 'apple'],
    checkvalue3: [],
    checkvalueObserver: Ember.observer('checkvalue', function() {
        // body...
    }),
    options: [
        {'label':'google', 'value':'google'},
        {'label':'apple', 'value':'apple'},
        {'label':'dropbox', 'value':'dropbox'},
    ],
});
