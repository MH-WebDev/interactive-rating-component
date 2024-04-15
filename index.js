function getByClass(_class, elem) {
    var i, result = [], elems = document.getElementsByTagName("div");
   for (i = 0; i < elems.length; i++) {
        if (elems[i].className.indexOf(_class) !== -1) {
            result.push(elems[i]);
        }
    }
    return result;
}
var i, tabs = getByClass("selection", "div"); 
for (i = 0; i < tabs.length; i++) { 
    tabs[i].onclick = function() { 
        var j;
        for(j=0; j < tabs.length; j++) {
           tabs[j].className = tabs[j].className.replace(" selected__button", "");
        }
       this.className += " selected__button"; 
    };
}
//https://stackoverflow.com/a/6655622

const ratingCount = document.querySelectorAll(".selection");
const selectedRating = document.getElementById("selected__rating");
const submitButton = document.getElementById("submit__button");
const result = document.getElementById("thank__you");

submitButton.addEventListener("click", () => {
  const rating = parseInt(selectedRating.textContent);

  setTimeout(() => {
    result.classList.remove("thank__you");
    document.querySelector(".rating__panel").classList.add("thank__you");
  });
});

ratingCount.forEach((star) => {
  star.addEventListener("click", () => {
    const rating = parseInt(star.textContent);
    selectedRating.textContent = rating;

    setTimeout(() => {
      ratingCount.forEach((s) => {});
    });
  });
});
