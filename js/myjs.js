 $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

 $('#option1').on('click', function () {
    $(this).button('complete') // button text will be "finished!"
  })