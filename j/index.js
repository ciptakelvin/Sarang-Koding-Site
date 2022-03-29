var xhr = new XMLHttpRequest();
xhr.open('GET', 'text.txt', true);
xhr.send();


function loadDoc(){
    alert(xhr.responseText);
}