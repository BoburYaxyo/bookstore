# Generated by Django 3.2.7 on 2023-07-19 05:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Category',
            new_name='BCategory',
        ),
    ]