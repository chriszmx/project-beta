from django.db import models

# Create your models here.
class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=100, unique=True)
    vin = models.CharField(max_length=17, unique=True)

class Salesperson(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.PositiveIntegerField()

class Customer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    phone_number = models.PositiveIntegerField(max_length=10)

class Sale(models.Model):
    price = models.DecimalField(max_digits=10, decimal_places=2)
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sales",
        on_delete=models.CASCADE
    )
    salesperson = models.ForeignKey(
        Salesperson,
        related_name="sales",
        on_delete=models.CASCADE
    )
    customer = models.ForeignKey(
        Customer,
        related_name="sales",
        on_delete=models.CASCADE
    )
