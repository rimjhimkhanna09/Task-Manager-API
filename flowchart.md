*Frontend (React)*
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

Backend (Node.js + Express)
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

User Flow Chart
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

Data Flow
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

Key Features Summary
1. Task Management
    - Create tasks with title and description
    - Assign priority levels (Low/Medium/High)
    - View task creation date
    - Delete tasks
2. Visual Elements
    - Priority tags with color coding
    - Clean task list layout
    - Responsive design
    - Loading states
3. Technical Implementation
    - Frontend: React with Axios
    - Backend: Node.js with Express
    - Database: MongoDB
    - API: RESTful endpoints

This summary provides a comprehensive overview of the project's structure, flow, and functionality. Each component works together to create a robust task management system with priority-based organization and easy task manipulation.
