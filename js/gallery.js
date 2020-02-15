function upDate(previewPic){
    var source = previewPic.getAttribute( "src" );
    document.getElementById('image').style.backgroundImage = "url("+source+")";
    document.getElementById('image').innerHTML = previewPic.alt;
}

function unDo(){ 
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML= "Hover over an image below to display here.";
} 