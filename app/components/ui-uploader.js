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
     * A array contain class names apply to root element
     *
     * @property {Ember.Array} classNames
     * @default  ""
     */
    classNames: ['ui', 'segment'],

    /**
     * A string containing the URL to which the request is sent
     *
     * @property {Ember.String} url
     * @default  ""
     */
    url: '',

    /**
     * file input name 
     *
     * @property {Ember.String} name
     * @default  ""
     */
    name: 'file',

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
    dataType: 'jsonp',

    /**
     * The HTTP request method for the file uploads. Can be "POST", "PUT" or "PATCH" and defaults to "POST".
     *
     * @property {Ember.String} type
     * @default  "POST"
     */
    dropZone: null,

    /**
    * To force all browser to make use of the iframe transport module for file uploads
    *
    * @property {Ember.Boolean} forceIframeTransport
    * @default  false
    */
    forceIframeTransport: true,

    /**
    * To  allow  file autoUpload
    *
    * @property {Ember.Boolean} forceIframeTransport
    * @default  false
    */
    autoUpload: true,

    /**
    * upload queue
    *
    * @property {Ember.Array} queue
    * @default  false
    */
    queue: [],

    /**
    * upload progress percent
    *
    * @property {Ember.Number} percent
    * @default 0
    */
    progress: 0,

    /**
     * @function initialize
     * @observes "didInsertElement" event
     * @returns  {void}
    */
    initialize: function(argument) {
        let url = this.get('url'),
            type = this.get('type'),
            forceIframeTransport = this.get('forceIframeTransport'),
            datetype = this.get('datetype'),
            autoUpload = this.get('autoUpload'),
            $this = this.$();

        let id = (new Date()).getTime();
        let that = this;

        this.$('input').attr('name', this.get('name'));
        this.$('input').attr('id', id);
        this.$('label').attr('for', id);

        this.$('input').fileupload({
            url: 'http://localhost:8888/upload',
            datetype: datetype,
            type: type,
            autoUpload: autoUpload,
            previewMaxWidth: 100,
            previewMaxHeight: 100,
            forceIframeTransport: forceIframeTransport
        }).on('fileuploadadd', function(e, data){
            data.files.forEach(function(item){
                that.queue.addObject(item);
            });
        }).on('fileuploadprogress', function(e, data){
            if (e.isDefaultPrevented()) {
                    return false;
            }
            var progress = parseInt(data.loaded / data.total * 100, 10);
            that.set('progress', progress);
        });
        //$('#example1').progress();
    }.on('didInsertElement'),

    /**
     * @function inputStyle
     * 
     * @returns  {string}
    */
    inputStyle: function(){
        let style_array = [
            'opacity: 0',
            'display:none',
            'overflow:hidden',
        ]
        return style_array.join(';');
    }.property(),

    /**
     * @function labelStyle
     * 
     * @returns  {string}
    */
    labelStyle: function(){
        let style_array = [
            'height: 6.25em',
            'line-height: 5.25em',
            'text-align: center',
        ]
        return style_array.join(';');
    }.property(),
});
