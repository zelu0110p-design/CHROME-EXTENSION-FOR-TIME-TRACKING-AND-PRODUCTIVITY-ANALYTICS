# CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS

#COMPANY: CODTECH IT SOLUTIONS PRIVATE LIMITED

#NAME: PATEL ZEEL MAHESHBHAI

#INTERN ID: CTIS2480

#DOMAIN: FULL STACK WEB DEVELOPMENT

#DURATION: 4 WEEKS

#MENTOR: NEELA SANTHOSH KUMAR

Productivity Report Chrome Extension Documentation 

  1. Overview
     
Productivity Report Chrome Extension supported by a lightweight Node.js backend server. The main goal of this system is to allow users to save browsing timestamps, track activity data, and view productivity reports through a simple dashboard. The project demonstrates the integration of browser extensions with a backend service to collect, store, and visualize user activity data.

  2. Backend Server (server.js)
   
The server.js file implements a basic backend using Express.js, a popular Node.js framework. The server listens on port 3000 and uses JSON middleware to process incoming requests. It maintains an in-memory array named data to store activity records sent from the client server file.

  3. Two REST endpoints are defined:
     
•	POST /track: Accepts activity data in JSON format and stores it in the data array.
•	GET /report: Returns all stored activity records as a JSON response.
This backend acts as a simple data collection and reporting service. While it does not persist data permanently (no database integration), it effectively demonstrates the concept of backend-driven analytics.

  4. Dashboard Interface (index.html)
     
The index.html file provides a minimal productivity dashboard for displaying the collected data index. It uses standard HTML and JavaScript to fetch data from the backend’s /report endpoint. The fetched JSON is rendered in a readable format using a "<pre>" element.
This file shows how frontend applications can communicate with backend services using the Fetch API and display real-time analytics data without requiring complex frameworks.

  5. Chrome Extension Background Script (background.js)
   
The background.js file functions as the service worker for the Chrome extension background file. It listens for the onInstalled event and logs a confirmation message when the extension is installed. Although simple, this script establishes the background execution environment required for Chrome extensions using Manifest V3.

  6. Extension Configuration (manifest.json)
     
The manifest.json file defines the extension’s metadata and permissions manifest. It specifies:
•	Manifest version 3
•	Extension name, version, and description
•	Required permissions such as tabs, activeTab, and storage
•	A popup UI and background service worker

This file is essential, as it controls how Chrome loads and executes the extension.

  7. Popup Interface Styling (popup.css)
   
The popup.css file provides basic styling for the extension's popup file. It defines font styles, spacing, and button layout to ensure a clean and user-friendly interface within the limited popup area.

  8. Popup Logic (popup.js)
     
The popup.js file handles user interaction within the extension's popup file. When the user clicks the save button, the script retrieves the active browser tab, records the URL along with a timestamp, and stores it in Chrome’s local storage. This functionality enables users to bookmark specific moments during browsing sessions.

  9. Conclusion
      
Overall, this project successfully demonstrates a full-stack productivity tracking system, combining a Chrome extension frontend with a Node.js backend. It showcases key concepts such as browser APIs, local storage, RESTful services, and client-server communication. With enhancements such as database integration, authentication, and advanced analytics, this system could be expanded into a comprehensive productivity-monitoring tool.
