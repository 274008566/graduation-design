export function getTxt(url,dom) {
    var xmlHttpReq = null;
    // if(window.ActiveXObject){
    //     xmlHttpReq = new ActiveXObject('Microsoft.XMLHTTP');
    // }else if(window.XMLHttpRequest){
    //     xmlHttpReq = new XMLHttpRequest();
    // }
    xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open('GET',url,true);
    xmlHttpReq.onreadystatechange = RequestCallBack;
    xmlHttpReq.send();
    function RequestCallBack() {
        if(xmlHttpReq.readyState ===4){
            if(xmlHttpReq.status === 200){
                document.getElementById(dom).innerHTML = xmlHttpReq.responseText;
            }
        }
    }
}