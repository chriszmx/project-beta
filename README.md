# CarCar

Team:

Chris Zambito *SERVICE*

Charles Stephens *SALES*

## Design

## Service microservice

Before starting application createsuperuser for :8080, in admin create statuses SCHEDULED FINISHED CANCELLED

**npm install react-boostrap to 3000

Status: Represents the status of an appointment (e.g. "scheduled", "cancelled", "finished").
Technician: Represents a technician who can be assigned to an appointment.
AutomobileVO: Represents an automobile that has been scheduled for service. This model includes an import_href field, which could potentially be used to link to the corresponding record in the inventory service.
Appointment: Represents an appointment for automobile service. This model includes fields for the date and time of the appointment, the reason for the appointment, the status of the appointment, the VIN of the automobile being serviced, the customer's name, and the assigned technician.

The inventory service has the following models:

Manufacturer: Represents a manufacturer of automobiles.
VehicleModel: Represents a model of automobile produced by a manufacturer. Each VehicleModel is associated with a Manufacturer through a foreign key relationship.
Automobile: Represents a specific automobile, identified by its VIN. Each Automobile is associated with a VehicleModel through a foreign key relationship.


## Sales microservice



Explain your models and integration with the inventory
microservice, here.
