function togglefunction() {
    var x = document.getElementById("navbar");
    if (x.style.display == "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}


 // Function to handle smooth scrolling
function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    if (targetElement) {
        const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
        window.scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }
}

// Attach click event listeners to the "Latest Blog" and "Featured Blog" links
document.addEventListener("DOMContentLoaded", () => {
    const latestBlogLink = document.querySelector("a[href='#latest-blog']");
    const featuredBlogLink = document.querySelector("a[href='#featured-blog']");
    const contactusLink = document.querySelector("a[href='#contactus']");


    if (latestBlogLink) {
        latestBlogLink.addEventListener("click", (e) => {
            e.preventDefault();
            smoothScroll("#latest-blog");
        });
    }

    if (featuredBlogLink) {
        featuredBlogLink.addEventListener("click", (e) => {
            e.preventDefault();
            smoothScroll("#featured-blog");
        });
    }
    if (contactusLink) {
       contactusLink.addEventListener("click", (e) => {
            e.preventDefault();
            smoothScroll("#contactus");
        });
    }
});

$(document).ready(function() {
    function truncateText(text, maxLength) {
      if (text.length > maxLength) {
        return text.substring(0, maxLength - 3) + '....';
      }
      return text;
    }
  
    function applyTruncation() {
      if ($(window).width() <= 768) {
        $('.truncate-title').each(function() {
          var title = $(this).text();
          var truncatedTitle = truncateText(title, 100); 
          $(this).text(truncatedTitle);
          $(this).attr('title', title);
        });
      }
    }
    applyTruncation();
    $(window).resize(function() {
      applyTruncation();
    });
  });
  


