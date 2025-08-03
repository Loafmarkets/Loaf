# Real Estate Tokenization Platform

A web platform that enables the tokenization and trading of high-end real estate properties using a stock-exchange or crypto exchange like interface.

## Features

- **Property IPO System**: List properties and raise funds through tokenized offerings
- **Trading Engine & Exchange Interface**: Live buy/sell orders with real-time matching
- **Tokenomics System**: Support for fractional ownership with decimal tokens
- **Dynamic UI**: Real-time price updates, charts, and order books

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js (Express)
- **Database**: PostgreSQL
- **Real-time Updates**: WebSockets

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn
- PostgreSQL (v12+)

### Installation

1. Clone the repository
```
git clone https://github.com/Loafmarkets/Loaf.git
cd loaf-MVP
```

2. Install backend dependencies
```
cd backend
npm install
```

3. Install frontend dependencies
```
cd ../frontend
npm install
```

4. Set up environment variables
```
# Create .env file in backend directory with the following content:
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=1d
DATABASE_URL=postgres://username:password@localhost:5432/real_estate_tokenization
CORS_ORIGIN=http://localhost:3000
```

5. Set up the database
```
# Create PostgreSQL database
psql -c 'CREATE DATABASE real_estate_tokenization;'

# Run migrations and seeds
cd backend
npm run migrate
npm run seed

# Or use the setup script
node setup.js
```

6. Start the development servers
```
# In one terminal
cd backend
npm run dev

# In another terminal
cd frontend
npm start
```

## Project Structure

- `/frontend`: React.js application
- `/backend`: Node.js/Express API and services
- `/docs`: Project documentation

## License

[MIT](LICENSE)
