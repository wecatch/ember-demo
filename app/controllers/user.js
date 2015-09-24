import Ember from 'ember';
import form from 'ember-easy-orm/mixins/form'

export default Ember.Controller.extend(form, {
    modelName:'user',
    actions: {
        callback: function (action, data) {
            console.log(action);
            console.log(data);
            this.toggleProperty('formModalShow');
        }
    }
});
