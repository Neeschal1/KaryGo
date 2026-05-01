from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

class PaginatedData(PageNumberPagination):
    
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 15
    
    def _get_paginateddetail(self):
        return Response(
            {
                "links": {
                    "next detail link": self.get_next_link(),
                    "previous detail link": self.get_previous_link(),
                },
                'count': self.page.paginator.count,
            }
        )
