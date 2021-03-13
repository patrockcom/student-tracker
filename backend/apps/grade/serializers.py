from rest_framework import serializers
from .models import Grade
from apps.user.serializers.nestedSerializer import NestedUserSerializer
from apps.group.serializers.nestedSerializer import NestedGroupSerializer
from django.db.models import Avg
from apps.lectures.models import Lecture

#we have to rename the serializer
class NestedLectureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lecture
        fields = '__all__'

class GradeStudentSerializer(serializers.ModelSerializer):
    student = NestedUserSerializer(read_only=True)
    reviewer = NestedUserSerializer(read_only=True)
    lecture = NestedLectureSerializer(read_only=True)
    group = NestedGroupSerializer(read_only=True)
    class Meta:
            model = Grade
            fields = '__all__'


class GradeSerializer(serializers.ModelSerializer):
    avg = serializers.SerializerMethodField()

    def get_avg(self, instance):
        return Grade.objects.filter(student=instance.student).aggregate(Avg('grade'))

    class Meta:
        model = Grade
        fields = ['id', 'grade', 'student', 'avg']


class NestedGradeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Grade
        fields = ['id', 'grade']
