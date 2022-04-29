function isNumber(o) {
    return o == '' || !isNaN(o - 0);
}


document.addEventListener('keydown', function (e) {
    if (e.key === 'Backspace') {
        valueDefault = document.getElementById("displayResult").value;
        document.getElementById("displayResult").value = valueDefault.slice(0, -1);
    } else if (e.key === '-') {
        valueDefault = document.getElementById("displayResult").value;
        document.getElementById("displayResult").value = valueDefault + '-';
    } else if (e.key === '+') {
        valueDefault = document.getElementById("displayResult").value;
        document.getElementById("displayResult").value = valueDefault + '+';
    } else if (e.key === '/') {
        valueDefault = document.getElementById("displayResult").value;
        document.getElementById("displayResult").value = valueDefault + '/';
    } else if (e.key === '*') {
        valueDefault = document.getElementById("displayResult").value;
        document.getElementById("displayResult").value = valueDefault + '*';
    } else if (e.key === 'Enter') {
        valueDefault = document.getElementById("displayResult").value.replace(/[^-()\d/*+.]/g, '');
        document.getElementById("displayResult").value = eval(valueDefault);
    } else {
        if (isNumber(e.key)) {
            number = e.key
            valueDefault = document.getElementById("displayResult").value;
            document.getElementById("displayResult").value = valueDefault + number;
        } else {
            return false;
        }
    }
});