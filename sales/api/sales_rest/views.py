from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from .models import Salesperson, Sale, Customer, AutomobileVO
import json
from django.http import JsonResponse
from .encoders import CustomerEncoder, SaleEncoder, SalespersonEncoder


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
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response


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
            response = JsonResponse({"message": "Does not exist."})
            response.status_code = 404
            return response


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
            automobile_href = f'/api/automobiles/{content["vin"]}/'
            automobile = AutomobileVO.objects.get(import_href=automobile_href)
            content["vin"] = automobile
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
