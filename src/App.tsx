import {useEffect, useState} from 'react'; 
import './css/App.css';
import contents from "./data/contents"
import ItemList from "./components/ItemList"
import TopicList from "./components/TopicList"
import {Button, Input, RadioGroupOnChangeData, RadioGroup, Radio, makeStyles, Text} from "@fluentui/react-components";


type CATEGORY =  'github' | 'youtube' | 'other';
type toggle = 'AND' | 'OR'

interface Content {
  title: string,
  link: string,
  type: CATEGORY,
  topics: string[],
  description: string
}

const useStyles = makeStyles({
  topicText: {
    fontSize: "1.2rem",
    flexGrow: "1"
  },
  topicReset: {
    color: "blue",
    fontSize: "1.2rem",
  },
  topicSpacer: {
    flexGrow: "1",
  },
  topicToggle: {
    display: "flex",
    justifyContent: "flex-end",
  }
})

function App() {
  const data:Content[] = contents;
  console.log(data);

  const allTopics = [...new Set([...contents.map((item) => item.topics)].flat())];
  console.log("topics are:", allTopics)

  //style for fluent ui
  const styles = useStyles();

  //state
  const [items, setItems] = useState<Content[]>(data);
  const [search, setSearch] = useState("");
  const [topics, setTopics] = useState<string[]>([]);
  const [filteredItem, setfilteredItem] = useState<Content[]>(data);
  const [topicToggle, setTopicToggle] = useState("AND");

  console.log("Items are:", items);

  useEffect(() => {
    console.log("useEffect for search:", topics);
    setfilteredItem(
      items.filter((item) =>
        item.description.toLowerCase().includes(search.toLocaleLowerCase()))
    )

  }, [search, items]);
  

  useEffect(() => {
    console.log("useEffect for topics:", topics);
    console.log(topicToggle);
    setfilteredItem(
      items.filter((item) =>
        {if (topics.length==0) {
          console.log("topics length is zero");
          return item;
        } else if (topicToggle==="AND"){
          console.log(topicToggle);
          console.log("debug for", topics, topics.every(el => item.topics.includes(el)));
          return topics.every(el => item.topics.includes(el));
        } else {
          console.log(topicToggle);
          return topics.some(el => item.topics.includes(el));
        }}
      ))
  }, [topics, items]);



  function filterFunc(topic:string){
    console.log("filterFunc");
    console.log(topic, "was clicked.");
    if (topics.includes(topic)) {
      setTopics(topics.filter(n => n!==topic))
    } else {
      setTopics([...topics, topic]);
    }
  }

  function resetStates(){
    setSearch("");
    setTopics([]);
    setfilteredItem(data);
  }
  
  const handleChange = (event:any) => {
    setSearch(event.target.value);
  };

  const toggleHandleChange = (data:RadioGroupOnChangeData) => {
    setTopicToggle(data.value);
  };

  const Toggle = () =>{
    const styles = useStyles();
    return (
    <div className={styles.topicToggle}>
      <RadioGroup value={topicToggle} layout="horizontal" onChange={(e, data) => toggleHandleChange(data)}>
        <Radio value="AND" label="AND" />
        <Radio value="OR" label="OR"  />
      </RadioGroup>
    </div>
    )
  }

  return (
    <div className="App">
      <div className="title">
        <h1> Machine Learning Collection </h1>
      </div>
      <div className="search">
        <Input value={search} type="text" placeholder='Search ...' onChange={handleChange} className="box"></Input>
      </div>
      <div className="topicFilter">
        <div className="topicFilterHeader">
          <div className={styles.topicText}>
          <Text weight="bold">topics</Text>
          <Button onClick={() => resetStates()} appearance="transparent" className={styles.topicReset}>Reset</Button>
          </div>
          <div className={styles.topicSpacer}></div>
          <Toggle></Toggle>
        </div>
        <TopicList selectedTopics={topics} allTopics={allTopics} filterFunc={filterFunc}></TopicList>
      </div>
      <div className="items">
      <ItemList items={filteredItem}></ItemList>
      </div>
    </div>
  )
}


export default App;

