function loadJSON(callback) {
  const xObj = new XMLHttpRequest();
  xObj.overrideMimeType("application/json");
  xObj.open('GET', './data.json', true);
  // 1. replace './data.json' with the local path of your file
  xObj.onreadystatechange = function() {
      if (xObj.readyState === 4 && xObj.status === 200) {
          // 2. call your callback function
          callback(xObj.responseText);
      }
  };
  xObj.send(null);
}

// destinations
function destinationsInit(index) {
  loadJSON(function(response) {
    // 3. parse JSON string into JSON Object
    const json = JSON.parse(response);
    // console.log(json.destinations[index])
    const data = json.destinations[index]
    const destinationInfo = document.getElementsByClassName("destination-info")[0]
    const img = document.getElementById("image-star")

    img.innerHTML = ""
    img.innerHTML = `
    <source srcset="${data.images.webp}" type="image/webp" >
    <img src="${data.images.png}" alt="${data.name}" >
    `

    destinationInfo.innerHTML= ""
    destinationInfo.innerHTML = `
    <h2 class="fs-800 uppercase ff-serif">${data.name}</h2>
    <p>${data.description}</p>
    <div class="destination-meta flex">
      <div>
        <h3 class="text-accent fs-200 uppercase">Avg. distance</h3>
        <p class="ff-serif uppercase">${data.distance}</p>
      </div>

      <div>
        <h3 class="text-accent fs-200 uppercase">Est. travel time</h3>
        <p class="ff-serif uppercase">${data.travel}</p>
      </div>
    </div>
    `
    
  });
}

const tabs = document.getElementsByClassName("stars")

const changeStar = function() {
  Array.from(tabs).forEach(function(element) {
    element.ariaSelected = false
  });
  const attribute = this.getAttribute("data-star");
  destinationsInit(attribute)
  this.ariaSelected = true
}

Array.from(tabs).forEach(function(element) {
  element.addEventListener('click', changeStar);
});


// crew
function crewsInit(index) {
  loadJSON(function(response) {
    // 3. parse JSON string into JSON Object
    const json = JSON.parse(response);
    // console.log(json.crew[index])
    const data = json.crew[index]
    // console.log(data)
    const crewInfo = document.getElementsByClassName("crew-details")[0]
    const img = document.getElementById("image-crew")

    img.innerHTML = ""
    img.innerHTML = `
    <source srcset="${data.images.webp}" type="image/webp" >
    <img src="${data.images.png}" alt="${data.name}" >
    `

    crewInfo.innerHTML= ""
    crewInfo.innerHTML = `
      <header class="flow flow--space--small">
        <h2 class="fs-600 ff-serif uppercase">${data.role}</h2>
        <p class="fs-700 uppercase ff-serif">${data.name}</p>
      </header>
      <p>
      ${data.bio}
      </p>
    `
    
  });
}

const crews = document.getElementsByClassName("crew-index")

const changeCrew = function() {
  Array.from(crews).forEach(function(element) {
    element.ariaSelected = false
  });
  const attribute = this.getAttribute("data-crew");
  crewsInit(attribute)
  this.ariaSelected = true
}

Array.from(crews).forEach(function(element) {
  element.addEventListener('click', changeCrew);
});

// technology
function technologyInit(index) {
  loadJSON(function(response) {
    // 3. parse JSON string into JSON Object
    const json = JSON.parse(response);
    // console.log(json.crew[index])
    const data = json.technology[index]
    // console.log(data)
    const crewInfo = document.getElementsByClassName("technology-details")[0]
    const img = document.getElementById("image-technology")

    img.innerHTML = ""
    img.innerHTML = `
    <source media="(min-width:45em)" srcset="${data.images.portrait}">
    <source media="(min-width:35em)" srcset="${data.images.landscape}">
    <img src="${data.images.landscape}" alt="Launch vehicle">
    `

    crewInfo.innerHTML= ""
    crewInfo.innerHTML = `
    <header class="flow flow--space--small">
    <h2 class="fs-500 ff-serif uppercase">The technology</h2>
    <p class="fs-700 uppercase ff-serif">${data.name}</p>
  </header>
  <p>
    ${data.description}
  </p>
    `
  });
}

const technology = document.getElementsByClassName("technology-index")

const changeTechnology = function() {
  Array.from(technology).forEach(function(element) {
    element.ariaSelected = false
  });
  const attribute = this.getAttribute("data-technology");
  technologyInit(attribute)
  this.ariaSelected = true
}

Array.from(technology).forEach(function(element) {
  element.addEventListener('click', changeTechnology);
});

