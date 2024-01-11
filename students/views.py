from rest_framework.views import APIView
from .serializers import StudentSerializers
from django.http.response import JsonResponse, Http404
from .models import Student
from rest_framework.response import Response


class StudentView(APIView):

    def post(self, request):
        data = request.data
        serializer = StudentSerializers(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Student Created Successfully", safe=False)
        return JsonResponse("Failed to Add Student", safe=False)

    def get(self, request, pk=None):
        if pk:
            student = self.get_student(pk)
            if isinstance(student, JsonResponse):
                return student
            serializer = StudentSerializers(student)
        else:
            students = Student.objects.all()
            serializer = StudentSerializers(students, many=True)
        return Response(serializer.data)

    def get_student(self, pk):
        try:
            student = Student.objects.get(studentId=pk)
            return student
        except Student.DoesNotExist:
            return JsonResponse({"message": "Student does not exist"}, status=404)

    def put(self, request, pk=None):
        student_to_update = Student.objects.get(studentId=pk)
        serializer = StudentSerializers(instance=student_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Student Updated Successfully", safe=False)
        return JsonResponse("Failed to update Student")

    def delete(self, request, pk=None):
        try:
            student_to_delete = Student.objects.get(studentId=pk)
            student_to_delete.delete()
            return JsonResponse("Student deleted successfully", safe=False)
        except Student.DoesNotExist:
            return JsonResponse("Student not found", status=404, safe=False)
        except Exception as e:
            return JsonResponse(f"Error deleting student: {str(e)}", status=500, safe=False)
