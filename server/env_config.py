import os
from dotenv import load_dotenv

load_dotenv()
class Config:
    SECRET_KEY = os.getenv('SECRET_KEY')
    
    MONGODB_ENGINE = os.getenv('MONGO_ENGINE')
    MONGODB_NAME = os.getenv('MONGODB_NAME')
    MONGODB_HOST = os.getenv('MONGO_HOST')
    
    REDIS_URL = os.getenv('REDIS_URL')
    
    EMAIL_FROM = os.getenv('EMAIL_FROM')
    EMAIL_TO = os.getenv('EMAIL_TO')
    EMAIL_BACKEND = os.getenv('EMAIL_BACKEND')
    EMAIL_HOST = os.getenv('EMAIL_HOST')
    EMAIL_HOST_USER = os.getenv('EMAIL_HOST_USER')
    EMAIL_HOST_PASSWORD = os.getenv('EMAIL_HOST_PASSWORD')
    EMAIL_PORT = os.getenv('EMAIL_PORT')
    EMAIL_USE_TLS = os.getenv('EMAIL_USE_TLS')
    EMAIL_USE_SSL = os.getenv('EMAIL_USE_SSL')
    
    GROQ_API_KEY = os.getenv('GROQ_API_KEY')
    GROQ_MODEL_NAME = os.getenv('GROQ_MODEL_NAME')
    GROQ_MODEL_PROVIDER = os.getenv('GROQ_MODEL_PROVIDER')
    
    GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
    GOOGLE_MODEL_NAME = os.getenv('GOOGLE_MODEL_NAME')
    GOOGLE_MODEL_PROVIDER = os.getenv('GOOGLE_MODEL_PROVIDER')