const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//NAVBAR
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active'); 
});

// Add event listener to menu links
menuLinks.addEventListener('click', function() { 
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
});
//END NAVBAR

// FORM
// Get the modal element
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("signup-page");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


//download file
// Get the form element
var form = document.getElementById("contactForm");

// Handle form submission
form.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent default form submission behavior

  // Get form values
  var subject = document.getElementById("subject").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  // Generate text file content
  var fileContent = "Subject: " + subject + "\n";
  fileContent += "Email: " + email + "\n";
  fileContent += "Phone: " + phone + "\n";
  fileContent += "Message: " + message + "\n";

  // Create a new Blob object with the file content
  var blob = new Blob([fileContent], { type: "text/plain" });

  // Create a temporary anchor element to trigger the file download
  var downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(blob);
  
  // Generate the file name based on the subject
  var fileName = subject.replace(/[^a-z0-9]/gi, "_") + ".txt";
  downloadLink.download = fileName;
  
  downloadLink.click();

  // Clean up the temporary anchor element
  URL.revokeObjectURL(downloadLink.href);
});

//form

//UBER SECTION//




