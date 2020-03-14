const mapBoxURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Datia.json?access_token=pk.eyJ1Ijoic2F4ZW5hcHJhZ3lhMjIiLCJhIjoiY2s3NW1wN2NsMDNqOTNlcDNkdDVtZXB1dCJ9.qBOBKLUfBQoZtjYvT9swiw';
fetch(mapBoxURL).then
((response) => {
response.json().then((data) => {
    if(data.error){
        console.log(error)
    }
    else{
        console.log(data.features[2].place_name)
    }
})
})

const docdata = document.querySelector('form')
const searchText = document.querySelector('input')
docdata.addEventListener('submit',() =>{
    event.preventDefault()
console.log(searchText.value)
})


