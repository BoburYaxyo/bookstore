# Generated by Django 3.2.7 on 2023-09-01 13:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0003_tags'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='tags',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='books.tags'),
        ),
    ]
