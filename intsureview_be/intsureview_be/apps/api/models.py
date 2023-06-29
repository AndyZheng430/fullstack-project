from django.db import models


class RideModel(models.Model):
    name = models.CharField(max_length=100)
    start = models.CharField(max_length=200, blank=True)
    end = models.CharField(max_length=200, blank=True)
    ride_type = models.IntegerField()
    add_donuts = models.BooleanField(default=False)
    comments = models.TextField(blank=True)
