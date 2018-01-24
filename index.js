// function initMap() {
//     var uluru = {lat: 39.9662, lng: -86.0077};
//     var map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 4,
//       center: uluru
//     });
//     var marker = new google.maps.Marker({
//       position: uluru,
//       map: map
//     });
//   }

$(()=> {
    var map;
    var fishers = {
        lat: 39.9662, 
        lng: -86.0077
    }

    function initMap(loc) {
        map = new google.maps.Map(document.getElementById('map'), {
            center: loc,
            zoom: 8
        });
    }

    initMap(fishers)


    $('#location-form').submit((e) => {
       e.preventDefault()
       let longitude = $('#longitude').val()
       let latitude = $('#latitude').val()
       let location = {
        lat: Number(latitude),
        lng: Number(longitude)
       }
        initMap(location)
       console.log(longitude, typeof(latitude) )
    })
})
