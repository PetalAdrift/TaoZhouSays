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

function getEncode(gNqjw_ZzC1, IOrDnLVl_2 = '') {    const uniChnStart = 0x3400;    const uniChnLen = 0x6bc0;     if (IOrDnLVl_2 != '') {        gNqjw_ZzC1 = encryptByDES(gNqjw_ZzC1, IOrDnLVl_2);    }        var czOYkmDGJ3 = '';    var bRzTDl4 = new BASE64;    czOYkmDGJ3 = bRzTDl4["\x65\x6e\x63\x6f\x64\x65"](gNqjw_ZzC1);                        var qrGoiB5 = '';    var YsiNkd6 = '';    for (let i = 0; i < czOYkmDGJ3["\x6c\x65\x6e\x67\x74\x68"]; i++) {        YsiNkd6 = czOYkmDGJ3["\x73\x75\x62\x73\x74\x72"](i, 1)["\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74"]();        qrGoiB5 += YsiNkd6["\x74\x6f\x53\x74\x72\x69\x6e\x67"](16);    }        var ZSsFC7 = '';    var nphDsnSn8 = [];     for (let i = 0; i < qrGoiB5["\x6c\x65\x6e\x67\x74\x68"] / 4; i++) {        uniData = window["\x70\x61\x72\x73\x65\x49\x6e\x74"](qrGoiB5["\x73\x75\x62\x73\x74\x72\x69\x6e\x67"](4 * i, 4 * i + 4), 16);        var OHZn9 = uniData % uniChnLen;        var Qd__j10 = (uniData - OHZn9) / uniChnLen;        nphDsnSn8["\x70\x75\x73\x68"](Qd__j10);        ZSsFC7 += window["\x53\x74\x72\x69\x6e\x67"]["\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65"](OHZn9 + uniChnStart);    }        var ooUI11 = '';    var b12 = '';    var i13 = 0;    for (let i = 0; i < nphDsnSn8["\x6c\x65\x6e\x67\x74\x68"]; i++) {        multiple = nphDsnSn8[i];        if (multiple === 0) {            i13++;        }        else {            if (i13 != 0) {                b12 += i13["\x74\x6f\x53\x74\x72\x69\x6e\x67"](6)["\x72\x65\x70\x6c\x61\x63\x65"]('\x30', '\x36');                 i13 = 0;            }            b12 += '\x30';         }    }        if (i13 != 0) {        b12 += i13["\x74\x6f\x53\x74\x72\x69\x6e\x67"](6)["\x72\x65\x70\x6c\x61\x63\x65"]('\x30', '\x36');        i13 = 0;    }    multipleFiller = 4 - b12["\x6c\x65\x6e\x67\x74\x68"] % 4;    b12 += '\x30'["\x72\x65\x70\x65\x61\x74"](multipleFiller);    for (let i = 0; i < b12["\x6c\x65\x6e\x67\x74\x68"] / 4; i++) {        ooUI11 += window["\x53\x74\x72\x69\x6e\x67"]["\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65"](window["\x70\x61\x72\x73\x65\x49\x6e\x74"](b12["\x73\x75\x62\x73\x74\x72\x69\x6e\x67"](i * 4, i * 4 + 4), 16) + uniChnStart);    }        var WqBcIPO14 = '';    var Y$Ensz15 = '';    Y$Ensz15 += ooUI11["\x6c\x65\x6e\x67\x74\x68"]["\x74\x6f\x53\x74\x72\x69\x6e\x67"](7);     Y$Ensz15 += multipleFiller["\x74\x6f\x53\x74\x72\x69\x6e\x67"]();     Y$Ensz15 = '\x30'["\x72\x65\x70\x65\x61\x74"](4 - Y$Ensz15["\x6c\x65\x6e\x67\x74\x68"] % 4) + Y$Ensz15;    if (Y$Ensz15["\x6c\x65\x6e\x67\x74\x68"] === 4) {        WqBcIPO14 = window["\x53\x74\x72\x69\x6e\x67"]["\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65"](window["\x70\x61\x72\x73\x65\x49\x6e\x74"](Y$Ensz15, 16) + uniChnStart);    }    else {        for (let i = 0; i < Y$Ensz15["\x6c\x65\x6e\x67\x74\x68"] / 4; i++) {            WqBcIPO14 += window["\x53\x74\x72\x69\x6e\x67"]["\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65"](window["\x70\x61\x72\x73\x65\x49\x6e\x74"](Y$Ensz15["\x73\x75\x62\x73\x74\x72\x69\x6e\x67"](i * 4, i * 4 + 4), 16) + uniChnStart);        }        window["\x61\x6c\x65\x72\x74"]('\u8bf7\u7262\u8bb0\u5bc6\u7801\u5b50\uff1a' + WqBcIPO14["\x6c\x65\x6e\x67\x74\x68"]["\x74\x6f\x53\x74\x72\x69\x6e\x67"]);    }        return ZSsFC7 + ooUI11 + WqBcIPO14;}

