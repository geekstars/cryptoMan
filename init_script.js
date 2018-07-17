function initGTransView() {
    var classNoTranslate = " notranslate";
    var translateExist = document.getElementById('google_translate_element');
    if(translateExist != undefined) {
        return;
    }

    // Insert google translate
    var div = document.createElement('div');
    div.id = 'google_translate_element';
    div.style.zIndex = '20000000 !important';
    div.style.height = '60px';
    div.style.width = '100%';
    div.style.top = '0 !important';
    div.style.left = '0 !important';
    div.style.right = '0 !important';
    div.style.position = 'fixed !important';
    var scrpt1 = document.createElement('script');
    scrpt1.type = 'text/javascript';
    scrpt1.innerHTML = 'function googleTranslateElementInit() {new google.translate.TranslateElement({pageLanguage: \'en\', includedLanguages: \'vi\', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL, autoDisplay: true}, \'google_translate_element\');}';
    var scrpt2 = document.createElement('script');
    scrpt2.type = 'text/javascript';
    scrpt2.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    var node = document.getElementsByTagName('body');
    if (node != undefined && node.length > 0) {
        var bodyNode = node[0];
        var firstNode = bodyNode.firstChild;
        if (firstNode != undefined) {
            var wrap = document.createElement('div');
            wrap.appendChild(div);
            wrap.appendChild(scrpt1);
            wrap.appendChild(scrpt2);
            bodyNode.insertBefore(wrap, firstNode);
        }
    }
    // Remove header
    var header = document.getElementsByTagName('header');
    if(header !== undefined && header.length > 0) {
        header = header[0];
        header.parentNode.removeChild(header);
    }
    // nulltx header
    header = document.getElementsByClassName('td-header-wrap tdm-header');
    if(header !== undefined && header.length > 0) {
        header = header[0];
        header.parentNode.removeChild(header);
        return;
    }
    // Coindesk
    header = document.getElementsByClassName('header navigation');
    if(header !== undefined && header.length > 0) {
        header = header[0];
        header.parentNode.removeChild(header);
        return;
    }
    // News.bitcoin
    header = document.getElementById('btctm-top');
    if(header !== undefined) {
        header.parentNode.removeChild(header);
    }
    header = document.getElementsByClassName('td-header-menu-wrap-full');
    if(header !== undefined && header.length > 0) {
        header = header[0];
        header.parentNode.removeChild(header);
        return;
    }
    // bitcoinist
    header = document.getElementsByClassName('extra-header');
    if(header !== undefined && header.length > 0) {
        header = header[0];
        header.parentNode.removeChild(header);
        return;
    }
};