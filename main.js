

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCVMltm4e8k7GFroxyIesRhL29_0alxi6U",
    authDomain: "employee-data-manager-24945.firebaseapp.com",
    databaseURL: "https://employee-data-manager-24945.firebaseio.com",
    projectId: "employee-data-manager-24945",
    storageBucket: "",
    messagingSenderId: "520718572086"
};
firebase.initializeApp(config);


var dbRef = firebase.database().ref();

dbRef.on("value", function (snapshot) {
    $("tbody").empty();
    console.log(snapshot.val());

    var data = snapshot.val();
    var keys = Object.keys(data)
    console.log("keyslog: " +keys.length);
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i]
        console.log("loop"+i);

    //    var values = {   } [data[k].name, data[k].rate, data[k].role, data[k].startDate];
        var nameK = data[k].name;
        var rateK = data[k].rate;
        var roleK = data[k].role;
        var startk = data[k].startDate;


        var newRow = $("<tr>");

        // newRow.attr("class", "#some")
        newRow.append($("<td>"+nameK+"</td>"));
        newRow.append($("<td>"+rateK+"</td>"));
        newRow.append($("<td>"+roleK+"</td>"));
        newRow.append($("<td>"+startk+"</td>"));

       

        $("tbody").append(newRow);
    }
});




$("#submit").on("click", function () {

    event.preventDefault();

    // var newRow = $("<tr>");
    // for (var i = 1; i < 6; i++) {
    //     var newItem = $("<td>");

    //     newItem.text($.trim($("#input" + i).val()));
    //     newRow.append(newItem);
    // }

    // $("tbody").append(newRow);

    dbRef.push({
        name: $("#input1").val(),
        role: $("#input2").val(),
        rate: $("#input3").val(),
        startDate: $("#input4").val(),
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

});


//append to dom here




function monthsWorked(unix) {
    var curDate = new Date();
    var curMonth = curDate.getMonth();
    var curYear = curDate.getFullYear();

    var date = new Date(unix * 1000);
    var month = date.getMonth();
    var year = date.getFullYear();
    var totalMonths = ((curYear - year) * 12) + (curMonth - month);

    return totalMonths;
}

function moneyPaid(unix, payRate) {
    return monthsWorked(unix) * payRate;
}
