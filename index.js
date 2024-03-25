
const body = document.getElementsByTagName("body")[0];
const mainn = body.querySelector("main");
body.removeChild(mainn);

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Tova is the champion";
body.append(newHeader);