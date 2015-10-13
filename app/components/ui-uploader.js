import Ember from 'ember';
import uploader from '../uploader/uploader';

export default Ember.Component.extend({
    actions: {
        startUpload: function(obj) {
            let url = this.get('url'),
                self = this;
            obj.uploader = uploader.create({
                url: url
            });

            obj.uploadPromise = obj.uploader.upload(obj.fileToUpload);

            this.sendAction('uploadStart', obj);

            obj.uploader.on('progress', function(e) {
                obj.set('uploadProgress', e.percent);
            });
            obj.uploader.on('didUpload', function(data){
                obj.set('didUpload', true);
                obj.set('data', data);
                //send parent to process uploaded callback
                self.sendAction('uploadSucess', obj.data);
            });
        },
        cancelUpload: function(obj) {
            this.sendAction('uploadCancel', obj);
            obj.uploader.abort();
        },
        deleteFile: function(obj){
            this.get('queue').removeObject(obj);
            this.sendAction('deleteFile', obj);
        }
    },
    /**
     * The upload url
     *
     * @property {Ember.String} url
     * @default  ""
     */
    url: '',

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
     * To  allow  file autoUpload
     *
     * @property {Ember.Boolean} forceIframeTransport
     * @default  false
     */
    autoUpload: true,

    /**
     * upload file queue
     *
     * @property {Ember.Array} queue
     * @default  []
     */
    queue: [],

    /**
     * upload file 
     *
     * @property {Ember.Object} fileObject
     * @default  null
     */
    fileObject: null,
    /**
     * @function initialize
     * @observes "didInsertElement" event
     * @returns  {void}
     */
    initialize: function(argument) {

    }.on('didInsertElement'),

    filesDidChange: function() {
        let fileObject = this.get('fileObject')
        if (!Ember.isEmpty(fileObject)) {
            this.queue.pushObject(fileObject);
        }
    }.observes('fileObject'),
    /**
     * @function inputStyle
     * 
     * @returns  {string}
     */
    inputStyle: function() {
        let style_array = [
            'opacity: 0',
            'width:100% !important',
            'overflow:hidden',
            'position:relative',
            'left:-100%',
            'display:block',
        ]
        return style_array.join(';');
    }.property(),

    /**
     * @function labelStyle
     * 
     * @returns  {string}
     */
    labelStyle: function() {
        let style_array = [
            'height: 6.25em',
            'line-height: 5.25em',
            'text-align: center',
        ]
        return style_array.join(';');
    }.property(),
});