# Generated by Django 3.1.7 on 2021-04-17 22:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Recomendations',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('CPU', models.CharField(max_length=60, unique=True)),
                ('GPU', models.CharField(max_length=60)),
                ('RAM', models.CharField(max_length=80)),
                ('SSD', models.CharField(max_length=80)),
                ('HDD', models.CharField(max_length=80)),
                ('SELECCION', models.CharField(max_length=80)),
                ('PRESUPUESTO', models.CharField(max_length=80)),
            ],
        ),
    ]
