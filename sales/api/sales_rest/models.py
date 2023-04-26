from django.db import models


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=100, unique=True)
    vin = models.CharField(max_length=100, unique=True, null=True)

    def __str__(self):
        return f'{self.vin}'

class Salesperson(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.PositiveIntegerField()

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

class Customer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=17)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

class Sale(models.Model):
    price = models.PositiveIntegerField()
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
