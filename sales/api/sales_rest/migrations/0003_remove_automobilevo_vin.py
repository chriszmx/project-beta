# Generated by Django 4.0.3 on 2023-04-24 21:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0002_alter_customer_phone_number'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='automobilevo',
            name='vin',
        ),
    ]
