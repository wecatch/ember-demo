import Ember from 'ember';
import model from '../mixins/model'

export default Ember.Object.extend(model, {
    host: '',
    url: '/v1/wallpaper/wallpaper',
    model: {
        'gender': '1',
        'nickname':'',
        'name': '',
        'province': '',
        'city':'',
        'area':'',
        'category':[]
    },
    rootKey: 'wallpaper',
    dataRootKey: 'res',
});
