from apps.accounts.models.entities import Seeker
from ai.prompts.fetchresumedescription import *
import torch
import torch as nn
import re
from .setup import our_pdf


def pdfdetails(our_pdf: str) -> str:
    return resumedescriptionprompt(our_pdf)


def fetchjobs(serializer: list):
    description = pdfdetails(our_pdf)
    tokenized_description = [
        s.strip() 
        for s in re.split(r"[.\n?,•\-]", description) 
        if s.strip()
    ]
    print("Resume Details: ", tokenized_description)
    print("All Description Details: ", serializer)
    print(type(description))
    print(repr(description))
