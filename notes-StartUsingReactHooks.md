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
-> src folder -> store all functional component in here incl. the 'ImageToggleOnMouseOver'.
-> ImageChangeOnMouseOver -> within the component, the extension: .jpg was missing on 2 of the paths.

Now working and taken a screenshot of it. Comitted to my GitHub.

3 - LEARNING HOW TO USE THE useEffect HOOK:

It is very similar to componentDidMount, componentDidUpdate, and componentWillUnmount in React class components.
0:20
Can think of useEffect as a way to add side effects to a functional components.

We often talk about Side effects of functional components as a bad thing?
side effects === bad things?

functional components can be free of side effects. This means if we call one with the same parameters over and over again, we'll get exactly the same results rturned. This is called a pure component.

-> useEffect causes side effects to React functional components, after the component is first rendered a function associated with useEffect is executed.
This is not always a bad things:
Adding and removing DOM listeners is great example. useEffect is the perfect place to add them. When component go away we want to reomve these listeners, avoiding any potential resource leaks in our app. Pure component guarantees no side effect, non pure may also have none.

The snytax for useEffect hook is:
The first parameter must be a function.
We return another function. To test do a console.log.
The second parameter is an array that contains a list of dependencies for the component. If this is left out then the first parameter is executed both when the
component is first rendered and then on every subsquent component update. If this arry is empty, then the function associated with useEffect as the first paramerer is only run once when the component is first rendered. If I want the component to be rendered based on certain conditions, I need to have all the values in this array that change or the values that the rendered output is dependent on.

4 - Using useEffect, useRef and useState for Colourising on Scroll:

Colourising on Scroll based on if the photos is in full view of the browser and allow for scrolling to trigger the calculation to determin that.

We use onMouseOver and onMouseOut to assign events to the image tag.

5- Improving & Fixing Our Scrolling Colourising React App;

The pages loaded all images showed as b&w instead of the ones fully in view in colour and rest in b&w. Once we scrolled down the page, everything was good, but not the initial display. This is wrong and we need to fix this.

    // On initial page render, set the images in view to the colour images:
    setInView(isInView());

But now useEffect runs after the first render is completed, and in our ImageToggleOnScroll we set the default image to b&w. To fix this we need to show the image when component first runs as the DOM has not been constructed and we don't know yet whether this image will be in view or not. So we need to add at top of this component a new state: isLoading.

    // Set 'isLoading' to false. This state change will allow React to react and do another render but this time with 'isLoading' set to false:
    setIsLoading(false);

    To make this work we need to add to the component return statement which renders the component a check in the img element source tag for 'isLoading'. So add
    a Ternary expression that overrides displaying the secondary and primary images with a transpartent GIF if isLoading is true.

5 - Adding Side Effect to our Scroller Component:

In the last lecture I used the useEffect hook and the first paramter I passed into it is a function that gets executed after the component has completely rendered the first time. Then I passed-in an empty dependency array as the second parameter, I am telling it to ONLY run the function I've passed-in AFTER the component renders and not on subsequent updates. Dependency array is often used in optimising your component's execution. To demonstrate how we may use this:

-> component -> ImageChangeOnScroll.js -> this component is used to render the list of speaker images.
-> ImageChangeOnScroll.js -> add a moseover event to every speaker image that sets the title of our browser window to the speaker ID. -> maintain in state what our current mouse over speak ID is so need to create that state:

1. add useState to the import statement.
2. write the state instant: const [currentSpeakerId, setCurrentSpeakerId] = useState(0);
3. Listen for the mouseover event by adding the attribute 'onMouseOver' to our div surrounding our ImageToggleOnScroll component.
4. In the mouseover event execution, call setCurrentSpeakerId to the current speaker that this image component renders, and then console.log that speaker ID for debugging since the change is invisible to the UI and so we know what happened.
5. Write a useEffect hook in this component. This is where I want to create the side effect, which is to update the title of current browser to the current speaker ID. So reference useEffect in the import statement. Then make a call to it at top of the component. The first parameter is a function that gets executes after the componet renders and also after it updates. Get this fn to assign to window.document.title of the browser, the speaker ID, then output to the console that we did this. Leaving out the dependency array will cuase the fn to execute on every component update which is what I want for now.
6. Add a counter at top of app that displays the total number of mouse events that have occurred while the app is running. So need to create state for that: const [mouseEventCnt, setMouseEventCnt] = useState(0);
7. In the onMouseOver event, we need to increment the counter: setMouseEventCnt(mouseEventCnt + 1);
   Then in the return, output that value: <span>mouseEventCnt: ${mouseEventCnt}</span>{" "}
8. Testing in the UI: when I mouseover the first speaker, the title in the URL shows: SpeakerId: 1124, and when I mouse over the next one, SpeakerId: 823 shows in the title as I expected. Looking at the console.log, when I mouseover the first images, the event is logged, the event updates both the current speaker and the event count, causing component to update, which means the fn in useEffect is executed again and logged on the console. useEffect is called on first rendered and also on component updates. This is what is happening now and what I expected. But when I mouse over the first speaker, mouse out, and mouse over again, the browser title don't change as expected, but on the console - useEffect is called again and so is the assignment to windows.document.title, eventhough I'm just setting it to what it's already set to - No Change! Next, lecture, I will optimise this redundant assignment to prevent this using the useEffect dependency array.

I have tested and found a '$' sign on the counter which is not what I expected. Although, the app works, I'm seeing an 404 error in the console that is pointing to line: 1. I've checked my code and I don't see a problem with my code.

6 - Optimising Performance with the useEffect Dependency Array:

I have fixed the '$' issue by deleting the '$' within the span element that output the counter value that is inside the onMouseOver attribute.
I have also fixed the 404 error issue. I accidently wrapped the GIF and its comment in double double quotes. I have deleted the comment as its not needed.

The speaker ID and the browser title is working as expected from the user's perspective, that is mousing in and out of the same speaker did not show an update to the browser window title. But in the console/under the covers, my app was calling windows.document.title over and over with the same value. Add a dependency array as the second parameter to the useEffect will fix this issue: }, [currentSpeakerId]);
Now, onMouseOver is called over and over as I expect, but useEffect is not called at all as the current speaker ID did not change. Mousing over the second peaker, that does cause useEffect to be as the speaker ID changes and the browser title window changes also as expected. This is the optimisation done. So the dependency array has allowed us to keep useEffect from being called when it wasn't necessary.

The reason for the mouse counter on the page is to force React to rerender the component and then the dependency array in useEffect help us keep the browser title from being set to the same thing multiple times. Typically, on React page, there is more than one state value changing, so it's not unrealistic to have a scenario like this.

7 - Take Aways:

1. useState lets us track state easily.
2. useEffect gives us a clean way to set things, typically state, when component start and finish.
3. useRef gives us the control we need to get to DOM elements when other means are not so straightforward.

Next module will develop a conference website with a signup field that includes email validation, and configuring a global option for whether or not to show it. Learn how to use the useReducer hook. React Hooks simple rules.