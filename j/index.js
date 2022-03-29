window.onload=function(){

    var content="";
    for(var n of news){
        
        content+="<div id='news-card'>";
        content+="<b>"+n["title"]+"</b><br>";
        content+="<p>"+n["date"]+"</p><br>";
        content+="<img src='"+n["cover"]+"'></img><br>";
        content+="<p>"+n["content"]+"</p><br>";
        content+="</div>";
    }
    document.getElementById("index-news").innerHTML+=content;
}