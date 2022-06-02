'use strict';

// creating a modal window for booking item
let btnBooked = document.getElementById('btn-booked');
let btnBookedClose = document.getElementById('btn-close');
let modalWindow = document.getElementById('modal');

let modalOpen = () => {
    modalWindow.style.display = 'block';
    document.getElementById('bg-overlay').style.display = 'block';
};
let modalClose = () => {
    modalWindow.style.display = 'none';
    document.getElementById('bg-overlay').style.display = 'none';
};

btnBooked.onclick = modalOpen;
btnBookedClose.onclick = modalClose;