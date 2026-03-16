import os
from django.urls import path
from channels.auth import AuthMiddlewareStack # type:ignore
from channels.routing import ProtocolTypeRouter, URLRouter # type: ignore
from django.core.asgi import get_asgi_application
from apps.notification.services.consumers import Regular_Notification

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings.dev')

django_asgi_app = get_asgi_application()

# Channel Routing
ws_patterns = [
    path('ws/notification/', Regular_Notification.as_asgi()),
]


application = ProtocolTypeRouter({
    # Django's ASGI application to handle traditional HTTP requests
    "http": django_asgi_app,
    
    # WebSocket chat handler
    # "websocket": AuthMiddlewareStack(URLRouter(ws_patterns))
    'websocket': URLRouter(ws_patterns)
})