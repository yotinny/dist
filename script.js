$('.message').click(function () {
   $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});

$('.login-form button').click(function () {
   console.log('regist')
   var x = document.getElementById("myForm").elements[0].value;
   var y = document.getElementById("myForm").elements[1].value;
      // var z = document.getElementById("myForm").elements[2].value;
      // console.log(x)
      console.log(x)
      console.log(y)
   var id = $('td[name*=mail]')
   let json
   fetch('http://localhost:3000/api',
      {
         method: 'POST',
         body: JSON.stringify({ email: x, password: y }),
         headers: {
            'Content-type': 'application/json'
         }
      }
   ).then(res => res.json())
      .then(res => {
         console.log('hereeee')
         console.log('helllooooo', res)
      })
});

function myFunction() {
   var x = document.getElementById("myForm").elements[0].value;
 }


// $('.message').click(function () {
//    console.log('regist')
//    var id = $(this).children("input[name='mail']");
//    // console.log(id)
//    let json
//    fetch('http://localhost:3000/api',
//       {
//          method: 'POST',
//          body: JSON.stringify({ email: id }),
//          headers: {
//             'Content-type': 'application/json'
//          }
//       }
//    ).then(res => res.json())
//       .then(res => {
//          console.log('hereeee')
//          console.log('helllooooo', res)
//       })
// });

