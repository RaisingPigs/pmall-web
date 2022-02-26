function getUrlParam(url) {
    /*由于传输中文会被自动编码传输, 所以需要decodeURI()来解码*/
    const currentHref = decodeURI(url.toString());
    const hrefParamStr = currentHref.slice(currentHref.indexOf('?') + 1, currentHref.length);
    if (hrefParamStr.length > 0) {
        const param = {};
        const mapArr = hrefParamStr.split('&');
        for (const str of mapArr) {
            s = str.split('=');
            param[s[0]] = s[1];
        }

        return param;
    } else {
        return null;
    }
}

/*加载页面原项目自定义js*/
function loadJS(url) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.querySelector('head').appendChild(script);
}