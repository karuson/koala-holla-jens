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
  $('#viewKoalas').on('click', '.transferBtn', handleTransfer)
}

function handleTransfer(koalaID, ready_to_transfer) {
  console.log('in transfer')

  koalaID = $(this).closest('tr').data('id')

  $.ajax({
    method: 'PUT',
    url: '/koala/updatekoala/${koalaID}',
    data: {
      ready_to_transfer: true
    }
  }) 
  .then(response => {

    getKoalas()
  })
}


function handleAdd() {
  console.log( 'in addButton on click' );
// create object to post to server
  let koalaToSend = {
    name: $('#nameIn').val(),
    age: $('#ageIn').val(),
    gender: $('#genderIn').val(),
    ready_to_transfer: $('#readyForTransferIn').val(),
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
    console.log('response: ', allKoalas)

    // call render with allKoalas array
    render(allKoalas)
  })
} // end getKoalas

// render koala array to the DOM
function render(koalasToAdd) {
  // clear existing table
  $('#viewKoalas').empty();

  for (let koala of koalasToAdd) {
    console.log('inside for loop', koala)

    // adding invisible id to our row that is appended to the DOM, so we can use it later 
  let newRow = $(`
    <tr>
      <td>${koala.name}</td>
      <td>${koala.age}</td>
      <td>${koala.gender}</td>
      <td>${koala.ready_to_transfer}</td>
      <td><button class="transferBtn">Mark Ready</button></td> 
      <td>${koala.notes}</td>

    </tr>
    `)

    newRow.data('id', koala.id);
    console.log ('transfer value: ', koala.ready_to_transfer);
        // append koalas to the DOM
    $('#viewKoalas').append(newRow)
  }

}
