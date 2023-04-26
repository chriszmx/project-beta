from django.contrib import admin
from .models import Customer, Sale, Salesperson, AutomobileVO


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
class AutomobileVOAdmin(admin.ModelAdmin):
    list_display = (
        "vin",
    )
    exclude = (
        "import_href",
    )
