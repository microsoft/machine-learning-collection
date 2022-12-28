import {useState} from 'react'; 
import './css/App.css';
import items from "./data/contents.js"
import ItemList from "./components/ItemList"
import Topic from "./components/Topic"

function App() {
  const allTopics = [...new Set([...items.map((item) => item.topics)].flat())];
  console.log("topics are:", allTopics)
  
  const topicMaps = new Map<string, boolean>();
  
  allTopics.map((topic) => {
    topicMaps.set(topic, false);
  })
  
  const initTopicMaps = new Map(topicMaps);
  const [Item, setItem] = useState(items);
  const [maps, setMaps] = useState(topicMaps);

  
  const topicFilter = (button:string) => {
    const filteredData = Item.filter((item) => item.topics.includes(button));
    setItem(filteredData);
    maps.get(button) ? setMaps(maps.set(button, false)) : setMaps(maps.set(button, true));
  };

  function initState():void {
    console.log("reset")
    setMaps(initTopicMaps);
    setItem(items);
    console.log(topicMaps);

  }

  return (
    <div className="App">
      <div className="title">
        <h1>Machine Learning Collection</h1>
      </div>
      <h2>Topics</h2>
      <button onClick={() => initState()}>Reset</button>
      <Topic map={maps} topiclist={allTopics} topicFilter={topicFilter} />
      <ItemList items={Item} />
      <footer className="footer">
      <span>Copyright &copy; Microsoft Corporation</span>
        <address style={{ marginLeft: "auto", marginRight: "1em", marginBottom: "0px", display: "inline-block", fontStyle: "normal" }}>     
            <a href="https://github.com/microsoft/machine-learning-collection">GitHub</a>
            &nbsp;&nbsp;
            <a href="https://github.com/microsoft/machine-learning-collection/issues">Contact us</a>
        </address>
      </footer>
    </div>
  );
}

export default App;
