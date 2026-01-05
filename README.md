# Bootcamp Backend

A Node.js + Express backend application scaffold.

## Features

- Express.js server setup
- Environment configuration with dotenv
- RESTful API structure
- Error handling middleware
- CORS enabled
- Morgan logging (development)
- Organized folder structure

## Project Structure

```
bootcamp_backend/
├── config/           # Configuration files
├── controllers/      # Route controllers
├── middleware/       # Custom middleware
├── routes/          # API routes
├── utils/           # Utility functions and classes
├── server.js        # App entry point
├── package.json     # Dependencies
└── .env.example     # Environment variables template
```

## Getting Started

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your configuration

### Running the Application

Development mode (with auto-restart):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

### API Endpoints

- Health Check: `GET /health`
- Examples: `GET /api/v1/examples`
- Example Detail: `GET /api/v1/examples/:id`
- Create Example: `POST /api/v1/examples`
- Update Example: `PUT /api/v1/examples/:id`
- Delete Example: `DELETE /api/v1/examples/:id`

## Environment Variables

- `NODE_ENV` - Application environment (development/production)
- `PORT` - Server port (default: 5000)

## License

ISC
