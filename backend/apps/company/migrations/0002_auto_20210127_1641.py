# Generated by Django 3.1.4 on 2021-01-27 16:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='company',
            name='about',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='company',
            name='phone_number',
            field=models.IntegerField(blank=True, null=True, unique=True),
        ),
    ]
