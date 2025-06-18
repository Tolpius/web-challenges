console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

// Elemente erstellen
const newPostArticle = document.createElement("article");
const newPostP = document.createElement("p");
const newPostFooter = document.createElement("footer");
const newPostSpan = document.createElement("span");
const newPostButton = document.createElement("button");

// Klassen hinzufügen
newPostArticle.classList.add("post");
newPostP.classList.add("post__content");
newPostFooter.classList.add("post__footer");
newPostSpan.classList.add("post__username");
newPostButton.classList.add("post__button");

// Textinhalt hinzufügen
newPostP.textContent = "This is a new social media post!"; 
newPostSpan.textContent = "@New User";
newPostButton.textContent = "♥ Like";

// Weitere Attribute hinzufügen
newPostButton.setAttribute("data-js", "like-button2");
newPostButton.setAttribute("type", "button");

// Elemente platzieren
document.body.appendChild(newPostArticle);
newPostArticle.appendChild(newPostP);
newPostArticle.appendChild(newPostFooter);
newPostFooter.appendChild(newPostSpan);
newPostFooter.appendChild(newPostButton);

// Event-Listener hinzufügen für Like Button
const likeButton2 = document.querySelector('[data-js="like-button2"]');
likeButton2.addEventListener("click", handleLikeButtonClick);