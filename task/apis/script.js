function displayCountry(country){
    const request = new XMLHttpRequest();

    request.open('Get', 'https://restcountries.com/v3.1/name/'+ country);
    request.send()

    request.addEventListener("load", function () {
        const data = JSON.parse(this.responseText);
        console.log(data)
        setCopuntry(data[0])
    })
}


function setCopuntry(data) {
    const html = ` 
        <div class="col-md-3">
            <div class="card h-100">
                <img src="${data.flags.png}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${data.name.common}</h5>
                    <p class="card-text">Population: ${(data.population /1000000).toFixed(1)}</p>
                    <p class="card-text">Language: ${Object.values(data.languages)}</p>
                    <p class="card-text">Capital: ${data.capital}</p>
                   
                </div>
            </div>
        </div>
   `
    document.querySelector(".container .row").insertAdjacentHTML("beforeend",html)
}

displayCountry("azerbaijan")
displayCountry("turkey")
displayCountry("russian")