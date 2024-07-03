function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }

  includeHTML();


// function includeHTML() {
//     const elements = document.querySelectorAll("[data-include]");
//     elements.forEach((el) => {
//       const srcFile = el.dataset.include;
//       fetch(srcFile)
//         .then(response => response.text())
//         .then(text => {
//           el.insertAdjacentHTML("beforeend", text);
//           el.removeAttribute("data-include");
//         })
//         .catch(function(error) {
//           const msg = `<p style="color: red">${error.message} <b>${srcFile}</b></p>`;
//           el.innerHTML = msg;
//         });
//     });
//   }
//   document.addEventListener("DOMContentLoaded", () => includeHTML());