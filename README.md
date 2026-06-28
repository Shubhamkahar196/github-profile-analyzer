# GitHub Profile Analyzer API

A Node.js and Express.js REST API that analyzes a GitHub user's public profile using the GitHub API and stores useful insights in a MySQL database.

---

##  Features

- Analyze any public GitHub profile
- Fetch data using GitHub Public API
- Store profile insights in MySQL
- Get all analyzed profiles
- Get a single analyzed profile
- MVC Architecture
- MySQL Database Integration
- RESTful API

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
├── src/
│   ├── config/
│   │   └── db.js
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
├── database/
│   └── schema.sql
│
├── .env.example
├── package.json
├── README.md
└── .gitignore
```

---

##  Installation

### Clone Repository

```bash
git clone https://github.com/Shubhamkahar196/github-profile-analyzer.git
```

### Go to project

```bash
cd github-profile-analyzer
```

### Install dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file.

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=github_profile_analyzer
```

### Run Project

```bash
npm run dev
```

---

##  Database Setup

Create a MySQL database

```sql
CREATE DATABASE github_profile_analyzer;
```

Import the provided `schema.sql` file.

---

## LIVE URL
```http
https://github-profile-analyzer-kryq.onrender.com
```
##  API Endpoints

### Analyze GitHub Profile

```http
POST /api/github/analyze/:username
```

Example

```http
POST /api/github/analyze/octocat
```

---

### Get All Profiles

```http
GET /api/github/profiles
```

---

### Get Single Profile

```http
GET /api/github/profiles/:username
```

Example

```http
GET /api/github/profiles/octocat
```

---

##  Stored Insights

The API stores:

- Username
- Name
- Bio
- Avatar URL
- Profile URL
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
- GitHub Account Creation Date

---

## Sample Response

```json
{
  "success": true,
  "message": "GitHub profile analyzed successfully.",
  "data": {
    "username": "octocat",
    "followers": 23092,
    "public_repos": 8,
    "total_stars": 21613,
    "total_forks": 165177
  }
}
```

---

## 👨‍💻 Author

Shubham Kahar