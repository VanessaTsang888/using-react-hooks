I aim to commit my code into my GitHub at least once a day: https://github.com/VanessaTsang888/using-react-hooks
So that my mentor can do my code review for me.

Course Overview:
This course uses Next.js on coding projects.

By Perer Kellner: Developer, Consultant and Author.

React hooks represents a huge step forward towards building a fully functional React app with mininal use of calss components.
React hooks is based off of functional components are the best way to build React apps.
Manaing state and lifecycle events with Hooks is much easier, less and more readable than doing same with React class components.

Start Using React Hooks with useState, useEffect, and useRef:

What Are React Hooks?
It's React's way of allowing you to attach reusable logic to an existing component.

Before Hooks:

1. Use Render Props, or
2. Higher Order Components (HOCS)
3. More complex code.

After Hooks:

1. Allows for attaching reusable logic to an existing component.
2. JS functions that allows dev's to use state and lifestyle methods inside a React functional component.
3. Can build 100% of your app without using JS classes, just functional components.
4. Don't need to worry about the keyword 'this' again.

Three Commonly Used React Hooks:

1. useState
2. useRef
3. useEffect

State Helps Build Highly Performant Web Apps:
A lot of developers have moved to using state as a way to build highly performant, easy-to-reason-about web apps. The idea is every time the user see something new on the screen, its tracked as a new state, i.e. input field -> each letter user types fires an event, and that event replaces the current value of what is currently stored in state with a new value. Both the old and new state are maintained making development and debugging easy.
For example, a conferance website in a real-world production environment. User signs-up to be notified for up and coming events.
As user types JS listening to the onchange event of the input field, and everytime it fires we update our internal React state to the current value of the input field. As that state changes the Reat app rerenders the field below the email address that we are typing into with the current state.
-> github.com/pkellner/pluralsight-course-using-react-hooks
-> 02-Basic-Reat-Hooks

Setting up Our React Tool Chain:
Next.js: supports server-side rendering, which means time to first byte and SEO are usually excellent. Easy to setup. Use for server-rendered website with Node.js

START NEW PROJECT: basic-react-hooks
I have create new repo in my Github, clone it down, opned in my VSCode and now installing Next.js and React:
Initially I cloned it in the wrong directory and during my next catchup meeting with mentor I will need to remove it as I've cloned it again in the correct directory: % mv ~/using-react-hooks /your-destination-folder
-> install Next.js: npm init -y
-> npm install react react-dom next

-> Add script cmd to the package.json file:
"dev": "next",
"build": "next build",
"start": "next start"

-> npm run build:

ISSUE:
I don't have the 'pages' directory and the 'index.js' file.
I started again but this time used only this cmd rahter than the x3 cmd's as per the instructor. The one single cmd Sri gave me that worked is:
npx create-next-app

This work as expected.

file: index.js
Home or root page of our app.

To launch app: npm run dev

1- OUR FIRST REACT HOOK setState:

-> index.js -> we want to hook into the input field that has a placeholder text and every time its value changes, that value gets saved as React state and
then output that value as text right below the input field.
HTML input fields support an onChange event that lets us assign a function that gets called every time the browser user types a key.
Time to use our React Hook: useState. It is composable which means we can create them right inside our functional component. Lets do that right at the top of our InputElement component.
Need to reference the useState hook in our import statement. Calling it now, it takes a single parameter, which is the initial value of the the state we want to track, and it returns an array with the first two values of that array being of interest to us. The first value is what we reference as state itself, our data model. The second value of the array is the setter function that we call to update that state or data model value. Now refactor this to use destructuring and return the state value and the setter function explicityly. This is how most people use useState in most React apps.

Our text input field that we've added an onChange event to can capture our typed-in text as it changes.
When the setInputText function gets called, updates state, and that state value gets reflected in the read-only veriable 'inputText'.
Call the setInputText from inside our onChange event and pass the current value of our input field to it. Internally, that updates some state and then gets reflected in our inputText variable. Add the inputText to our output with curly braces: we've completed our 2-ways data binding. Now run the page.
We achieved our goal.

Create a history of the text input changes and render that history to the page. Just like how we created an ever-changing inputText Value, let's do the same but this time create a new state value that's an array and initialise it with an empty array:
const [historyList, setHistoryList] = useState([]);
Now, on every input field change event, add to the historyList array the current value of the text field. We do that by calling the setHistoryList setter and we pass it an array which starts out by first speading the original historyList and then appending e.target.value which is the value typed in by user as the text box changes.

Output the history array on every keystroke. A simple historyList with a map in our JSX-rendered output does this.
-> create a JS expression that maps over historyList and then renders each item of the historyList array. Now we have 2 state items being traked, inputText and the historyList array.

I have a repo for this course in my GitHub and have committed my code up there: https://github.com/VanessaTsang888/using-react-hooks

2 - Uing useRef T0 Enable MouseOver:
Another common Hook.

What:
Primarily used to allow access directly to an element in the DOM.
Then we can work with that element, to change what the users sees.

A seniro that directly access an HTML element:
Program a hover-over effect that turns a black & white image to colour when user hovers over it/mouse over it and back to b&w when user hovers out of it.

1. Create a new JS file named: 'ImageChangeOnMouseOver' in our pages directory. The name of that file becomes our url route when user browse to the site.
2. Write a simple React functional component called: 'ImageChangeOnMouseOver', with 2 image elements, that each point to their own b&w pic.
3. The way that Next.js handles static resources like pictures is, by default, anything we put in the folder /public is available to a running app, as if that were in the base URL of the website.
4. Setting our 2-source attributes to two separate b&w images.

Why I don't have a src folder? I've had to create a src folder to match with instructures folders.
I ran the app but not working as expected as:

-> ImageToggleOnMouseOver -> onMouseOver -> the lowercase 'o' was uppercase which is wrong.
-> ImageChangeOnMouseOver -> within the component, the extension: .jpg was missing on 2 of the paths.

Now working and taken a screenshot of it. Comitted to my GitHub.
