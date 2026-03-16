from channels.generic.websocket import WebsocketConsumer #type: ignore
from asgiref.sync import async_to_sync
import json


class Regular_Notification(WebsocketConsumer):
    
    # creating a connection
    def connect(self):
        self.room_group_name = "broadcast"
            
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name 
        )
        self.accept()
        self.send(text_data=json.dumps({"status":"connected"}))
    
    
    
    # disconnecting a connection
    def disconnect(self, code):
        async_to_sync(self.channel_layer.group_discard(
            self.room_group_name,    
            self.channel_name 
        ))
    
    
    # performing any action (notification here)
    def send_notification(self, event):
        message = event['notificationmessage']
        data = json.dumps({"notification": message})
        self.send(text_data=data)