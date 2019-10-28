// // Your code here

// const date = new Date();

// // const getSeconds = () => {
// //  const seconds = date.getSeconds();
// // }

// // const seconds = () => date.getSeconds()

// const dayWeek = { 
//   0:'Sunday',
//   1:'Monday',
//   2:'Tuesday',
//   3:'Wednesday',
//   4:'Thursday',
//   5:'Friday',
//   6:'Saturday',
// };


$(document).ready(() => {

  const clockElement = $('#clock');

  const updateClock = () => {
    const justNow = new Date(Date.now());

    const hours = justNow.getHours() < 10 ? "0" + justNow.getHours() : justNow.getHours();
    const mins = justNow.getMinutes() < 10 ? "0" + justNow.getMinutes() : justNow.getMinutes();
    const secs = justNow.getSeconds() < 10 ? "0" + justNow.getSeconds() : justNow.getSeconds();

    clockElement.html(`
      <p>${justNow.toDateString()}</p>
      <p>${hours}:${mins}:${secs}</p>
    `);
  };

  window.setInterval(updateClock, 1000);

  $('#color-buttons').on('click', 'button', function(event) {
      $('#clock').css('color', `${$(this).attr('id')}`);
  });    

  $('#align-buttons').on('click', 'button', function(event) {
    $('#clock').css('text-align', `${$(this).attr('id')}`);
  });

  $('#font-buttons').on('click', 'button', function(event) {
    $('#clock').css('font-family', `${$(this).attr('id')}`);
  });
});