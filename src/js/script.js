
//used in profile.html
$('#editDetailsBtn').click(function() {
    const inputs = $('.editable');
    const isReadonly = inputs.prop('readonly');
  
    if (isReadonly) {
      inputs.removeAttr('readonly');
      $(this).text('Save');
    } else {
      inputs.attr('readonly', true);
      $(this).text('Edit');
      // optionally: trigger form submission or AJAX save
    }
  });