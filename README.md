# Random Quote Machine

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## This project was originally created as a project from the FreeCodeCamp

you can see the github pages link [here](https://crisxh.github.io/random-quote-machine/)

It was originally built in codepen so I could more easily run it through the tests on the FreeCodeCamp. In codepen the development environment was different than if I were building it locally using create react app. 

This repository is the same code but moved into the structure of a CRA App. 

### The Technologies that went into building this app
It uses react's useState and useEffect hooks to work with functional components. 

It uses useEffect combined with javascript's Fetch to get data from the quotes database API. 

useEffect is used with a dependency array to prevent too many calls to the API and to only make a new call when the page is refreshed or the button is pressed for a new quote. 


### What I learned 

#### API
I gained a lot of experience in learning to fetch the data I want from an API endpoint, and especially about trying to connect to an API. I learned that APIs can come with many different types of data structures and that there is still a lot I need to learn about that so I can use more APIs in the future. For example there was a good API I could have used for this project, but I couldn't understand the data structure and how the pieces were connected enough to get the data I needed for the front end. 

#### useEffect
I learned a lot about the useEffect hook, and especially about the dependency array. I learned how to fetch new data from the API only when the dependency array has been updated. 

### What I would have done differently
If I had built this app locally from the beginning, I would have had a components folder for the different components instead of having everything in the app.js. 

I would have also used npm to install libraries and dependencies like fontawesome instead of linking to cdns. 

