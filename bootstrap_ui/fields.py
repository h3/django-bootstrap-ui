#from django.conf import settings
from django.template.loader import render_to_string

from inplaceeditform.fields import BaseAdaptorField

class AdaptorAutocompleteForeingKeyField(BaseAdaptorField):

    MULTIPLIER_HEIGHT = 1.75
    INCREASE_WIDTH = 40

    @property
    def name(self):
        return 'fk'

    def treatment_height(self, height, width=None):
        return "%spx" % int(self.font_size * self.MULTIPLIER_HEIGHT)

    def treatment_width(self, width, height=None):
        return "%spx" % (width + self.INCREASE_WIDTH)

    def render_value(self, field_name=None):
        value = super(AdaptorAutocompleteForeingKeyField, self).render_value(field_name)
        value = getattr(value, '__unicode__', None) and value.__unicode__() or None
        return value

    def get_value_editor(self, value):
        value = super(AdaptorAutocompleteForeingKeyField, self).get_value_editor(value)
        return value and value.pk

    def save(self, value):
        setattr(self.obj, "%s_id" % self.field_name, value)
        self.obj.save()

    def render_media_field(self, template_name="bootstrap_ui/fields/adaptor_fk_autocomplete/render_media_field.html"):
        return super(AdaptorAutocompleteForeingKeyField, self).render_media_field(template_name)

    def render_field(self, extra_context={}):
        return super(AdaptorAutocompleteForeingKeyField, self)\
                .render_field(template_name=\
                    "bootstrap_ui/fields/adaptor_fk_autocomplete/render_field.html",
                    extra_context=extra_context)
