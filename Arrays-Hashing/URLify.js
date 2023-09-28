function URLify (string, n = string.length) {
    let newstr = '';
    let chars = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            chars++;
            //console.log(chars);
        }
    }
    let spaces = n - chars;
    //console.log(spaces);

    for (let i = 0; i < string.length; i++) {
        if(string[i] === ' ' && spaces > 0) {
            newstr += '20%';
            spaces--;
            //console.log(newstr);
        } else if (string[i] !== ' '){
            newstr += string[i];
        }
    }
    while (spaces > 0) {
        newstr += '20%';
        spaces--;
    }
    return newstr;
}
console.log(URLify('i am iron man',13));