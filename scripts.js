// DES加密
// source: https://segmentfault.com/a/1190000021261107
function encryptByDES(message, key) {
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.ciphertext.toString();
}

// DES解密
// source: https://segmentfault.com/a/1190000021261107
function decryptByDES(ciphertext, key) {
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var decrypted = CryptoJS.DES.decrypt({
        ciphertext: CryptoJS.enc.Hex.parse(ciphertext)
    }, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    var result_value = decrypted.toString(CryptoJS.enc.Utf8);
    return result_value;
}

function getPadding(num, len) {
    var padding = '';
    padding = '0'.repeat(len) + num.toString();
    return padding.substr(-len);
}

function getEncode(text, key = '') {
    const uniChnStart = 0x3400;
    const uniChnLen = 0x6bc0; // 3400 ~ 9FBF

    if (key != '') {
        text = encryptByDES(text, key);
    }

    // base64 text from original text
    var base64Text = '';
    var base = new BASE64;
    base64Text = base.encode(text);
    // // ensures that length of hex translated from base64 is always a multiple of 4
    // if (base64Text.length % 2 === 1){
    //     base64Text += '-';
    // }

    // hex text from base64 text (ascii of base64 chars in hex)
    var hexText = '';
    var hexChar = '';
    for (let i = 0; i < base64Text.length; i++) {
        hexChar = base64Text.substr(i, 1).charCodeAt();
        hexText += hexChar.toString(16);
    }

    // unicode text from hex text (chr of 4-char groups of hex)
    var uniText = '';
    var uniMultiples = []; // 0 or 1
    for (let i = 0; i < hexText.length / 4; i++) {
        uniData = parseInt(hexText.substring(4 * i, 4 * i + 4), 16);

        var uniOffset = uniData % uniChnLen;
        var uniMultiple = (uniData - uniOffset) / uniChnLen;

        uniMultiples.push(uniMultiple);

        uniText += String.fromCharCode(uniOffset + uniChnStart);
    }

    // multiple text that supplements unicode text
    var multipleText = '';
    var multipleCode = '';
    var zeroCount = 0;
    for (let i = 0; i < uniMultiples.length; i++) {
        multiple = uniMultiples[i];
        if (multiple === 0) {
            zeroCount++;
        }
        else {
            if (zeroCount != 0) {
                multipleCode += zeroCount.toString(6).replace('0', '6'); // single digit cannot excede 6, 6 used for 0
                zeroCount = 0;
            }
            multipleCode += '0'; // '0' represents a 1 in the sequence, ironic
        }
    }
    // handles 0s at the end of the sequence
    if (zeroCount != 0) {
        multipleCode += zeroCount.toString(6).replace('0', '6');
        zeroCount = 0;
    }

    multipleFiller = 4 - multipleCode.length % 4;
    multipleCode += '0'.repeat(multipleFiller);
    for (let i = 0; i < multipleCode.length / 4; i++) {
        multipleText += String.fromCharCode(parseInt(multipleCode.substring(i * 4, i * 4 + 4), 16) + uniChnStart);
    }

    // indicative text that supplements result
    var idText = '';
    var idCode = '';
    idCode += multipleText.length.toString(7); // single digit cannot excede 6
    idCode += multipleFiller.toString(); // 0 ~ 3
    idCode = '0'.repeat(4 - idCode.length % 4) + idCode;
    if (idCode.length === 4) {
        idText = String.fromCharCode(parseInt(idCode, 16) + uniChnStart);
    }
    else {
        for (let i = 0; i < idCode.length / 4; i++) {
            idText += String.fromCharCode(parseInt(idCode.substring(i * 4, i * 4 + 4), 16) + uniChnStart);
        }
        alert('请牢记密码子：' + idText.length.toString);
    }

    //return
    return uniText + multipleText + idText;
}

function getDecode(text, idLength, key = '') {
    const uniChnStart = 0x3400;
    const uniChnLen = 0x6bc0; // 3400 ~ 9FBF
    var digit = '';

    // get idText
    var idText = text.substr(-idLength, idLength);
    var idCode = '';
    for (let i = 0; i < idText.length; i++) {
        digit = (idText.charCodeAt() - uniChnStart).toString(16);
        idCode += '0'.repeat(4 - digit.length) + digit;
    }
    var multipleFiller = parseInt(idCode.substr(-1, 1));
    var multipleTextLength = parseInt(idCode.substring(0, idCode.length - 1), 7);

    // get multipleText
    var multipleText = text.substr(-1 - multipleTextLength, multipleTextLength);
    var multipleCode = '';
    for (let i = 0; i < multipleText.length; i++) {
        digit = (multipleText.substr(i, 1).charCodeAt() - uniChnStart).toString(16);
        multipleCode += '0'.repeat(4 - digit.length) + digit;
    }
    multipleCode = multipleCode.substring(0, multipleCode.length - multipleFiller)

    // get uniMultiples
    var uniMultiples = [];
    digit = '';
    for (let i = 0; i < multipleCode.length; i++) {
        if (multipleCode.substr(i, 1) === '0') {
            if (digit != '') {
                digit = digit.replace('6', '0');
                zeroCount = parseInt(digit, 6);
                for (let j = 0; j < zeroCount; j++) {
                    uniMultiples.push(0);
                }
                digit = '';
            }
            uniMultiples.push(1);
        }
        else {
            digit += multipleCode.substr(i, 1);
            zeroCount = parseInt(multipleCode.substr)
        }
    }
    if (digit != '') {
        digit = digit.replace('6', '0');
        zeroCount = parseInt(digit, 6);
        for (let j = 0; j < zeroCount; j++) {
            uniMultiples.push(0);
        }
        digit = '';
    }

    // get uniText
    var uniText = '';
    uniText = text.substring(0, text.length - idLength - multipleTextLength);

    // get hexText
    var hexText = '';
    for (let i = 0; i < uniText.length; i++) {
        var uniData = uniText.substr(i, 1).charCodeAt() - uniChnStart + uniChnLen * uniMultiples[i];
        uniData = uniData.toString(16);
        hexText += uniData;
    }

    // get base64Text
    var base64Text = '';
    for (let i = 0; i < hexText.length / 2; i++) {
        base64Text += String.fromCharCode(parseInt(hexText.substr(2 * i, 2), 16));
    }

    // get original text
    var base = new BASE64;
    if (key === '') {
        return base.decode(base64Text);
    }
    else {
        return decryptByDES(base.decode(base64Text), key);
    }
}

function getText(text, mode) {
    var new_text = '';
    if (mode === 'en') {
        // get char cap
        var cCap = 0;
        var radios = document.getElementsByName('cCap');
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                // do whatever you want with the checked radio
                cCap = radios[i].value;

                // only one radio can be logically checked, don't check the rest
                break;
            }
        }
        if (cCap != 0) {
            var para = 0;
            var maxPara = Math.ceil(text.length / (cCap - 14));
            for (let i = 0; i < maxPara - 1; i++) {
                para++;
                new_text += '陶舟说：“' + text.substr(i * (cCap - 14), cCap - 14)
                    + '。”（' + getPadding(para, 2) + '/' + getPadding(maxPara, 2)
                    + '）\n';
            }
            new_text += '陶舟说：“' + text.substring(para * (cCap - 14), text.length)
                + '。”（' + getPadding(para + 1, 2) + '/' + getPadding(maxPara, 2)
                + '）';
        }
        else {
            new_text += '陶舟说：“' + text + '。”';
        }
    }
    else if (mode === 'ek') {
        var cCap = 0;
        var radios = document.getElementsByName('cCap');
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                // do whatever you want with the checked radio
                cCap = radios[i].value;

                // only one radio can be logically checked, don't check the rest
                break;
            }
        }
        if (cCap != 0) {
            var para = 0;
            var maxPara = Math.ceil(text.length / (cCap - 17));
            for (let i = 0; i < maxPara - 1; i++) {
                para++;
                new_text += '陶舟对某某说：“' + text.substr(i * (cCap - 17), cCap - 17)
                    + '。”（' + getPadding(para, 2) + '/' + getPadding(maxPara, 2)
                    + '）\n';
            }
            new_text += '陶舟对某某说：“' + text.substring(para * (cCap - 17), text.length)
                + '。”（' + getPadding(para + 1, 2) + '/' + getPadding(maxPara, 2)
                + '）';
        }
        else {
            new_text += '陶舟对某某说：“' + text + '。”';
        }
    }
    else if (mode === 'd') {
        new_texts = text.split('\n');
        for (let i = 0; i < new_texts.length; i++) {
            new_text += new_texts[i].substring(new_texts[i].lastIndexOf('“') + 1, new_texts[i].lastIndexOf('。'));
        }
    }
    return new_text;
}

