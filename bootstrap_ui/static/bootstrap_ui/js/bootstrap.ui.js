(function($){

    $(function () {
        

        // --- Date picker

        $('input.widget-slider').each(function(){
            var input = $(this),
                wrapper_id = input.attr('id') +'-wrapper',
                wrapper = $('<div>').attr('id', wrapper_id).insertAfter(this)

            wrapper.slider({
                value: 0,
                min: 0,
                max: 100,
                step: 5,
                slide: function(e, ui) { input.val(ui.value) }
            })

            input.val(wrapper.slider('value'))
        }); // Date picker / END


        // --- Date range picker

        $('.widget-date-range-picker').each(function(){
            var inputs = $(this).find('.dateinput')

            if ($(this).hasClass('inline')) {
                inputs.addClass('inline')
            }

            if (inputs.first().hasClass('inline')) {
                input_1 = inputs.first().hide()
                wrapper_1 = $('<div>').attr('id', input_1.attr('id') +'-wrapper').insertAfter(input_1)
            }
            else {
                wrapper_1 = inputs.first()
                input_1 = false
            }

            if (inputs.last().hasClass('inline')) {
                input_2 = inputs.last().hide()
                wrapper_2 = $('<div>').attr('id', input_2.attr('id') +'-wrapper').insertAfter(input_2)
            }
            else {
                wrapper_2 = inputs.last()
                input_2 = false
            }

            wrapper_1.datepicker({
                inline: wrapper_1.hasClass('inline'),
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 2,
                onSelect: function(selectedDate) {
                    if (input_1) {
                        input_1.val(selectedDate)
                    }
                    wrapper_2.datepicker("option", "minDate", selectedDate)
                }
            })

            wrapper_2.datepicker({
                inline: wrapper_2.hasClass('inline'),
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 2,
                onSelect: function(selectedDate) {
                    if (input_2) {
                        input_2.val(selectedDate)
                    }
                    wrapper_1.datepicker("option", "maxDate", selectedDate)
                }
            })
        }) // Date range picker / END


    });
})(jQuery);

