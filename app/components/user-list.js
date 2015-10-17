import Ember from 'ember';
import { godForm } from '../mixins/form-component';

export default Ember.Component.extend(godForm, {
    modelName: 'user',
    actions: {
        success: function (action, data) {
            if(action=='delete'){
                this.get('model').removeObject(this.selectedItem);
            }
        }
    }
});
