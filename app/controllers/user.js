import Ember from 'ember';
import form from 'ember-easy-orm/mixins/form'

export default Ember.Controller.extend(form, {
    modelName:'user'
});
