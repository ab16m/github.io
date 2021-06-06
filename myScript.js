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
    case 7:
        document.getElementById("resume").style.color="rgb(150,170,255)";
        document.getElementById("resume").style.fontSize="larger";
        //document.getElementById(item).style.
        break;
    }
    check += 1;
}
var lifeNum = 3;
var Bulletes1 = 0;
var Bulletes2 = 0;
var enemySpacing = 13;
var direction = 1;
var Bulletm = 0;
var FirstPress = true;
var FirstConsole = true;
var myTime = 0;
var handler;



var shipElement = document.getElementById('shipId');
var shipHZ = window.getComputedStyle(shipElement);

var myBulletElement = document.getElementById('myBullet');
var myBulletHit = window.getComputedStyle(myBulletElement);

var enemyElement = document.getElementById('enemyId');
var enemyHZ = window.getComputedStyle(enemyElement);

var enemyBulletElement = document.getElementById('enemyBulletId');
var enemyBulletHit = window.getComputedStyle(enemyBulletElement);

var sub1Element = document.getElementById('enemySub1')
var sub1HZ = window.getComputedStyle(sub1Element);

var bulletSub1Element = document.getElementById('enemyBulletSub1')
var sub1BulletHit = window.getComputedStyle(bulletSub1Element);

var sub2Element = document.getElementById('enemySub2')
var sub2HZ = window.getComputedStyle(sub2Element);

var bulletSub2Element = document.getElementById('enemyBulletSub2')
var sub2BulletHit = window.getComputedStyle(bulletSub2Element);

function playGame(){
    if(FirstPress==true){  
        handler = setInterval(timeMe,1000);
        document.getElementById("shipId").style.visibility = "visible";
        document.getElementById("enemyId").style.visibility = "visible";
        document.getElementById("enemySub1").style.visibility = "visible";
        document.getElementById("enemySub2").style.visibility = "visible";
        document.getElementById("myJavaScriptGame").style.backgroundImage = "url('img/spacecase.png')";
        setTimeout(toBulletRain1, 2000);
        setTimeout(toBulletRain2, 2500);
        thisGame = new Game();
        thisGame.play();
        FirstPress=false;
        document.getElementById("lifepoints").style.visibility = "visible";
        }
    else{
        if(FirstConsole==false)
            {
                clearTimeout(handler);
                FirstConsole=true;
                myTime = 0;
                handler = setInterval(timeMe,1000);
                document.getElementById("enemyId").setAttribute("src", "img/enemy.png") 
                console.log("gameRunning");
                document.getElementById("enemyId").style.visibility = "visible";
                document.getElementById("shipId").setAttribute("src", "img/ship.png")
                document.getElementById("shipId").style.visibility = "visible";
                document.getElementById("enemySub1").setAttribute("src", "img/enemy.png")
                document.getElementById("enemySub1").style.visibility = "visible";
                document.getElementById("enemySub2").setAttribute("src", "img/enemy.png")
                document.getElementById("enemySub2").style.visibility = "visible";
                document.getElementById("myJavaScriptGame").style.backgroundImage = "url('img/spacecase.png')";
                document.getElementById("lifepoints").style.visibility="visible";
            }   
        } 
        function timeMe(){
            myTime++;
        }
    }
function toBulletRain2(){
    setInterval(bulletRain2, 5);
}
function toBulletRain1(){
    setInterval(bulletRain1, 5);
}

