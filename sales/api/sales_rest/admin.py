from django.contrib import admin
from .models import Customer, Sale, Salesperson, AutomobileVO

# Register your models here.
@admin.register(Salesperson)
class SalespersonAdmin(admin.ModelAdmin):
    pass

@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    pass

@admin.register(Sale)
class SaleAdmin(admin.ModelAdmin):
    pass

@admin.register(AutomobileVO)
class AutmobileVOAdmin(admin.ModelAdmin):
    pass
