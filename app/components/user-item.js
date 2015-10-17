import Ember from 'ember';
import { formComponent } from 'ember-easy-orm/mixins/form';


export default Ember.Component.extend(formComponent, {
    model: null,
    modelName: 'user',
});
