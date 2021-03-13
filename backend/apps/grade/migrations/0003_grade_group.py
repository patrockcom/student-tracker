# Generated by Django 3.1.4 on 2021-02-01 17:44

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('grade', '0002_grade_lecture'),
    ]

    operations = [
        migrations.AddField(
            model_name='grade',
            name='group',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.RESTRICT, related_name='grades_group', to=settings.AUTH_USER_MODEL),
        ),
    ]
