console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', handleAdd)
}

function handleAdd() {
  console.log( 'in addButton on click' );
// create object to post to server
  let koalaToSend = {
    name: $('#nameIn').val(),
    age: $('#ageIn').val(),
    gender: $('#genderIn').val(),
    readyForTransfer: $('#readyForTransferIn').val(),
    notes: $('#notesIn').val(),
  };

  console.log('new koala: ', koalaToSend)
  // call saveKoala with the new obejct
  saveKoala( koalaToSend );

  // $.ajax.post({
  //   method: 'POST',
  //   url: '/newkoala',
  //   data: newKoala
  //  })
}; 

// takes in our koala object and POSTs it on /newkoala pathway
function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );

 $.ajax({
  method: 'POST',
  url: '/koalas',
  data: newKoala
 })
 .then (response => {
  getKoalas()
 })
}


function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  $.ajax({
    method: 'GET', 
    url: '/koalas'
  })
  .then(response => {
    let allKoalas = response;
    console.log('response: ', response)


  })
} // end getKoalas
