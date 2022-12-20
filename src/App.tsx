import {useState} from 'react';
import './App.css';
import items from "./data/contents.js"
import ItemList from "./components/ItemList"
import Topic from "./components/Topic"
const allTopics = [...new Set(["All Topics", ...items.map((item) => item.topics)].flat())];

console.log(allTopics)

function App() {
  const [Item, setItem] = useState(items);
  const [topics, setTopics] = useState(allTopics);

  const topicFilter = (button:string) => {
    if (button === "All Topics") {
      setItem(items);
      return;
    }
    const filteredData = Item.filter((item) => item.topics.includes(button));
    setItem(filteredData);
    console.log(button);
    console.log(filteredData);

    const updatedTopics = topics.filter((item) => (item.match(button))==null);
    setTopics(updatedTopics)
    console.log(updatedTopics)
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
