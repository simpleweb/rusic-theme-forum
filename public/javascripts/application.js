$(document).ready(function(){

	 // AJAXIFY LIKE BUTTONS
	  $('.action-like').click(function(){

	  var button = this;

	  $(this).addClass('disabled');
	  $(this).addClass('on');

	  $.post($(this).attr('the_link'), function(data) {
		if(data.valid){
		  $(button).find(".likecount").html(''+data.likes_count+'');
		}else{
		  alert(data.message);
		}
	  }, 'json');
	});

	// FORM VALIDATION
	$("#add-form, #edit-form, #add-reply form").validate();

	// SHARE BUTTONS
	$('#shareme').sharrre({
	  share: {
		googlePlus: true,
		facebook: true,
		twitter: true
	  },
	  buttons: {
		googlePlus: {size: 'tall'},
		facebook: {layout: 'box_count'},
		twitter: {count: 'vertical'}
	  },
	  enableHover: false,
	  enableCounter: false,
	  enableTracking: true
	});

});
