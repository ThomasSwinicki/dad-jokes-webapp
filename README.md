# Dad Jokes App

A monorepo containing an Angular frontend and Express backend for displaying random dad jokes.

## Project Structure

```
dad-jokes-webapp/
├── apps/
│   ├── frontend/    # Angular web application
│   └── backend/     # Express API server
└── package.json     # Root workspace config
```

## Features

- Landing page with "Want to hear a joke?" prompt
- Fetches random jokes from the local backend API
- Two-step joke reveal: setup first, then punchline
- "Tell a different joke" button to get a new joke

## Getting Started

### Prerequisites

- Node.js (v22 or higher for native TypeScript support)
- npm

### Installation

```bash
npm install
```

### Running the Application

Start both frontend and backend:

```bash
npm run dev
```

Or run them separately:

```bash
# Terminal 1 - Backend (http://localhost:3000)
npm run dev:backend

# Terminal 2 - Frontend (http://localhost:4200)
npm run start:frontend
```

## API Endpoints

The backend provides the following endpoints:

| Endpoint | Description |
|----------|-------------|
| `GET /random/joke` | Returns a random joke |
| `GET /joke/:id` | Returns a specific joke by ID |
| `GET /jokes` | Returns all jokes |
| `GET /health` | Health check |

### Response Format

```json
{
  "success": true,
  "body": [{
    "_id": "1",
    "type": "general",
    "setup": "Why don't scientists trust atoms?",
    "punchline": "Because they make up everything!"
  }]
}
```

## Building

```bash
# Build all workspaces
npm run build

# Build frontend only
npm run build:frontend

# Build backend only
npm run build:backend
```

## Running Tests

```bash
npm test
```

## Docker

### Running with Docker Compose

```bash
# Build and start all services
docker compose up --build

# Run in detached mode
docker compose up -d --build

# Stop services
docker compose down
```

The application will be available at:
- Frontend: http://localhost
- Backend API: http://localhost:3000

### Building Individual Images

```bash
# Build backend
docker build -t dad-jokes-backend ./apps/backend

# Build frontend
docker build -t dad-jokes-frontend ./apps/frontend
```
