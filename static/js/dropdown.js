//start Code for the transperent of heading on hovering the internal content of eng
document.addEventListener("DOMContentLoaded", function() {
  // Get the drop-link elements
  var dropLinks = document.getElementsByClassName("drop-link");

  // Add event listeners for hover
  for (var i = 0; i < dropLinks.length; i++) {
    dropLinks[i].addEventListener("mouseover", function() {
      // Get the drop-left1 and drop-left2 elements
      var dropLeft1 = document.getElementById("drop-left1");
      var dropLeft2 = document.getElementById("drop-left2");

      // Set the background color to transparent
      dropLeft1.style.backgroundColor = "transparent";
      dropLeft2.style.backgroundColor = "transparent";
    });

    dropLinks[i].addEventListener("mouseout", function() {
      // Get the drop-left1 and drop-left2 elements
      var dropLeft1 = document.getElementById("drop-left1");
      var dropLeft2 = document.getElementById("drop-left2");

      // Reset the background color
      dropLeft1.style.backgroundColor = "";
      dropLeft2.style.backgroundColor = "";
    });
  }
});
//end of transperent on hovering logic


//start Code for the transperent of heading on hovering the internal content of med
document.addEventListener("DOMContentLoaded", function() {
  // Get the drop-link elements
  var dropLinks = document.getElementsByClassName("drop-link");

  // Add event listeners for hover
  for (var i = 0; i < dropLinks.length; i++) {
    dropLinks[i].addEventListener("mouseover", function() {
      // Get the drop-left1 and drop-left2 elements
      var dropLeft1med = document.getElementById("drop-left1med");
      var dropLeft2med = document.getElementById("drop-left2med");

      // Set the background color to transparent
      dropLeft1med.style.backgroundColor = "transparent";
      dropLeft2med.style.backgroundColor = "transparent";
    });

    dropLinks[i].addEventListener("mouseout", function() {
      // Get the drop-left1 and drop-left2 elements
      var dropLeft1med = document.getElementById("drop-left1med");
      var dropLeft2med = document.getElementById("drop-left2med");

      // Reset the background color
      dropLeft1med.style.backgroundColor = "";
      dropLeft2med.style.backgroundColor = "";
    });
  }
});
//end of transperent on hovering logic med


//start code for the green colour of drop down of eng
document.addEventListener("DOMContentLoaded", function() {
  // Get the drop-left1 and drop-left2 elements
  var dropLeft1 = document.getElementById("drop-left1");
  var dropLeft2 = document.getElementById("drop-left2");

      // Reset the initial text color of the first drop-link in drop-left1 td
      var initialFirstDropLink1 = dropLeft1.parentNode.querySelector(".drop-link");
    
      // Reset the initial text color of the first drop-link in drop-left2 td
      var initialFirstDropLink2 = dropLeft2.parentNode.querySelector(".drop-link");

  // Add event listener for drop-left1 hover
  dropLeft1.addEventListener("mouseover", function() {
    // Set the text color of the first drop-link in drop-left1 td to green
    var firstDropLink = this.parentNode.querySelector(".drop-link");
    firstDropLink.style.color = "green";
    initialFirstDropLink2.style.color = "";
  });

  dropLeft1.addEventListener("mouseout", function() {
    // Reset the text color of the first drop-link in drop-left1 td
    var firstDropLink = this.parentNode.querySelector(".drop-link");
    firstDropLink.style.color = "";
  });

  // Add event listener for drop-left2 hover
  dropLeft2.addEventListener("mouseover", function() {
    // Set the text color of the first drop-link in drop-left2 td to green
    var firstDropLink = this.parentNode.querySelector(".drop-link");
    firstDropLink.style.color = "green";
    initialFirstDropLink1.style.color = "";
  });

  dropLeft2.addEventListener("mouseout", function() {
    // Reset the text color of the first drop-link in drop-left2 td
    var firstDropLink = this.parentNode.querySelector(".drop-link");
    firstDropLink.style.color = "";
  });
});
// end of green logic eng


