// create home page layout
function loadAboutPage() {
    const contentDiv = document.getElementById('content');

    // HOME PAGE LOAD
    // create div
    const containerDiv = document.createElement('div');
    // add class
    containerDiv.classList.add('main-container');

    // create heading current page (home, menu, about)
    const pageHeader = document.createElement('h1');
    pageHeader.textContent = "About Us";
    // create span for page slogan
    const mySpan = document.createElement('span');
    mySpan.textContent = "For those who love being nosy";

    // add to container
    containerDiv.appendChild(pageHeader);
    containerDiv.appendChild(mySpan);
    // add to content
    contentDiv.appendChild(containerDiv);
}

export { loadAboutPage };