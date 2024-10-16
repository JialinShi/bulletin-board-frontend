### Application deployed on AWS - http://ec2-18-222-52-169.us-east-2.compute.amazonaws.com/ 

# [Project: bulletin-board-frontend](http://ec2-18-222-52-169.us-east-2.compute.amazonaws.com/ )
Author: `Jialin Shi`

Frontend repo for bulletin-board application, for information about the backend part of bulletin-board, pleaser refer to project [bulletin-board](https://github.com/JialinShi/bulletin-board)

## Description
This projects is created with REACT framework, combining with Javascript and CSS for the UI and scripts running the application. 
There are 3 pages completed, users can switch between the pages using the navigator bar on the top
- [Singup](http://ec2-18-222-52-169.us-east-2.compute.amazonaws.com/signup) Here users can sign up for a new account
- [Login](http://ec2-18-222-52-169.us-east-2.compute.amazonaws.com/login) Here users can login using the account created
- [My Notes](http://ec2-18-222-52-169.us-east-2.compute.amazonaws.com/notes) Here users are able to create, review, update, and delete notes they own. There is a `logout` button in this page, after users logging out, pages is forced to be switched to Login page.

## Application Structure
<img src="https://github.com/user-attachments/assets/f58f9658-7d92-4aac-9794-682e2cee811f" width="900" height="600" alt="bulletin-board" />


# Getting Started

## Steps
clone this project to the local

`gh repo clone JialinShi/bulletin-board-frontend`

install necessary dependencies
  
`brew install node` (Mac)

go to project home
  
`cd bulletin-board-frontend`

start application
  
`npm start`

open browser to access website 

## Note
This is a frontend application only, with authentication information required for most of the functions, in order to explore all functions, please also deploy backend service along with MySQL database locally. Backend service [bulletin-board](https://github.com/JialinShi/bulletin-board)

# Upcoming features

**User Admin Page**

Perform like administrator to CREATE, PULL, UPDATE, DELETE other users. Page WIP, please feel free to take a preview at [UserAdminPage](http://ec2-18-222-52-169.us-east-2.compute.amazonaws.com/useradmin)

**Note Admin Page**

Enable you administrator access to review & take control of all users' notes. Page WIP, please feel free to take a preview at [NoteAdminPage](http://ec2-18-222-52-169.us-east-2.compute.amazonaws.com/noteadmin)




