
canvas= document.getElementById("dacanvas");
ctx=canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_x=10;
car1_y=10;
car1_image="https://i.postimg.cc/9rqYz9HM/car1.png";

car2_width=120;
car2_height=70;
car2_x=10;
car2_y=100;
car2_image="https://i.postimg.cc/tnnW1Kff/car2.png";

background_img="https://i.postimg.cc/bv5d35nK/racing.jpg";

function add(){
    background_imgTag= new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_img;

    car1_imgTag= new Image();
    car1_imgTag.onload=uploadCar1;
    car1_imgTag.src=car1_image;

    car2_imgTag= new Image();
    car2_imgTag.onload=uploadCar2;
    car2_imgTag.src=car2_img;
}




 
