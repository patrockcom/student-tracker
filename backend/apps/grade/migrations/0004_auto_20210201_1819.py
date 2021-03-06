# Generated by Django 3.1.4 on 2021-02-01 18:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('group', '0003_auto_20210129_1643'),
        ('lectures', '0007_auto_20210128_0926'),
        ('grade', '0003_grade_group'),
    ]

    operations = [
        migrations.AlterField(
            model_name='grade',
            name='group',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.RESTRICT, related_name='grades_group', to='group.group'),
        ),
        migrations.AlterField(
            model_name='grade',
            name='lecture',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.RESTRICT, related_name='grades_lecture', to='lectures.lecture'),
        ),
    ]
