import Ember from 'ember';
import { godForm } from '../../mixins/form-component';

export default Ember.Controller.extend(godForm, {
    modelName: 'user'
});
