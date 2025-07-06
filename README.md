
# 🚀 Freelance Project Bidding API – Backend REST API Task

A backend system for freelance projects where **users** can post projects and **developers** can place bids.

Built with **Node.js**, **Express**, **MongoDB Atlas**, and **JWT Auth**.

---

## 🛠️ Tech Stack
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=jsonwebtokens)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

---

## 📖 Overview

This is a **backend REST API** for a freelance project bidding platform. It supports:

- 🔐 **JWT authentication** for users and developers  
- 📁 **Project posting** by users  
- 💸 **Bidding** on projects by developers  
- 🔒 **Role-based access control**  
- 🧾 **Exporting project data** to `.json`  
- 📦 Built with **MongoDB Atlas**, tested via **Postman**

---

## ✨ Features

- ✅ User & Developer Signup/Login with hashed passwords
- ✅ JWT-based Authentication system
- ✅ Role-based route restrictions
- ✅ Users can create projects
- ✅ Developers can view open projects
- ✅ Developers can place bids
- ✅ View all bids for a project
- ✅ Export all projects as a JSON file

---

## 📁 Folder Structure

```
backend-rest-api-task/
├── controllers/
├── models/
├── routes/
├── middleware/
├── exports/
├── .env
├── server.js
└── README.md
```

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Shujaa396/backend-rest-api-task.git
cd backend-rest-api-task
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Environment Variables

Create a `.env` file in the root folder:

```
MONGO_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/freelance-api?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
PORT=5000
```

> Replace the placeholders with your actual credentials.

### 4. Start the Server

```bash
npm run dev
```

You should see:

```
🚀 Server is running on port 5000
✅ MongoDB Connected Successfully
```

---

## 🔐 Authentication Routes

| Route                      | Description              |
|----------------------------|--------------------------|
| `POST /auth/signup/user`      | User signup              |
| `POST /auth/signup/developer` | Developer signup         |
| `POST /auth/login`            | Login (returns JWT)      |

---

## 🧪 Core API Routes

### ➕ Create Project (User)

```http
POST /projects/create
Headers:
  Authorization: Bearer <user_token>
  Content-Type: application/json

Body:
{
  "title": "React Admin UI",
  "description": "Build with Tailwind",
  "techStack": ["React", "Tailwind"],
  "estimatedBudget": 500
}
```

### 👀 View Open Projects (Developer)

```http
GET /projects/open
Headers:
  Authorization: Bearer <developer_token>
```

### 💸 Place a Bid (Developer)

```http
POST /bids/place
Headers:
  Authorization: Bearer <developer_token>
  Content-Type: application/json

Body:
{
  "projectId": "<project_id_from_open_projects>",
  "bidAmount": 400,
  "message": "I'll complete this in 3 days."
}
```

### 📋 View Bids on a Project

```http
GET /bids/project/:id
Headers:
  Authorization: Bearer <any_token>
```

### 🧾 Export Projects to JSON

```http
GET /projects/export
Headers:
  Authorization: Bearer <any_token>
```

> Outputs file at: `exports/projects-export.json`

---

## 🧪 API Testing

Use [Postman](https://www.postman.com/) to test each endpoint.

Include these headers for protected routes:

```
Authorization: Bearer <your_token>
Content-Type: application/json
```

---

## 🖼️ Screenshots to Include (for submission)

- ✅ Signup as User and Developer
- ✅ Login and get JWT token
- ✅ Create project (user)
- ✅ View open projects (developer)
- ✅ Place bid (developer)
- ✅ View all bids on a project
- ✅ Export projects as `.json` file

> Use Postman or terminal for screenshots.

---

## 🧳 Prepare Submission

1. Remove `node_modules` and `.env`
2. Compress project folder:
   ```
   syed_backend_rest_api_task.zip
   ```
3. Attach screenshots or a short demo video
4. Submit via email or Drive link

---

## ✅ Bonus Features Completed

| Feature                                  | Status |
|------------------------------------------|--------|
| GET `/projects/:id/bids`                 | ✅     |
| Role-based access (user/dev only)        | ✅     |
| Export projects to `.json`               | ✅     |
| MongoDB Atlas integration                | ✅     |

---

## 👤 Author

**Syed Shujaa Hussain**

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:web.shujaa10@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Shujaa396)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/syed-shujaa-hussain-69113b289)

---

## 🏁 Final Note

✅ Project is fully functional  
✅ Clean structure & tested thoroughly  

