Install mode models: npm install
To test our App so far use this command: npm run dev

PREPARING REACT CONTEXT FOR USE WITH useContext Hook:

useContext Hook works off the Context API: https://reactjs.org/docs/context.html
The idea is that we create a shared context at some level where all the data below that level, in the React component tree, that is share data without
having to pass props into components.

1. The React Team shipped a new Context AOI whose purpose is to make accessing data and functions anyplace in your app very simple and straightforward.
   Without this you'll need to pass props around your component up and down complex component trees -> no need to use class inheritance as a way to pass data around. With the useContext Hook its easy to access context in any of your functional components natually.

   -> perfect case for the useContext and the Context API involves storing configuration info in our app and having it available in any functional component we want i.e. in our conference app we've not assigned our speakers to either Saturday or Sunday. Until we get feedback from attendees, we don't creat a schedule. Config data often comes from a DB or other external source, and being able to dynamically loaded at runtime is very valuable.

2. Files: the App component -> create our shared context for the entire app as all the routes we ever plan to make will share this app component.
3. Create a context and export it so that other components can just import the context to use it:
   Create the context for our entire app:
   export const ConfigContext = React.createContext();

Hooks will come in when we consume this context.
in our return of our component, we wrap our page to show with ConfigContext.Provder. Then we pass the attributes value to the provider, which can be
any JS object. Create one called 'configVAlue' and add an attribut to it 'showSpeakerSpeakingDays' and set that to 'true'. Assign that to the
ConfigContext.Provider: value={configValue}

When we created our Speaker and Home pages, we had them both call the App component with a property to differentiate that is pageName="Speaker"
or pageName="Home". That App component is where we want to create our shared Context for the entire app as all the routes we ever plan to
make will shre this App component.

Clip 06: Using useContext to Access Global Configuration from React context API:

Implement Config options in React App:
-> SingMeUp.js -> import the configContext from the App Component.
-> reference the useContext Hook with the ConfigContext as the argument.
-> Within the SingMeUp component, check the flag, and if flag is false, don't render our signup:
return context..showSignMeUp === flase ? null : (...)
Now the signup on home and speakers page will disapear. When set to true, the signup will appear again.

// Pull in Context by importing ConfigContext from App.js where we have exported it.
// Get a reference to our Context with our useContext Hook:
// Checkboxes are displayed, we check our 'showSpeakerSpeakingDays' config value from context,

Test our App so far on the UI: npm run dev
Now I can see our Saturday/Sunday checkboxes.

Clip 07: useReducer Is What useState is built on:

1. useState is built with useReducer under it.
2. Reducer means - a function that takes in previous state as the first parameter, an action as the second parameter and returns a new state.

Now with the useReducer, dispatch and in action.
Now we can create for action types as we need them and we've got a very cler place to do our state reductions. We got a very clear
place to do our state reductions.
Now auto refresh the page, dispatched and in action.

in next clip, we will will add a couple more actions to our reducer so we can handle the favouring and unfavouring of speakers.
