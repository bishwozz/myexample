$(document).ready(function () {
    $('#scanned_date_bs').nepaliDatePicker({
        onChange: function () {
            $('#scanned_datetime').val(BS2AD($('#scanned_date_bs').val()));
        }
    });

    $('#scanned_datetime').change(function () {
        $('#scanned_date_bs').val(AD2BS($('#scanned_datetime').val()));
    });

    // Auto-fill English date from Nepali date on value change
    $('#scanned_date_bs').change(function () {
        $('#scanned_datetime').val(BS2AD($('#scanned_date_bs').val()));
    });
});

$(document).ready(function () {
    $('#sync_date_bs').nepaliDatePicker({
        onChange: function () {
            $('#sync_datetime').val(BS2AD($('#sync_date_bs').val()));
        }
    });

    $('#sync_datetime').change(function () {
        $('#sync_date_bs').val(AD2BS($('#sync_datetime').val()));
    });

    // Auto-fill English date from Nepali date on value change
    $('#sync_date_bs').change(function () {
        $('#sync_datetime').val(BS2AD($('#sync_date_bs').val()));
    });
});