function minusLife(){
    if(life == 3){
        life = life - 1;
        
    }
}
function bulletRain1(){

    var isVisible = sub1HZ.getPropertyValue("visibility");
    var image = document.getElementById("enemySub1").getAttribute("src");
    console.log(image);

    if(image == "img/explosion.png" || isVisible == "hidden")
    {
        document.getElementById("enemyBulletSub1").style.visibility="hidden";
    }

    else{
        document.getElementById("enemyBulletSub1").style.visibility="visible";
        document.getElementById("enemyBulletSub1").style.top = Bulletes1 + "px";
        Bulletes1 += 10;
        
        var shipDead = shipHZ.getPropertyValue('margin-left');
        var hitZone = parseInt(shipDead);

        var bulletHit = sub1BulletHit.getPropertyValue('margin-left');
        var bulletPath = parseInt(bulletHit);
            
        
            if(hitZone - bulletPath < 0 && hitZone - bulletPath > -30 && Bulletes1 > 99 * 3 + 60 && Bulletes1 < 99 * 3 + 60 + 60)
                {
                    if(life < 1)
                    {
                    document.getElementById("shipId").setAttribute("src", "img/explosion.png");
                    setTimeout(goAway, 2000);
                    function goAway(){
                        document.getElementById("shipId").style.visibility = "hidden";
                        if(FirstConsole==true){
                            window.alert("You Lost!\nYou lived for: " + myTime + " seconds");
                            document.getElementById("myJavaScriptGame").style.backgroundImage = "none";
                            document.getElementById("shipId").style.visibility="hidden";
                            document.getElementById("enemyId").style.visibility="hidden";
                            document.getElementById("enemySub1").style.visibility="hidden";
                            document.getElementById("enemySub2").style.visibility="hidden";
                            FirstConsole = false;
                            }
                        }
                    }
                    else{
                        minusLife();

                    }
                }
        if(Bulletes1 > 3000)
            {   
                Bulletes1 = 0;
                console.log("Bullet return");
                document.getElementById("enemyBulletId").style.visibility = "hidden";
                document.getElementById("enemyBulletId").style.top = "0px";
            }
        }
    }
    function bulletRain2(){
        var isVisible2 = sub2HZ.getPropertyValue("visibility");
        var image2 = document.getElementById("enemySub2").getAttribute("src");
        console.log(image2);
    
        if(image2 == "img/explosion.png" || isVisible2 == "hidden" )
        {document.getElementById("enemyBulletSub2").style.visibility="hidden";}
        else{
            document.getElementById("enemyBulletSub2").style.visibility="visible";
            document.getElementById("enemyBulletSub2").style.top = Bulletes2 + "px";
            Bulletes2 += 10; 

            var shipDead2 = shipHZ.getPropertyValue('margin-left');
            var hitZone2 = parseInt(shipDead2);

        
            var bulletHit2 = sub2BulletHit.getPropertyValue('margin-left');
            var bulletPath2 = parseInt(bulletHit2);
            bulletPath2 = bulletPath2 + 130;    
        /* console.log(bulletPath2 - hitZone2);*/

                if( hitZone2 - bulletPath2 > 0 && hitZone2 - bulletPath2 < 30 && Bulletes2 > 99 * 3 + 60 && Bulletes2 < 99 * 3 + 60 + 60)
                    {
                    
                        document.getElementById("shipId").setAttribute("src", "img/explosion.png");
                        setTimeout(goAway, 2000);
                        function goAway(){
                            document.getElementById("shipId").style.visibility = "hidden";
                            if(FirstConsole==true){
                            window.alert("You Lost!\nYou lived for: " + myTime + " seconds");
                            document.getElementById("myJavaScriptGame").style.backgroundImage = "none";
                            document.getElementById("shipId").style.visibility="hidden";
                            document.getElementById("enemyId").style.visibility="hidden";
                            document.getElementById("enemySub1").style.visibility="hidden";
                            document.getElementById("enemySub2").style.visibility="hidden";

                            FirstConsole = false;
                            }
                        }
                    }
            if(Bulletes2 > 3000)
                {   
                    Bulletes2 = 0;
                    console.log("Bullet return");
                    document.getElementById("enemyBulletId").style.visibility = "hidden";
                    document.getElementById("enemyBulletId").style.top = "0px";
                }
            }
        }
    
function timer(){
    if(Math.random()<=0.1)
        {direction *= -1;
        console.log("change direction")}
    var movement=Math.ceil(Math.random() * 5);
    movement = movement * direction;
    document.getElementById("enemyId").style.marginLeft = enemySpacing + movement +"%";
}
var Bullete = 0;
/*function enemyBulletTravel(enemyBulletMovement){
    document.getElementById("enemyBulletId").style.top = Bullete + "px";
    Bullete += 10; 
    if(document.getElementById("enemyBulletId").style.marginLeft == document.getElementById("shipId").style.marginLeft && Bullete > 99 * 3 + 60 && Bullete < 99 * 3 + 60 + 60)
    {
        document.getElementById("shipId").setAttribute("src", "img/explosion.png");
        setTimeout(goAway, 2000);
        function goAway(){
            document.getElementById("shipId").style.visibility = "hidden";
            if(FirstConsole==true){
            window.alert("You Won!\nIt took: " + myTime + " seconds");
            FirstConsole = false;
            }
        }
    }
    if(Bullete > 400)
    {   
        Bullete = 0;
        window.clearTimeout(enemyBulletMovement);
        console.log("clear bullet travel interval");
        document.getElementById("enemyBulletId").style.visibility = "visible";
        document.getElementById("enemyBulletId").style.top = "0px";
    }

}*/

