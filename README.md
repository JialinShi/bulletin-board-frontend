
# Project: bulletin-board-frontend
Author: `Jialin Shi`

Live website: http://ec2-18-222-52-169.us-east-2.compute.amazonaws.com/ 

Frontend repo for bulletin-board application, for information about the backend part of bulletin-board, pleaser refer to project [bulletin-board](https://github.com/JialinShi/bulletin-board)

## Description
This projects is created with REACT framework, combining with Javascript and CSS for the UI and scripts running the application. 
There are 3 pages completed, users can switch between the pages using the navigator bar on the top
- [Singup](http://ec2-18-222-52-169.us-east-2.compute.amazonaws.com/signup) Here users can sign up for a new account
- [Login](http://ec2-18-222-52-169.us-east-2.compute.amazonaws.com/login) Here users can login using the account created
- [My Notes](http://ec2-18-222-52-169.us-east-2.compute.amazonaws.com/notes) Here users are able to create, review, update, and delete notes they own. There is a `logout` button in this page, after users logging out, pages is forced to be switched to Login page.

## Application Structure


  ![BLB](https://github.com/user-attachments/assets/2ed151a8-5460-4e3d-8665-c305cd453504)

### User Operations - [UserService.js](https://github.com/JialinShi/bulletin-board-frontend/blob/main/src/services/UserService.js)

This JavaScript module is designed to handle user-related operations through a RESTful API, enabling functionalities such as creating, retrieving, updating, deleting, and authenticating users. The operations are conducted over HTTP using Axios, with each request ensuring that the proper content type is set for JSON data.

Defined under the `/api/users` route, this module encapsulates several endpoints:

- **GET `/api/users`**:
  - **Function**: `getAllUsers()`
  - **Description**: Retrieves a list of all users registered in the system. This endpoint is typically used to manage users from an admin panel or to list users in multi-user applications.
  - **Returns**: A promise resolving to the array of user objects.

- **POST `/api/users`**:
  - **Function**: `createUser(user)`
  - **Description**: Registers a new user with the details provided in the request body. This function is vital for user onboarding processes within applications.
  - **Parameters**:
    - `user` (Object): The user object containing necessary user details such as username, password, and email.
  - **Returns**: A promise resolving to the newly created user object.

- **PUT `/api/users/{userId}`**:
  - **Function**: `updateUser(userId, user)`
  - **Description**: Updates an existing user's details by their unique identifier. This method allows for modifications to user profiles, such as updating names, passwords, or contact information.
  - **Parameters**:
    - `userId` (String): The unique identifier for the user.
    - `user` (Object): An object containing the updated user details.
  - **Returns**: A promise resolving to the updated user object.

- **DELETE `/api/users/{userId}`**:
  - **Function**: `deleteUser(userId)`
  - **Description**: Removes a user from the system by their unique identifier. This function is crucial for managing user lifecycles and data privacy, especially in applications that comply with data retention policies.
  - **Parameters**:
    - `userId` (String): The unique identifier of the user to be deleted.
  - **Returns**: A promise resolving to the result of the deletion operation.

- **POST `/api/login`**:
  - **Function**: `loginUser(credentials)`
  - **Description**: Authenticates a user using the credentials provided. This function is essential for securing user sessions and restricting access to authenticated users only.
  - **Parameters**:
    - `credentials` (Object): An object containing login details, typically including username and password.
  - **Returns**: A promise resolving to the authentication token or user session details.

### Note Operations - [NoteService.js](https://github.com/JialinShi/bulletin-board-frontend/blob/main/src/services/NoteService.js)

This JavaScript module facilitates the management of Note operations in an application, offering a RESTful API for CRUD functionalities. The operations are authorized using a token-based system, ensuring secure access to note management functions.

Defined under the `/api/notes` route, the module includes the following endpoints:

- **GET `/api/notes/user/{userId}`**: 
  - **Function**: `getAllNotesForUser(userId)`
  - **Description**: Retrieves all notes associated with a specific user. This is crucial for applications featuring user-specific dashboards or interfaces.
  - **Parameters**:
    - `userId` (String): Unique identifier for the user.
  - **Returns**: A promise resolving to the list of notes.

- **POST `/api/notes`**:
  - **Function**: `createNote(note)`
  - **Description**: Creates a new note with the details provided in the request body. This function supports dynamic note creation tied to authenticated user sessions.
  - **Parameters**:
    - `note` (Object): The note object containing elements such as title and content.
  - **Returns**: A promise resolving to the created note.

- **PUT `/api/notes/user/{userId}/note/{noteId}`**:
  - **Function**: `updateNote(noteId, note, userId)`
  - **Description**: Updates an existing note by its ID for a specified user. This method ensures that only the rightful owner can modify a note.
  - **Parameters**:
    - `noteId` (String): The ID of the note to be updated.
    - `note` (Object): Updated note details.
    - `userId` (String): User ID of the note owner.
  - **Returns**: A promise resolving to the updated note.

- **DELETE `/api/notes/user/{userId}/note/{noteId}`**:
  - **Function**: `deleteNote(noteId, userId)`
  - **Description**: Deletes a note based on the user and note IDs, catering to secure note management and removal of data upon user request.
  - **Parameters**:
    - `noteId` (String): The ID of the note to be deleted.
    - `userId` (String): The ID of the user requesting the deletion.
  - **Returns**: A promise resolving to the result of the deletion operation.


## Getting Started

### Steps
clone this project to the local  
```
gh repo clone JialinShi/bulletin-board-frontend
```

install necessary dependencies   
```
brew install node
```

go to project home  
```
cd bulletin-board-frontend
```

start application  
```
npm start
```

open browser to access website 

### Note
This is a frontend application only, with authentication information required for most of the functions, in order to explore all functions, please also deploy backend service along with MySQL database locally. Backend service [bulletin-board](https://github.com/JialinShi/bulletin-board)

## Upcoming features

**User Admin Page**

Perform like administrator to CREATE, PULL, UPDATE, DELETE other users. Page WIP, please feel free to take a preview at [UserAdminPage](http://ec2-18-222-52-169.us-east-2.compute.amazonaws.com/useradmin)

**Note Admin Page**

Enable you administrator access to review & take control of all users' notes. Page WIP, please feel free to take a preview at [NoteAdminPage](http://ec2-18-222-52-169.us-east-2.compute.amazonaws.com/noteadmin)




