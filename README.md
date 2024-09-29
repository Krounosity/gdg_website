# (GDG RBU Website)[https://gdgwebsitevarnan.vercel.app/]

This project is a task for the upcoming **Google Developer Groups (GDG)** interview. The website represents the **GDG RBU Chapter**, showcasing the chapter's mission, events, technologies, and FAQs. It’s built using **React** and is fully Dockerized for easy deployment.

---

## Features

- **Landing Page**: Overview of GDG RBU with a call-to-action button to join the community.
- **Mission & Vision Section**: Describes the group’s purpose and goals.
- **Statistics**: Displays years active, number of events, members, and attendees.
- **Technologies**: Highlights key technologies, including Android, Flutter, and Google Cloud.
- **FAQs Section**: Answers common questions about GDG and how to get involved.
- **Light/Dark Mode**: Simple toggle for light and dark themes.
- **Responsive Design**: Optimized for both desktop and mobile screens.
- **Dockerized**: Simplified deployment using Docker.

---

## Installation

### Prerequisites

- **Node.js** and **npm** installed.
- **Docker** installed for containerized deployment.

### Local Development

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/gdg-rbu-website.git

2. **Navigate to the project directory**:

   ```bash
   cd gdg_rbu_website

3. **Install dependencies**:

   ```bash
   npm install

4. **Run the development server**:

   ```bash
   npm start

The app will be accessible at http://localhost:3000

---

### Docker Setup

1. **Build Docker image**:

   ```bash
   docker build -t gdg-rbu-website .

2. **Run the Docker container**:

   ```bash
   docker run -p 3000:3000 gdg-rbu-website

Access the app at http://localhost:3000

---

## Screenshots



---

##

---

## Technologies Used

- **React**: Frontend framework for building UI components.
- **SASS**: CSS preprocessor for styling.
- **Docker**: Used to containerize the application.
- **Node.js**: Runtime for running the React app.

---

## Deployment

The website can be deployed using Docker, ensuring a consistent environment across platforms. After building the Docker image, the app can be deployed on any system supporting Docker.

---

## Contributing

If you want to contribute:

1. Fork the repository.

    ```bash
    git clone https://github.com/yourusername/gdg-rbu-website.git

2. Create a new branch (`git checkout -b feature/NewFeature`).

    ```bash
    git checkout -b feature/NewFeature

3. Commit your changes (`git commit -m 'Add new feature'`).

    ```bash
    git commit -m 'Add new feature'

4. Push to the branch (`git push origin feature/NewFeature`).

    ```bash
    git push origin feature/NewFeature

5. Open a pull request.
