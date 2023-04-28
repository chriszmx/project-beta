# CarCar

Team:

Chris Zambito *SERVICE*

Charles Stephens *SALES*

## Design

SERVICE -> Used bootstrap and inline css to customize the navbar, footer and main page. bootstrap primarily used for customizing forms.

## Service microservice


WARNING PLEASE READ BEFORE STARTING APPLICATION WITH NO UPDATED DB

**[docker volume create beta-data]**

**Before starting application createsuperuser for 8080:8000, in admin create statuses**
**********   [SCHEDULED]    [FINISHED]    [CANCELLED]   **********
**-> OR -> creating service appointment will not work!**

**npm install react-boostrap to 3000**

Status: Represents the status of an appointment (e.g. "scheduled", "cancelled", "finished").
Technician: Represents a technician who can be assigned to an appointment.
AutomobileVO: Represents an automobile that has been scheduled for service. This model includes an import_href field, which could potentially be used to link to the corresponding record in the inventory service.
Appointment: Represents an appointment for automobile service. This model includes fields for the date and time of the appointment, the reason for the appointment, the status of the appointment, the VIN of the automobile being serviced, the customer's name, and the assigned technician.
Integration with Sales -> fetching customer data to place into schedule service.

The inventory service has the following models:

Manufacturer: Represents a manufacturer of automobiles.
VehicleModel: Represents a model of automobile produced by a manufacturer. Each VehicleModel is associated with a Manufacturer through a foreign key relationship.
Automobile: Represents a specific automobile, identified by its VIN. Each Automobile is associated with a VehicleModel through a foreign key relationship.


## Sales microservice



Explain your models and integration with the inventory
microservice, here.

Service appointments -> pulling VIN from inventory to check if consumer is VIP
