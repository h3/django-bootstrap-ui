"""
Form Widget classes
"""
from django import forms
from django.utils.safestring import mark_safe


class BootstrapDateWidget(forms.DateInput):

    def __init__(self, attrs=None, format=None):
        final_attrs = {'class': 'vDateField', 'size': '10'}
        if attrs is not None:
            final_attrs.update(attrs)
        super(BootstrapDateWidget, self).__init__(attrs=final_attrs, format=format)


#    def render(self, name, value, attrs=None, choices=()):
#        if attrs is None:
#            attrs = {}
#        attrs['class'] = 'selectfilter'
#        if self.is_stacked:
#            attrs['class'] += 'stacked'
#        output = [super(BootstrapDateWidget, self).render(name, value, attrs, choices)]
#        output.append('<script type="text/javascript">addEvent(window, "load", function(e) {')
#        # TODO: "id_" is hard-coded here. This should instead use the correct
#        # API to determine the ID dynamically.
#        output.append('SelectFilter.init("id_%s", "%s", %s, "%s"); });</script>\n'
#            % (name, self.verbose_name.replace('"', '\\"'), int(self.is_stacked), static('admin/')))
#        return mark_safe(''.join(output))
