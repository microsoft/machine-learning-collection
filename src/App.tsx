import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import items from "./data/contents.js"
import ItemList from "./components/ItemList"
import Topic from "./components/Topic"
const allTopics = ["All Topics", ...new Set(items.map((item) => item.topics))].flat();

console.log(allTopics)

function App() {
  const [Item, setItem] = useState(items);
  const [topics, setTopics] = useState(allTopics);
  const [count, setCount] = useState(0);

  const topicFilter = (button:string) => {
    if (button === "All Topics") {
      setItem(items);
      return;
    }
    const filteredData = Item.filter((item) => item.topics.includes(button));
    setItem(filteredData);
    console.log(button);
    console.log(filteredData);
  };

  return (
    <div className="App">
      <div className="title">
        <h1>Machine Learning Collection</h1>
      </div>
      <Topic topic={topics} topicFilter={topicFilter} />
      <ItemList items={Item} />

    </div>
  );
}

export default App;
