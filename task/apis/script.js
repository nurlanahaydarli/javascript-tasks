function displayCountry(country) {
    const request = new XMLHttpRequest();

    request.open('Get', 'https://restcountries.com/v3.1/name/' + country);
    request.send()

    request.addEventListener("load", function () {
        const data = JSON.parse(this.responseText);
        console.log(data)
        setCopuntry(data)
        const countries = data[0].borders.toString()
        const req = new XMLHttpRequest()
        req.open('Get', 'https://restcountries.com/v3.1/alpha?codes=' + countries)
        req.send()
        req.addEventListener("load", function () {
            const data = JSON.parse(this.responseText)
            setCopuntry(data)
        })
    })
}


function setCopuntry(data) {
    for (let country of data) {
        const html = ` 
        <div class="col-md-3 mb-3">
            <div class="card h-100 ">
                <img src="${country.flags.png}" class="card-img-top" style="height: 200px;object-fit: cover">
                <div class="card-body">
                    <h5 class="card-title">${country.name.common}</h5>
                    <p class="card-text">Population: ${(country.population / 1000000).toFixed(1)}</p>
                    <p class="card-text">Language: ${Object.values(country.languages)}</p>
                    <p class="card-text">Capital: ${country.capital}</p>
                   
                </div>
            </div>
        </div>
   `
        document.querySelector(".container .row").insertAdjacentHTML("beforeend", html)
    }

}

// displayCountry("azerbaijan")
// displayCountry("turkey")
displayCountry("russian")