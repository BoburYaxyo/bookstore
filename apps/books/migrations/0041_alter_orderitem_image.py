# Generated by Django 3.2.7 on 2023-09-19 11:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0040_alter_orderitem_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderitem',
            name='image',
            field=models.ImageField(upload_to='static/images/images/'),
        ),
    ]
