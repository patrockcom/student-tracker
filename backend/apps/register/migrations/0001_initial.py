# Generated by Django 3.1.4 on 2021-01-27 09:11

import apps.register.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='RegistrationProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(default=apps.register.models.code_generator, max_length=5)),
                ('code_used', models.BooleanField(default=False)),
            ],
        ),
    ]
