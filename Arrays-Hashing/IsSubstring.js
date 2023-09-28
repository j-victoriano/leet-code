let isSubstring = (s1, s2) => {
    if (s1.length === s2.length) {
        let s1s1 = s1 + s1;
        if (s1s1.includes(s2)){
            return true;
        }
        return false;
    }
    return false;
}

console.log(isSubstring('waterbottle', 'erbottlewat'));
console.log(isSubstring('mybroisawesome', 'roisawesomemyb'));