# Generated by Django 3.2.7 on 2023-09-19 08:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0036_auto_20230919_0824'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='payment_id',
            field=models.CharField(default=2, max_length=300),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='orderitem',
            name='total',
            field=models.CharField(max_length=1000),
        ),
    ]
