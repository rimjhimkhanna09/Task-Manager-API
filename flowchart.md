**System Architecture Flow**
1. Frontend (React) 
```mermaid
Frontend (React)
├── App.js (Main Component)
│   ├── TaskManager Component
│   │   ├── Task Creation Form
│   │   │   ├── Title Input
│   │   │   ├── Description Input
│   │   │   └── Priority Dropdown (Low/Medium/High)
│   │   └── Task List Display
│   │       ├── Task Title with Priority Tag
│   │       ├── Task Description
│   │       ├── Status Indicator
│   │       └── Creation Date
│   └── Delete Button for Each Task
└── API Integration
    ├── GET /api/tasks (Fetch Tasks)
    ├── POST /api/tasks (Create Task)
    └── DELETE /api/tasks/:id (Delete Task)
```

2. Backend (Node.js + Express)
```mermaid
Backend (Node.js)
├── Server Setup
│   ├── Express Configuration
│   ├── MongoDB Connection
│   └── CORS Middleware
├── Routes (/api/tasks)
│   ├── GET / (Get All Tasks)
│   ├── POST / (Create New Task)
│   └── DELETE /:id (Delete Task)
└── Models
    └── Task Model
        ├── title
        ├── description
        ├── priority
        ├── status
        └── createdAt
```

**Technical Architecture**
1. Frontend (React)
```mermaid
   Frontend Structure
├── src/
│   ├── components/
│   │   └── TaskManager.js (Main component)
│   │   └── TaskManager.css (Styling)
│   ├── api.js (API integration)
│   ├── index.js (Entry point)
│   └── App.js (Root component)
```

2. Backend (Node.js + Express)
```mermaid
Backend Structure
├── routes/
│   └── enhancedTaskRoutes.js (API endpoints)
├── models/
│   └── task.js (Task schema)
├── index.js (Server setup)
└── middlewares/
    └── auth.js (Authentication)
```


*API Endpoints*
```mermaid
API Endpoints
GET /api/tasks - Get all tasks
POST /api/tasks - Create new task
DELETE /api/tasks/:id - Delete task
```

*User Flow Chart*
```mermaid
User Flow
1. User Opens Task Manager
   ├── Sees Clean Layout with Three Sections
   │   ├── Task Manager Title
   │   ├── Task Creation Form
   │   └── Task List Display
   │
   └── Task Creation Process
       ├── Enter Task Title
       ├── Enter Task Description
       ├── Select Priority Level
       └── Click Create Task
           └── Task Added to List with Priority Tag

2. Task Management
   ├── View Task Details
   │   ├── Title with Priority Color Tag
   │   ├── Description
   │   ├── Status
   │   └── Creation Date
   │
   └── Delete Task
       ├── Click Delete Button
       └── Task Removed from List
```

*Data Flow*
```mermaid
Data Flow
Frontend → API → Backend → MongoDB
1. Task Creation
   └── Frontend → POST /api/tasks → Backend → MongoDB
2. Task Fetching
   └── Frontend → GET /api/tasks → Backend → MongoDB
3. Task Deletion
   └── Frontend → DELETE /api/tasks/:id → Backend → MongoDB
```

**Key Features Summary**
1. Task Management
    - Create tasks with title and description
    - Assign priority levels (Low/Medium/High)
    - Creation date display
    - Delete tasks
    - Status tracking
2. UI Components
    - Clean layout with three main sections:
      - Title heading
      - Task creation form
      - Task list display
    - Priority tags with color coding
    - Responsive design
    - Loading states
4. Technical Implementation
    - Frontend: React with Axios
    - Backend: Node.js with Express
    - Database: MongoDB
    - API: RESTful endpoints
    - CORS enabled for cross-origin requests

This summary provides a comprehensive overview of the project's structure, flow, and functionality. Each component works together to create a robust task management system with priority-based organization and easy task manipulation.
