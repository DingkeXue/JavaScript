function trim(str) {
    let reg = /(^\s*|\s*$)/g;
    return str.replace(reg, '');
}
console.log('trim:',trim('       ss      '), 1);
