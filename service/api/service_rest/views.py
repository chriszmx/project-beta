from django.shortcuts import render
from common.json import ModelEncoder
from service_rest.encoders import AppointmentEncoder, TechnicianEncoder
from .models import Technician, Appointment, AutomobileVO, Status
import json
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse


@require_http_methods(["GET", "POST"])
def list_technician(request):
    if request.method == "GET":
        technician = Technician.objects.all()
        return JsonResponse(
            {"technician": technician},
            encoder=TechnicianEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE"])
def technician_detail(request, id):
    if request.method == "GET":
        technician = Technician.objects.get(id=id)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )
    else:
        count, _ = Technician.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        technician_id = content["technician_id"]
        technician = Technician.objects.get(id=technician_id)
        content["technician"] = technician

        vin = content["vin"]
        if AutomobileVO.objects.filter(vin=vin).exists():
            content["VIP"] = "YES"
        else:
            content['VIP'] = "NO"

        appointment = Appointment.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE"])
def appointment_detail(request, id):
    if request.method == "GET":
        appointment = Appointment.objects.get(id=id)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )
    else:
        count, _ = Appointment.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["PUT"])
def cancel_appointment(request, id):
    try:
        appointment = Appointment.objects.get(id=id)
        appointment.cancel()
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )
    except Appointment.DoesNotExist:
        response = JsonResponse(
            {"message": "Appointment does not exist"}
        )
        response.status_code = 404
        return response


@require_http_methods(["PUT"])
def finish_appointment(request, id):
    try:
        appointment = Appointment.objects.get(id=id)
        appointment.complete()
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )
    except Appointment.DoesNotExist:
        response = JsonResponse(
            {"message": "Appointment does not exist"}
        )
        response.status_code = 404
        return response
