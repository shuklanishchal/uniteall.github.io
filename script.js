const el = document.querySelectorAll(".menu-item");
for(var i = 0; i < el.length; i++) {
  el[i].onclick = function() {
    const actives = document.querySelectorAll(".active");
    for(var i = 0; i < actives.length; i++) {
      actives[i].classList.remove("active");
    }
    document.querySelector("#menu-selected").innerHTML = "Featured " + this.innerHTML;
    this.classList.add("active");
  }
}
