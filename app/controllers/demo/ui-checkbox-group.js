import Ember from 'ember';

export default Ember.Controller.extend({
    checkvalue: [],
    checkvalue2: ['google', 'apple'],
    checkvalue3: [],
    checkvalueObserver: Ember.observer('checkvalue', function() {
        // body...
    }),
    options: [{
        'label': 'google',
        'value': 'google'
    }, {
        'label': 'apple',
        'value': 'apple'
    }, {
        'label': 'dropbox',
        'value': 'dropbox'
    }, ],
    newOption: {
        'label': 'facebook',
        'value': 'facebook'
    },
    actions: {
        addOption: function() {
            this.get('options').pushObject(this.newOption);
        },
        removeOption: function() {
            this.get('options').removeObject(this.newOption);
        },
        changeOption: function() {
            this.set('options', [{
                'label': 'baidu',
                'value': 'baidu'
            }])
        },
        changeValue: function() {
            this.get('checkvalue2').pushObject('dropbox');
        }
    }
});