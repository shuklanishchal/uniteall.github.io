let el = document.querySelectorAll(".menu-item");
for(let i = 0; i < el.length; i++) {
  el[i].onclick = function() {
    if(document.querySelector(".active") != null) {
      document.querySelector(".active").classList.remove("active");
    }
    document.querySelector("#menu-selected").innerHTML = "Featured " + this.id;
    this.classList.add("active");
  }
}
