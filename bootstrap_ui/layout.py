from crispy_forms.layout import Field


class DateTimeField(Field):
    """
    http://trentrichardson.com/examples/timepicker/
    """
    def __init__(self, *args, **kwargs):
        css_class = kwargs.get('css_class', None)
        if css_class is None:
            kwargs['css_class'] = 'widget-datetime-picker'
        else:
            kwargs['css_class'] = css_class + ' widget-datetime-picker'
        super(DateTimeField, self).__init__(*args, **kwargs)
