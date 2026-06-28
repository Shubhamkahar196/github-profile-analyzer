# GitHub Profile Analyzer API 

A RESTful API built with **Node.js**, **Express.js**, and **MySQL** that analyzes a GitHub user's public profile using the GitHub REST API and stores useful profile insights in a MySQL database.

---

##  Features

- Analyze any public GitHub profile using username
- Fetch data from GitHub Public API
- Store analyzed profile data in MySQL
- Retrieve all analyzed GitHub profiles
- Retrieve a single analyzed profile
- MVC Architecture
- Cloud MySQL (Aiven)
- Live Deployment on Render

---

##  Tech Stack

- Node.js
- Express.js
- MySQL
- mysql2
- Axios
- dotenv

---

##  Project Structure

```text
github-profile-analyzer/
│
├── database/
│   └── schema.sql
│
├── postman/
│   └── github-analyzer-profile.postman_collection.json
│
├── src/
│   ├── config/
│   │   ├── db.js
│   │   └── env.js
│   │
│   ├── controllers/
│   │   └── github.controller.js
│   │
│   ├── models/
│   │   └── profile.model.js
│   │
│   ├── routes/
│   │   └── github.routes.js
│   │
│   ├── services/
│   │   └── github.service.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

#  Installation

### Clone Repository

```bash
git clone https://github.com/Shubhamkahar196/github-profile-analyzer.git
```

### Move into Project

```bash
cd github-profile-analyzer
```

### Install Dependencies

```bash
npm install
```

---

##  Configure Environment Variables

Create a `.env` file.

```env
PORT=5000

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=github_profile_analyzer
```

---

##  Run Project

```bash
npm run dev
```

---

#  Database Setup

Create Database

```sql
CREATE DATABASE github_profile_analyzer;
```

Import

```
database/schema.sql
```

into MySQL.

---

##  Live API

Base URL

```text
https://github-profile-analyzer-kryq.onrender.com
```

Example Endpoint

```http
POST https://github-profile-analyzer-kryq.onrender.com/api/github/analyze/octocat
```

---

#  API Endpoints

## Analyze GitHub Profile

```http
POST /api/github/analyze/:username
```

Example

```http
POST /api/github/analyze/octocat
```

---

## Get All Profiles

```http
GET /api/github/profiles
```

---

## Get Single Profile

```http
GET /api/github/profiles/:username
```

Example

```http
GET /api/github/profiles/octocat
```

---

#  Stored Insights

The API stores:

- Username
- Name
- Bio
- Avatar URL
- GitHub Profile URL
- Public Repositories
- Followers
- Following
- Public Gists
- Company
- Location
- Blog
- Twitter Username
- Total Stars
- Total Forks
- Account Created Date

---

#  Postman Collection

The exported Postman collection is available inside the **postman** folder.

```
postman/github-analyzer-profile.postman_collection.json
```

Import this collection into Postman to test all API endpoints.

---

#  Sample Response

```json
{
  "success": true,
  "message": "GitHub profile analyzed successfully.",
  "data": {
    "username": "octocat",
    "name": "The Octocat",
    "followers": 23092,
    "following": 9,
    "public_repos": 8,
    "total_stars": 21613,
    "total_forks": 165177
  }
}
```

---

# 👨‍💻 Author

**Shubham Kahar**

📧 Email:
shubhamkahar196@gmail.com

🔗 GitHub:
https://github.com/Shubhamkahar196

🔗 LinkedIn:
https://www.linkedin.com/in/shubham-kahar-586199275

---

# 📄 License

This project was developed for learning and assignment purposes.