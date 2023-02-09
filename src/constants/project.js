import ToDoListImage from "../media/To_Do_List.png";
import calculator from "../media/calculator.jpeg";
import Weather from "../media/weather.jpeg";
import blogsite from "../media/blogsite.jpeg"
import chatroom from "../media/chatroom.jpeg"
import tracker from "../media/tracker.png"


export const projects = [
  {
    title: "Todo List",
    description:
      "Basic CRUD application using Postgres Database",
    image: ToDoListImage,
    tags: ["JavaScript", "React", "CSS", "Postgres"],
    source: "https://github.com/AHarikaran/ToDoList",
    liveVersion: "",
    id: 0,
  },
  {
    title: "Calculator",
    description:
      "A simple Calulator with basic mathematical function. Future Improvements: add more complex mathematical operations, improve the design of app",
    image: calculator,
    tags: ["React", "JavaScript", "CSS"],
    source: "https://github.com/AHarikaran/calculator",
    liveVersion: "",
    id: 1,
  },
  {
    title: "Weather App",
    description:
      "Initial exposure to utilising API Endpoints with in-built fetch functionality.",
    image: Weather,
    tags: ["React", "JavaScript", "CSS", "API"],
    source: "https://github.com/AHarikaran/weatherapi",
    liveVersion: "",
    id: 2,
  },
  {
    title: "Blogsite",
    description:
      `Simple blogsite using GraphQL to fetch API data from site. 
      `,
    image: blogsite,
    tags: ["NEXT.js", "JavaScript", "GraphQL"],
    source: "https://github.com/AHarikaran/blogsite",
    liveVersion: "",
    id: 3,
  },
  {
    title: "ChatRoom",
    description:
      `Project to better understand Typescript, sockets, events and Node.js. Unfinished due to issue with destructuring "messages" object for other users in room to receive - under investigation.`,
    image: chatroom,
    tags: ["NEXT.js", "Node.js", "Typescript", "socket.io", "express"],
    source: "https://github.com/AHarikaran/ChatRoomApp",
    liveVersion: "",
    id: 4,
  },
  {
    title: "Weight Tracker App",
    description:
      `Weight Tracker App with external authtentication per user/sign up option. Using as a foundation to build a more robust fitness planner website. `,
    image: tracker,
    tags: ["React", "docker", "postgres", "hapi"],
    source: "https://github.com/AHarikaran/Tracker",
    liveVersion: "",
    id: 5,
  },

];
