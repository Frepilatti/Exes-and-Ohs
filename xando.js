function XO(str) {
    let str1 = str.toLowerCase();
    let ar = str1.split('');
    let arX = [];
    let arO = [];

    for (i = 0; i < ar.length; i++){
        if (ar[i] === 'x'){
            arX.push(ar[i]);
        } else if (ar[i] === 'o') {
            arO.push(ar[i]);
        }
    }
    if (arX.length == arO.length) {
        return true;
    } else {
        return false;
    }
}