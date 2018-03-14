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
    //append to dom here


});

function monthsWorked(unix) {
    var curDate = new Date();
    var curYear = curDate.getFullYear();
    var curMonth = curDate.getMonth();    
    
    var date = new Date(unix * 1000);
    var month = date.getMonth();
    var year = date.getFullYear();
    var totalMonths = ((curYear - year) * 12) + (curMonth - month);    
    
    return totalMonths;
}
