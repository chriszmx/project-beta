from django.urls import path
from .views import (list_technician,
                    technician_detail,
                    list_appointments,
                    appointment_detail,
                    cancel_appointment,
                    finish_appointment,)


urlpatterns = [
    path('appointments/<int:id>/cancel/', cancel_appointment, name="cancel_appointment"),
    path('appointments/<int:id>/finish/', finish_appointment, name="finish_appointment"),
    path('appointments/<int:id>/', appointment_detail, name="appointment_detail"),
    path('appointments/', list_appointments, name='list_appointments'),
    path('technicians/<int:id>/', technician_detail, name='technician_detail'),
    path('technicians/', list_technician, name='list_technician'),

]
