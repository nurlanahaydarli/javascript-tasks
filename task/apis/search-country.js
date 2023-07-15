document.querySelector("#btnSearch").addEventListener('click', function () {
    let text = document.querySelector("#textSearch").value;
    getCountries(text)
})

function getCountries(country) {
    const request = new XMLHttpRequest();

    request.open('Get', 'https://restcountries.com/v3.1/name/' + country);
    request.send();

    request.addEventListener('load', function () {
        const data = JSON.parse(this.responseText);
        displayCountry(data[0])
        const req = new XMLHttpRequest();
        let countries = data[0].borders.toString();
        req.open("Get", 'https://restcountries.com/v3.1/alpha?codes=' + countries)
        req.send();
        req.addEventListener('load', function (countries) {
            const data = JSON.parse(this.responseText)
            displayNeighborCountries(data)
        })
    })

}

function displayCountry(data) {
    let counrty_name = `<div class="card-header">  Search result </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-5">
                                <img src="${data.flags.png}" alt="" class="w-100">
                            </div>
                            <div class="col-lg-7">
                            <h4 class="card-title">${data.name.common}</h4>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <p>Capital: ${data.capital}</p>
                                    </div>
                                    <div class="col-lg-6">
                                        <p>Language: ${Object.values(data.languages)}</p>
                                    </div>
                                    <div class="col-lg-6">
                                        <p>Population: ${(data.population/1000000).toFixed(1)} Mln</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>`
    document.querySelector("#mainCountry").innerHTML = counrty_name
}

function displayNeighborCountries(data) {
    let neighbor_country = '';
    for(let country of data){
        neighbor_country +=`
         <div class="col-lg-3 my-3">
                <div class="card">
                    <img src="${country.flags.png}" alt="" class="card-img-top" style="height: 200px;object-fit: cover">
                    <div class="card-body">
                        <p>${country.name.common}</p>
                    </div>
                </div>
            </div>
        `
        document.querySelector("#neighborCountries").innerHTML = neighbor_country
    }
}

// getCountries('azerbaijan')
