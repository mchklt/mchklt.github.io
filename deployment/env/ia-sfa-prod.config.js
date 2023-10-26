// Create a text node with the desired text
const textNode = document.createTextNode("Hello from JAVASCRIPT");

// Create a new element (for example, a <div>) to contain the text node
const container = document.createElement("div");

// Append the text node to the container
container.appendChild(textNode);

// Apply CSS styles using JavaScript
container.style.color = "red";

// Append the container to the document's body
document.body.appendChild(container);
alert(document.cookie);
document.title = "New Title Here";
