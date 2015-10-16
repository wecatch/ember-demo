import Ember from 'ember';
import { godComponent } from '../mixins/form-component';

export default Ember.Component.extend(godComponent, {
    modelName: 'user',
    actions: {
        success: function (action, data) {
            if(action=='delete'){
                this.get('model').removeObject(this.selectedItem);
            }
        }
    }
});
