document.addEventListener("DOMContentLoaded", function() {
  AOS.init();
  var phonePreview = document.getElementById("phone-preview");
  var scrolled = false;
  phonePreview.addEventListener("mouseover", function() {
    if (!scrolled) {
      phonePreview.scrollIntoView({
        behavior: "smooth"
      });
      scrolled = true;
    }
  });

  var termlyLinkTermsOfService = document.getElementById(
    "termly-link-terms-of-service"
  );
  var termlyLinkPrivacyPolicy = document.getElementById(
    "termly-link-privacy-policy"
  );
  var termlyCloseButton = document.getElementById("termly-closeBtn");
  var termlyWrapper = document.getElementById("termly-wrapper");
  var termlyTermsofService = document.getElementById(
    "termly-frame-terms-of-service"
  );
  var termlyPrivacyPolicy = document.getElementById(
    "termly-frame-privacy-policy"
  );

  function showTermsOfService() {
    console.log("showTermsOfService");
    termlyWrapper.classList.add("visible");
    termlyTermsofService.style.display = "block";
    termlyPrivacyPolicy.style.display = "none";
  }

  function showPrivacyPolicy() {
    console.log("showPrivacyPolicy");
    termlyWrapper.classList.add("visible");
    termlyPrivacyPolicy.style.display = "block";
    termlyTermsofService.style.display = "none";
  }

  function hideTermlyFrames() {
    console.log("hideTermlyFrames");
    termlyWrapper.classList.remove("visible");
  }

  termlyLinkTermsOfService.addEventListener("click", function() {
    showTermsOfService();
  });
  termlyLinkPrivacyPolicy.addEventListener("click", function() {
    showPrivacyPolicy();
  });
  termlyCloseButton.addEventListener("click", function() {
    hideTermlyFrames();
  });
});
