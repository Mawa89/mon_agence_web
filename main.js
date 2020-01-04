window.onscroll = () => {
  const nav = document.querySelector("#navbar");
  if (this.scrollY <= 10) nav.className = "";
  else nav.className = "scroll";
};

$(document).ready(function() {
  $(".js-scrollTo").on("click", function() {
    // Au clic sur un élément
    var page = $(this).attr("href"); // Page cible
    var speed = 1500; // Durée de l'animation (en ms)
    $("html, body").animate({ scrollTop: $(page).offset().top }, speed); // Go
    return false;
  });
});
function rouge_simple() {
  document.getElementById("simple").style.backgroundColor = "red";
}

var i = 0;
var txt = "ui sommes nous?"; /* le text */
var speed = 100;
var presentation = document.getElementsByClassName("presentation");
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
//toggle



       // forEach method

       window.console = window.console || function(t) {};
       
       
         if (document.location.search.match(/type=embed/gi)) {
           window.parent.postMessage("resize", "*");
         }
       
       var forEach = function (array, callback, scope) {
        for (var i = 0; i < array.length; i++) {if (window.CP.shouldStopExecution(0)) break;
          callback.call(scope, i, array[i]);
        }window.CP.exitedLoop(0);
      };
      
      var spinner = document.querySelector("#spinner"),
      angle = 0,
      images = document.querySelectorAll("#spinner figure"),
    
    numpics = images.length,
      degInt = 360 / numpics,
      start = 0,
      current = 1;
      
      forEach(images, function (index, value) {
        images[index].style.webkitTransform = "rotateY(-" + start + "deg)";
        images[index].style.transform = "rotateY(-" + start + "deg)";
        });
        images[index].addEventListener("click", function () {
          if (this.classList.contains('current')) {
            this.classList.toggle("focus");
          }
        start = start + degInt;
      });
      
      function setCurrent(current) {
        document.querySelector('figure#spinner figure:nth-child(' + current + ')').classList.add('current');
      }
      
      function galleryspin(sign) {
        forEach(images, function (index, value) {
          images[index].classList.remove('current');
          images[index].classList.remove('focus');
          images[index].classList.remove('caption');
        });
      
        if (!sign) {angle = angle + degInt;
          current = current + 1;
          if (current > numpics) {current = 1;}
        } else {
          angle = angle - degInt;
          current = current - 1;
          if (current == 0) {current = numpics;}
        }
      
        spinner.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg)");
        setCurrent(current);
      }
      
      
      
      document.body.onkeydown = function (e) {
        switch (e.which) {
          case 37: // left cursor
            galleryspin('-');
            break;
      
          case 39: // right cursor
            galleryspin('');
            break;
      
          case 90: // Z - zoom image in forefront image
            document.querySelector('figure#spinner figure.current').classList.toggle('focus');
            break;
      
          case 67: // C - show caption for forefront image
            document.querySelector('figure#spinner figure.current').classList.toggle('caption');
            break;
      
          default:return; // exit this handler for other keys
        }
        e.preventDefault();
      };
      
      setCurrent(1);
            //# sourceURL=pen.js
     
           
            