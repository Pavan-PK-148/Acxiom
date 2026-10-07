# 🚀 HireFlow — AcxiomCRM Suite

<p align="center">
  <strong>A Modern Full-Stack CRM Platform for Smarter Sales Management</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-Frontend-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-API-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Tailwind_CSS-Styling-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT" />
  <img src="https://img.shields.io/badge/Axios-HTTP_Client-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
  <img src="https://img.shields.io/badge/Recharts-Analytics-FF6384?style=for-the-badge" alt="Recharts" />
</p>

---

## 📌 Overview

**HireFlow — AcxiomCRM** is a modern, full-stack Customer Relationship Management platform designed to streamline the complete sales workflow.

The platform provides a centralized system for managing:

- 👥 Customers
- 🎯 Leads
- 💼 Sales Opportunities
- 📅 Follow-Ups
- 📊 Sales Analytics
- 👤 Users & Roles
- 📜 Audit Logs
- 📈 Reports

The application combines a responsive **React + Vite frontend** with a robust **Node.js + Express REST API backend** and **MongoDB** database.

---

## ✨ Key Features

### 📊 Executive Dashboard

A centralized dashboard providing real-time visibility into important CRM metrics.

- Total customers
- Total leads
- Open opportunities
- Won opportunities
- Pending follow-ups
- Sales pipeline value
- Interactive charts
- Sales performance insights

---

### 👥 Customer & Lead Management

Manage the complete customer and lead lifecycle from a single platform.

**Customer Management**

- Create customers
- Update customer information
- Search and filter customers
- Track customer status
- Maintain customer history

**Lead Management**

- Create and manage leads
- Track lead sources
- Assign leads
- Manage lead statuses
- Convert qualified leads
- Track lead progress

---

### 💼 Sales Opportunity Pipeline

Track opportunities throughout the sales lifecycle.

Supported stages include:

```text
Qualification
      ↓
Proposal
      ↓
Negotiation
      ↓
Won / Lost
```

The opportunity module helps teams monitor:

- Deal value
- Probability
- Pipeline stage
- Expected closing date
- Opportunity status
- Projected revenue

---

### 📅 Follow-Up Scheduler

Keep track of important customer and lead interactions.

Features include:

- Schedule follow-ups
- Track upcoming activities
- Track overdue activities
- Update follow-up status
- Add notes and remarks
- Manage customer touchpoints

---

### 🔐 Role-Based Access Control

HireFlow provides role-based access to ensure users only access the functionality relevant to their responsibilities.

| Role | Access |
|------|--------|
| 👑 **Admin** | Full system administration and CRM management |
| 📊 **Manager** | Team CRM, pipeline and reporting visibility |
| 💼 **Sales Executive** | Assigned customers, leads, opportunities and follow-ups |

---

### 📜 Audit & Reports

Maintain visibility into important CRM activities and system operations.

- User activity tracking
- CRM activity logs
- Authentication events
- Record creation and updates
- Audit history
- Sales reports
- Pipeline analytics
- Conversion insights

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|------------|---------|
| ⚛️ **React.js** | Frontend UI |
| ⚡ **Vite** | Development & build tooling |
| 🎨 **Tailwind CSS** | Styling |
| 🧩 **Lucide React** | UI icons |
| 📊 **Recharts** | Data visualization |
| 🎬 **Framer Motion** | Animations |
| 🔔 **React Hot Toast** | Notifications |
| 🌐 **Axios** | API communication |

### Backend

| Technology | Purpose |
|------------|---------|
| 🟢 **Node.js** | Backend runtime |
| 🚂 **Express.js** | REST API framework |
| 🍃 **MongoDB** | Database |
| 🦫 **Mongoose** | MongoDB ODM |
| 🔑 **JWT** | Authentication |
| 🔐 **Bcrypt** | Password hashing |
| 🌍 **CORS** | Cross-origin request handling |

---

## 🏗️ System Architecture

```text
                    ┌──────────────────────┐
                    │      User / Team     │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   React + Vite UI    │
                    │    Tailwind CSS      │
                    └──────────┬───────────┘
                               │
                               │ Axios / REST API
                               ▼
                    ┌──────────────────────┐
                    │   Express.js API     │
                    │ Authentication       │
                    │ Authorization        │
                    │ Business Logic       │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │      Mongoose        │
                    │       ODM            │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │       MongoDB        │
                    │   CRM Data Storage   │
                    └──────────────────────┘
```

---

## 📁 Repository Structure

