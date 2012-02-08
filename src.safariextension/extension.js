var properties = {
    'window.ontouchstart': null,
    'window.orientation' : 0
};

var generateCode = function (prop) {
    var code = '';
    for (var p in prop) {
        code += p + '=' + prop[p] + '; ';
    }
    return code;
};

var appendScript = function (target) {
    var elem = document.createElement("script");
    elem.type = "text/javascript";
    elem.text = generateCode(properties);
    target.appendChild(elem);
};

document.addEventListener('DOMContentLoaded', function () {
    appendScript(document.head);
});
