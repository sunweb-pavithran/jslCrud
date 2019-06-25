# jslCrud
<h2>Jquery Ajax CRUD library for Laravel</h2>
<br>
<b><h4>Dependencies</h4></b>
<hr>
<ul>
  <li><a href="https://sweetalert.js.org/guides/#installation"> Sweet alert 2 </a></li>
  <li><a href="https://code.jquery.com/">Jquery 3</a></li>
  <li><a href="https://getbootstrap.com/docs/4.0/getting-started/introduction/">Bootstrap 4</a></li>
</ul>
<br>
<b><h4>How to use</h4></b>
<hr>
<b><h5>Configuration</h5></b>
<ul>
  <li>Add either the jslCrud.js or jslCrud.min.js file after Jquery</li>
  <li>Add Sweet alert as well in any particular order</li>
  <li>Make sure the Laravel csrf token meta tag is added</li>
  <li>This file uses bootstrap modals for adding and editing resources. Therefore the forms must be included in modals</li>
  <li>Make sure that the input fields in the edit modal have the same id name as their corresponding database field name</li>
</ul>
<b><h5>Create</h5></b>
<p>Pass the form data, url for creation and the id of the create modal to the create() function</p>
<p>If the above configuration has been setup properly the function call is all that is needed</p>
<b>The function</b>

```javascript
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
```
<b>Usage</b>

```javascript
var formData = $('.add_post').serialize()
    var url = '{{url('add-post')}}'
    var modal = 'addPostModal'
    create(formData, url, modal)
```

<br>
<b><h5>Edit</h5></b>
<p>Pass the form data, url for getting the required data and the id of the edit modal to the edit() function</p>
<p>This should open your edit modal</p>
<b>The function</b>

```javascript
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
```

<b>Usage</b>

```javascript
var id = $(this).data('id')
      var url = '{{url('edit-post')}}/'+id
      var modal = 'editPostModal'
      edit(id, url, modal)
```

<br>
<b><h5>Update</h5></b>
<p>Pass the form data, url for updating and the id of the edit modal to the update() function</p>
<p>This function will clear(input fields) and close the modal</p>
<b>The function</b>

```javascript
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
```

<b>Usage:</b>

```javascript
var formData = $('.edit_post').serialize()
      var url = '{{url('update-post')}}'
      var modal = 'editPostModal'
      update(formData, url, modal)
```

<br>
<b><h5>Delete</h5></b>
<p>Pass the url for deleting and the id of the resource you want to delete to the delete() function</p>
<b>The function</b>

```javascript
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
```

<b>Usage:</b>

```javascript
var id = $(this).data('id')
      var url = '{{url('delete-post')}}/'+id
      deleteRes(id, url)
```
<br>
<br><br>
<b><h4>To Do</h4></b>
<hr>
<ul>
  <li>Increase efficieny of code</li>
  <li>Allow different types of input clearance</li>
</ul>
