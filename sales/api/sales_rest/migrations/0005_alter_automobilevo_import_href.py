# Generated by Django 4.0.3 on 2023-04-25 00:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0004_alter_customer_phone_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='automobilevo',
            name='import_href',
            field=models.CharField(default=True, max_length=100, unique=True),
        ),
    ]
