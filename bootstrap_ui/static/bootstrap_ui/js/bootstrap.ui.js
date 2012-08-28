(function($){

    var $id = function(i){ return $('#'+i) }

    $.widgets = {
        __ns: {},
        __parseOptions: function(el){
            var data = el.data(), opts = {}, opt

            $.each(data, function(k, v){
                if (k.slice(0,3) == 'opt') {
                    opts[k.slice(3, 4).toLowerCase() + k.slice(4)] = v
                }
            })
            return opts
        },
        __load_widget: function(el){
            var el = $(el),
                initialized = el.data('initialized')

            if (initialized) return true
            else {
                if ($.isFunction($.widgets.__ns[el.data('type')])) {
                    var options = [$id(el.data('field-id')), $.widgets.__parseOptions(el), el]
                    $.widgets.__ns[el.data('type')].apply(document, options)
                    el.data('initialized', true)
                }
            }
        },

        load: function(el) {
            var el = el || 'widget'
            $(el).each(function(k, v){
                $.widgets.__load_widget(v)
            });
        },

        register: function(ns, callback) {
            $.widgets.__ns[ns] = callback
        }
    };

    // Slider

    $.widgets.register('slider', function(el, options, widgets) {
        var input = $(el),
            wrapper_id = input.attr('id') +'-wrapper',
            wrapper = $('<div>').attr('id', wrapper_id).insertAfter(el)

        wrapper.slider($.extend(options, {
            slide: function(e, ui) { input.val(ui.value) }
        }))
        input.val(wrapper.slider('value'))
    }) // Slider / END


    // Date picker

    $.widgets.register('date', function(el, options, widgets) {
        var wrapper = $(el),
              input = false

        if (wrapper.hasClass('inline')) {
            input = wrapper
            wrapper = $('<div>').attr('id', input.attr('id') +'-wrapper').insertAfter(input)
        }

        wrapper.datepicker($.extend(options), {
            inline: wrapper.hasClass('inline'),
            onSelect: function(selectedDate) {
                if (input) input.val(selectedDate)
                else wrapper.val(selectedDate)
            }
        })

    }) // Date picker / END


    // DateTime picker

    $.widgets.register('datetime', function(el, options, widget) {
        var wrapper = $(el),
            options = options || {},
           range_to = widget.data('range-to'),
         range_from = widget.data('range-from'),
             inline = widget.data('inline'),
              input = false

        if (inline) {
            console.log('INLINE')
            input = wrapper
            wrapper = $('<div>').attr('id', input.attr('id') +'-wrapper').insertAfter(input)
        }
        options.constrainInput = false
        // Date range 

        if (range_to) {
            options.onSelect = function(selectedDate) {
				$id(range_to).datepicker('option', 'minDate', selectedDate);
			}
        }
        else if (range_from) {
            options.onSelect = function(selectedDate) {
				$id(range_from).datepicker('option', 'maxDate', selectedDate);
			}
        }
        else {
            options.onSelect = function(selectedDate) {
                if (input) input.val(selectedDate)
                else wrapper.val(selectedDate)
            }
        }
        // Date range / END

        wrapper.datetimepicker(options)

        // FIXME: HORRIBLE HACK!!
        if (options.regional == 'fr') { (input || wrapper).datetimepicker('option', 'dateFormat', 'dd/mm/yy') }

    }) // DateTime picker / END

    // Main initialization
    $(function () {
        $('[rel="tooltip"]').tooltip()
        $.widgets.load();
    });
})(jQuery);
