# Generated by Django 3.2.7 on 2023-09-10 15:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0033_alter_review_rating'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='rating',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, related_name='ratings', to='books.rating'),
            preserve_default=False,
        ),
    ]
