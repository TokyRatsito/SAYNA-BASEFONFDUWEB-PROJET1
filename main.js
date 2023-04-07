let myImage = document.querySelector('img');
myImage.addEventListener('click', function() {
let mySrc = myImage.getAttribute('src');
if (mySrc === 'images/journal-bonheur.jpg') {
myImage.setAttribute('src', 'images/science-bonheur.jpg');
    } else {
      myImage.setAttribute('src', 'images/journal-bonheur.jpg');
    }
});
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Journal du Bonheur est cool, ' + myName;
  }
  if (!localStorage.getItem('nom')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Journal du Bonheur est cool, ' + storedName;
  }
  myButton.addEventListener('click', function() {
    setUserName();
   });
     