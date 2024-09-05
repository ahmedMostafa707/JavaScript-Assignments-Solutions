/*
  Code one will not work because it placed in the <head> section and is executed 
  immediately as the browser encounters it. 

  At this point, the browser has not yet parsed the entire HTML document, 
  including the <body> section where the h1 element with the id el is located. 
    
  Therefore, when this code tries to access document.getElementById("el"), 
  it fails because the element does not exist yet.
*/
