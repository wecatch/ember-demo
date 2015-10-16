import Ember from 'ember';
import FormComponentMixin from '../../../mixins/form-component';
import { module, test } from 'qunit';

module('Unit | Mixin | form component');

// Replace this with your real tests.
test('it works', function(assert) {
  var FormComponentObject = Ember.Object.extend(FormComponentMixin);
  var subject = FormComponentObject.create();
  assert.ok(subject);
});
