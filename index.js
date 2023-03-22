
 let mainElement = document.getElementById("main");

mainElement.remove();

let newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.textContent = "YOUR-NAME is the champion!";