function fireOffSet(){
    var enemyLocation = enemyHZ.getPropertyValue("margin-left")
    var enemyX = parseInt(enemyLocation);
    
    var image = document.getElementById("enemyId").getAttribute("src");
    console.log(image);

    if(image == "img/explosion.png")
    {
        console.log("ghosssst")
    }
    else{
        document.getElementById("enemyBulletId").style.marginLeft = enemyX + 20 + "px";
        document.getElementById("enemyBulletId").style.visibility="visible";
        var enemyBulletMovement = setInterval(function() {
            document.getElementById("enemyBulletId").style.top = Bullete + "px";
                Bullete += 10; 

                var shipLocation = shipHZ.getPropertyValue("margin-left");
                var shipX = parseInt(shipLocation);
                var enemyBulletLocation = enemyBulletHit.getPropertyValue("margin-left");
                var enemyBulletX = parseInt(enemyBulletLocation);
                
                if(shipX - enemyBulletX < 10 && shipX - enemyBulletX > -45 && Bullete > 99 * 3 + 60 && Bullete < 99 * 3 + 60 + 60)
                {
                    document.getElementById("shipId").setAttribute("src", "img/explosion.png");
                    setTimeout(goAway, 2000);
                    function goAway(){
                        document.getElementById("shipId").style.visibility = "hidden";
                        if(FirstConsole==true){
                        window.alert("You Lost!\nYou lived for: " + myTime + " seconds");
                        document.getElementById("myJavaScriptGame").style.backgroundImage = "none";
                        document.getElementById("shipId").style.visibility="hidden";
                        document.getElementById("enemyId").style.visibility="hidden";
                        document.getElementById("enemySub1").style.visibility="hidden";
                        document.getElementById("enemySub2").style.visibility="hidden";
                        FirstConsole = false;
                        }
                    }
                }
                if(Bullete > 600)
                {   
                    Bullete = 0;
                    window.clearTimeout(enemyBulletMovement);
                    console.log("clear bullet travel interval");
                    document.getElementById("enemyBulletId").style.visibility = "hidden";
                    document.getElementById("enemyBulletId").style.top = "0px";
                }
        }, 5);
        
    }
}

