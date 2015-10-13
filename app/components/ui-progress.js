import Ember from 'ember';

export default Ember.Component.extend({

    /**
     * A array contain class names apply to root element
     *
     * @property {Ember.Array} classNames
     * @default  ""
     */
    classNameBindings: ['_uiClass', 'theme' , '_componentClass'],
    _uiClass: 'ui',
    _componentClass:'progress',
    
    /**
    * progress theme
    *
    * @property {Ember.String} theme
    * @default  ''
    */
    theme: 'green',

    /**
    * progress percent
    *
    * @property {Ember.Number} percent
    * @default  0
    */
    percent: 0,

    /**
     * A array contain attribute to root element
     *
     * @property {Ember.Array} attribuebindings
     * @default  ""
     */
    attributeBindings: ['percent:data-percent'],
    initialize: function (argument) {
        
    }.on('didInsertElement')
});
