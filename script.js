coll = document.querySelectorAll(".collapsible");
i = 0;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    content = this.nextElementSibling;
    if (content.style.maxHeight == 0) {
        content.style.maxHeight = content.scrollHeight + 'px';
    } 
    else {
        content.style.maxHeight = null;
    }
  });
}







