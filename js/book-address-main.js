'use strict'


function onInit() {
    getData(renderBookAdd)
}
function renderBookAdd(dataAddresses) {
    var results = document.querySelector('.add-book');
    var htmls = dataAddresses.map(address => {
        return `<div class="profile">
                    <h3>${address.name}</h3>
                    <div class="profile-details">
                        <img src="https://api.adorable.io/avatars/190/${address.name}.png" >
                        <ul>
                            <li>Address: ${address.address}</li>
                            <li>City: ${address.city}</li>
                            <li>Country: ${address.country}</li>
                            <li>Zip: ${address.zip}</li>
                            <li>Phone: ${address.phone}</li>
                        </ul>
                    </div>
                </div>
                `
    });

    results.innerHTML += htmls.join(' ')

}
