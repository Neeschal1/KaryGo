from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer # type: ignore

channel_layer = get_channel_layer()
async_to_sync(channel_layer.group_send)(
    "broadcast",
    {"type": "send_notification", "notificationmessage": "Hello Neeschal :)!"}
)