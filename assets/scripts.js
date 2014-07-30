$(document).ready(function(){

	// AJAXIFY LIKE BUTTONS
	jQuery(document).on('click', '.action-like', function(e) {
	  e.preventDefault();
	  var $link, url;

	  $link = $(this);
	  $link.removeClass('action-like').addClass('action-unlike');
	  url = $link.data('url');

	  $.ajax({
	    url: url,
	    type: 'post',
	    dataType: 'json',
	    success: function(data, status, xhr) {
	    	$('.action-unlike').html('unvote');
	      $('.likecount').html(data.likes_count);
	    },
	    error: function(xhr, status, err) {
	      console.log('error:', xhr, status, err);
	    }
 	  });
	});

jQuery(document).on('click', '.action-unlike', function(e) {
  e.preventDefault();

  $link = $(this);
	$link.removeClass('action-unlike').addClass('action-like');
	url = $link.data('url');

  $.ajax({
    url: url,
    type: 'delete',
    dataType: 'json',
    success: function(data, status, xhr) {
    	$('.action-like').html('vote');
      $('.likecount').html(data.likes_count);
    },
    error: function(xhr, status, err) {
      console.log('error:', xhr, status, err);
    }
  });
});

	// FORM VALIDATION
	//$("#add-form, #edit-form, #add-reply form").validate();

	// SHARE BUTTONS
	//$('.shareme').sharrre({
	//  share: {
	//	googlePlus: true,
	//	facebook: true,
	//	twitter: true
	//  },
	//  buttons: {
	//	googlePlus: {size: 'tall'},
	//	facebook: {layout: 'box_count'},
	//	twitter: {count: 'vertical'}
	//  },
	//  enableHover: false,
	//  enableCounter: false,
	//  enableTracking: true
	//});


	//Add tags
	jQuery("#idea_tag_list").tagsManager();

	//Push tags to the edit page.
	if ( typeof tagArray != 'undefined') {
		if(tagArray.length >= 0){
			var taglength = tagArray.length,
		  tagName = null;
			for (var numberOfTags = 0; numberOfTags < taglength; numberOfTags++) {
			  tagName = tagArray[numberOfTags];
			  jQuery("#idea_tag_list").tagsManager('pushTag', tagName);
			}
		}
	}

	//Auto complete tags
	var searchUrl = $('#idea_tag_list').data('autocomplete-url');
	$('#idea_tag_list').typeahead({
    source: function(query, process) {
      $.getJSON(searchUrl, { query: query }, function(data) {
    		process(data);
      });
   	}
  });

  //Fancy box sign in
	$("#sign-in-popup").fancybox({
    'titlePosition'   : 'none',
    'transitionIn'    : 'fade',
    'transitionOut'   : 'fade'
  });

  $('.open-sign-in').click(function() {
		$('#sign-in-popup').trigger('click');
	});

});
