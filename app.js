// // Toggle dropdown on click
// document.addEventListener("DOMContentLoaded", function() {
//     const dropdownBtn = document.querySelector(".dropbtn");
//     const dropdownContent = document.querySelector(".dropdown-content");

//     dropdownBtn.addEventListener("click", function() {
//         dropdownContent.classList.toggle("show");
//     });

//     // Close the dropdown if the user clicks outside of it
//     window.onclick = function(event) {
//         if (!event.target.matches('.dropbtn')) {
//             const dropdowns = document.getElementsByClassName("dropdown-content");
//             for (let i = 0; i < dropdowns.length; i++) {
//                 const openDropdown = dropdowns[i];
//                 if (openDropdown.classList.contains('show')) {
//                     openDropdown.classList.remove('show');
//                 }
//             }
//         }
//     }
// });


// Define latitude, longitude and zoom level
const latitude = 46.19455195346911;
const longitude = 13.727996349334717;
const zoom = 13;

var mymap = L.map('mapWrap');

// Add initial marker & popup window
var mmr = L.marker([0,0]);
mmr.bindPopup('0,0');
mmr.addTo(mymap);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {
    foo: 'bar',
    attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}
).addTo(mymap);

// Set lat lng position and zoom level of map 
mmr.setLatLng(L.latLng(latitude, longitude));
mymap.setView([latitude, longitude], zoom);

// Set marker onclick event
mmr.on('click', openPopupWindow);

// Marker click event handler
function openPopupWindow(e) {
    mmr.setPopupContent('Zatolmin 59, 5220 Tolmin').openPopup();
}