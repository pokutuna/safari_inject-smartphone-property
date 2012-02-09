safari.application.addEventListener('message', function (event) {
    var applyAllSites = safari.extension.settings.getItem('applyAllSites');
    var urlPattern = safari.extension.settings.getItem('urlPattern');
    
    if (applyAllSites === true) {
        event.target.page.dispatchMessage(event.name, true);
    } else if (urlPattern != "" && event.message.match(new RegExp(urlPattern))) {
        event.target.page.dispatchMessage(event.name, true);
    } else {
        event.target.page.dispatchMessage(event.name, false);
    }
    return;
});
