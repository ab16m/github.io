face = document.getElementById("face")
magic = document.getElementById("magic")
myHTML =  "Hello and Welcome to my Magical Resume!"
myHTML2 =  "Hello and Welcome to my Completely Normal Resume!"
face.addEventListener("mouseenter", function(event){
    document.getElementById("face").setAttribute("src", "img/myWizardFace.jpg")
    document.getElementById("magic").innerHTML = myHTML
    setTimeout(() => {
        magic.innerHTML = myHTML2
    }, 2500);
    setTimeout(() => {
        document.getElementById("face").setAttribute("src", "img/myFaceWink.jpg") 
        setTimeout(() => {
            document.getElementById("face").setAttribute("src", "img/myFace.jpg")
        }, 500)       
    }, 2000);


})
/*magic.addEventListener("mouseenter", function(event){
   
})*/
function myEmail(){
    var longText = "Alexander C. Boehm\n" +
                   "Email: ab16m@my.fsu.edu\n" +
                   "Phone: 941-504-3127\n" +
                   "Address: 3914 Trentwood Pl."
    window.alert(longText);     
 }
