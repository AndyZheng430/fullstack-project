from django.contrib.auth.models import User, Group
from django.forms import ModelForm;
from rest_framework import serializers
from intsureview_be.apps.api.models import RideModel;


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ["url", "username", "email", "groups"]


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ["url", "name"]


class RideForm(ModelForm):
    class Meta:
        model = RideModel
        fields = ["name", "start", "end", "ride_type", "add_donuts", "comments"]

    def clean(self):
        super(RideForm, self).clean()
