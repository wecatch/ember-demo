import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {
    path: '/'
  });
  this.route('demo', function() {
    this.route('ui-alert');
    this.route('ui-input');
    this.route('ui-button');
    this.route('ui-panel');
    this.route('ui-checkbox');
    this.route('ui-checkbox-group');
    this.route('ui-select');
    this.route('ui-select-2');
    this.route('ui-multi-select');
    this.route('ui-dropdown');
    this.route('ui-radio');
    this.route('ui-radio-group');
    this.route('ui-label');
    this.route('ui-modal');
    this.route('ui-form');
    this.route('ui-progress');
    this.route('ui-link');
    this.route('ui-labeled-input');
    this.route('form');
    this.route('file-input');
    this.route('ui-uploader');
    this.route('ui-input-tags');
  });
  this.route('user', function() {
    this.route('new');
    this.route('paper');
  });

  this.route('status', function(){
    this.route('google');
    this.route('facebook');
  });

  this.route('block-params', function(){

  });

});

export default Router;