```text
Acxiom/
│
├── client/                         # React Frontend
│   │
│   ├── public/
│   │   └── _redirects              # SPA route handling
│   │
│   ├── src/
│   │   ├── components/             # Reusable UI components
│   │   │   ├── Modal/
│   │   │   ├── StatCard/
│   │   │   ├── Table/
│   │   │   └── ...
│   │   │
│   │   ├── context/                # React Context
│   │   │   └── AuthContext
│   │   │
│   │   ├── hooks/                  # Custom React hooks
│   │   │
│   │   ├── pages/                  # Application pages
│   │   │   ├── Dashboard
│   │   │   ├── Leads
│   │   │   ├── Customers
│   │   │   ├── Opportunities
│   │   │   ├── FollowUps
│   │   │   └── ...
│   │   │
│   │   └── services/               # Axios API configuration
│   │
│   ├── .env                        # Client environment variables
│   └── package.json
│
├── server/                         # Express REST API
│   │
│   ├── config/                     # Database configuration
│   ├── middleware/                 # Authentication & error handling
│   ├── models/                     # Mongoose schemas
│   ├── routes/                     # REST API routes
│   ├── .env                        # Server environment variables
│   ├── server.js                   # Server entry point
│   └── package.json
│
└── README.md
```

---

# 🚀 Getting Started

## 📋 Prerequisites

Before running the project, make sure you have:

- **Node.js** `v18.x` or higher
- **npm**
- **MongoDB** local installation or MongoDB Atlas
- **Git**

Verify Node.js:

```bash
node --version
```

Verify npm:

```bash
npm --version
```

---

## 1️⃣ Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Navigate into the project:

```bash
cd Acxiom
```

---

# 🖥️ Backend Setup

Navigate to the server directory:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

---

## 🔐 Server Environment Variables

Create a `.env` file inside the `server` directory:

```env
PORT=3000

MONGO_URI=mongodb://127.0.0.1:27017/acxiom_crm

JWT_SECRET=your_jwt_secret_key_here

FRONTEND_URL=http://localhost:5173
```

### MongoDB Atlas Example

If using MongoDB Atlas:

```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/acxiom_crm
```

> ⚠️ Never commit your `.env` file or expose your JWT secret publicly.

---

## ▶️ Start the Backend

For development:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:3000
```

---

# 💻 Frontend Setup

Open a new terminal.

Navigate to the client directory:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

---

## 🔐 Client Environment Variables

Create a `.env` file inside the `client` directory:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

---

## ▶️ Start the Frontend

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

---

# 🔄 Running the Complete Application

You need to run both frontend and backend.

### Terminal 1 — Backend

```bash
cd server
npm install
npm run dev
```

### Terminal 2 — Frontend

```bash
cd client
npm install
npm run dev
```

Then open:

```text
http://localhost:5173
```

---

# 🔗 API Architecture

The frontend communicates with the backend through REST APIs.

Example API structure:

```text
/api
│
├── /auth
│   ├── login
│   └── logout
│
├── /customers
│   ├── GET
│   ├── POST
│   ├── PUT
│   └── DELETE
│
├── /leads
│   ├── GET
│   ├── POST
│   ├── PUT
│   └── DELETE
│
├── /opportunities
│   ├── GET
│   ├── POST
│   ├── PUT
│   └── DELETE
│
├── /followups
│   ├── GET
│   └── POST
│
└── /reports
    └── pipeline
```

---

# 🔐 Security

HireFlow uses multiple security mechanisms to protect the application.

### Authentication

- JWT-based authentication
- Secure login flow
- Protected routes
- Session/token validation

### Password Security

- Bcrypt password hashing
- Passwords are never stored as plain text

### Authorization

Role-based access ensures that users can only access permitted resources.

### API Security

- Protected API endpoints
- CORS configuration
- Authorization middleware
- Request validation

> **Security Note:** Keep all production secrets, database credentials and JWT secrets inside environment variables.

---

# 📊 CRM Workflow

HireFlow is designed around a complete sales lifecycle:

```text
                    ┌───────────────┐
                    │     Lead      │
                    └───────┬───────┘
                            │
                            ▼
                    ┌───────────────┐
                    │ Qualification │
                    └───────┬───────┘
                            │
                            ▼
                    ┌───────────────┐
                    │    Customer   │
                    └───────┬───────┘
                            │
                            ▼
                    ┌───────────────┐
                    │  Opportunity  │
                    └───────┬───────┘
                            │
                            ▼
                    ┌───────────────┐
                    │   Follow-Up   │
                    └───────┬───────┘
                            │
                            ▼
                  ┌───────────────────┐
                  │    Won / Lost     │
                  └───────────────────┘
