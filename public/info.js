var request = new XMLHttpRequest();

request.open('GET', 'https://api.ipdata.co/?api-key=test');

request.setRequestHeader('Accept', 'application/json');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    //a(this.responseText);
  }
};

request.send();
function ajax(info) {
    const http = new XMLHttpRequest();
    const url = 'http://lvm.me:3000'
    onreadystatechange = function() {
        if (this.readystate===4 && this.status===200) {
            console.log(this.responseText);
        }
        http.open('POST',url)
        http.send()
    }
}
ajax('.')