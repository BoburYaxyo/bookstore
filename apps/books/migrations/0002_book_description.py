# Generated by Django 3.2.7 on 2023-07-15 04:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='description',
            field=models.CharField(default=None, max_length=250),
            preserve_default=False,
        ),
    ]
