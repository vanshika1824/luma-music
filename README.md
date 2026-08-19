# 🎵 Luma Music

**Luma Music** is a responsive music streaming web application built using **React.js**, **Tailwind CSS**, and the **Deezer API**. The project focuses on building a modern music interface, fetching dynamic music data from an external API, and creating reusable React components for a smooth user experience.

🔗 **Live Demo:** https://luma-music-theta.vercel.app/
🔗 **GitHub:** https://github.com/vanshika1824/luma-music

---

## 📌 Project Overview

Luma Music was developed to understand how a modern frontend application can consume data from an external API and present it through a responsive and interactive user interface.

The application allows users to explore music content and interact with the music player through a clean interface.

The main focus of the project was:

* Building the UI using React components
* Fetching music data from an external API
* Displaying dynamic songs, artists, and albums
* Managing application state
* Creating reusable components
* Building a responsive interface using Tailwind CSS
* Deploying the application using Vercel

---

## 🛠️ Tech Stack

| Technology            | Purpose                           |
| --------------------- | --------------------------------- |
| **React.js**          | Building the user interface       |
| **JavaScript (ES6+)** | Application logic                 |
| **Tailwind CSS**      | Styling and responsive design     |
| **Deezer API**        | Fetching music-related data       |
| **Vite**              | Development server and build tool |
| **Git & GitHub**      | Version control                   |
| **Vercel**            | Deployment                        |

---

## ✨ Features

### 🎧 Music Discovery

The application fetches music-related data from the Deezer API and displays it dynamically rather than using only hardcoded content.

### 🔎 Search and Exploration

Users can explore music content through the application's search and browsing interface.

### ▶️ Music Player

The application provides an interactive player interface for listening to available tracks.

### 🖼️ Dynamic Content

Song titles, artists, albums, and artwork are displayed using data received from the API.

### 📱 Responsive UI

The interface is designed using Tailwind CSS so that the application adapts to different screen sizes.

### 🧩 Reusable Components

The UI is divided into reusable React components instead of implementing the entire interface inside a single component.

---

## 🏗️ Application Structure

The application follows a component-based React architecture.

```text
User
  │
  ▼
React UI
  │
  ├── Search / Browse
  │
  ├── Music Cards
  │
  ├── Artist / Album Information
  │
  └── Music Player
  │
  ▼
API Requests
  │
  ▼
Deezer API
  │
  ▼
Music Data
  │
  ▼
React State
  │
  ▼
UI Updates
```

---

## 📂 Project Structure

```text
luma-music/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── package-lock.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

The project follows a component-based structure to keep the UI modular and easier to maintain.

---

## 🔄 How the Application Works

The basic flow of the application is:

```text
User Action
     ↓
React Component
     ↓
API Request
     ↓
Deezer API
     ↓
JSON Response
     ↓
React State
     ↓
Component Re-render
     ↓
Updated UI
```

For example, when the application needs music data, it sends a request to the music API. The response is received as JSON, processed by the application, stored in state, and then rendered through React components.

---

## ⚛️ Why React?

I used React because the application contains many UI elements that can be represented as reusable components.

For example:

```text
Navbar
MusicCard
SongList
SearchBar
Player
ArtistCard
```

Instead of duplicating the same UI logic, these components can receive different data through **props** and render the required content.

This makes the application easier to maintain and extend.

---

## 🎨 Why Tailwind CSS?

Tailwind CSS was used to simplify styling and responsive design.

Instead of creating separate CSS rules for every component, utility classes can be applied directly to elements.

It also makes responsive layouts easier using breakpoints such as:

```text
sm:
md:
lg:
xl:
```

This helped make the application usable on both desktop and smaller screens.

---

## 🌐 API Integration

The application uses the **Deezer API** to retrieve music-related information.

The general process is:

```text
API Endpoint
     ↓
HTTP Request
     ↓
JSON Response
     ↓
Extract Required Data
     ↓
Store in React State
     ↓
Render Components
```

The API response can contain information such as:

* Track name
* Artist information
* Album information
* Album artwork
* Preview information

The frontend then maps this data into reusable UI components.

---

## 🧠 React Concepts Used

The project helped me practice several important React concepts:

### Components

The interface is divided into smaller reusable components.

### Props

Props are used to pass data from parent components to child components.

### State

State is used for values that can change during user interaction, such as selected music or search-related data.

### Event Handling

User interactions such as clicking buttons or selecting a track are handled through React event handlers.

### Conditional Rendering

Different UI elements can be displayed depending on the current application state.

### API Calls

The application communicates with an external API to retrieve dynamic data.

---

## ⚠️ Challenges Faced

One of the main challenges was integrating external API data with the React UI.

API responses are structured differently from the way the UI needs to display information, so I had to understand the response structure and map the required fields to the appropriate components.

Another challenge was maintaining a responsive layout while displaying different amounts of music content across different screen sizes.

I solved this by:

* Breaking the UI into reusable components
* Understanding the API response structure
* Mapping API data into components
* Using Tailwind responsive utilities
* Testing the application at different screen sizes

---

## 🚀 Deployment

The application is deployed using **Vercel**.

The deployment process involved:

```text
GitHub Repository
       ↓
Connect Repository to Vercel
       ↓
Install Dependencies
       ↓
Build React Application
       ↓
Deploy
       ↓
Live Application
```

Live application:

https://luma-music-theta.vercel.app/

---

## 💡 Key Learnings

Through this project, I gained practical experience with:

* React component architecture
* JavaScript fundamentals
* API integration
* JSON data handling
* State management
* Event handling
* Responsive web design
* Tailwind CSS
* Git and GitHub
* Vercel deployment

Most importantly, I learned how frontend components, application state, and external APIs work together to create a dynamic web application.

---

## 🔮 Future Improvements

Possible improvements include:

* User authentication
* Persistent playlists
* Favorite songs
* Recently played songs
* Improved search
* Personalized recommendations
* Backend integration
* Database support
* Better mobile player controls

---

## 👩‍💻 Author

**Vanshika**

B.Tech CSE — Data Science

GitHub: https://github.com/vanshika1824

---

## 📄 License

This project was developed for educational and portfolio purposes.
