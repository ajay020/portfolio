
import calculator from "./images/calculator.png";
import todo from "./images/todo.png";
import blog from "./images/blog.png";
import moodtracker from "./images/moodtracker.png";
import ecommarce from "./images/ecommarce.png";
import expenseTracker from "./images/expense_tracker2.png";


export const porjects = [
    {
      title: "Blog App",
      image: blog,
      webLink: "https://blogappajay.herokuapp.com/",
      description:`
                    Blog app is a fullstack webapp. For backend I used Nodejs and Mongodb.
                    In this app We can create a post, delete, and update. 
                    Technologies used: Reactjs, Redux, HTML, CSS, Bootstrap, Express, Mongodb
                    `
    },
    {
        title: "Expense Tracker App",
        image: expenseTracker,
        webLink: "https://62c3fd5335671334f23fedf9--expense-tracker-ajay020.netlify.app/",
        description:`
                      In this app, you can track your daily expenses, and can analyze your expenses by 
                      daily, monthly, or yearly basis.
                      Technologies used: Reactjs, HTML, CSS.
                      `
      },
    {
      title: "Moodtracker App",
      image: moodtracker,
      webLink: "https://moodtracker-ajay.netlify.app/",
      description: `
                In this app a user can track their mood and emotions.
                Technologies used: Reactjs,Redux, HTML, CSS
        `
    },
  
    {
      title: "Ecommarce Store",
      image: ecommarce,
      webLink: "https://625533d7d11dd71da617876f--e-commarce-store.netlify.app/",
      description: `
                It's an e-store app. A user can select, filter, and add a product to the cart. 
                I have used a fake API to populate products list. This API fetches product data
                from web server.
                Technologies used: Reactjs, HTML, CSS
      `
    },
    {
      title: "Calculator App",
      image: calculator,
      webLink: "https://ajay020.github.io/calculator-app",
      description :`
        Calculator app can calcualte normal calculations.
        Technologies used: Reactjs, HTML, CSS
      `
    },
    {
      title: "Todo App",
      image: todo,
      webLink: "https://ajay020.github.io/todo-app",
      description : `
            In this app we can create a list of tasks. And a task can be updated and deleted.
            Technologies used: Reactjs,Redux, HTML, CSS
      `
    },
  ];

  export const skills = [
      "ReactJs", "Redux", "HTML", "CSS", "JavaScript", "NodeJs", "Express", "MongoDB"
  ]