//start code for the green colour of drop down of med
document.addEventListener("DOMContentLoaded", function() {
  // Get the drop-left1 and drop-left2 elements
  var dropLeft1med = document.getElementById("drop-left1med");
  var dropLeft2med = document.getElementById("drop-left2med");

      // Reset the initial text color of the first drop-link in drop-left1 td
      var initialFirstDropLink1 = dropLeft1med.parentNode.querySelector(".drop-link");
    
      // Reset the initial text color of the first drop-link in drop-left2 td
      var initialFirstDropLink2 = dropLeft2med.parentNode.querySelector(".drop-link");

  // Add event listener for drop-left1 hover
  dropLeft1med.addEventListener("mouseover", function() {
    // Set the text color of the first drop-link in drop-left1 td to green
    var firstDropLink = this.parentNode.querySelector(".drop-link");
    firstDropLink.style.color = "green";
    initialFirstDropLink2.style.color = "";
  });

  dropLeft1med.addEventListener("mouseout", function() {
    // Reset the text color of the first drop-link in drop-left1 td
    var firstDropLink = this.parentNode.querySelector(".drop-link");
    firstDropLink.style.color = "";
  });

  // Add event listener for drop-left2 hover
  dropLeft2med.addEventListener("mouseover", function() {
    // Set the text color of the first drop-link in drop-left2 td to green
    var firstDropLink = this.parentNode.querySelector(".drop-link");
    firstDropLink.style.color = "green";
    initialFirstDropLink1.style.color = "";
  });

  dropLeft2med.addEventListener("mouseout", function() {
    // Reset the text color of the first drop-link in drop-left2 td
    var firstDropLink = this.parentNode.querySelector(".drop-link");
    firstDropLink.style.color = "";
  });
});
// end of green logic med


//Start code for engineering content in dropdown
document.addEventListener("DOMContentLoaded", function() {
        // Get the "Engineering" menu item
        var engineeringMenuItem = document.getElementById("eng");

        // Get the element with the ID "drop-left1"
        var dropLeft1 = document.getElementById("drop-left1");

        // Attach mouseenter event listener to the "Engineering" menu item
        engineeringMenuItem.addEventListener("mouseenter", function() {
            // Create and dispatch a mouseover event on the "drop-left1" element
            var event = new MouseEvent("mouseover", {
                bubbles: true,
                cancelable: true,
                view: window
            });
            dropLeft1.dispatchEvent(event);
        });
    });
//end of eng content dropdown logic


//Start code for Med content in dropdown
    document.addEventListener("DOMContentLoaded", function() {
        var medMenuItem = document.getElementById("med");

        var dropLeft1med = document.getElementById("drop-left1med");

        medMenuItem.addEventListener("mouseenter", function() {
            var event = new MouseEvent("mouseover", {
                bubbles: true,
                cancelable: true,
                view: window
            });
            dropLeft1med.dispatchEvent(event);
        });
    });
//end of med content dropdown logic       
  

// For the dropdown in mobile screen inner menu
document.addEventListener('DOMContentLoaded', function() {

    var mobdrop1 = document.querySelector('.mobdrop1');
  
    var mobnest1 = document.querySelector('.mob-nest1');
  
    var mobnest2 = document.querySelector('.mob-nest2');
  
    var mobSubDrop1Element = document.querySelector('.mob-subdrop1');
  
    mobSubDrop1Element.addEventListener('click', function() {
      // Toggle the visibility of mob-nest1
      mobnest1.style.display = (mobnest1.style.display === 'block') ? 'none' : 'block';
    });
  
    var mobSubDrop2Element = document.querySelector('.mob-subdrop2');

    mobSubDrop2Element.addEventListener('click', function() {
      // Toggle the visibility of mob-nest2
      mobnest2.style.display = (mobnest2.style.display === 'block') ? 'none' : 'block';
    });
  
    var mobEngElement = document.getElementById('mobeng');
  
    mobEngElement.addEventListener('click', function() {
      // Toggle the visibility of mobdrop1
      mobdrop1.style.display = (mobdrop1.style.display === 'none') ? 'flex' : 'none';
    });

    var mobMedElement = document.getElementById('mobmed');
  
    var mobdrop2 = document.querySelector('.mobdrop2');
  
    mobMedElement.addEventListener('click', function() {
      mobdrop2.style.display = (mobdrop2.style.display === 'none') ? 'flex' : 'none';
    });
  
    var mob2SubDrop1Element = document.querySelector('.mob2-subdrop1');
  
    var mob2nest1 = document.querySelector('.mob2-nest1');
  
    mob2SubDrop1Element.addEventListener('click', function() {
      mob2nest1.style.display = (mob2nest1.style.display === 'block') ? 'none' : 'block';
    });
    var mob2SubDrop2Element = document.querySelector('.mob2-subdrop2');
    var mob2nest2 = document.querySelector('.mob2-nest2');
    mob2SubDrop2Element.addEventListener('click', function() {
      mob2nest2.style.display = (mob2nest2.style.display === 'block') ? 'none' : 'block';
    });
  
  });
//end of mobile dropdown logic  