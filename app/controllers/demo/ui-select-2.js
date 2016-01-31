import Ember from 'ember';

export default Ember.Controller.extend({
    value: 'facebook',
    values: ['google', 'apple'],
    valueDynamic: null,
    valuesDynamic: null,
    options: [
        {'name':'google', 'value':'google'},
        {'name':'apple', 'value':'apple'},
        {'name':'dropbox', 'value':'dropbox'},
        {'name':'twitter', 'value':'twitter'},
        {'name':'facebook', 'value':'facebook'},
    ],
    changingOptions: null,
    valuesShow: function (argument) {
        return this.values.toArray();
    }.property('values'),
    valuesDynamicShow: function(){
        if(this.valuesDynamic){
            return this.valuesDynamic.toArray();
        }

        return [];
    }.property('valuesDynamic.[]'),
    actions: {
        changeValue(){
            this.set('valueDynamic', this.value);
        },
        changeValues(){
            if(this.valuesDynamic == null){
                this.set('valuesDynamic', Ember.A());
            }
            this.valuesDynamic.pushObject('dropbox');
        },
        changeOptions(){
            if(this.changingOptions == null){
                this.set('changingOptions', Ember.A());
            }
            this.changingOptions.pushObject({'name':'google', 'value':'google'});
        },
        showAll(){
            console.log(this.value);
            console.log(this.values);
            console.log(this.valueDynamic);
            console.log(this.valuesDynamic);
        }
    }
});
