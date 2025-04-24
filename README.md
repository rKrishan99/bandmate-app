# BandMate App

BandMate is a full-stack web application designed to connect musicians and bands. It provides a platform for bands to post vacancies and for musicians to apply for those opportunities. The app also facilitates communication, profile management, and hiring processes.

## Features

### Front-End
- **User Registration**: Separate registration flows for bands and musicians 
- **Vacancy Management**: Bands can post job ads, and musicians can browse and apply
- **Profile Management**: Users can update their profiles, including profile and cover images
- **Interactive UI**: Built with React and styled using Tailwind CSS for a responsive and modern design
- **Real-Time Feedback**: Alerts and dialogs for user actions like registration, application submission, and profile updates

### Back-End 
- **RESTful API**: Built with Express.js to handle user authentication, vacancy management, and applications
- **Database Integration**: Uses MySQL for storing user data, vacancies, and applications
- **Error Handling**: Centralized error handling for robust API responses
- **Static File Serving**: Supports image uploads for user profiles and vacancies

## Tech Stack

**Front-End**
- React: Component-based UI development
- Vite: Fast build tool for modern web apps
- Tailwind CSS: Utility-first CSS framework 
- PrimeReact: UI components for enhanced interactivity

**Back-End**
- Node.js: JavaScript runtime for server-side development
- Express.js: Web framework for building RESTful APIs
- MySQL: Relational database for data storage
- Axios: HTTP client for API communication

## Installation

**Prerequisites**
- Node.js (v16 or higher)
- MySQL
- Git

**Steps**

1. Clone the repository:
```bash
git clone https://github.com/your-username/BandMate-App.git
cd BandMate-App
```

2. Set up the back-end:
```bash
cd back-end
npm install

# Create .env file with database credentials
echo DB_HOST=localhost > .env
echo DB_USER=root >> .env
echo DB_PASSWORD=yourpassword >> .env
echo DB_NAME=bandmate >> .env

# Start the server
npm start
```

3. Set up the front-end:
```bash
cd ../front-end/bandmate-app
npm install
npm run dev
```

4. Open http://localhost:5173 in your browser

## Folder Structure

```
BandMate-App/
├── back-end/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── config/
│   └── index.js
├── front-end/
│   ├── bandmate-app/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── context/
│   │   │   ├── pages/
│   │   │   └── App.jsx
│   │   ├── public/
│   │   └── vite.config.js
└── README.md
```

## Available Scripts

**Back-End**
- `npm start`: Start Express server
- `npm run dev`: Start server in development mode with hot reload

**Front-End** 
- `npm run dev`: Start Vite development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature-name`)
5. Open a pull request

## License

This project is licensed under the MIT License.

## Contact

For support: rkrishan894@gmail.com