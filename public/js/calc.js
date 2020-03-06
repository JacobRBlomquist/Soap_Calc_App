$("#Donate").click(function (e) {
    e.preventDefault();

    $.ajax({
        type: "POST",
        url: "/api/calc",
        data: JSON.stringify({
            Oils: [{
                name: "coconut oil"
            }, {
                name: "pomace"
            }]
        }),
        // contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            alert(response);
            console.log(response);
        }
    });

});