// function name "changeCell" is an allusion to A1
function changeCell(mode) {
    if (mode === 'e') {
        var text = document.getElementById('toTao').value;
        var key = '';
        if (document.getElementById('toTaoKey').disabled === false) {
            if (document.getElementById('toTaoKey').value != '') {
                key = md5(document.getElementById('toTaoKey').value).substring(11, 19);
            }
        }
        new_text = getEncode(text, key);

        var textMode = 'e';
        if (key === '') {
            textMode += 'n';
        }
        else {
            textMode += 'k';
        }

        document.getElementById('fromTao').value = getText(new_text, textMode);
    }
    else if (mode === 'd') {
        var text = document.getElementById('fromTao').value;
        var length = 1;
        if (document.getElementById('fromTaoKey').disabled === false) {
            if (document.getElementById('fromTaoKey').value != '') {
                length = parseInt(document.getElementById('fromTaoKey').value);
            }
        }

        var sampleText = text.split('\n')[0]
        if (sampleText.lastIndexOf('“') === 4) {
            key = '';
        }
        else {
            key = md5(sampleText.substring(3, sampleText.lastIndexOf('说'))).substring(11, 19);
        }

        new_text = getDecode(getText(text, 'd'), length, key);
        document.getElementById('toTao').value = new_text;
    }

}

function changeKeyInput(name, status) {
    if (name === 'toTaoKeyCheck') {
        document.getElementById('toTaoKey').disabled = (!status);
    }
    if (name === 'fromTaoKeyCheck') {
        document.getElementById('fromTaoKey').disabled = (!status);
    }
}