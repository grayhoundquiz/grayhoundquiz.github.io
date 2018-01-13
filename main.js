// Some random colors for background
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 80)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 80)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});

//text color changing effect
const colors_text = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];


//modal 

var modal_about = document.getElementById('modal_about');
var modal_faq = document.getElementById('modal_faq');
var modal_gallery = document.getElementById('modal_gallery');


var link_about = document.getElementById("about");
var link_faq = document.getElementById("faq");
var link_gallery = document.getElementById("gallery");


var span_about = document.getElementsByClassName("close_about")[0];
var span_faq = document.getElementsByClassName("close_faq")[0];
var span_gallery = document.getElementsByClassName("close_gallery")[0];


// to display
link_about.onclick = function() {
    modal_about.style.display = "block";
}
link_faq.onclick = function() {
  modal_faq.style.display = "block";
}
link_gallery.onclick = function() {
  modal_gallery.style.display = "block";
}

//to close
span_about.onclick = function() {
    modal_about.style.display = "none";
    console.log("clicked close")
}

span_faq.onclick = function() {
  modal_faq.style.display = "none";
}

span_gallery.onclick = function() {
  modal_gallery.style.display = "none";
}



window.onclick = function(event) {
    if (event.target == modal_about) {
        modal_about.style.display = "none";
    }
    if (event.target == modal_faq) {
      modal_faq.style.display = "none";
    }
    if (event.target == modal_gallery) {
      modal_gallery.style.display = "none";
    }
}

var notify = document.getElementById("notify")

notify.onclick = function () {
  notify.style.display = "none";
}