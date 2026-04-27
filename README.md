# QuickStack Expense Tracker 💰

A full-stack expense tracking application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) with Philippine Peso (₱) currency support.

## Features

- ✅ User Authentication (Register/Login)
- ✅ Add, Edit, Delete Expenses
- ✅ Categorize Expenses (Food, Transport, Shopping, etc.)
- ✅ Real-time Dashboard with Spending Summary
- ✅ Philippine Peso (₱) Currency
- ✅ Responsive Design
- ✅ Expense Analytics by Category

## Tech Stack

- **Frontend:** React.js, Axios, React Router
- **Backend:** Node.js, Express.js, JWT Authentication
- **Database:** MongoDB
- **Currency:** Philippine Peso (₱)

## Installation

### Prerequisites
- Node.js installed
- MongoDB installed locally or MongoDB Atlas account

### Setup

1. Clone the repository
\\\ash
git clone https://github.com/itsfrncsA/QuickStackExpense.git
cd QuickStackExpense
\\\

2. Install backend dependencies
\\\ash
cd backend
npm install
\\\

3. Create a .env file in the backend folder
\\\env
PORT=5000
MONGO_URI=mongodb://localhost:27017/quickstack
JWT_SECRET=your_secret_key_here
\\\

4. Start the backend server
\\\ash
npm run dev
\\\

5. Install frontend dependencies (in a new terminal)
\\\ash
cd frontend
npm install
\\\

6. Start the frontend
\\\ash
npm start
\\\

7. Open your browser and go to http://localhost:3000

## Usage

1. Register a new account
2. Login with your credentials
3. Add your expenses with amount in Philippine Peso (₱)
4. View your spending summary on the dashboard
5. Edit or delete expenses as needed

## Deployment

Frontend can be deployed to Vercel/Netlify. Backend can be deployed to Render/Railway with MongoDB Atlas.

## License

MIT

## Author

Francis A.

## Live Demo

(Add your live demo link after deployment)
