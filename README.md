# Node Basic Template

The tiniest possible NodeJS app template.

This template is used in the emmert/node docker image as a boilerplate NodeJS/Typescript application, to be replaced with your own app.

## WHY?

When building developing build tools, it is useful to have an example app to build with in development. Then it's easy to replace the application with your own.

## How does it work?

http://localhost:1337 will display a placeholder message, prompting the user to install their own app instead of the default template. The message also shows the timestamp.

## Features

-   Configured for TypeScript
-   MomentJS as an example external dependency
-   Serves the error message with Node's built-in `http` module
