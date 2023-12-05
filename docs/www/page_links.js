function toggleLinkContainer() {
  // Define a variable to store the timer ID
  let timer;
  
  // Get elements from the document
  let hover_icon = document.getElementById("hover_icon");
  let link_container = document.getElementById("link_container");
  
  // Add a mouse hover event listener to the icon and show link container
  hover_icon.addEventListener("mouseover", showLinkContainer);
  link_container.addEventListener("mouseover", showLinkContainer);
  
  // Remove link container
  hover_icon.addEventListener("mouseleave", hideLinkContainer);
  link_container.addEventListener("mouseleave", hideLinkContainer);
  
  // Define function
  function showLinkContainer() {
    // clear the timer if it exists
    if (timer) {
      clearTimeout(timer);
    }
    
    link_container.className = "show";
  }
  
  function hideLinkContainer() {
   // Set a timer to hide the container after 2 seconds (2000 milliseconds)
   timer = setTimeout(function() {
     link_container.className = "c_hidden";
   }, 2000);
    
  }
  
}


// toggleLinkContainer();
$(document).ready(toggleLinkContainer);