```

---

# 📈 Dashboard Analytics

The dashboard provides visibility into important sales metrics.

### Key Metrics

- 👥 Total Customers
- 🎯 Total Leads
- 💼 Open Opportunities
- 🏆 Won Opportunities
- ❌ Lost Opportunities
- 📅 Pending Follow-Ups
- 💰 Pipeline Value

### Charts

The dashboard uses interactive charts to visualize:

- Lead status
- Opportunity pipeline
- Sales performance
- Conversion trends

---

# 👤 Role-Based Access

| Feature | Admin | Manager | Sales Executive |
|---------|:-----:|:-------:|:---------------:|
| Dashboard | ✅ | ✅ | ✅ |
| Customers | ✅ | ✅ | ✅ |
| Leads | ✅ | ✅ | ✅ |
| Opportunities | ✅ | ✅ | ✅ |
| Follow-Ups | ✅ | ✅ | ✅ |
| Reports | ✅ | ✅ | Limited |
| User Management | ✅ | Limited | ❌ |
| Role Management | ✅ | ❌ | ❌ |
| Audit Logs | ✅ | Limited | ❌ |

> Access levels depend on the authorization rules implemented within the application.

---

# 📦 Production Build

## Frontend

Navigate to the client:

```bash
cd client
```

Create a production build:

```bash
npm run build
```

The production files will be generated in:

```text
client/dist/
```

---

## Backend

Configure production environment variables:

```env
PORT=3000

MONGO_URI=<PRODUCTION_MONGODB_URI>

JWT_SECRET=<STRONG_PRODUCTION_SECRET>

FRONTEND_URL=https://yourdomain.com
```

---

# 🌐 Deployment

### Frontend

The React frontend can be deployed to platforms such as:

- Netlify
- Vercel
- Cloudflare Pages

Build the application using:

```bash
npm run build
```

Make sure the SPA routing configuration is available through:

```text
public/_redirects
```

For Netlify-style SPA routing, the file can contain:

```text
/*    /index.html   200
```

### Backend

The Express API can be deployed using services such as:

- Render
- Railway
- AWS
- Other Node.js hosting platforms

Ensure the production environment contains the correct:

```env
MONGO_URI
JWT_SECRET
FRONTEND_URL
PORT
```

---

# 🧪 Testing Checklist

Before deploying the application, verify:

```text
☐ User registration works
☐ User login works
☐ JWT authentication works
☐ Protected routes are secured
☐ Role-based access works
☐ Customer CRUD works
☐ Lead CRUD works
☐ Opportunity CRUD works
☐ Follow-up scheduling works
☐ Dashboard metrics load correctly
☐ Charts display correctly
☐ Search and filters work
☐ Reports work
☐ Audit logs are recorded
☐ API endpoints respond correctly
☐ Invalid requests are handled
☐ Frontend and backend communicate correctly
☐ Production environment variables are configured
```

---

# 📱 Responsive Design

The application is designed to work across:

- 🖥️ Desktop
- 💻 Laptop
- 📱 Tablet
- 📱 Mobile

The responsive interface adapts:

- Navigation
- Dashboard cards
- Tables
- Forms
- Charts
- CRM modules
- Reports

for different screen sizes.

---

# 🎯 Project Goals

The main objectives of HireFlow are to:

1. Centralize customer information.
2. Simplify lead management.
3. Track sales opportunities.
4. Improve follow-up management.
5. Provide actionable sales analytics.
6. Implement secure role-based access.
7. Maintain detailed activity and audit records.
8. Provide a scalable REST API architecture.
9. Deliver a responsive and professional CRM experience.

---

# 🔮 Future Enhancements

Potential future improvements include:

- 🤖 AI-powered lead scoring
- 🧠 AI sales recommendations
- 📧 Automated email campaigns
- 🔔 Smart follow-up reminders
- 📱 Mobile application
- 📊 Advanced predictive analytics
- 🔎 Global CRM search
- 📈 Advanced sales forecasting
- 🔗 Third-party CRM integrations
- ☁️ Scalable cloud infrastructure

---

# 🤝 Contributing

Contributions are welcome.

### 1. Fork the repository

```bash
git clone <YOUR_REPOSITORY_URL>
```

### 2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

### 3. Commit your changes

```bash
git add .
git commit -m "feat: add your feature"
```

### 4. Push the branch

```bash
git push origin feature/your-feature
```

### 5. Create a Pull Request

Please provide a clear description of the changes and their purpose.

---

# ⚠️ Environment Variables

Never commit sensitive credentials.

Add the following to `.gitignore`:

```gitignore
node_modules/
.env
.env.local
.env.production
dist/
build/
.DS_Store
```

---

# 📄 License

This project is distributed under the **MIT License**.

See the `LICENSE` file for more information.

---

# 👨‍💻 Author

**Pavan Kalyan Srinivas Robba**

Full-Stack Developer  
React • Node.js • Express • MongoDB • REST APIs

---

<p align="center">
  <strong>🚀 HireFlow — AcxiomCRM</strong>
  <br />
  <sub>Manage Customers. Track Leads. Close Opportunities. Grow Smarter.</sub>
</p>

<p align="center">
  ⭐ Star this repository if you find it useful!
</p>
