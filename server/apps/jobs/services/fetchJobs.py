from apps.accounts.models.entities import Seeker

class JobFetch:
    def _fetch(self, serializer: list):
        for i in serializer:
            print(i)

seek = Seeker.objects.all()
