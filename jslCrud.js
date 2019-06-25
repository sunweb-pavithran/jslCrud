// Create function
function create(data, url, modal){
  $.ajax({
    url: url,
    type: 'POST',
    data: data,
    success: function(data){
      if(data.msg){
        swal({
          text: data.msg,
          icon: 'success'
        })
        $('#'+modal+'').modal('hide')
        clearModal()
      }
    }
  })
}
// Edit function
function edit(id, url, modal){
  $.ajax({
    url: url,
    type: 'GET',
    success: function(data){
      setModal(data)
      $('#'+modal+'').modal('show')
    }
  })
}
// Update function
function update(data, url, modal){
  $.ajax({
    url: url,
    type: 'POST',
    data: data,
    success: function(data){
      if(data.msg){
        swal({
          text: data.msg,
          icon: 'success'
        })
        $('#'+modal+'').modal('hide')
        clearModal()
      }
    }
  })
}
// Delete function
function deleteRes(id, url){
  swal({
  title: "Are you sure?",
  text: "Sure you want to delete this?",
  icon: "warning",
  buttons: true,
  dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      $.ajax({
        url: url,
        type: 'DELETE',
        headers:
        {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        success: function(data){
          if(data.msg){
            swal({
              text: data.msg,
              icon: 'success'
            })
          }
        }
      })
    } else {
    }
  });

}

// Set and clear modal
function clearModal(){
  $('.input-cl').val('')
}
function setModal(data){
  for(var k in data){
    $('#'+k).val(data[k])
  }
}
