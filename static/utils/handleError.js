function handleCode(code, msg, returnPageInfo) {
    if (Number(code) === 200 || Number(code) === 201 || Number(code) === 204) {
        return true;
    } else if (Number(code) === 401) {
        /*当在其他页面未登录时, 出现401未登录响应, 那么就将原页面信息放到路径中以便登录后自动跳回去*/
        if (returnPageInfo) {
            const uri = JSON.stringify(returnPageInfo);
            window.location.href = `login.html?code=${code}&msg=${msg}&returnPageInfo=${uri}`;
        } else {
            window.location.href = `login.html?code=${code}&msg=${msg}`;
        }
        return false;
    } else if (Number(code) === 403) {
        alert(msg);
        window.location.href = `index.html`;
        return false;
    } else {
        window.location.href = `error.html`;
        return false;
    }
}
