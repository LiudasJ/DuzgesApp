console.log(window);
window.onload = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "fetchData.php", true);
    xhr.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            document.getElementById('table').innerHTML = this.responseText;
            
        }
    }
    xhr.send();
}