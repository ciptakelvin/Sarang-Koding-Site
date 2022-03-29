window.onload=function(){
    var content="";
    for(var i=0;i<3;i++){
        content+="<div id='news-card'>";
        content+="<b>"+news[i]["title"]+"</b><br>";
        content+="<p class='card-date'>"+news[i]["date"]+"</p><br>";
        content+="<img onload='finishLoading()' src='"+news[i]["cover"]+"'></img><br>";
        content+="<p class='justify'>"+news[i]["content"]+"</p><br>";
        content+="</div>";
    }
    document.getElementById("index-news").innerHTML+=content;

    document.getElementById("index-featured").innerHTML+='<center><h2>Who Played Our Games</h2><br><iframe onload="finishLoading()" id="featured-iframe" width="360" height="215" src="'+featured_videos[Math.floor(Math.random()*featured_videos.length)]+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>';
}

var loadCtr=0;
var maxLoadCtr=5;
function finishLoading(){
    loadCtr+=1;
    if (loadCtr>=maxLoadCtr){
        document.getElementById("loader").style.display="none";
    }
}