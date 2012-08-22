(function($){

    $(function () {
        
        // Date picker

        $('.date-picker').each(function(){
            $(this).datepicker({
                //inline: true,
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 3,
                onSelect: function( selectedDate ) {
                    $(inputs.get(1)).datepicker("option", "minDate", selectedDate);
                }
            });
        }); // Date picker / END


        $('.date-range-picker').each(function(){
            var inputs = $(this).find('.dateinput');

            $(inputs.get(0)).datepicker({
                //inline: true,
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 1,
                onSelect: function( selectedDate ) {
                    $(inputs.get(1)).datepicker("option", "minDate", selectedDate);
                }
            });

            $(inputs.get(1)).datepicker({
                //inline: true,
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 1,
                onSelect: function( selectedDate ) {
                    $(inputs.get(0)).datepicker("option", "maxDate", selectedDate);
                }
            });
        }); // Date range picker / END


    });
})(jQuery);