function getDecode(c1, wLfTl2, WzGC3 = '') {    const uniChnStart = 0x3400;    const uniChnLen = 0x6bc0;     var AAeBlMlh4 = '';        var s5 = c1["\x73\x75\x62\x73\x74\x72"](-wLfTl2, e6);    var J7 = '';    for (let i = 0; i < s5["\x6c\x65\x6e\x67\x74\x68"]; i++) {        AAeBlMlh4 = (s5["\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74"]() - uniChnStart)["\x74\x6f\x53\x74\x72\x69\x6e\x67"](16);        J7 += '\x30'["\x72\x65\x70\x65\x61\x74"](4 - AAeBlMlh4["\x6c\x65\x6e\x67\x74\x68"]) + AAeBlMlh4;    }    var jXd8 = window["\x70\x61\x72\x73\x65\x49\x6e\x74"](J7["\x73\x75\x62\x73\x74\x72"](-1, 1));    var MLKOI9 = window["\x70\x61\x72\x73\x65\x49\x6e\x74"](J7["\x73\x75\x62\x73\x74\x72\x69\x6e\x67"](0, J7["\x6c\x65\x6e\x67\x74\x68"] - 1), 7);        var AajPKYMsP11 = c1["\x73\x75\x62\x73\x74\x72"](-1 - MLKOI9, MLKOI9);    var vTseR13 = '';    for (let i = 0; i < AajPKYMsP11["\x6c\x65\x6e\x67\x74\x68"]; i++) {        AAeBlMlh4 = (AajPKYMsP11["\x73\x75\x62\x73\x74\x72"](i, 1)["\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74"]() - uniChnStart)["\x74\x6f\x53\x74\x72\x69\x6e\x67"](16);        vTseR13 += '\x30'["\x72\x65\x70\x65\x61\x74"](4 - AAeBlMlh4["\x6c\x65\x6e\x67\x74\x68"]) + AAeBlMlh4;    }    vTseR13 = vTseR13["\x73\x75\x62\x73\x74\x72\x69\x6e\x67"](0, vTseR13["\x6c\x65\x6e\x67\x74\x68"] - jXd8);        var GDsQe14 = [];    AAeBlMlh4 = '';    for (let i = 0; i < vTseR13["\x6c\x65\x6e\x67\x74\x68"]; i++) {        if (vTseR13["\x73\x75\x62\x73\x74\x72"](i, 1) === '\x30') {            if (AAeBlMlh4 != '') {                AAeBlMlh4 = AAeBlMlh4["\x72\x65\x70\x6c\x61\x63\x65"]('\x36', '\x30');                zeroCount = window["\x70\x61\x72\x73\x65\x49\x6e\x74"](AAeBlMlh4, 6);                for (let j = 0; j < zeroCount; j++) {                    GDsQe14["\x70\x75\x73\x68"](0);                }                AAeBlMlh4 = '';            }            GDsQe14["\x70\x75\x73\x68"](1);        }        else {            AAeBlMlh4 += vTseR13["\x73\x75\x62\x73\x74\x72"](i, 1);            zeroCount = window["\x70\x61\x72\x73\x65\x49\x6e\x74"](vTseR13["\x73\x75\x62\x73\x74\x72"])        }    }    if (AAeBlMlh4 != '') {        AAeBlMlh4 = AAeBlMlh4["\x72\x65\x70\x6c\x61\x63\x65"]('\x36', '\x30');        zeroCount = window["\x70\x61\x72\x73\x65\x49\x6e\x74"](AAeBlMlh4, 6);        for (let j = 0; j < zeroCount; j++) {            GDsQe14["\x70\x75\x73\x68"](0);        }        AAeBlMlh4 = '';    }        var c$WqpRHD15 = '';    c$WqpRHD15 = c1["\x73\x75\x62\x73\x74\x72\x69\x6e\x67"](0, c1["\x6c\x65\x6e\x67\x74\x68"] - e6 - MLKOI9);        var BDESALI16 = '';    for (let i = 0; i < c$WqpRHD15["\x6c\x65\x6e\x67\x74\x68"]; i++) {        var CG_kPJcov17 = c$WqpRHD15["\x73\x75\x62\x73\x74\x72"](i, 1)["\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74"]() - sGpAcrIX18 + Zem19 * BOgovAp20[i];        CG_kPJcov17 = CG_kPJcov17["\x74\x6f\x53\x74\x72\x69\x6e\x67"](16);        BDESALI16 += CG_kPJcov17;    }        var gGHX$uC21 = '';    for (let i = 0; i < BDESALI16["\x6c\x65\x6e\x67\x74\x68"] / 2; i++) {        gGHX$uC21 += window["\x53\x74\x72\x69\x6e\x67"]["\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65"](window["\x70\x61\x72\x73\x65\x49\x6e\x74"](BDESALI16["\x73\x75\x62\x73\x74\x72"](2 * i, 2), 16));    }        var PzwktU22 = new BASE64;    if (WzGC3 === '') {        return PzwktU22["\x64\x65\x63\x6f\x64\x65"](gGHX$uC21);    }    else {        return decryptByDES(PzwktU22["\x64\x65\x63\x6f\x64\x65"](gGHX$uC21), WzGC3);    }}

