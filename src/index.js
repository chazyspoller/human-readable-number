module.exports = function toReadable(number) {
    const simpleNums = {
        '0': '',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
    };

    const tensNums = {
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
    };

    const wordEx = {
        '1': '',
        '2': 'ty ',
        '3': ' hundred ',
        '4': ' thousand ',
    };

    const checkSpecial = (x) => {
        switch (x) {
            case '2': return 'twen';
            case '3': return 'thir';
            case '4': return 'for';
            case '5': return 'fif';
            case '8': return 'eigh';
            default: return simpleNums[x];
        }
    };

    const numStr = number.toString();
    const numLength = numStr.length;
    let res = '';

    if (number === 0) return 'zero';

    for (let i = 0; i < numLength; i++) {

        if (numLength > 1 && i === (numLength - 2) && numStr[i] === '1') {
            res += tensNums[numStr.slice(i)];
            break;
        }

        if (i === (numLength - 2) && numLength > 1) {
            res += checkSpecial(numStr[i]);
        } else {
            res += simpleNums[numStr[i]];
        }

        if ((Math.floor(number / (10 ** (numLength - i - 1)) % 10)) > 0) {
            res += wordEx[numLength - i];
        }
    }

    return res.trim();
}
