var check = 1;

function myEmail(){
   var longText = "Alexander C. Boehm\n" +
                  "Email: ab16m@my.fsu.edu\n" +
                  "Phone: 941-504-3127\n" +
                  "Address: 3914 Trentwood Pl."
   window.alert(longText);     
}

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