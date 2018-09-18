## Contributing

From opening a bug report to creating a pull request: every contribution is appreciated and welcomed.
If you're planning a new feature or changing the api, please create an issue first.
This way we can ensure that your precious work is not in vain.

## Issues

In most cases if a bug is discovered, an issue may be raised, also based on the development lifecyle, issues can be selected from already raised ones.

## Setup

This setup guide is intented to the Angular6 part of this projects all files located in the `main-template` folder

Assumptions made here are
1. Node.js is installed   
   - version 8.x or greater
   - `v8.11.1 LTS (Current)` prefferable
   - Installation steps can be found here [Node 6.x](https://nodejs.org/en/download/)

2. NPM is  installed
   - npm version 5.x or greater
   - 'v6.0.0' (Current) prefferable
   - Luckly for you npm intalls authomatically when intalling Node.js

3. Angular CLI is installed
   - version 1.x or greater
   - `verision 6.0.0` (Current)
   - If not intalled run ```npm install -g @angular/cli ```
   - NB Angular CLI recomends for Node.js and npm to be intalled before this intallation


    Setup Steps

    1. git clone ubcsc-website repo

    2. Enter the ``main-template directory``  

        ``` 
        cd into main-template 
        
        ```

    3. Run to build and open on the browser on `http://localhost:4200`

        ```
        npm install
        ng serve --open
        
        ```

    4. alternatively run comand to build and move to browser of your choice and enter    `http://localhost:4200`

        ``` 
        ng serve 
        
        ```

>If in case of a conflic between the local Angular CLI and global run  
``` 
ng config -g cli.warnings.versionMismatch false

```  
> If an An NPM error during installation with `node-sass` failure to execute, run comand to let npm execute scripts.
```
 npm install --unsafe-perm 

``` 

## Final Build
After all components are created and enter the comand below to build and direct the final build to the laravel public/admin directory

```
 ng build --base-href http://localhost:3000/ 
 
```

See the final build in the laravel server  

``` 
http://localhost:3000/ 

```

Setup for laravel and running the Express server is found in the [CONTRIBUTING_EXPRESS.md](https://gitlab.com/austin47/department-site/blob/master/CONTRIBUTING_EXPRESS.md).
