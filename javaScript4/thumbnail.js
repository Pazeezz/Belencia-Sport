
// bg color change 
function changeBackgroundColor(current) {
  document.body.style.backgroundColor = current.value;
  // console.log(current.value);
};

// changing text colors

function changeTextColor(current_ref){
  const descHeading = document.getElementById("imgheading");
  const descContect = document.getElementById("img-content");
  const galleryTitle = document.getElementById("gallery-title");
  descHeading.style.color = current_ref.value;
  descContect.style.color = current_ref.value;
  // galleryTitle.style.color = current_ref.value; // Change the gallery title if it is necccessry 
  descContect.style.fontWeight = "normal";
}

function imageChange(imgs) {
        
  let expandImg = document.getElementById("expandedImg");
  let imgText = document.getElementById("imgheading");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";

}
// Change the image description
const imagDescriptions = ["Bodybuilding is the use of progressive resistance exercise to control and develop one's muscles by muscle hypertrophy for aesthetic purposes. It is distinct from similar activities such as powerlifting because it focuses on physical appearance instead of strength.",
  "Basketball is a game played between two teams of five players each on a rectangular court, usually indoors. Each team tries to score by tossing the ball through the opponent's goal, an elevated horizontal hoop and net called a basket.",
  "Football (also known as association football or soccer) is a team sport played between two teams of 11 players each. It is widely considered to be the most popular sport in the world. A ball game, it is played on a rectangular grass field, or occasionally an artificial turf, with a goal at each end of the field.",
  "Volleyball is played by two teams of six players on each side, in which the players use their hands to hit the back and sent ball over a high net. Player always try to hit the ball touch the court within the opponents’ playing area before it can be returned. To prevent this a player on the opposite team hits the ball up and toward a teammate before it touches the court ground.",
  "Cricket is played by two teams of 11, with one side taking a turn to bat a ball and score runs, while the other team will bowl and field the ball to restrict the opposition from scoring. The main objective in cricket is to score as many runs as possible against the opponent."
]
  //Showing paragraphs
let description = document.getElementById("img-content");
let galleryItems = document.querySelectorAll(".gallery-column > img");
galleryItems.forEach(function (item,index) {
  item.addEventListener("mouseover", function () {
      //get the curent event click index and acess the relevent item from the array.
     description.innerHTML =imagDescriptions[index]
     
  });
});


//Back to top button

let topBtn = document.getElementById("toTop");
window.onscroll = function() {screenScroll()};

function screenScroll(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    topBtn.style.display = "block";
    // console.log("Scrolling")
  }else{
    topBtn.style.display = "none";
  }
}

function topClick(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  //console.log("Clicked")
}

 //Scroll to Big image
 function navigateToFullImage() {
  document.body.scrollDown = 400;
  document.documentElement.scrollTop = 400;
}

