canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
caruno_width = 120;
caruno_height = 70;
caruno_image = "https://i.postimg.cc/9rqYz9HM/car1.png";
cardos_width = 120;
cardos_height = 70;
cardos_image = "https://i.postimg.cc/tnnW1Kff/car2.png";
carunox = 10;
carunoy = 10;
cardosx = 20;
cardosy = 20;
bgimage = "https://i.postimg.cc/bv5d35nK/racing.jpg";
function add(){
    bgimage_imgTag = new Image();
    bgimage_imgTag.onload = uploadBackground;
  bgimage_imgTag.src = bgimage;
    caruno_imgTag = new Image();
caruno_imgTag.onload = uploadcaruno;
caruno_imgTag.src = caruno_img;
cardos_imgTag = new Image();
cardos_imgTag.onload = uploadcardos;
cardos_imgTag.src = cardos_img;
};

function uploadBackground() {
	ctx.drawImage(bgimage_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadcaruno() {
	ctx.drawImage(caruno_imgTag, carunox, carunoy, caruno_width, caruno_height);
}
    function uploadcardos() {
        ctx.drawImage(cardos_imgTag, cardosx, cardosy, cardos_width, cardos_height);
    }

    window.addEventListener("keydown",my_keydown)

    function my_keydown(e){
    key = e.keyCode;
    if (key == "38") {
        caruno_up();
        console.log("up")}
        if (key == "87") {
            cardos_up();
            console.log("up")

    
    }
    
        if (key == "40") {
            caruno_down();
            console.log("down")}
            if (key == "83") {
                cardos_down();
                console.log("down")
        }
        
        
            if (key == "37") {
                caruno_left();
                console.log("left")}
                if (key == "65") {
                    cardos_left();
                    console.log("left")
            }
           
                if (key == "39") {
                    caruno_right();
                    console.log("right")}
                    if (key == "68") {
                        cardos_right();
                        console.log("right")
                }
         
            
if(caruno_x > 700) { console.log("caruno"); 
document.getElementById('game_status').innerHTML = 
"Car 1 Won!!"; } else if(cardos_x > 700) { console.log
    ("cardos"); document.getElementById('game_status'
    ).innerHTML = "Car 2 Won!!"; }}
            

            function caruno_up(){
                if (caruno_y >=0) {
                    caruno_y = caruno_y - 10;
                    uploadBackground();
                    uploadcaruno();
                    uploadcardos();
                    
                }
              }
              function caruno_down(){
                  if (caruno_y <=500) {
                    caruno_y = caruno_y + 10;
                      uploadBackground();
                      uploadcaruno();
                      uploadcardos();
                      
                  }
                }
                function caruno_left(){
                  if (caruno_x >=0) {
                      caruno_x = caruno_x - 10;
                      uploadBackground();
                      uploadcaruno();
                      uploadcardos();
                     
                  }
                }
                function caruno_right(){
                  if (caruno_x <=500) {
                    caruno_x = caruno_x + 10;
                      uploadBackground();
                      uploadcaruno();
                      uploadcardos();
                      
                  }
                }

                function cardos_up(){
                    if (cardos_y >=0) {
                        cardos_y = cardos_y - 10;
                        uploadBackground();
                        uploadcaruno();
                        uploadcardos();
                        
                    }
                  }
                  function cardos_down(){
                      if (cardos_y <=500) {
                        cardos_y = cardos_y + 10;
                          uploadBackground();
                          uploadcaruno();
                          uploadcardos();
                          
                      }
                    }
                    function cardos_left(){
                      if (cardos_x >=0) {
                          cardos_x = cardos_x - 10;
                          uploadBackground();
                          uploadcaruno();
                          uploadcardos();
                         
                      }
                    }
                    function cardos_right(){
                      if (cardos_x <=500) {
                        cardos_x = cardos_x + 10;
                          uploadBackground();
                          uploadcaruno();
                          uploadcardos();
                          
                      }
                    }