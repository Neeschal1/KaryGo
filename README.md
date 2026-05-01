# 🚀 KaryGo

KaryGo is a modern mobile job marketplace that connects job seekers with employers, offering freelance opportunities, smart career guidance, productivity tools, and AI-powered job recommendations.

---

## ✨ Features

- Freelance Marketplace – Connect freelancers with clients for short-term and long-term projects  
- AI-Powered Recommendations – Personalized job, skill, and career suggestions  
- Smart Career Guidance – Career insights based on user profile and behavior  
- Advanced Job Search & Filters – Filter jobs by category, salary, experience, and location  
- Save & Like Jobs – Bookmark jobs for later  
- Real-time Notifications – Instant updates on jobs, messages, and proposals  
- Productivity Tools – Task and workflow management system  

---

## 🛠️ Tech Stack

- Frontend: React Native (JavaScript)  
- Backend: Django REST Framework  
- Database: PostgreSQL  
- AI Integration: LangChain  

---

## 📁 Project Structure
  KaryGo/
  - client/ # React Native App
  - server/ # Django REST API
  - index.html/ # For testing API endpoints for effective client-server communication
  - README.md
  - LICENCE

---
### Clone repository

```bash
git clone https://github.com/your-username/karygo.git
cd karygo/server
```
## ⚙️ Backend Setup (Django)

### 1. Create Virtual Environment

```bash
python -m venv env
source env/bin/activate   # mac/linux
env\Scripts\activate      # windows
```
### 2. Install Dependencies

```bash
pip install -r requirements.txt
```
### 3. Setup Environment Variables

```bash
SECRET_KEY=your_secret_key
DEBUG=True
DATABASE_NAME=your_db
DATABASE_USER=your_user
DATABASE_PASSWORD=your_password
```
### 4. Run Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```
### 5. Start Server

```bash
python manage.py runserver 0.0.0.0:8000
```
0.0.0.0 makes your Django server accessible from any device in the same network (not just localhost) and 8000 is the port number where the server runs and can be changed if needed.

---
## 📱 Frontend Setup (React Native)
### 1. Navigate to client
```bash
cd client
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run app
  - For Android
```bash
npm run android
```
  - For iOS
```bash
npm run ios
```
  - For Physical Device
```bash
npx expo start
```

---
### For API Endpoints, run the server and include /docs in the URL to activate entire URL documentations.
---

## 🔐 Authentication
- JWT-based authentication system
- Secure login & registration flow
- Token stored securely on device
---
## 🤖 AI Recommendation System
- Uses LangChain for intelligent matching
- Analyzes user profile, skills, and behavior
- Suggests relevant jobs dynamically
---
## 🚀 Future Improvements
- Real-time chat system between users
- AI resume builder
- Payment integration
- Advanced ranking & recommendation system
- Push notifications using Firebase


## Author
Developed by Nischal Pokhrel
