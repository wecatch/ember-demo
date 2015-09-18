import Ember from 'ember';

function toFixed(num){
    return parseFloat(num).toFixed(2);
}


export function formatByte(size, unit/*, hash*/) {

    switch(unit){
        case 'k':
            return toFixed(parseInt(size)/1024) + ' KB';
        case 'm':
            return toFixed(parseInt(size)/(1024*1024)) + ' MB';
        case 'g':
            return toFixed(parseInt(size)/(1024*1024*1024)) + ' GB';
        default:
            return toFixed(parseInt(size)/1024) + ' KB';
    }
}

export default Ember.Helper.helper(formatByte);
