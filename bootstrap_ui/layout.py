from crispy_forms.layout import Field


class Widget(object):
    def __init__(self, widget_type, **kwargs):
        self.widget_type = widget_type
        self.options = []
        for k in kwargs:
            self.options.append(k.replace('_','-') + '="' + kwargs.get(k) + '"')

    def render(self, form, form_style, context):
        #return Template(unicode(self.html)).render(context)
        self.options.append('data-type="' + self.widget_type + '"')
        return '<widget %s />' % " ".join(self.options)
