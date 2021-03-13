from rest_framework import serializers
from django.contrib.auth import get_user_model
from apps.grade.serializers import GradeSerializer
from apps.expertise.serializers.nestedSerilizer import NestedExpertiseSerializer
from apps.group.serializers.serializers import GroupNestedSerializer


User = get_user_model()

class PublicUserSerializer(serializers.ModelSerializer):
    grades_student = GradeSerializer(many=True, read_only=True)
    expertise = NestedExpertiseSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'first_name', 'last_name', 'country', 'city', 'about', 'grades_student', 'expertise', 'profile_picture', 'status']

class PrivateUserSerializer(serializers.ModelSerializer):
    expertise = NestedExpertiseSerializer(many=True, read_only=True)
    grades_student = GradeSerializer(many=True, read_only=True)
    class Meta:
        model = User
        exclude = ['password']




# GLOBAL DON´T TOUCH    
class GlobalUserSerializer(serializers.ModelSerializer):
    grades_student = GradeSerializer(many=True, read_only=True)
    Group = GroupNestedSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'first_name', 'last_name', 'country', 'city', 'about', 'grades_student', 'expertise', 'profile_picture', 'status', 'Group']