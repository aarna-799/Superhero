var canvas= new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_updated()
{
   fabric.Image.fromURL("https://www.google.com/url?sa=i&url=https%3A%2F%2Fhero.fandom.com%2Fwiki%2FGroot_(Marvel_Cinematic_Universe)&psig=AOvVaw0dhb0W9rWT4OWojtgxhkZ-&ust=1619259035248000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiqy4yQlPACFQAAAAAdAAAAABAI",function(Img){
       player_object = Img;

       player_object.scaleToWidth(150);
       player_object.scaleToHeight(140);
       player_object.set({
       top:player_y,
       left:player_x    
       });
       canvas.add(player_object);
   });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image , function(Img){
        block_image_object = Img;
 
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
        top:player_y,
        left:player_x    
        });
        canvas.add(player_object);
    });
 }