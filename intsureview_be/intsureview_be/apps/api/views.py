import json
from django.contrib.auth.models import User, Group
from django.http import QueryDict
from django.shortcuts import HttpResponse
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from intsureview_be.apps.api.serializers import UserSerializer, GroupSerializer, RideForm
from intsureview_be.apps.api.models import RideModel;


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = User.objects.all().order_by("-date_joined")
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """

    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


def RidePostView(request):
    if request.method == "POST":
        request_body_json = json.loads(request.body.decode())
        print(request_body_json)

        form_data = QueryDict("", mutable=True)

        for key, value in request_body_json.items():
            form_data.update({key: value})

        details = RideForm(form_data)

        if details.is_valid():
            return HttpResponse("Order has been complete!")
        else:
            response = HttpResponse("Form is invalid. Please Try again")
            response.status_code = 400
            return response
    else:
        response = HttpResponse("Method Not Allowed.")
        response.status_code = 405
        return response