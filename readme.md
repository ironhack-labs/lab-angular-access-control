![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# PP | Access Control

## Learning Goals

After this lesson, you will be able to:

- Create an angular service to share information with all the components in your application.
- Create an angular form to insert new data in the service.

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone your fork into your `~/code/labs` folder.

## Submission

Upon completion, run the following commands:

```bash
$ git add .
$ git commit -m"done"
$ git push origin master
```

Navigate to your repo and create a Pull Request -from your master branch to the original repository master branch.

In the Pull Request name, add your campus, name, and last name separated by a dash "-".

## Deliverables

All the files of your project, including the service and the different components you will use to create your solution.

## Introduction

We have been hired by a football club to create a system that allow the manager to have a control of who accesses to his team locker room. They are going to add a device next to the door, and all the people will have to write who they are and why they are in the locker room.

### Iteration 1: Service creation

First of all, we are going to create an Angular Service to keep our log access register. We will use an Array of objects to do that. In this array, each object will store the following information:

- `Person`, that will be an string indicating who is accessing the locker room.
- `Message`, that will be an string to indicate what are they doing in the locker room.
- `createdAt`, that will be a date field to know what day and time has the person accessed to the locker room.

We will also add two different methods to interact with the array defined in the service:

- `getRegisters()` that will return the array.
- `addRegister()`, that will add an item to the array with the two parameters it will receive:
  - `person`
  - `message`

**Don't forget to export the service to be able to use it in other parts of the application.**

**Tasks**

- Create `AccessControlLog` Service.
- Declare a `logMessages` array of objects. Each object will have the following information:
  - `person`, string.
  - `message`, string.
  - `createdAt`, date.
- Add an `addRegister()` method, receiving two parameters:
  - `person`.
  - `message`.
- Add a `getRegisters()` method, that returns the array of objects.

### Iteration 2: Form Component

We are going to need a form to insert new registers in the Service array. We are going to create a `LogFormComponent` component to have all the form functionality on it. The form will have two different fields: `person` and `message`.

Once the component is created, we have to add the Service as a provider, so we can interact with the methods we created. When the form is sent, we have to call the `addRegister()` method in the service to add a new element to the array.

**Before save, you have to be sure that both fields contain information, so remember to use form validations.**

**Tasks**

- Create a `LogForm` component.
- Add the `AccessControlLog` Service as a provider.
- Create the HTML form in the component.
- Handle the button event to call the `addRegister()` method in service.
- Once the log is created, show a message in the screen indicating that all has worked.
- Use form validations to avoid errors.
- **Style the form!** Remember we are working for a professional football team, we have to do our best work here.

### Iteration 3: Show the registers

The register is secret, so no one will be able to see the whole register. But we want to be sure that all is working fine, so we have to show the whole list of logs somehow.

After a register is created, we will show the list in the browser's console. It's easy, you have to iterate over all the elements in the array and show the information with `console.log`.

**Tasks**

- After each insertion, get all the elements in the array and show them in the console.

/Happy coding!
