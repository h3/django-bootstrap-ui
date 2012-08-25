(function($){

    $(function () {

        // --- Tooltips
        $('[rel="tooltip"]').tooltip()

        // --- Slider

        $('input.widget-slider').each(function(){
            var input = $(this),
                wrapper_id = input.attr('id') +'-wrapper',
                wrapper = $('<div>').attr('id', wrapper_id).insertAfter(this)

            wrapper.slider($.extend(wrapper.data(), {
                slide: function(e, ui) { input.val(ui.value) }
            }))

            input.val(wrapper.slider('value'))
        }); // Slider / END


        // --- Date picker

        $('input.widget-date-picker').each(function(){
            var wrapper = $(this),
                  input = false

            if (wrapper.hasClass('inline')) {
                input = wrapper
                wrapper = $('<div>').attr('id', input.attr('id') +'-wrapper').insertAfter(input)
            }

            wrapper.datepicker($.extend(wrapper.data(), {
                inline: wrapper.hasClass('inline'),
                onSelect: function(selectedDate) {
                    if (input) input.val(selectedDate)
                    else wrapper.val(selectedDate)
                }
            }))

        }) // Date / END


        // --- Date range picker

        $('.widget-date-range-picker').each(function(){
            var inputs = $(this).find('.dateinput')

            if ($(this).hasClass('inline')) {
                inputs.addClass('inline')
            }

            if (inputs.first().hasClass('inline')) {
                input_1 = inputs.first().hide()
                opts_1 = input_1.data()
                wrapper_1 = $('<div>').attr('id', input_1.attr('id') +'-wrapper').insertAfter(input_1)
            }
            else {
                wrapper_1 = inputs.first()
                opts_1 = wrapper_1.data()
                input_1 = false
            }

            if (inputs.last().hasClass('inline')) {
                input_2 = inputs.last().hide()
                opts_1 = input_2.data()
                wrapper_2 = $('<div>').attr('id', input_2.attr('id') +'-wrapper').insertAfter(input_2)
            }
            else {
                wrapper_2 = inputs.last()
                opts_1 = wrapper_2.data()
                input_2 = false
            }

            wrapper_1.datepicker($.extend(opts_1, {
                inline: wrapper_1.hasClass('inline'),
                onSelect: function(selectedDate) {
                    if (input_1) {
                        input_1.val(selectedDate)
                    }
                    wrapper_2.datepicker("option", "minDate", selectedDate)
                }
            }))

            wrapper_2.datepicker($.extend(wrapper_2.data(), {
                inline: wrapper_2.hasClass('inline'),
                onSelect: function(selectedDate) {
                    if (input_2) {
                        input_2.val(selectedDate)
                    }
                    wrapper_1.datepicker("option", "maxDate", selectedDate)
                }
            }))
        }) // Date range picker / END


        // --- Datetime picker

        $('input.widget-datetime-picker').each(function(){
            var wrapper = $(this),
                  input = false

            if (wrapper.hasClass('inline')) {
                input = wrapper
                wrapper = $('<div>').attr('id', input.attr('id') +'-wrapper').insertAfter(input)
            }

            wrapper.datetimepicker($.extend(wrapper.data(), {
                inline: wrapper.hasClass('inline'),
                onSelect: function(selectedDate) {
                    if (input) input.val(selectedDate)
                    else wrapper.val(selectedDate)
                }
            }))

        }) // Datetime / END


    });
})(jQuery);

