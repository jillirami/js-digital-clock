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

$(document).ready(function() {

  
  const interval = setInterval(getTime, 1000);
  function getTime() {
  //   // const watch = $(`<p>${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}</p>`)
  //   // $('#clock').append(watch);
  //   // const calendar = $(`<p id='small'>${dayWeek[date.getDay()]}, Day ${date.getDate()} of Month ${date.getMonth() + 1} of Year ${date.getFullYear()} </p>`)
    
    const date = new Date();
    document.getElementById('clock').innerHTML = date.toLocaleTimeString();
    $("#clock").html(date.toLocaleTimeString());
    }
  
  
});
