from ..prompts.goaldescription import prompt
from ..llms.llms import Llms

class Goal:
    def _careertrack(self, course: str, aim: str, knewtillnow: str, problem: str, description: str) -> str:
        ai_response = prompt(course, aim, knewtillnow, problem, description)
        return Llms()._googlellm_stream(ai_response)
