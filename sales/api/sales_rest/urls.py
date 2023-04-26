from django.urls import path
from .views import (api_customers, api_list_customers,
                     api_list_sales, api_list_salespeople,
                     api_sales, api_salespeople)


urlpatterns = [
    path("sales/", api_list_sales, name="api_list_sales"),
    path("sales/<int:id>/", api_sales, name="api_sales"),
    path("customers/", api_list_customers, name="api_list_customers"),
    path("customers/<int:id>/", api_customers, name="api_customers"),
    path("salespeople/", api_list_salespeople, name="api_list_salespeople"),
    path("salespeople/<int:id>/", api_salespeople, name="api_salespeople")
]
