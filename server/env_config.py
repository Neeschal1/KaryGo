import os
from dotenv import load_dotenv

load_dotenv()
class Config:
    SECRET_KEY = os.getenv('SECRET_KEY')
    
    MONGODB_ENGINE = os.getenv('MONGO_ENGINE')
    MONGODB_NAME = os.getenv('MONGODB_NAME')
    MONGODB_HOST = os.getenv('MONGO_HOST')
    
    REDIS_URL = os.getenv('REDIS_URL')