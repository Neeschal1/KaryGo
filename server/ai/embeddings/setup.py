from langchain_community.document_loaders import PyPDFLoader
# from ..llms.llms import Llms
from ..prompts.fetchresumedescription import resumedescriptionprompt
# import re
from langchain_huggingface import HuggingFaceEmbeddings #type:ignore

# embedding = HuggingFaceEmbeddings(model_name = "sentence-transformers/all-MiniLM-L6-v2")

our_pdf: str = """
PROFESSIONAL SUMMARY
Generative AI Developer with expertise in full-stack web/mobile applications utilizing Django REST APIs and modern frontend technologies backed by a strong foundation in Python and JavaScript.
TECHNICAL SKILLS
Languages:Python, Javascript, C
Backend: Django Rest Framework(DRF), FastAPI
Cloud & DevOps:
Github, Docker
Frontend:ReactJS, React Native
Database:PostgreSQL, MySQL
NISCHAL POKHAREL
Kapilvastu-09, Kapilvastu
| neeschalpok04@gmail.com | +977 9867418552 |
https://creanees.vercel.app/ https://github.com/Neeschal1
|
https://www.linkedin.com/in/nischal-pokhrel-6543632b7/
PROFESSIONAL EXPERIENCE
Built and maintained full-stack web applications using modern frontend technologies, focusing on performance, scalability, and clean user interfaces and
experiences.
April 2025 - November 2025
New South Wales, Australia
Fullstack Developer | Sada Creatives
PROJECTS
Built a full-stack AI-powered career guidance and freelance job marketplace integrated into a mobile application, using Django REST Framework, JWT
authentication and PostgreSQL. Future enhancements: Implement intelligent features such as personalized career recommendations, job matching, and
semantic search using LangChain, Hugging Face embeddings, and Pinecone.
A modern mobile application that provides freelance opportunities by connecting job seekers with job providers, along with smart career guidance, productivity tools,
and AI-powered recommendations.
March 2026 - Ongoing...
React Native, Django, Redis, PostgreSQL
KaryGo |
GitHub
Built a full-stack marketplace service using Django REST Framework, JWT, Stripe, and PostgreSQL, with AI-powered recommendations and semantic search
implemented via LangChain, Hugging Face embeddings, and Pinecone.
A modern, scalable, and intelligent e-commerce mobile application powered by a robust Django REST Framework backend and enhanced with AI-driven assistance
through LangChain, delivering users a seamless and personalized online shopping experience
November 2025 - January 2026
Django, Langchain, Redis, PostgreSQL, Pinecone, Stripe
Dafy - A Second-Hand Product Marketplace |
GitHub
EDUCATION
Butwal Multiple Campus, affiliated to Tribhuwan University
Bachelors of Science in Computer Science and Information Technology (BSc. CSIT) 2023 - present
Kalika Manavgyan Secondary School | Nepal Education Board | GPA: 3.47/4
School Leaving Certificate
2021 - 2023
Shree Janata Secondary School | Nepal Education Board | GPA: 3.9/4
Secondary Education Examination
2019 - 2021
CERTIFICATIONS & ACHIEVEMENTS
The art of Asking AI:
Session on how can AI be effiectively used for building a production ready AI-integrated applications.
"""

def pdfdetails(pdf):
    return resumedescriptionprompt(pdf)

description = pdfdetails(our_pdf)
print(description)