function getText(nnHj1, $TleCv2) {    var Ffjrjn3 = '';    if ($TleCv2 === '\x65\x6e') {                var AJX4 = 0;        var pFU5 = window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]["\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x73\x42\x79\x4e\x61\x6d\x65"]('\x63\x43\x61\x70');        for (var ZUrT$6 = 0, ogkk_knoJ7 = pFU5["\x6c\x65\x6e\x67\x74\x68"]; ZUrT$6 < ogkk_knoJ7; ZUrT$6++) {            if (pFU5[ZUrT$6]["\x63\x68\x65\x63\x6b\x65\x64"]) {                                AJX4 = pFU5[ZUrT$6]["\x76\x61\x6c\x75\x65"];                                break;            }        }        if (AJX4 != 0) {            var P8 = 0;            var tTXgda9 = window["\x4d\x61\x74\x68"]["\x63\x65\x69\x6c"](nnHj1["\x6c\x65\x6e\x67\x74\x68"] / (AJX4 - 14));            for (let ZUrT$6 = 0; ZUrT$6 < tTXgda9 - 1; ZUrT$6++) {                P8++;                Ffjrjn3 += '\u9676\u821f\u8bf4\uff1a\u201c' + nnHj1["\x73\x75\x62\x73\x74\x72"](ZUrT$6 * (AJX4 - 14), AJX4 - 14)                    + '\u3002\u201d\uff08' + getPadding(P8, 2) + '\x2f' + getPadding(tTXgda9, 2)                    + '\uff09\n';            }            Ffjrjn3 += '\u9676\u821f\u8bf4\uff1a\u201c' + nnHj1["\x73\x75\x62\x73\x74\x72\x69\x6e\x67"](P8 * (AJX4 - 14), nnHj1["\x6c\x65\x6e\x67\x74\x68"])                + '\u3002\u201d\uff08' + getPadding(P8 + 1, 2) + '\x2f' + getPadding(tTXgda9, 2)                + '\uff09';        }        else {            Ffjrjn3 += '\u9676\u821f\u8bf4\uff1a\u201c' + nnHj1 + '\u3002\u201d';        }    }    else if ($TleCv2 === '\x65\x6b') {        var TTHGVvovL10 = 0;        var M_l11 = window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]["\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x73\x42\x79\x4e\x61\x6d\x65"]('\x63\x43\x61\x70');        for (var LhscFK12 = 0, PLlNE13 = M_l11["\x6c\x65\x6e\x67\x74\x68"]; LhscFK12 < PLlNE13; LhscFK12++) {            if (M_l11[LhscFK12]["\x63\x68\x65\x63\x6b\x65\x64"]) {                                TTHGVvovL10 = M_l11[LhscFK12]["\x76\x61\x6c\x75\x65"];                                break;            }        }        if (TTHGVvovL10 != 0) {            var ggDiyJKEA14 = 0;            var abfLsPYvC15 = window["\x4d\x61\x74\x68"]["\x63\x65\x69\x6c"](nnHj1["\x6c\x65\x6e\x67\x74\x68"] / (TTHGVvovL10 - 17));            for (let LhscFK12 = 0; LhscFK12 < abfLsPYvC15 - 1; LhscFK12++) {                ggDiyJKEA14++;                Ffjrjn3 += '\u9676\u821f\u5bf9\u67d0\u67d0\u8bf4\uff1a\u201c' + nnHj1["\x73\x75\x62\x73\x74\x72"](LhscFK12 * (TTHGVvovL10 - 17), TTHGVvovL10 - 17)                    + '\u3002\u201d\uff08' + getPadding(ggDiyJKEA14, 2) + '\x2f' + getPadding(abfLsPYvC15, 2)                    + '\uff09\n';            }            Ffjrjn3 += '\u9676\u821f\u5bf9\u67d0\u67d0\u8bf4\uff1a\u201c' + nnHj1["\x73\x75\x62\x73\x74\x72\x69\x6e\x67"](ggDiyJKEA14 * (TTHGVvovL10 - 17), nnHj1["\x6c\x65\x6e\x67\x74\x68"])                + '\u3002\u201d\uff08' + getPadding(ggDiyJKEA14 + 1, 2) + '\x2f' + getPadding(abfLsPYvC15, 2)                + '\uff09';        }        else {            Ffjrjn3 += '\u9676\u821f\u5bf9\u67d0\u67d0\u8bf4\uff1a\u201c' + nnHj1 + '\u3002\u201d';        }    }    else if ($TleCv2 === '\x64') {        new_texts = nnHj1["\x73\x70\x6c\x69\x74"]('\n');        for (let i = 0; i < new_texts["\x6c\x65\x6e\x67\x74\x68"]; i++) {            Ffjrjn3 += new_texts[i]["\x73\x75\x62\x73\x74\x72\x69\x6e\x67"](new_texts[i]["\x6c\x61\x73\x74\x49\x6e\x64\x65\x78\x4f\x66"]('\u201c') + 1, new_texts[i]["\x6c\x61\x73\x74\x49\x6e\x64\x65\x78\x4f\x66"]('\u3002'));        }    }    return Ffjrjn3;}

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