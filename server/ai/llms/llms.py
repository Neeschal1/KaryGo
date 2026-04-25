from langchain_google_genai import ChatGoogleGenerativeAI
from env_config import Config
import os

googleapikey = Config.GOOGLE_API_KEY
google_model_name = Config.GOOGLE_MODEL_NAME

class Llms:
    def _googlellm_stream(self, response: str):
        try:
            model = ChatGoogleGenerativeAI(
                model=google_model_name,
                google_api_key="***********************"
            )
            for chunk in model.stream(response):
                if chunk.content:
                    yield chunk.content

        except Exception as e:
            yield f"ERROR: {str(e)}"