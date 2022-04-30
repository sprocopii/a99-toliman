# Wellness Tasks Calendar

The Wellness Tasks Calendar aims to provide six simple tasks to incorporate into your daily routine. Three are for your physical health and three are for your mental health. The tasks will remain consistent for half a month before changing to give you the opportunity to incorporate them into your daily life. Enjoy the minimistic approach to a smoother and healthier life.

## Summary 

COMP426 final project template repository.
All your code and documentation goes here.
Change this text to be a brief description of your final project.
Put the name of your project in the header above.
You will change everything below to be the main technical documentation, as outlined below.

## First steps

Other steps that you will need to take after your team has accepted the assignment:

1. Choose a license and update the LICENSE file accordingly. (DONE)
2. Edit this README.md file and use it as the main location of your technical documentation with links out to information contained under `/docs/`.
3. Create a `/docs/` directory for more elaborate documentation of your API, planning notes, etc.
4. Make sure that all of your team members have access to the repository as administrators. (DONE)
5. Create a project under the **Projects** tab. Use this to manage your planning. Create a To-do list, etc. Explore the tools available and user them to manage your project. (DONE)
7. Assign team roles and include a listing of those roles in this README.md file or in another file under `/docs/`. (DONE)
8. Then put your entire development workflow in this repository.
9. Use **Pull requests** to propose changes and incorporate them into your code from various team members. 
10. Use **Issues** to identify and track bugs and also to communicate about various aspects of the project.


**Mapping the Team Process:**
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

**Phase 1: Scoping and Planning**
-As per the assignment instructions, this project will create an app that relates to public health.
-Team Toliman brainstormed a series of possible ideas including:
1. COVID readiness app: Provides important information on COVID including how to avoid it, what to do when getting COVID, general statistics, and resources.
2. A calendar health app: Provides a series of daily tasks to follow
3. Disaster readiness app: Similar to the COVID readiness app, provides information in the case of oncoming thunderstorms, hurricanes, tornadoes, etc.

-Toliman decided to pursue the calendar health app because it is more variable and personal to the user
-Toliman finalized the app's features which includes three tasks for physical health and three tasks for mental health
-The idea for the app was later approved by an LA.

**Phase 2: Designing and Documenting**
-Toliman created the /docs/ directory to document specific information on the structure of the app
-The designing phase concluded with the establishment of the app endpoints.
-The /app/ endpoint is the homepage and will include a welcome phrase for the user
-The /physical/ endpoint will list the three physical tasks for the user
-The /mental/ endpoint will list the three mental tasks for the user
-For each physical and mental task is their subsequent task description. This is so that the user understands the reasoning behind pursuing certain tasks.
-Each task will build on the physical or mental endpoint depending on the type and will be like so: /physical/task1 or /mental/task3

## Team mangement

Plan to meet with your team ASAP.
Talk through identifying roles within your team.

Try to figure out what each of you are good at/enjoy doing and try to work out roles that incorporate that.

Some basic roles you will want to consider:

1. A review manager - someone to review pull requests and merge or reject them and manage the related discussions
2. A plan manager - someone to keep an eye on the overall plan and keep the project tab/to-do list up to date
3. A documentation manager - someone to keep the documentation in order and identify what is missing and needs to be documented
4. A release manager - someone to manage the packaging and release process for your prototype package
5. A project manager - someone keeping track of all the moving parts and make sure that everything that needs to happen is happening.
5. Roles for team members to take charge or different parts of the project. Possible roles:
    1. Front end lead
    2. Back end lead
    3. Database lead
    4. Design lead
    5. Etc.

You will notice that there are more roles than people in your group.
That is because you will all be doing a hybrid job of managing a thing while working on other things.

## Check in with instructional staff

Schedule a few times throughout the rest of the semester for your team to check-in with your assigned instructional staff member during their scheduled office hours. 

## Assignment instructions

And that is about all you need to get started.

All the rest of the assignment instructions are available at: https://comp426.johndmart.in/a/99

Good skill and be creative!
