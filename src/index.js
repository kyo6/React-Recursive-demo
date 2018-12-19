import React from "react";
import ReactDOM from "react-dom";
import Tree from "./components/Tree";
import "./styles.css";

const tree = {
  title: "American Government System",
  childNodes: [
    {
      title: "Legislative",
      childNodes: [
        {
          title: "Congress",
          childNodes: [{ title: "Agencies" }]
        }
      ]
    },
    {
      title: "Executive",
      childNodes: [
        {
          title: "President",
          childNodes: [
            { title: "Cabinet" },
            { title: "Exec Office Of The President" },
            { title: "Vice-president" },
            {
              title: "Independent Agencies",
              childNodes: [
                { title: "Agriculture" },
                { title: "Commerce" },
                { title: "Defense" },
                { title: "Education" },
                { title: "......" }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Judicial",
      childNodes: [
        {
          title: "Supreme Court",
          childNodes: [{ title: "Lower Courts" }]
        }
      ]
    }
  ]
};

function App() {
  return (
    <div className="App">
      <h3>
        It's <code>TreeNodes</code> all the way down which shows American
        Government System constructure
      </h3>
      <p>
        Edit the <code>tree</code> variable to change the tree
      </p>
      <Tree node={tree} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
