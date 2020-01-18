---
title: "T3A2 - Pesky Pooch MERN App \U0001F436 \U0001F4A5"
created: '2020-01-15T00:48:57.165Z'
modified: '2020-01-15T00:49:36.545Z'
---

# T3A2 - Pesky Pooch MERN App :dog: :collision:

---

## Table of Contents

* [Deployed App :link:](#deployed-app) *(insert link to deployed app here)*
* [Application Description :pencil:](#application-description)
  * [Purpose](#purpose)
  * [Functionality / features](#functionality--features)
  * [Target audience](#Target-audience)
  * [Tech stack :computer:](#Tech-stack-computer) 
* [Design Process :art:](#Design-Process-art)
  * [Style Manual](#Style-Manual) *(Insert google docs file containing reference to our: font families, font-weights and colour palette here)*
  * [User Stories](#User-Stories)
  * [Wireframes](#Wireframes) *(Insert screenshots of our wireframes here - In drop down)*
  * [Sitemap](#Sitemap) *(Insert screenshots of our completed application here - In drop down)*
  * [Data Flow Diagram](#Data-Flow-Diagram)
  * [Application Architecture Diagram (AAD)](#Application-Architecture-Diagram-AAD)
* [Project Management & Planning Methodology :heavy_check_mark:](#Project-Management--Planning-Methodology-heavy_check_mark)
  * [Client diary and communication](#Client-diary-and-communication) *(this is all you Coen, mention how you got feedback on the design/colour-palette, etc, here)*
  * [Task Delegation](#Task-Delegation) *(Insert short description of how tasks were delegated here) (ensure it describes and adheres to an agile approach - board/tickets/iterations)*
  * [Trello Board Screenshots](#Trello-Board-Screenshots) *(Insert screenshots of Trello board here)*
  * [Source control Process](#Source-control-Process) *(insert description about our GIT workflow here)*

---
## Project Context

As budding full stack developers, it is important for us to be able to communicate and demonstrate our abilities to prospective employers. We need to be able to demonstrate our competence in building a complete application from design through to deployment **for a commercial client,** using appropiate tools and methodologies.

The client of this group project is a Gold Coast canine behavioural, grooming, sitting, and massage company called 'Pesky Pooch', for whom we aim to provide a full stack MERN web application to modernise web presence, and ideally to facilitate new customers.

## Deployed App

The React client application is hosted on Netlify, and the Node.js API backend on Heroku.

- Front-End: {Netlify Link}
- Back-End: {Heroku Link with basic back end display page for non-sensitive data}

*** Insert link to deployed Application Here ***

Github Repository Link: [Pesky Pooch Github Repo](https://github.com/Coencidental/T3A2_Pesky_Pooch)

## Application Description

### Purpose / Problem to be solved

The problem to be solved by creating this application is that the brand in question, "Pesky Pooch", has no unified online presence, and no primary website.  In order to remedy this, a new application will be designed and built to primarily facilitate customer enquiries for services offered by the brand (in the form of a contact page), and in general, to improve the availability and relevance of all information relating to the brand, it's services, it's values, and all other aspects of the brand important for customer confidence.

The general purpose of this web application is to provide the client a platform to clearly and concisely to promote their service/brand to current and potential customers.

### Functionality / features

Both the MVP (minimal viable product) and full production scopes of functionality and features of the ‘Pesky Pooch’ web application was decided through the combination of user stories and clientele feedback. Such functionality/features that were decided upon for the MVP are listed out below.

#### MVP Page Components Division (react-router-dom):

- **Home Page**
  - **Testimonials Section,** where users can input reviews for the ‘Pesky Pooch’ business. This feature includes live updating through the use of React. When users input a testimonial it is immediately available for display on the website. In addition to this, because ‘Pesky Pooch’ has accumulated a wealth of already existing testimonials to date. We will be including these already existing reviews into this features section via a web scraper Coen has built.
- **About Page**
- **Contact Page**
  - **Customer Enquiry Form**: this is the most essential feature of the application, an input form to allow users to send customer enquiries. This form is attached to the clients email server where she will receive the enquiries in her inbox. In addition to using an Email API Service, we have also decided to save these 'customer enquiry forms' to our applications database, for archiving and recording purposes. Thus, ensuring the highest level of data security.
- **Services Page**
  - **Events Section:** where the business operator can create, read, update and delete informational cards that relate to regular events.  As an example, each Saturday afternoon, Pesky Pooch offers group dog training sessions at a local beach, at a cost of 20 dollars per person attending. A card could be advertised on her services page displaying this information, but with the ability to modify the details in case she'd like to change prices, location, or any other information.

#### Other Necessary MVP Features:
- **Authorization**:
  - **JWT Authentication** for the ‘operator account’ (client stays logged in for a reasonable period of time after successful authentication).
  - **Operator Account:** this account is intended for use by the operator (which is the website/business owner. I.e - our client). This feature was created with usability/UX in mind. The client can easily access the account by clicking on the copyright symbol in the websites footer. Once clicked, the client is redirected to a simple login form (thus eliminating the need for the client to memorize a specific URL). Here the client can login securely with ‘OAuth’ verification. Upon login, the client receives full CRUD capabilities to allow the deletion of testimonials/reviews.


### Target audience

The target audience intended for the ‘Pesky Pooch’ web application is effectively the clientele (or potential clientele) of the ‘Pesky Pooch’ business. This includes dog owners with dogs that may need treatment for problems such as: behavioural issues, problem barking and pet obedience.

Questions to ask Nikki:
- What is your typical customer, if there is one?
- What would you say is the median age of your customer base?
- What do your customers value most in the services you offer them?
- What do you wish you could tell people about your brand more?
- What do you enjoy the most about what you do?
- What problems have you had with using Facebook/your current website in getting new customers, or in getting in contact with people who have messaged you?
- Would you say most of your customers contact you using their phone, their computer, or unsure?

### Tech stack :computer:

The following tech stack was used in the development of the ‘Pesky Pooch’ web application:

- MongoDB / Mongoose as a backend database.
- NodeJS as Javascript runtime environment.
- ExpressJS open source framework for creating the server application on NodeJS.
- ReactJS to handle page routing & page rendering, as well as all client-side logic and validation.
- Cypress for testing both front-end application code.
- HTML, SCSS and CSS for front-end component styling.
- Netlify platform for client hosting.

## Design Process :art:

### Client Brainstorming and initial requirements

When first approaching the design process, approaching the client with a rigorous set of questions was the most important step in establishing what direction the design would go in.  Firstly, a simple colour scheme was designed using an online tool (www.coolors.co), however, when this was shown to the client, she desired something more spiritually calming, so in the second iteration of design brainstorming, a 'happier' set of colours was decided on, which the client agreed on.

### User Stories

*** …… ***

### Wireframes

After reaching a concensus on colour decisions and the functionality requirements of the application, wireframes were drafted to test the colour interactions, and to ensure the accessibility/usability of the website.  

Research was done to decide upon the best screen sizes to do wireframes for, and based on the popularity of particular screen dimensions, a phone, tablet, and computer dimension wireframe was done simultaneously for each page/component of the desired application.

*** Insert screenshots of our wireframes here - In drop down ***

### Sitemap

*** Insert screenshots of our completed application here - In drop down ***

### Data Flow Diagram

*** …… ***

### Application Architecture Diagram (AAD)

The below AAD Diagram was created using 'Edraw Max' Software:

![Pesky Pooch Application Architecture Diagram](docs/Diagrams/Pesky_Pooch_AAD_Diagram.png)

In addition, a direct relationship AAD was made to map the interactions of data within the application.

![Pesky Pooch Architectural Interaction Diagram](docs/Diagrams/Interactions_AAD.png)

## Project Management & Planning Methodology :heavy_check_mark:

The initial stages of project management and planning were largely disordered. It took a few days of adjustment to be able to begin methodically breaking down the tasks to be completed and the scope of the issue we would need to tackle.

Despite the 'buzzword' nature of it, Agile methodology is hugely important in a task such as this.  As our first group technology task, we had the opportunity to approach it in an ordered but misinformed (and narrowly scoped) manner, or to analyse our skillsets both independently as well as together, and to allocate tasks appropriately, as required, in a more effective and suited manner.

### Task Delegation

As the technical team leader, Coen was responsible for *overseeing* task delegation amongst the group.

The most important aspect of task delegation during the initial stages of the project was communication as a team, and honesty in comfortability. Team meetings leading into the beginning of the build stage of the project were crucial in determining the skillsets we each held, as well as where our motivations were focused during this project.

Nick displayed comfortability with React and UI/UX design especially, so it was decided he would take charge of the initial development stage of the front end.

Dale displayed relative comfortability across both front and back end, focused in front end at the start of the design stage, but he demonstrated the wish to improve his back-end abilities and to, in the weekend break between design and building, to catch up these required skills so that he could contribute more meaningfully to the back end development of the 'Pesky Pooch' application.

Coen was comfortable with both front and back end work, and was especially interested in overseeing both the client side and server side building processes.  For workflow, he opted to take charge of the building of the back end, due to the fact if issues emerge in the front end, it can be relatively easily rebuilt, but if issues emerge in the backend, it could be a much more obscured process.

### Trello Board Screenshots

Trello screenshots were taken on a daily/semi-daily basis, and saved to 'docs/Trello Screenshots'

View Trello Board Screenshots [Here](https://github.com/Coencidental/T3A2_Pesky_Pooch/blob/master/docs/Trello%20Screenshots/TRELLO.pdf)
 
### Source Control Process

As the singular most vulnerable point of failure of the formal application development process, and being one that each member of our group was extremely uncomfortable doing passively, as a group we got assistance and performed independent practise exercises/research on source control with GitHub, and by the end of the design and planning process, (the first week), we were much more equipped to being a proper development process than before seeking assistance.

## Extra Resources During Design/Build

- Style Guide
- 


