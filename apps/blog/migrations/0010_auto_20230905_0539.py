# Generated by Django 3.2.7 on 2023-09-05 05:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0009_alter_blog_unknown'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='email',
            field=models.EmailField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='website',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
