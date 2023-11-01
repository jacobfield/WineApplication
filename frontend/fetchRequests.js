const PORT = 6789;
let id = 1;
let inputColour = "";
const wineColours = {
  white: "white",
  rose: "rose",
  red: "red",
};
function setColour(colour) {
  inputColour = wineColours.colour;
}

//Add an event listener that looks for a click on a specific icon
//When it's clicked, run the setColour function
// Where the argument is the colour of wine pressed
// either red, white or rose

async function fetchAllWines() {
  const response = await fetch(`http://localhost:${PORT}/wines`, {
    headers: {
      Accept: "application/json",
    },
  });
  // If the request fails log out an error
  if (!response.ok) {
    console.error(`Status: ${response.status}`);
    console.error(`Text: ${await response.text()}`);
    return;
  }
}

async function fetchWineById() {
  const response = await fetch(`http://localhost:${PORT}/wines/${id}`, {
    headers: {
      Accept: "application/json",
    },
  });
  // If the request fails log out an error
  if (!response.ok) {
    console.error(`Status: ${response.status}`);
    console.error(`Text: ${await response.text()}`);
    return;
  }
}
