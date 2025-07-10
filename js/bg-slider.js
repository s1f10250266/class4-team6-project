(function(){
  var images = [ 
    'picture/landscape.jpg', 
    'picture/temple.jpg', 
    'picture/temple-map.jpg' 
  ]; 
  images.forEach(function(src){ 
    var img = new Image(); 
    img.src = src; 
  }); 
  var idx = 0, body = document.body; 
  function changeBg(){ 
    body.style.backgroundImage = 'url(' + images[idx] + ')'; 
    idx = (idx + 1) % images.length; 
  } 
  changeBg(); 
  setInterval(changeBg, 5000); 
})(); 
