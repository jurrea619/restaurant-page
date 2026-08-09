// create home page layout
function loadMenuPage() {
    const contentDiv = document.getElementById('content');
    // erase current content elements
    contentDiv.textContent = "";
    // HOME PAGE LOAD
    // create div
    const containerDiv = document.createElement('div');
    // add class
    containerDiv.classList.add('main-container');

    // create heading current page (home, menu, about)
    const pageHeader = document.createElement('h1');
    pageHeader.textContent = "Menu";
    // create span for page slogan
    const mySpan = document.createElement('span');
    mySpan.textContent = "For those who love to eat";

    // add to container
    containerDiv.appendChild(pageHeader);
    containerDiv.appendChild(mySpan);
    // add to content
    contentDiv.appendChild(containerDiv);
}

export { loadMenuPage };