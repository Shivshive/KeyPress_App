$('#clickme').on('click', function (event) {

    var key_value = $('#example-text-input').val();
    var result_status_val = $('#result-status-value');

    if (key_value) {

        $('#result-status').css('display', 'block');

        jQuery.get("http://localhost:3000/keytap/" + key_value).done(function (data, textStatus, jqXHR) {

            result_status_val.text('Key Typed: '+data.key_value + ' : '+data.done);

        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);

            result_status_val.text('Error Occured.');
        })
    }
    else {
        $('#result-status').css('display', 'block');
        result_status_val.text('Enter value for "KEY"');
    }


});

