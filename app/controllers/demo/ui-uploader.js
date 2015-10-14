import Ember from 'ember';

export default Ember.Controller.extend({
    fileObject: null,
    actions: {
        uploadStart: function(fileObject) {
            console.log('uploadStart');
            console.log(fileObject);
        },
        uploadSucess: function(fileObject) {
            console.log('uploadSucess');
            console.log(fileObject);
        },
        uploadProgress: function(e){
            console.log('uploadProgress');
        },
        deleteFile: function(fileObject) {
            console.log('deleteFile');
            console.log(fileObject);
        }
    }
});