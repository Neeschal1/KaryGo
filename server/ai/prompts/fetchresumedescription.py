from ..llms.llms import Llms

def resumedescriptionprompt(resume_text):
    prompt = f"""
        You are an AI assistant specialized in analyzing resumes.

        Your task is to extract a clear and concise professional description (summary) of the candidate from the given resume details.

        Instructions:
            - Focus only on relevant professional information.
            - Do NOT add information that is not present in the resume.
            - Keep the description short (only 1 sentence).
            - Write in a professional tone.
            - Summarize skills, experience, and specialization.

        Resume: {resume_text}

        Output:
        Professional Description:
        """
    
    return Llms()._resumedescription(prompt)