# Generated by Django 4.1.3 on 2022-12-04 21:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0004_post_imagelabel'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='post',
            name='imageLabel',
            field=models.CharField(max_length=100),
        ),
    ]