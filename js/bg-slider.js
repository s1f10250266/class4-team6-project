(function(){ 
  // 切り替えたい画像のパスを配列で持つ 
  var images = [ 
    'picture/landscape.jpg', 
    'picture/temple.jpg', 
    'picture/temple-map.jpg' 
  ]; 
  // preload（任意） 
  images.forEach(function(src){ 
    var img = new Image(); 
    img.src = src; 
  }); 
  var idx = 0, body = document.body; 
  function changeBg(){ 
    body.style.backgroundImage = 'url(' + images[idx] + ')'; 
    idx = (idx + 1) % images.length; 
  } 
  // 最初に即座に設定 
  changeBg(); 
  // 5秒ごとに切り替え 
  setInterval(changeBg, 5000); 
})(); 
