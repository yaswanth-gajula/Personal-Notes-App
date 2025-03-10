# Personal-Notes-App
# Personal Notes App

A simple personal notes app built with **HTML, CSS, JavaScript** (Frontend), **Node.js & Express.js** (Backend), and **MongoDB** (Database).

## Features
- Create new notes
- Display all notes from the database
- Delete existing notes
- Responsive & professional UI

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Setup Instructions

### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/personal-notes-app.git
cd personal-notes-app
```

### 2. Install Backend Dependencies
```sh
cd backend
npm install
```

### 3. Create `.env` File
Inside the `backend/` directory, create a `.env` file and add your MongoDB connection string:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4. Start the Backend Server
```sh
node server.js
```

### 5. Open Frontend
Simply open `index.html` in your browser.

## API Endpoints
| Method | Endpoint    | Description          |
|--------|------------|----------------------|
| GET    | /notes     | Fetch all notes      |
| POST   | /notes     | Create a new note    |
| DELETE | /notes/:id | Delete a note by ID  |

## Project Structure
```
/personal-notes-app
│── /backend
│   ├── server.js
│   ├── package.json
│   ├── .env
│── /frontend
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│── README.md
```

## Future Improvements
- Add user authentication
- Implement note editing functionality
- Store notes in local storage for offline access

---
**Author**: [Your Name]  
**License**: MIT

