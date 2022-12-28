import {useState} from 'react'; 
import './css/App.css';
import items from "./data/contents.js"
import ItemList from "./components/ItemList"
import Topic from "./components/Topic"
import {Button, makeStyles} from "@fluentui/react-components";

const allTopics = [...new Set([...items.map((item) => item.topics)].flat())];
console.log("topics are:", allTopics)

const useStyles = makeStyles({
  topicHeader: {
    color: "blue",
    fontSize: "1.2rem"
  }
})

function App() {
  const styles = useStyles();
  const topicMaps = new Map<string, boolean>();
  
  allTopics.map((topic) => {
    topicMaps.set(topic, false);
  })
   
  const initTopicMaps = new Map(topicMaps);
  const [Item, setItem] = useState(items);
  const [maps, setMaps] = useState(topicMaps);
  const [selectedTopic, setSelectedTopic] = useState(Array<string>())

  const topicFilter = (button:string) => {
    console.log(button, selectedTopic)
    if (selectedTopic.includes(button)) {
      console.log("### delete existing ###")
      const newSelectedTopic = selectedTopic.filter(n => n !== button)
      console.log("newSelectedTopic", newSelectedTopic)
      setSelectedTopic(newSelectedTopic);
      if (newSelectedTopic.length ==0) {
        const filteredData = items
        console.log("filteredData...(delete, length==0)", filteredData);
        setItem(filteredData);
      } else {
        const filteredData = Item.filter((item) => newSelectedTopic.every(el => item.topics.includes(el)));
        console.log("filteredData...(delete)", filteredData);
        setItem(filteredData);
      }
    } else {
      console.log("### add new topic ###");
      const newSelectedTopic = [...selectedTopic, button]
      setSelectedTopic([...selectedTopic, button]);
      console.log("isAllInclude for ", newSelectedTopic);
      const filteredData = Item.filter((item) => newSelectedTopic.every(el => item.topics.includes(el)));
      console.log("filteredData...(add)", filteredData);
      setItem(filteredData);
    };

  };

  function initState():void {
    console.log("reset")
    setMaps(initTopicMaps);
    setItem(items);
    setSelectedTopic(Array<string>());

  }

  return (
    <div className="App">
      <div className="title">
        <h1>Machine Learning Collection</h1>
      </div>
      <div className="topic-filter-header">
        <h4>Topics</h4>
        <Button onClick={() => initState()} appearance="transparent" className={styles.topicHeader}>Reset</Button>
      </div>
      <Topic map={maps} selectedTopic={selectedTopic} topiclist={allTopics} topicFilter={topicFilter}/>
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
