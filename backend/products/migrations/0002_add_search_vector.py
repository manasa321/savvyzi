from django.db import migrations
from django.contrib.postgres.search import SearchVector

def add_search_vector(apps, schema_editor):
    Product = apps.get_model('products', 'Product')
    Product.objects.update(search_vector=SearchVector('name', 'description'))

class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(add_search_vector),
    ]