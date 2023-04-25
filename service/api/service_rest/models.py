from django.db import models
from django.urls import reverse
# from django.utils import timezone

# Create your models here.


class Status(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ("id",)
        verbose_name_plural = "statuses"


class Technician(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.CharField(max_length=100, unique=True)

    def get_api_url(self):
        return reverse("technician_detail", kwargs={
            "id": self.id,
        })

    def __str__(self):
        return self.first_name + " " + self.last_name


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=100, unique=True)
    vin = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.vin


class Appointment(models.Model):

    @classmethod
    def create(cls, **kwargs):
        kwargs["status"] = Status.objects.get(name="SCHEDULED")
        appointment = cls(**kwargs)
        appointment.save()
        return appointment

    date_time = models.DateTimeField(null=True)
    reason = models.TextField()
    status = models.ForeignKey(
        Status,
        related_name="appointments",
        on_delete=models.PROTECT,
    )
    vin = models.CharField(max_length=100)
    customer = models.CharField(max_length=100)
    VIP = models.CharField(max_length=100, null=True)
    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE,
    )

    def cancel(self):
        status = Status.objects.get(name="CANCELLED")
        self.status = status
        self.save()

    def complete(self):
        status = Status.objects.get(name="FINISHED")
        self.status = status
        self.save()