function bulletAction(){
    document.getElementById("myBullet").style.bottom = Bulletm + "px";
    Bulletm += 10;

    var enemyDead = enemyHZ.getPropertyValue('margin-left');
    var enemyHitZone = parseInt(enemyDead);

    var myBulletPath = myBulletHit.getPropertyValue('margin-left');
    var bulletPath = parseInt(myBulletPath);

    var enemyDeadSub1 = sub1HZ.getPropertyValue('margin-left');
    var sub1X = parseInt(enemyDeadSub1);
   
    var enemyDeadSub2 = sub2HZ.getPropertyValue('margin-left');
    var sub2X = parseInt(enemyDeadSub2);
    
    if(enemyHitZone - bulletPath < 0 && enemyHitZone - bulletPath > -30 && Bulletm > 99 * 3 + 60 && Bulletm < 99 * 3 + 60 + 60)
    {
        document.getElementById("enemyId").setAttribute("src", "img/explosion.png");
        setTimeout(goAway, 2000);
        function goAway(){
            document.getElementById("enemyId").style.visibility = "hidden";
            if(FirstConsole==true){
                var image = document.getElementById("enemyId").getAttribute("src");
                var imagesub1 = document.getElementById("enemySub1").getAttribute("src");
                var imagesub2 = document.getElementById("enemySub2").getAttribute("src");
                console.log(image);

                if(image == "img/explosion.png" && imagesub1 == "img/explosion.png" && imagesub2 == "img/explosion.png")
                {
                    window.alert("You Won!\nIt took: " + myTime + " seconds");
                    document.getElementById("myJavaScriptGame").style.backgroundImage = "none";
                    document.getElementById("shipId").style.visibility="hidden";
                    document.getElementById("enemyId").style.visibility="hidden";
                    document.getElementById("enemySub1").style.visibility="hidden";
                    document.getElementById("enemySub2").style.visibility="hidden";
                    FirstConsole = false;
                }
            }
        }
    }

    if(sub1X - bulletPath < 0 && sub1X - bulletPath > -30 && Bulletm > 99 * 3 + 90 && Bulletm < 99 * 3 + 60 + 90)
    {
        document.getElementById("enemySub1").setAttribute("src", "img/explosion.png");
        setTimeout(goAwaySub1, 2000);
        function goAwaySub1(){
            document.getElementById("enemySub1").style.visibility = "hidden";
            if(FirstConsole==true){
                var image = document.getElementById("enemyId").getAttribute("src");
                var imagesub1 = document.getElementById("enemySub1").getAttribute("src");
                var imagesub2 = document.getElementById("enemySub2").getAttribute("src");
                console.log(image);

                if(image == "img/explosion.png" && imagesub1 == "img/explosion.png" && imagesub2 == "img/explosion.png"){
                    window.alert("You Won!\nIt took: " + myTime + " seconds");
                    document.getElementById("myJavaScriptGame").style.backgroundImage = "none";
                    document.getElementById("shipId").style.visibility="hidden";
                    document.getElementById("enemyId").style.visibility="hidden";
                    document.getElementById("enemySub1").style.visibility="hidden";
                    document.getElementById("enemySub2").style.visibility="hidden";
                    FirstConsole = false;
                }
            }
        }
    }
  
    if(sub2X - bulletPath + 200 < 0 && sub2X - bulletPath + 200 > -55 && Bulletm > 99 * 3 + 90 && Bulletm < 99 * 3 + 60 + 90)
    {
        document.getElementById("enemySub2").setAttribute("src", "img/explosion.png");
        setTimeout(goAwaySub2, 2000);
        function goAwaySub2(){
            document.getElementById("enemySub2").style.visibility = "hidden";
            if(FirstConsole==true){
                var image = document.getElementById("enemyId").getAttribute("src");
                var imagesub1 = document.getElementById("enemySub1").getAttribute("src");
                var imagesub2 = document.getElementById("enemySub2").getAttribute("src");
                console.log(image);

                if(image == "img/explosion.png" && imagesub1 == "img/explosion.png" && imagesub2 == "img/explosion.png"){
                    
                    window.alert("You Won!\nIt took: " + myTime + " seconds");
                    document.getElementById("myJavaScriptGame").style.backgroundImage = "none";
                    FirstConsole = false;
                    document.getElementById("shipId").style.visibility="hidden";
                    document.getElementById("enemyId").style.visibility="hidden";
                    document.getElementById("enemySub1").style.visibility="hidden";
                    document.getElementById("enemySub2").style.visibility="hidden";
                }    
            }
        }
    }


    
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
       var x = setInterval(timer, 300);
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
            if(e.key =="w")
            {  
                
                document.getElementById("myBullet").style.bottom = "0px";
                console.log("shot");
                
                if(myBool==1)
                {
                   var shipCurrentLocation = shipHZ.getPropertyValue("margin-left");
                   var shotFrom = parseInt(shipCurrentLocation);
                   var shotFrom = shotFrom + 20;
                   
                   var image3 = document.getElementById("shipId").getAttribute("src");
                   console.log(image3);
               
                   if(image3 == "img/explosion.png")
                   {console.log("ghost");}
                   else{ 
                        document.getElementById("myBullet").style.marginLeft = shotFrom + "px";
                        document.getElementById("myBullet").style.visibility="visible";
                        console.log("bullet fired- myBool is " + myBool);
                        bulletFired = setInterval(bulletAction, 5);
                        myBool = 2;
                        var enemyBulletFired = setTimeout(fireOffSet, 2000);
                        console.log("now it is " + myBool);
                   }
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