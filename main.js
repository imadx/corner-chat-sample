document.addEventListener("DOMContentLoaded", function() {
  AOS.init();
  var phonePreview = document.getElementById("phone-preview");
  var scrolled = false;

  if (phonePreview) {
    phonePreview.addEventListener("mouseover", function() {
      if (!scrolled) {
        phonePreview.scrollIntoView({
          behavior: "smooth"
        });
        scrolled = true;
      }
    });
  }
});
