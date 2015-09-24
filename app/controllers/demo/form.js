import Ember from 'ember';
import { area } from '../../utils/area';
import { province } from '../../utils/province';
import { city } from '../../utils/city';


let category = [{
    "name": "美女",
    "id": "4e4d610cdf714d2966000000"
}, {
    "name": "情感",
    "id": "4ef0a35c0569795756000000"
}, {
    "name": "风景",
    "id": "4e4d610cdf714d2966000002"
}, {
    "name": "动漫",
    "id": "4e4d610cdf714d2966000003"
}, {
    "name": "文字",
    "id": "5109e04e48d5b9364ae9ac45"
}, {
    "name": "明星",
    "id": "5109e05248d5b9368bb559dc"
}, {
    "name": "城市",
    "id": "4fb47a305ba1c60ca5000223"
}, {
    "name": "视觉",
    "id": "4fb479f75ba1c65561000027"
}, {
    "name": "设计",
    "id": "4fb47a195ba1c60ca5000222"
}, {
    "name": "物语",
    "id": "4fb47a465ba1c65561000028"
}, {
    "name": "其他",
    "id": "4e4d610cdf714d2966000004"
}, {
    "name": "机械",
    "id": "4e4d610cdf714d2966000005"
}, {
    "name": "男人",
    "id": "4e4d610cdf714d2966000006"
}, {
    "name": "动物",
    "id": "4e4d610cdf714d2966000001"
}, {
    "name": "游戏",
    "id": "4e4d610cdf714d2966000007"
}, {
    "name": "艺术",
    "id": "4ef0a3330569795757000000"
}, {
    "name": "运动",
    "id": "4ef0a34e0569795757000001"
}, {
    "name": "影视",
    "id": "4e58c2570569791a19000000"
}];

let gender = [{
    'name': 'boy',
    'value': '1'
}, {
    'name': 'girl',
    'value': '0'
}, ];

export default Ember.Controller.extend({
    provinceOptions: province,
    cityOptions: [],
    areaOptions: [],
    tags: ['a', 'b', 'c', 'd'],
    isAgree: false,
    category: category,
    genderOptions: gender,
    provinceChange: Ember.observer('model.province', function() {
        let province = this.get('model.province');
        this.set('cityOptions', province ? city[province] : []);
        this.set('areaOptions', []);
    }),
    cityChange: Ember.observer('model.city', function() {
        let city = this.get('model.city');
        this.set('areaOptions', city ? area[city] : []);
    })
});