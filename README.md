#!/bin/bash

# Bash script to generate a README.md for WhatsApp Clone Project

cat << 'EOF' > README.md
# WhatsApp Clone - Full Stack Project

This is a real-time **WhatsApp Clone** built using **Spring Boot**, **Angular 19**, **Keycloak**, **WebSockets**, and **Bootstrap**.  
It features secure authentication, responsive design, real-time messaging, media uploads, and more!

## 🚀 Tech Stack
- **Backend:** Spring Boot
- **Frontend:** Angular 19
- **Authentication:** Keycloak
- **Real-Time Communication:** WebSockets
- **Styling:** Bootstrap
- **API Documentation:** OpenAPI / Swagger
- **Database:** PostgreSQL or MySQL

## 📸 Demo

| Login | Chat Interface | Sending Messages |
|:---:|:---:|:---:|
| ![Login Screenshot](link-to-login-screenshot) | ![Chat Screenshot](link-to-chat-screenshot) | ![Message Screenshot](link-to-message-screenshot) |

> _Replace the above `link-to-*.png` with your screenshot links or GitHub hosted images._

## 🛠️ Features
- Secure Authentication & Authorization (Keycloak)
- Real-Time Chat with WebSocket
- Private One-on-One Messaging
- Emoji Support
- File/Media Uploads (Images, Files)
- Auto Scroll to Latest Messages
- Responsive UI (Mobile/Desktop Friendly)
- OpenAPI (Swagger) Documentation
- JWT Authentication Interceptor on Frontend
- Full Synchronization between Keycloak users and App users

## ⚙️ Installation

### Backend (Spring Boot)
\`\`\`bash
# Clone the repository
git clone https://github.com/your-username/whatsapp-clone.git

# Navigate to the backend project
cd whatsapp-clone/backend

# Configure your application.properties for Database & Keycloak

# Run the project
./mvnw spring-boot:run
\`\`\`

### Frontend (Angular 19)
\`\`\`bash
# Navigate to the frontend project
cd whatsapp-clone/frontend

# Install dependencies
npm install

# Update environment.ts with Keycloak config

# Run the project
ng serve
\`\`\`

> ⚡ Make sure Keycloak Server is running before starting the backend and frontend.

## 📄 Entity Relationship Diagram (ERD)
- **User**
- **Chat**
- **Message**
- **MediaFile**

Relationship Example:
- One User → Many Chats  
- One Chat → Many Messages

## 🔐 Keycloak Configuration
- Create a realm (e.g., \`whatsapp-clone\`)
- Add client configurations (confidential client)
- Enable OpenID Connect
- Set Redirect URIs for Angular app
- Assign user roles

## 📚 Documentation
- APIs are available via OpenAPI (Swagger UI) at \`http://localhost:8080/swagger-ui/index.html\`

## 🙌 Acknowledgements
- Spring Boot Official Documentation
- Angular Official Documentation
- Keycloak Documentation
- Bootstrap Documentation

## 📬 Contact
For any queries, feel free to reach out:

- **Name:** Kavindu Dilshan
- **Email:** kavindu4543@gmail.com
- **LinkedIn:** [Kavindu Dilshan]([https://linkedin.com/in/your-linkedin](https://www.linkedin.com/in/kavindu-dilshan-475297287/))

---











# ICET Final Project Frontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
