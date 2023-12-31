# Generated by Django 3.2.7 on 2023-09-02 03:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0012_book_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cart',
            name='books',
        ),
        migrations.RemoveField(
            model_name='wishist',
            name='books',
        ),
        migrations.AddField(
            model_name='cart',
            name='products',
            field=models.ManyToManyField(blank=True, related_name='cartproducts', to='books.Book'),
        ),
        migrations.AddField(
            model_name='wishist',
            name='products',
            field=models.ManyToManyField(blank=True, related_name='wishlistproducts', to='books.Book'),
        ),
    ]
