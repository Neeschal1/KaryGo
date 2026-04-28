import torch
from sklearn.metrics.pairwise import cosine_similarity  # type:ignore
import torch.nn as nn

text = "Hi, I'm Nischal. I am 20 years old:)"
question = "About Nischal."

modified_text = text.lower().replace(".", "").split()
modified_question = question.lower().replace(".", "").split()

tokens = {}
question_dict = {}

for index, value in enumerate(modified_text):
    tokens[index] = value
for index, value in enumerate(modified_question):
    question_dict[index] = value

token_id = [id for id in tokens]
token_id_tensors = torch.tensor(token_id)
question_id = [id for id in question_dict]
question_id_tensors = torch.tensor(question_id)

vocab_size = len(token_id_tensors)
dimensions = 8
vocab_size_question = len(question_id_tensors)
dimensions_question = 8

embeddings = nn.Embedding(vocab_size, dimensions)
question_embeddings = nn.Embedding(vocab_size_question, dimensions_question)

embedded_texts = embeddings(token_id_tensors)
embedded_question = embeddings(question_id_tensors)

data = cosine_similarity([embedded_texts], embedded_question)
print(data)
