from common.json import ModelEncoder
from service_rest.models import Appointment, AutomobileVO, Status, Technician


class StatusEncoder(ModelEncoder):
    model = Status
    properties = [
        'name',
        'id',
    ]


class AutomobileVoEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        'vin',
    ]


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        'first_name',
        'last_name',
        'employee_id',
        'id',
    ]


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        'date_time',
        'reason',
        'status',
        'vin',
        'customer',
        'VIP',
        'technician',
    ]

    encoders = {
        "technician": TechnicianEncoder,
    }

    def get_extra_data(self, o):
        return {"status": o.status.name}
