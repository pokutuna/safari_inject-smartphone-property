var properties = {
    'window.ontouchstart': null,
    'window.ontouchmove' : null,
    'window.ontouchend'  : null,
    'window.orientation' : 0
};

var generateCode = function (prop) {
    var code = '';
    for (var p in prop) {
        code += p + '||(' + p + '=' + prop[p] + '); ';
    }
    return code;
};

var appendScript = function (target) {
    var elem = document.createElement("script");
    elem.type = "text/javascript";
    elem.text = generateCode(properties);
    target.appendChild(elem);
};

var execute = function () {
    document.addEventListener('DOMContentLoaded', function () {
        appendScript(document.head);
    });
};

var messageCallback = function (event) {
    if (event.name === "url" && event.message === true) execute();
};

safari.self.addEventListener('message', messageCallback, false);

safari.self.tab.dispatchMessage('url', location.href);
