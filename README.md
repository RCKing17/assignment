# Chat System Documentation

## Project Overview

### Description
The Chat System is a web-based application built using Angular, designed to facilitate basic chat functionalities with user authentication and role-based access control. The application allows Super Admins to manage users and Group Admins to manage groups. All authenticated users can participate in group chats.

### Technologies Used
- **Angular**: Frontend framework
- **TypeScript**: Programming language
- **Bootstrap**: CSS framework for styling
- **RxJS**: Reactive programming library for handling asynchronous events
- **Angular Router**: For client-side routing
- **LocalStorage**: Used for managing user sessions

## 1. Git Repository Organization

### Branching Strategy
- **Master/Main Branch**: The stable version of the project.
- **Development Branch**: Contains the latest features under development.
- **Feature Branches**: Each feature or bug fix is developed in its own branch and merged into the development branch once completed and tested.
- **Release Branches**: Prepared for production releases, typically includes the latest stable features from the development branch.

### Update Frequency
- **Daily Commits**: Developers are encouraged to commit changes daily to maintain a regular update frequency.
- **Pull Requests**: Features are integrated into the development branch through pull requests, ensuring code review and integration testing before merging.

### Server/Frontend Organization
- **Server Code**: Managed in a separate directory within the repository (`/server`).
- **Frontend Code**: Located in the main directory (`/src`), following Angular’s default structure.

## 2. Data Structures

### Client-Side Data Structures
- **User**:
  ```typescript
  interface User {
    id: string;
    username: string;
    roles: string[];
  }
- **Group**:
  ```typescript
  interface Group {
    id: string;
    name: string;
    members: User[];
  }
- **Message**:
  ```typescript
  interface Message {
  id: string;
  sender: User;
  content: string;
  timestamp: Date;
  }

### Server-Side Data Structures
- **User Model**:
  ```javascript
  const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  roles: { type: [String], default: ['User'] }
  });
- **Group Model**:
  ```javascript
  const GroupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  });
- **Message Model**:
  ```javascript
  const MessageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
  });

## 3. Angular Architecture

### Components
- **LoginComponent**: Handles user login functionality.
- **DashboardComponent**: Displays user-specific information.
- **UserManagementComponent**: Manages users in the system, available to Super Admins.
- **GroupManagementComponent**: Manages groups, available to Group Admins.
- **ChatComponent**: Facilitates group chat functionality.

### Services
- **AuthService**: Handles authentication and user session management.
- **UserService**: Manages user-related operations such as fetching and updating user data.
- **GruopService**: Manages group-related operations including group creation and member management.

### Models
- **User Model**: Represents user data within the application.
- **Group Model**: Represents group data within the application.
- **Message Model**: Represents chat messages within the application.

### Routes
- **AppRoutingModule**: Defines the client-side routes for the application, ensuring navigation between components such as login, dashboard, and chat.

## 4. Node Serve Architecture

### Modules
- **Express**: Used for setting up the web server.
- **Mongoose**: Used for MongoDB object modeling.
- **JWT**: JSON Web Token is used for secure authentication.

### Functions
- **server.js**: The main server file that initializes Express and connects to MongoDB.
- **authController.js**: Manages authentication endpoints (login, register).
- **userController.js**: Handles user management endpoints.
- **groupController.js**: Handles group management endpoints.

### Global Variables
- **JWT_SECRET**: A secret key used for signing JWT tokens.
- **DB_URI**: Connection string for the MongoDB database.

## 5. Server-Side Routes

### Route Definitions

### -**Authentication Routes**:
- **'POST /api/auth/login'**: Authenticates the user and returns a JWT token.
- **'POST /api/auth/register'**: Registers a new user.

### -**User Management Routes**:
- **'GET /api/users'**: Retrives a list of groups.
- **'POST /api/groups'**: Creates a new group.
- **'PUT /api/groups/:id'**: Updates group information.

### Parameters and Return values

### -**Parameters**:
- **'id'**: User or group ID for fetching/updating specific records.
- **'username', 'password'**: User credentials for authentication.

### Return values:
- **Success**: JSON object with requested data or success message.
- **Error**: JSON object with an error message and HTTP status code.

## 6. Client-Server Interaction

### Data Flow:

### 1. Login Process:
- The user submits credentials via the login form.
- The Angular frontend sends a POST request to '/api/auth/login'.
- The server authenticates the user and returns a JWT token.
- The token is stored in LocalStorage, and the user is redirected to the dashboard.

### 2. Data Retrieval:
- Angular services (e.g., 'UserService', 'GroupService') send GET requests to fetch user or group data.
- The server queries the MongoDB database and returns the requested data.
- The data is displayed in the corresponding Angular components.

### 3. Data modification:
- The user modifies data (e.g., updating a user profile or creating a group).
- Angular services send PUT or POST requests to the server.
- The server processes the data, updates the database, and returns the updated data.

### Updating Angular Components:
- **Observable Subscriptions**: Components subscribe to data changes, and the UI updates automatically when new data is received.
- **Reactive Forms**: Used for handling user input, with two-way data binding to automatically reflect changes in the UI.

## 7. Conclusion

### Summary
This Chat System project serves as a basic example of a role-based, multi-user chat application built with Angular. It provides foundational features like authentication, user management, and group management, with plans for further enhancements.

### Acknowledgments
- **Angular Documentation**: For providing comprehensive guides and examples.
- **Bootstrap Documantation**: For Styling Guidelines.
