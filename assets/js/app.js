var contact = "";
$(document).ready(() => {
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
  $('.trigger-modal').modal();

$('.left').click(function(){
   var name= $("#name").val();
  var phone= $("#phone").val();
  var mail= $("#mail").val();

$("#clist").append(("<div id='contact_" + contact + "' class='contact col l12'>" +
        
        "<div class='card horizontal'>" +
        "<div class='card-image'>" +
        "</div>" +
        "<div class = 'card-stacked' >" +
        "<div class='card-content'>" +
        "<h4 id='cinfo'>" + '<i class="material-icons">account_circle</i>' + ' ' + name + "</h4>" +
        '<p id="pnumber">' + '<i class="material-icons">local_phone</i>' + ' ' + phone + '</p>'+
        '<p id="mail" class="mailp">' + '<i class="material-icons">mail</i>' + ' ' + mail + '</p>' +
          '<a class="waves-effect waves-light btn trash right" id="trash"><i class="material-icons">delete</i></a>' +
        '</div>'+
      '</div>'+
    '</div>'+
  '</div>'
  )
)
  $(".trash").click(function(){
    $(this).parent().remove();
  });
}
);
});