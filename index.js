let stringOne = prompt('Введите первую строку','');
let stringTwoo = prompt('Введите вторую строку','');
function isAnagram(stringOne, stringTwoo) {
    if (stringOne.trim() === stringTwoo.trim()) {
    return alert('Это одинаковые строки')
    }
    else if (newString(stringOne) === newString(stringTwoo)) {
        alert('Это анаграммы!')
    };
}
function newString(myString) {
    return myString.toLocaleLowerCase().replace(/[.,?\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s+/g, '').split('').sort().join('');
    }
isAnagram(stringOne, stringTwoo)
