$("#submit").on("click", function(){

    event.preventDefault();

    var newRow = $("<tr>");
    for(var i = 1; i<6; i++){
        var newItem = $("<td>");

        newItem.text($.trim($("#input"+i).val()));
        newRow.append(newItem);
    }

    $("tbody").append(newRow);
});