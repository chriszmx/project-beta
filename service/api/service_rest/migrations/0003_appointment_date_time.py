# Generated by Django 4.0.3 on 2023-04-25 13:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0002_status_remove_appointment_date_time_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='date_time',
            field=models.DateTimeField(null=True),
        ),
    ]
