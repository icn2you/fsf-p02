# fsf-p02
# Full Stack Flex Project 2

Listen, Hear is the only app you will ever use to track and playback your favorite podcasts once you subscribe! Using Listen, Hear by visiting https://fsf-p02.herokuapp.com/, you can:
1. Add your favorite podcasts to the Listen, Hear database,
1. View the most recently-updated episodes on the Listen, Hear homepage, and
1. Listen to your added podcast episodes at any time on Listen, Hear.

### Lovingly created by: KFC&T
Katherine Treadwell, Frank Flores, Christopher Zenner, and Tamar Cabayan

### New Technologies KFG&T Used
### Passport
Passport is advertised as “simple, unobtrusive authentication for Node.js." Though not simple, it is unobtrusive. We employed Passport in our application to authenticate middleware. We used passport-github as our authentication strategy.  Since our classmates each have a GitHub account, we felt that this was the best platform to use for authentication.  GitHub also has a built-in OAuth App, which can act on behalf of the user and perform user-to-server requests.  With Passport, we chose to enable persistent sessions instead of utilizing tokens, thus ensuring that Listen, Hear users maintain consistent access to their Podcasts so long as they remain logged in on the same browser.

### Webpack
We used Webpack as part of our deployment strategy. Webpack is a JavaScript module bundler that takes the code from an application and makes it usable in a web browser. Loaders are the key to having Webpack handle different types of files over than javascript. They are different packages that web developers install that dictate how certain files should be pre-processed. By loading Saas-Loader (which turns Sass into CSS), CSS-Loader (which turns CSS into CommonJS), and Style-Loader (which injects styles into the DOM), Webpack helped us maintain consistency in styling across web browsers and also enhance performance by reducing browser loading times. 


### Pre-Login Page 
This page will display a list of the most recent podcasts and episodes that were added by our users. There is also a button asking you to login with your GitHub account.
![Alt Text](https://i.imgur.com/roWMQFB.png)

### Authentication
Clicking the login button will take you to the authentication page. The authentication page will requie you to log-in before you utilize our app and add your own podcasts.
![Alt Text](https://i.imgur.com/EqHMB68.png)

### Login Page
Once you are logged in, the app will display your GitHub username in the navbar,  confirmation, if you will, that you are logged in. You will now be able to personalize your account by using the search bar and the "Add" button to search and add your preferred podcasts. We used the iTunes API to search for podcasts. The podcasts you add will populate the screen below. You will be able to get a summary of the podcast as well as listen to your chosen podcast. 
![Alt Text](https://i.imgur.com/iHDLuXv.png)

Project Management
https://trello.com/b/RWTaG3hz/listen-hear

Application
https://fsf-po2.herokuapp.com/

GitHub
https://github.com/icn2you/fsf-p02

