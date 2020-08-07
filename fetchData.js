window.onload = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "fetchData.php", true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            if (xhr.responseText == '') {
                document.getElementById('records-container').innerHTML = 'Nėra įrašų duomenų bazėje.'
            } else
                document.getElementById('records-container').innerHTML = xhr.responseText;
        }
    }
    xhr.send();
}
