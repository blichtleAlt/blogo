# Generated by Django 4.1.3 on 2022-12-04 21:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0003_post_description_post_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='imageLabel',
            field=models.TextField(default='Image Text'),
            preserve_default=False,
        ),
    ]