### **React Fundamentals: User Dashboard Assignment**

**Overview**

In this assignment, you will build a dynamic single-page application (SPA) using React. The application will be a "User Dashboard" that fetches a list of users from a mock API. When a user is selected, the application will display their profile information, a list of their recent posts, and a live weather widget for their city.

This project is designed to give you hands-on experience with the core concepts of modern React development.

**Learning Objectives**

Upon successful completion of this assignment, you will be able to:

*   Create and use functional components with JSX syntax.
*   Manage component state using the `useState` Hook.
*   Handle side effects like API calls using the `useEffect` Hook.
*   Pass data from parent to child components using **props**.
*   Pass both simple (strings, numbers) and complex (objects, arrays) props.
*   Destructure props for cleaner and more readable code.
*   Implement **conditional rendering** to show or hide UI elements.
*   Handle user events (e.g., clicks) with event handlers.
*   Render lists of data dynamically using the JavaScript `.map()` function.
*   Interact with external APIs (`jsonplaceholder` and `OpenWeatherMap`).

---

### **Part 1: Environment Setup (StackBlitz)**

We will use StackBlitz, an online IDE, so you don't need to install anything on your local machine.

1.  **Create a New Project:** Go to [stackblitz.com](https://stackblitz.com) and click on **"Start a new project"**. Choose the **"React (JavaScript)"** template.

2.  **Name Your Project:** Give your project a descriptive name, like `react-user-dashboard`.

3.  **Install Axios:** In the terminal at the bottom of the StackBlitz window (or by clicking the "Terminal" button), install the `axios` library for making API requests:
    ```bash
    npm install axios
    ```
4.  **Set Up Your API Key:**
    *   Sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api).
    *   In the StackBlitz file tree on the left, find the `.env` file. If it doesn't exist, create it.
    *   Add your API key to the `.env` file like this. **The variable name MUST start with `REACT_APP_`**.
        ```
        REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
        ```
    *   Restart the dev server by clicking the "Refresh" button in the top-right of the browser preview pane.

---

### **Part 2: Assignment Requirements**

Follow these steps to build your application.

1.  **Project Structure:** Inside the `src/` folder, create a new folder named `components`. Your final structure will look like this:
    ```
    src/
    ├── components/
    │   ├── UserList.js
    │   ├── UserProfile.js
    │   ├── PostList.js
    │   └── WeatherWidget.js
    ├── App.css
    ├── App.js
    └── index.js
    ```

2.  **Core Components:** Create the following JavaScript files inside your `src/components/` folder. You will be provided with the starter code for each.

3.  **`App.js` (Main Component):**
    *   This component will be the main container for your application.
    *   It must hold the state for the list of all users and the currently selected user.
    *   It must fetch the list of users from `https://jsonplaceholder.typicode.com/users` when it first loads.
    *   It must define a function to handle user selection.
    *   It must conditionally render the `UserProfile` component only *after* a user has been selected.

4.  **`UserList.js` Component:**
    *   This component receives the `users` array and the `onUserSelect` handler function as props.
    *   It must use the `.map()` function to render a list item (`<li>`) for each user.
    *   Each list item should display the user's name.
    *   Clicking a list item should call the `onUserSelect` function with the corresponding user object.

5.  **`UserProfile.js` Component:**
    *   This component receives the `selectedUser` object as a prop.
    *   It must display the user's name, email, phone, website, and address.
    *   It must render two child components: `WeatherWidget` and `PostList`.
    *   It must pass the user's `city` to the `WeatherWidget` and the user's `id` to the `PostList` as props.

6.  **`WeatherWidget.js` Component:**
    *   This component receives a `city` name as a prop.
    *   It must fetch weather data from the OpenWeatherMap API using the provided city.
    *   It must display the current temperature and weather conditions.
    *   It should handle loading and error states gracefully.

7.  **`PostList.js` Component:**
    *   This component receives a `userId` as a prop.
    *   It must fetch posts for that specific user from `https://jsonplaceholder.typicode.com/posts?userId=THE_USER_ID`.
    *   It must use the `.map()` function to display the titles and bodies of the posts.
    *   It should handle loading states.

8.  **Styling:** Copy the provided CSS into `src/App.css` to give your dashboard a clean layout.
