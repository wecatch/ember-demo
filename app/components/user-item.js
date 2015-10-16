import Ember from 'ember';
import { formComponent } from '../mixins/form-component';


export default Ember.Component.extend(formComponent, {
    model: null,
});
