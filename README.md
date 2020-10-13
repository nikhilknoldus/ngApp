# 52G Open Innovation Platform

<img src="https://people.52g.gs/static/media/OILogo.0b7febb8.svg" width="250px"/>

## Summary

  - [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Steps for setting a new user](#steps-for-setting-a-new-user)
  - [Project Directory Structure](#project-directory-structure)
  - [Deployment](#deployment)
  - [License](#license)

## Getting Started

This project is created using [Create React App](https://github.com/facebookincubator/create-react-app).

To use this repo locally, start by cloning it and installing the NPM packages.

``` bash
$ git clone <githubURL>
$ npm install
```

Run it locally.

``` bash
$ npm run start
```

## Prerequisites

Things you need to have in your system for development & running this project locally.

    NodeJs, Npm. [ This project built with NodeJs <12.14.0> & Npm <6.13.4> ]
    ReactJs, CRA [ This project built with ReactJS <16.13+> ]
    VS Code - or any editor you like.

## Steps for setting a new user
#### This project do not offer self user signup, so the user should exists in system & database, for using this app. For this activity, user should be added in database, it can be done by running a script, which marks an entry for that user in the database and sends an email, with a temporory password and signup link. By clicking the signup link user can start the onboarding journey.

## Project Directory Structure

### containers
```
│
├───AcceptInviteLogin        #(First screen for user to provide first time login pin)
│       AcceptInviteLogin.js
│       index.js
│
├───ChangePassword
│       ChangePassword.css
│       ChangePassword.js
│       index.js
│
├───EditProfile
│       EditProfile.js
│       EditProfile.scss
│       index.js
│
├───FirstTimeResetPassword    #(Screen to set a new password, mendatory at for first time user)
│       FirstTimeResetPassword.js
│       index.js
│
├───InitialUserInfo           #(Initial screen to get user introduction & skills information, after setting up the password)
│       index.js
│       InitialUserInfo.css
│       InitialUserInfo.js
│
├───InquireAccount            #(Manually login request)
│       index.js
│       InquireAccount.css
│       InquireAccount.js
│
├───Login
│       index.js
│       Login.js
│       Login.scss
│
├───NotFound
│       index.js
│       NotFound.css
│       NotFound.js
│
├───PeopleDirectoryHome       #(Initial screen after login, home page for search employees)
│       index.js
│       PeopleDirectoryHome.css
│       PeopleDirectoryHome.js
│
├───ProfileDetails            #(Profile details)
│       index.js
│       ProfileDetails.css
│       ProfileDetails.js
│       ProfileDetails.scss
│
├───ResetPassword             #(For resetting password)
│       index.js
│       ResetPassword.css
│       ResetPassword.js
│
├───Settings         
│       index.js
│       Settings.css
│       Settings.js
│
└───SetupProfile              #(For setting up user profile, this is the initial user profile setup container)
        index.js
        SetupProfile.js
        SetupProfile.scss
```

### components

```
├───AuthenticatedRoute
│       AuthenticatedRoute.js
│       index.js
│
├───Container
│       Container.js
│       Container.scss
│       index.js
│
├───EmployeeCard
│       EmployeeCard.js
│       EmployeeCard.scss
│       index.js
│
├───ErrorBoundary
│       ErrorBoundary.css
│       ErrorBoundary.js
│       index.js
│
├───GSLoader
│       GSLoader.js
│       index.js
│
├───LoaderButton
│       index.js
│       LoaderButton.css
│       LoaderButton.js
│
├───Paginator
│       index.js
│       Paginator.js
│       Paginator.scss
│
├───Profile
│       index.js
│       Profile.js
│       Profile.scss
│
├───ProfileCard
│       index.js
│       ProfileCard.js
│       ProfileCard.scss
│
├───ProfileContacts
│       index.js
│       ProfileContacts.js
│       ProfileContacts.scss
│
├───ProfileContainer
│       index.js
│       ProfileContainer.js
│       ProfileContainer.scss
│
├───ProjectHistory
│       index.js
│       ProjectHistory.js
│       ProjectHistory.scss
│
├───SearchBar
│       index.js
│       SearchBar.js
│       SearchBar.scss
│
├───Text
│       index.js
│       Text.js
│       Text.scss
│
├───TextLabel
│       index.js
│       TextLabel.js
│
└───UnauthenticatedRoute
        index.js
        UnauthenticatedRoute.js
```

## Deployment

CI / CD steps.

## License

Copyright (C) 2020. GS Holdings & Favorite Medium.

This project is the confidential & proprietary information of GS Holdings & Favorite Medium. You shall not disclose such confidential information and shall use it only in the accordance with the terms of the license agreement you entered into the GS Holdings.

## Technical POCs
#### Stephan Pak
#### Abdul (BE), Nikhil (FE)

### Designed & Develop By
#### Favorite Medium.
