import Ember from 'ember';
import model from 'ember-easy-orm/mixins/model'

model.reopen({
    dataRootKey: 'res'
});

export default Ember.Mixin.create(model, {
    
});
