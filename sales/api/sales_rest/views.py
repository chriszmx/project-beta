from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from .models import Salesperson, Sale, Customer, AutomobileVO
import json
from django.http import JsonResponse
from common.json import ModelEncoder

class AutomobileVOEncoder:
    model = AutomobileVO
    properties = [
        "import_href",
        "vin",
    ]


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "first_name",
        "last_name",
        "address",
        "phone_number",
    ]

class SalespersonEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "first_name",
        "last_name",
        "employee_id",
    ]

class SaleEncoder(ModelEncoder):
    model = Sale
    properties = [
        "price",
        "automobile",
        "salesperson",
        "customer",
    ]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "salesperson": SalespersonEncoder(),
        "customer": CustomerEncoder(),
    }

    def get_extra_data(self, o):
        return super().get_extra_data(o)


# Create your views here.
@require_http_methods(["GET", "POST"])
def api_list_salespeople(request):
    if request.method == "GET":
        salespeople = Salesperson.objects.all()
        return JsonResponse(
            {"salespeople": salespeople},
            encoder=SalespersonEncoder
        )
    else:
        content = json.loads(request.body)
        salespeople = Salesperson.objects.create(**content)
        return JsonResponse(
            salespeople,
            encoder=SalespersonEncoder,
            safe=False
        )

@require_http_methods(["DELETE"])
def api_salespeople(request, id):
    if request.method == "DELETE":
        try:
            salespeople = Salesperson.objects.get(id=id)
            salespeople.delete()
            return JsonResponse(
                salespeople,
                encoder=SalespersonEncoder,
                safe=False,
            )
        except Salesperson.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})

@require_http_methods(["GET", "POST"])
def api_list_customers(request):
    if request.method == "GET":
        customer = Customer.objects.all()
        return JsonResponse(
            {"customer": customer},
            encoder=CustomerEncoder,
        )
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False
        )

@require_http_methods(["DELETE"])
def api_customers(request, id):
    if request.method == "DELETE":
        try:
            customer = Customer.objects.get(id=id)
            customer.delete()
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Does not exist."})

@require_http_methods(["GET", "POST"])
def api_list_sales(request, automobile_vo_id=None):
    if request.method == "GET":
        if automobile_vo_id is not None:
            sale = Sale.objects.filter(automobile=automobile_vo_id)
        else:
            sale = Sale.objects.all()
        return JsonResponse(
            {"sale": sale},
            encoder=SaleEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            automobile_href = f'/api/automobiles/{content["import_href"]}/'
            automobile = AutomobileVO.objects.get(import_href=automobile_href)
            content["import_href"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "NOT VALID"}
            )
        sales = Sale.objects.create(**content)
        return JsonResponse(sales, encoder=SaleEncoder, safe=False)

@require_http_methods(["GET", "DELETE"])
def api_sales(request, id):
    if request.method == "GET":
        try:
            sales = Sale.objects.get(id)
            return JsonResponse(sales, encoder=SaleEncoder, safe=False)
        except Sale.DoesNotExist:
            return JsonResponse({"message": "INVALID"})
    else:
        count, _ = Sale.objects.filter(id).delete()
        return JsonResponse({"deleted": count > 0})
