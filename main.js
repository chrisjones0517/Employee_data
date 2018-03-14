$().on("click", function(){


    var newRow = $("<tr>");
    for(var i = 0; i<5; i++){
        var newItem = $("<td>");
        newRow.append(newItem);
    }

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
    
    return totalMonths
}