let oneAway = (s1, s2) => {
    let edits = 1;
    let long = s1.length > s2.length ? s1 : s2;
    let short = s1.length <= s2.length ? s1 : s2;

    let maxLen = Math.max(s1.length, s2.length);
    let diff = long.length - short.length;

    if (diff > edits) {
        return false;
    }

    for (let i=0, j=0; i < maxLen || j < maxLen; i++, j++) {
        let c1 = long[i];
        let c2 = short[j];

        if (c1 !== c2) {
            edits--;
            if (edits < 0) {
                return false;
            }
            if (long[i+1] === c2){
                i++;
            }
        }
    }
    return true;
}

console.log(oneAway('abcd', 'abc'), oneAway('paperss', 'paperss'));