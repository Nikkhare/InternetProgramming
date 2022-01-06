var imageLoader = document.getElementById('imageLoader');
    imageLoader.addEventListener('change', handleImage, false);
var canvas = document.getElementById('imageCanvas');
var ctx = canvas.getContext('2d');

function handleImage(uploadImgFile){
var reader = new FileReader();
reader.onload = function(event){
    var img = new Image();
    img.onload = function(){
        canvas.width = 500;
        canvas.height = 500;
        ctx.drawImage(img,0,0,img.width,img.height,0,0,500,500);
    }
    img.src = event.target.result;
}
reader.readAsDataURL(uploadImgFile.target.files[0]);     
}