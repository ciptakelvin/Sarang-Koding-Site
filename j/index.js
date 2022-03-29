window.onload=function(){

    var content="";
    for(var n of news){
        
        content+="<div id='news-card'>";
        content+="<b>"+n["title"]+"</b><br>";
        content+="<p>"+n["date"]+"</p><br>";
        content+="<img src='"+n["cover"]+"'></img><br>";
        content+="<p class='justify'>"+n["content"]+"</p><br>";
        content+="</div>";
    }
    document.getElementById("index-news").innerHTML+=content;

    document.getElementById("index-featured").innerHTML+='<center><h2>Who Played Our Games</h2><br><iframe id="featured-iframe" width="360" height="215" src="'+featured_videos[Math.floor(Math.random()*featured_videos.length)]+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>';
}

