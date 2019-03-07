# Deframe Admin Portal

Below you will find some information on how to perform common tasks.

```sh
    npm install -g create-react-app
    create-react-app deframe-admin-portal(name of the folder of project)
```

Will install below dependencies

```sh
    npm install --save react-redux
    npm install —save redux
    npm install —save reducer
    npm install —save redux-form@6.6.1
    npm install --save react-router-dom@4.0.0
    npm install axios
    npm-install redux-promise
    npm install email-validator
```

Below command to install React-script

Run npm i -D react-scripts create-react-scripts

Below links are useful for learning site hosting on AWS S3

https://www.fullstackreact.com/articles/deploying-a-react-app-to-s3/
https://www.youtube.com/watch?v=D6qB7MEFOe0

will have to use or will see wether we have to use component mount thing
get all gallery will use component will mount

## Component Design

We are currently organizing our code by code language. We seperate between CSS and JS. Since we are using CSS modules to help with reusability I think We need to organize by components instead. We should seperate containers and components, and then group files that build a component together. For example, I've put both SCSS and JS files that are associated with the sidebar component inside the dashboardSidebar folder. Moving forward components should be organized like so:

```md
src
|- **actions** *folder*
|- **reducers** *folder*
|- **containers** *folder*
    |-container.js
|- **components** *folder*
    |-**componentName** *folder*
        |- component.js
        |- componentStyling.scss

```

We should also have an index.js in every folder that exports everything so any importing will be easier (see ```md src/components/index.js`)