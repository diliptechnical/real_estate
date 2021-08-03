$(document).ready( function () {
   $.ajaxSetup({
      headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
  });
});
function update(table,field,val,id){
  $.ajax({
      "method": 'PUT',
      "url": URL_ROOT+'admin/update',
      "data": {
          table: table,
          field:field,
          value:val,
          id: id
      },
      "success": (response)=>{
    //    window.location.reload()
      }
  })
}
function deletethis(table,id){
    alert("Are you sure")
    $.ajax({
        "method": 'PUT',
        "url": URL_ROOT+'admin/delete',
        "data": {
            table: table,
            id: id
        },
        "success": (response)=>{
         window.location.reload()
        }
    })
  }
function deleteData(table,id){
  $.ajax({
      "method": 'PUT',
      "url": URL_ROOT+'admin/delete',
      "data": {
          table: table,
          id: id
      },
      "success": (response)=>{
       window.location.reload()
      }
  })
}
function transactionData(){
  var type = $("#typeValue").val();
  $.ajax({
    "method": 'GET',
    "url": URL_ROOT+'admin/transaction',
    "data": {
        type: type,
    },
    "success": (response)=>{
     window.location.reload()
    }
})
}
$(document).ready(function () {



  CKEDITOR.replace( 'detail' );

  window._token = $('meta[name="csrf-token"]').attr('content')

//   ClassicEditor.create(document.querySelector('.ckeditor'))

//   moment.updateLocale('en', {
//     week: {dow: 1} // Monday is the first day of the week
//   })

//   $('.date').datetimepicker({
//     format: 'YYYY-MM-DD',
//     locale: 'en'
//   })

//   $('.datetime').datetimepicker({
//     format: 'YYYY-MM-DD HH:mm:ss',
//     locale: 'en',
//     sideBySide: true
//   })

//   $('.timepicker').datetimepicker({
//     format: 'HH:mm:ss'
//   })

//   $('.select-all').click(function () {
//     let $select2 = $(this).parent().siblings('.select2')
//     $select2.find('option').prop('selected', 'selected')
//     $select2.trigger('change')
//   })
//   $('.deselect-all').click(function () {
//     let $select2 = $(this).parent().siblings('.select2')
//     $select2.find('option').prop('selected', '')
//     $select2.trigger('change')
//   })

//   $('.select2').select2()

//   $('.treeview').each(function () {
//     var shouldExpand = false
//     $(this).find('li').each(function () {
//       if ($(this).hasClass('active')) {
//         shouldExpand = true
//       }
//     })
//     if (shouldExpand) {
//       $(this).addClass('active')
//     }
//   })
 })
  // Add row
  var row=0;
  $(document).on("click", "#add-row", function () {
  var new_row = '<tr id="row' + row + '"><td><select name="document_type[' + row + ']" type="text" class="form-control" ><option value="file">Textbox</option><option value="file">Image</option></select></td><td><input name="document[' + row + ']" type="text" class="form-control" /></td><td><input class="delete-row btn btn-danger" type="button" value="Delete" /></td></tr>';
  $('#test-body').append(new_row);
  row++;
  return false;
  });

  // Remove criterion
  $(document).on("click", ".delete-row", function () {
  //  alert("deleting row#"+row);
    if(row>1) {
      $(this).closest('tr').remove();
      row--;
    }
  return false;
  });




 $("#submitForm").on('click',function(e){
  var URL_ROOT = $('#url_root').val();
  var heading = $('#heading').val()
  var short_detail = $('#short_detail').val()
    var param = {
      heading: heading,
      short_detail: short_detail
        };
                    e.preventDefault();
                    $.ajax({
                      headers: {'x-csrf-token': _token},
                      method: 'POST',
                      url: URL_ROOT,
                      data: param,
                      success:function(response){
                        console.log(response)
                      },
                      error:function(error){
                        console.log(error)
                        alert("not send");
                      }

                      });
                    });

