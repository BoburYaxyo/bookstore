# Generated by Django 3.2.7 on 2023-09-19 11:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0039_rename_order_by_order_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderitem',
            name='image',
            field=models.ImageField(upload_to='assets/'),
        ),
    ]
