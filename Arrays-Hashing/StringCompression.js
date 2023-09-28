let compression = (s) => {
    let str2 = '';
    let count = 1;
    
    for (let i = 0; i < s.length; i++) {
        let current = s[i];
        let next = s[i + 1];
        if (current === next) {
            count++;
        }else {
            str2 += current + String(count);
            count = 1;
        }
    }
    return str2.length < s.length ? str2 : s;
}

console.log(compression('aabbcccdd') === 'a2b2c3d2');
console.log(compression('aabbcccdd'));