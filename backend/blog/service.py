from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

class PaginationPosts(PageNumberPagination):
    """ Pagination settings for pagest list """
    page_size = 2
    max_page_size = 1000

    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'result': data
        })
