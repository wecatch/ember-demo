import Ember from 'ember';

export default Ember.Component.extend({
    
    /**
     * The root component element
     *
     * @property {Ember.String} tagName
     * @default  "div"
     */
    tagName: 'div',

    /**
     * A string containing the URL to which the request is sent
     *
     * @property {Ember.String} url
     * @default  ""
     */
    url: '',

    /**
     * The HTTP request method for the file uploads. Can be "POST", "PUT" or "PATCH" and defaults to "POST".
     *
     * @property {Ember.String} type
     * @default  "POST"
     */
    type: 'POST',

    /**
     * The type of data that is expected back from the server
     *
     * @property {Ember.String} datetype
     * @default  "POST"
     */
    dataType: 'json',

    /**
     * The HTTP request method for the file uploads. Can be "POST", "PUT" or "PATCH" and defaults to "POST".
     *
     * @property {Ember.String} type
     * @default  "POST"
     */
    dropZone: null,

    /**
     * @function initialize
     * @observes "didInsertElement" event
     * @returns  {void}
    */
    initialize: function(argument) {
        let url = this.get('url'),
            type = this.get('type'),
            datetype = this.get('datetype');

        this.$('input').fileupload({
            url: url,
            datetype: datetype,
            type: type
        });
    }.on('didInsertElement')
});
