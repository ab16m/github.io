function myEmail(){
    var longText = "Alexander C. Boehm\n" +
                   "Email: ab16m@my.fsu.edu\n" +
                   "Phone: 941-504-3127\n" +
                   "Address: 3914 Trentwood Pl."
    window.alert(longText);     
 }
 
 check=1;
 
 function myButton(){
     console.log("working button");
 switch(check){
     case 1:
         document.getElementById("item1").style.color="rgb(255,255,255)";
         document.getElementById("item1").style.fontSize="larger";
         break;
     case 2:
         document.getElementById("item2").style.color="rgb(255,255,255)";
         document.getElementById("item2").style.fontSize="larger";
         //document.getElementById(item).style.
         break;
     case 3:
         document.getElementById("item3").style.color="rgb(255,255,255)";
         document.getElementById("item3").style.fontSize="larger";
         //document.getElementById(item).style.
         break;
     case 4:
         document.getElementById("item4").style.color="rgb(255,255,255)";
         document.getElementById("item4").style.fontSize="larger";
         //document.getElementById(item).style.
         break;
     case 5:
         document.getElementById("item5").style.color="rgb(255,255,255)";
         document.getElementById("item5").style.fontSize="larger";
         //document.getElementById(item).style.
         break;
     case 6:
         document.getElementById("item6").style.color="rgb(255,255,255)";
         document.getElementById("item6").style.fontSize="larger";
         //document.getElementById(item).style.
         break;
     }
     check += 1;
 }
 var enemySpacing = 13;
 var direction = 1;
 var Bulletm = 0;
 
 function playGame(){
    document.getElementById("shipId").style.visibility = "visible";
    document.getElementById("enemyId").style.visibility = "visible";
    thisGame = new Game();
    thisGame.play();
 
 }
 
 
 function timer(){
     if(Math.random()<=0.1)
         {direction *= -1;
         console.log("change direction")}
     var movement=Math.ceil(Math.random() * 5);
     movement = movement * direction;
     document.getElementById("enemyId").style.marginLeft = enemySpacing + movement +"%";
 
 }
 
 function bulletAction(){
     document.getElementById("myBullet").style.bottom = Bulletm + "px";
     Bulletm += 10;
     if(document.getElementById("myBullet").style.marginLeft === document.getElementById("enemyId").style.marginLeft && Bulletm > 99 * 3 && Bulletm < 99 * 3 + 60 + 20)
     {window.alert("Wou Won!")}
 }
 class Game{
     constructor(x=1)
     {
         /*this.playerX = playerX;
         this.ballX = ballX;
         this.ballY = ballY;*/
         this.x = x;
     }
     play(){
        console.log("Game Started")
        var x = setInterval(timer, 100);
        var spacing = 13;
        var myBool = 1;
        var bulletFired;
        document.addEventListener('keydown', (e) => {
            
             if(e.key =="ArrowRight")
             {
                 spacing+=3;
                 console.log(e.key)
                 document.getElementById("shipId").style.marginLeft = spacing+"%";
 
             }
             if(e.key =="ArrowLeft")
             {
                 spacing-=3;
                 console.log(e.key)
                 document.getElementById("shipId").style.marginLeft = spacing+"%";
 
             }
             if(e.key ==" ")
             {  
                  
                 document.getElementById("myBullet").style.bottom = "0px";
                 console.log("shot");
                 
                 if(myBool==1)
                 {
                    document.getElementById("myBullet").style.marginLeft = (document.getElementById("shipId").style.marginLeft);
                    document.getElementById("myBullet").style.visibility="visible";
                    console.log("bullet fired- myBool is " + myBool);
                    bulletFired = setInterval(bulletAction, 5);
                    myBool = 2;
                    console.log("now it is " + myBool);
                 }
                 else{
                     document.getElementById("myBullet").style.visibility="hidden";
                     console.log("clearTimeout called")
                     window.clearTimeout(bulletFired);
                     myBool = 1;
                     console.log(myBool);
                     Bulletm=0;
                 }
             }
             if(e.key =="r")
             {
                 console.log("r key pressed");
                 window.clearTimeout(bulletFired);
                
             }
        })
     }
     stop(){
         clearInterval(this.x);
     }
 
 }
 
 
 
 
 
 
 