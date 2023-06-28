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

        name = self.cleaned_data.get("name")
        ride_type = self.cleaned_data.get("ride_type")

        if len(name) < 1:
            self.errors["name"] = self.error_class(["Cannot be blank. Name required"])
        
        if ride_type < 1 or ride_type > 3:
            self.errors["ride_type"] = self.error_class(["Invalid Ride Type."])
            
        return self.cleaned_data