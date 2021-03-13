from rest_framework import serializers
from apps.group.models import Group

class NestedGroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = Group
        fields = '__all__'
