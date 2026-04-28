#    { "recruiter":2,
#     "title": "Java Depeloper",
#     "description": "Want a passionate java developer who can work in frameworks like springboot",
#     "salary": 30000,
#     "job_type": "internship",
#     "experience_level": "junior",
#     "deadline": "2026-06-01"
# }

from ..models.entities import Job
from apps.accounts.models.entities import Recruiter
import random

title = [
    "React Native Developer Intern",
    "Frontend Developer (React)",
    "Backend Developer (Django)",
    "Full Stack Developer Intern",
    "Mobile App Developer (React Native)",
    "UI/UX Designer Intern",
    "Software Engineering Intern",
    "Python Developer Junior",
    "API Developer (Django REST)",
    "Junior Web Developer",
    "Software Developer Intern",
    "AI/ML Research Intern",
    "DevOps Engineer Intern",
    "Junior Mobile App Developer",
    "Frontend Engineer (React Native)",
    "Backend Engineer (Python)",
    "Full Stack Engineer",
    "App Development Intern",
    "Software Trainee",
    "Junior Software Engineer"
]

description = [
    "Build and maintain React Native mobile applications with API integration.",
    "Assist in developing backend APIs using Django REST framework.",
    "Work on UI/UX improvements and implement responsive designs.",
    "Develop and optimize frontend components using React Native.",
    "Integrate third-party APIs and improve app performance.",
    "Collaborate with team to design scalable software solutions.",
    "Fix bugs and improve existing features in production apps.",
    "Work on authentication systems and secure user data.",
    "Create reusable components for mobile applications.",
    "Assist in database design and API development."
]

salary = [2000, 3000, 3500, 5000, 7000, 8000, 10000, 12000, 15000]

job_type = ["internship", "full-time", "part-time", "contract"]

experience_level = ["intern", "junior", "mid", "senior"]

deadline = [
    "2026-05-10",
    "2026-05-15",
    "2026-05-20",
    "2026-06-01",
    "2026-06-10",
    "2026-06-15",
    "2026-06-30"
]

def add_more_jobs():
    individualjob = list(Recruiter.objects.all())
    for _ in range(1, 60):
        recruiter_id = random.choice(individualjob)
        jobtitle = random.choice(title)
        job_description = random.choice(description)
        job_salary = random.choice(salary)
        job_type_choice = random.choice(job_type)
        experience = random.choice(experience_level)
        job_deadline = random.choice(deadline)
        
        # print(recruiter_id, jobtitle, job_description, job_salary, job_type_choice, experience, job_deadline)

        Job.objects.create(
            recruiter = recruiter_id,
            title = jobtitle,
            description = job_description,
            salary = job_salary,
            job_type = job_type_choice,
            experience_level = experience,
            deadline = job_deadline
        )
        
        
