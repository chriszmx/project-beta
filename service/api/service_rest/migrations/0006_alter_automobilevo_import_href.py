# Generated by Django 4.0.3 on 2023-04-26 18:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0005_alter_automobilevo_import_href'),
    ]

    operations = [
        migrations.AlterField(
            model_name='automobilevo',
            name='import_href',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]
