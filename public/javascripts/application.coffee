# Compile this file to public/javascripts/application.js

$ ->
  $('.action-like').click ->
    $link = $(this);
    $link.addClass('disabled').addClass('on')

    url = $link.data('url')

    $.post url, (data) ->
      if data.valid
        $link.find('.likecount').html(data.likes_count)
      else
        console.error(data.message)
    'json'

$("#add-form, #edit-form, #add-reply form").validate()

$('#shareme').sharrre
  share:
    facebook: true,
    twitter: true
  buttons:
    facebook: { layout: 'box_count' }
    twitter: { count: 'vertical' }
  enableHover: false
  enableCounter: false
  enableTracking: true
