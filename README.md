# Wellness Tasks Calendar

The Wellness Tasks Calendar aims to provide six simple tasks to incorporate into your daily routine. Three are for your physical health and three are for your mental health. The tasks will remain consistent for half a month before changing to give you the opportunity to incorporate them into your daily life. Enjoy the minimistic approach to a smoother and healthier life.

This app is the collaborative work of Team Toliman consisting of Wid Alsadoon, Kai White, Stephan Procopii, Angust Ingram, and Madison McFadden. Team Toliman has the following roles:

Backend: Wid Alsadoon & Kai White
Frontend & Design: Stephan Procopii & Madison McFadden
Database: Angus Ingram

Review Managers: Stephan Procopii & Wid Alsadoon
Plan Managers: Wid Alsadoon & Angus Ingram
Documentation Managers: Kai White & Wid Alsadoon
Release Manager: Stephan Procopii
Project Manager: Madison McFadden

# Mapping the Team Process:
-The Wellness Tasks Calendar builds on a series of functions created in the server.js file of the directory. These functions are created to appropriately randomize physical and mental tasks for a period of time.
-The server.js is the heart of the API and as a result the core work file for the backend team (Wid and kai)
-Wid and Kai began the project by creating the server.js file and created a series of functions and endpoints to generate the Calendar's tasks
-Both backend members pushed their finalized API material onto the Main branch for other members to pull

-The project then shifted to the frontend and database portion
-Stephan and Madison created the "public" folder to hold the html and css files for the design of the site
-Angus added to the server the database portion for the creation of accounts

**Development Workflow:**
-The project grew in a series of stages in the process of backend -> frontend + database
-Kai and Wid worked in person to create the backend portion. Both members pushed and informed members through communication to pull.

-Angus, Stephan, and Madison pulled the project and worked remotely to code the frontend and database
-Angus added the database information in the Public directory
-Stephan and Madison also added frontend material to the Public directory

-Throughout the completion of the database and frontend, members notified each other through written communication to pull new changes
-Kai and Wid continued to review the material as it pulled. Backend members also worked in the creation of the documentation throughout the project.

## **Phase 1: Scoping and Planning**
-As per the assignment instructions, this project will create an app that relates to public health.
-Team Toliman brainstormed a series of possible ideas including:
1. COVID readiness app: Provides important information on COVID including how to avoid it, what to do when getting COVID, general statistics, and resources.
2. A calendar health app: Provides a series of daily tasks to follow
3. Disaster readiness app: Similar to the COVID readiness app, provides information in the case of oncoming thunderstorms, hurricanes, tornadoes, etc.

-Toliman decided to pursue the calendar health app because it can change and is more personal to the user
-Toliman finalized the app's features which includes three tasks for physical health and three tasks for mental health
-The idea for the app was later approved by an LA.

## **Phase 2: Designing and Documenting**
-Toliman created the /docs/ directory to document specific information on the structure of the app
-The designing phase concluded with the establishment of the app endpoints.
-The /app/ endpoint is the homepage and will include a welcome phrase for the user
-The /physical/ endpoint will list the three physical tasks for the user
-The /mental/ endpoint will list the three mental tasks for the user
-For each physical and mental task is their subsequent task description. This is so that the user understands the reasoning behind pursuing certain tasks.
-Each task will build on the physical or mental endpoint depending on the type and will be like so: /physical/task1 or /mental/task3

-The design of the front end was mostly built on creative choices like color, font, size, etc.
-One of the frontend brainstormed ideas is to create buttons that will move from the task list to the task description. For example going from /app/physical to /app/physical/task2

## **Phase 3: Prototyping and Pitch**
-Team Toliman is currently in the prototyping and pitch phase of the app development
-So far the backend API is complete, the database files will be merged into main by Angus, and the frontend is working on creating buttons to traverse the different endpoints of the server

-A pitch video will be created to demo the use of the app for users:

## **Demo Video**
