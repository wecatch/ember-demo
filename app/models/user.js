import Ember from 'ember';
import model from '../mixins/model'

export default Ember.Object.extend(model, {
    url: '/v1/user',
    model: {
        'gender': '1',
        'nickname':'',
        'name': '',
        'province': '',
        'city':'',
        'area':'',
        'category':[]
    },
    rootKey: 'user'
});
