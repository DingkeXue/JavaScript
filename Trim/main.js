/*
* 去掉字符串中的字符，要去分别能去掉前、后、前后、中间的空格
* */
function trim(str, position) {
    switch (position) {
        case 'left':
            return str.replace(/^\s*/, '');
        case 'right':
            return str.replace(/(\s*$)/g, '');
        case 'both':
            return str.replace(/^\s*|\s*$/g, '');
        case 'middle':
            return str.match(/(^\s*)/g)[0] + str.replace(/\s*/g, '') + str.match(/(\s*$)/g)[0];
        default:
            return str.replace(/\s*/g, '');
    }
}

console.log('trim:', trim('       s d  d    ', 'middle'), 1);

