window.onload = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "fetchData.php", true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('table').innerHTML += xhr.responseText;
        }
    }
    xhr.send();
}
