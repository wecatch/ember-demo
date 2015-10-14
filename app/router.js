import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path:'/'});
  this.route('demo', function(){
      this.route('ui-alert');
      this.route('ui-input');
      this.route('ui-button');
      this.route('ui-panel');
      this.route('ui-checkbox');
      this.route('ui-checkbox-group');
      this.route('ui-select');
      this.route('ui-multi-select');
      this.route('ui-dropdown');
      this.route('ui-radio');
      this.route('ui-radio-group');
      this.route('ui-label');
      this.route('ui-modal');
      this.route('ui-form');
      this.route('ui-progress');
      this.route('ui-labeled-input');
      this.route('form');
      this.route('file-input');
      this.route('ui-uploader');
  });
  this.route('user');
});

export default Router;
