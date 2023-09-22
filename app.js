const starWarPlanetList = document.getElementById('starWarPlanetList');

fetch('https://swapi.dev/api/planets/')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        console.log(json);
        let planets = json.results;

        for (let planet of planets) {
            let card = document.createElement('div');
            card.classList.add('col-md-4', 'mb-4'); 

            card.innerHTML = `
                <div class="card" style="background-color:lightblue; border: 2px solid black">
                    <img src="assets/${planet.name}.jpg" class="card-img-top" alt="${planet.name}">
                    <div class="card-body">
                        <h5 class="card-title">${planet.name}</h5>
                        <p class="card-text">Climate: ${planet.climate}</p>
                        <p class="card-text">Terrain: ${planet.terrain}</p>
                        <p class="card-text">Population: ${planet.population}</p>
                    </div>
                </div>
            `;

            starWarPlanetList.appendChild(card);
        }
    });

