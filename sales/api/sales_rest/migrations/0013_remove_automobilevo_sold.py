# Generated by Django 4.0.3 on 2023-04-26 18:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0012_automobilevo_sold'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='automobilevo',
            name='sold',
        ),
    ]
