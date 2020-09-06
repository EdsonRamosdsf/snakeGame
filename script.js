let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;


function criarBG(){
     context.fillStyle = "lightgreen";
     context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
for(i=0; i< snake.length; i++){
context.fillStyle = "green";
context.fillReact(snake[i].x, snake[i].y, box, box);
}
}

function drawFood() {
    context.fillStyle="red";
  context.fillReact(food.x, food.y, box, box);
}
document.addEventListener('keydown', update);

function update (event) {
 if(event.keyCode == 37 && direction != "right") direction = "left";
 if(event.keyCode == 38 && direction != "down") direction = "up";
 if(event.keyCode == 39 && direction != "left") direction = "right" ;
 if(event.keyCode == 40 && direction != "up") direction = "down" ;
}


function iniciarJogo(){
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left" ) snake[0].x = 16 * box;
    if(snake[0].y > 15 * box & direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

  criarBG();
  criarCobrinha();
  drawFood();

   let snakeX = snake[0].X;
   let snakeY = snake[0].y;
 
   if(direction == "right") snakeX += box;
   if(direction == "left") snakeX -= box;
   if(direction == "up") snakeX -= box;
   if(direction == "down") snakeX += box;
  
   if(snakeX != food.x || sankeY != food.y){
   snake.pop();
   }
   else {
   }


   let newHead = {
       x: snakeX,
       y: snakeY
   }

  snake.unshift(newHead);

}


 let jogo = setInterval(iniciarJogo, 100);