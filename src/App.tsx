import {useEffect, useState} from 'react'; 
import './css/App.css';
import contents from "./data/contents"
import ItemList from "./components/ItemList"
import Topic from "./components/Topic"
import {Button, Input, makeStyles} from "@fluentui/react-components";
import internal from 'stream';

type CATEGORY =  'github' | 'youtube' | 'other';

interface Content {
  title: string,
  link: string,
  type: CATEGORY,
  topics: string[],
  description: string
}

const useStyles = makeStyles({
  topicHeader: {
    color: "blue",
    fontSize: "1.2rem"
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
    setfilteredItem(
      items.filter((item) =>
        //item.topics.toLowerCase().includes(search.toLocaleLowerCase()))
        //item.topics.every(el => topics.includes(el)))
        topics.every(el => item.topics.includes(el)))
    )
  }, [topics, items]);



  function filterFunc(topic:string){
    console.log("filterFunc");
    console.log(topic, "was clicked.");
    setTopics([...topics, topic]);
  }

  function resetStates(){
    setSearch("");
    setTopics([]);
    setfilteredItem(data);
  }
  
  const handleChange = (event:any) => {
    setSearch(event.target.value);
  };

  const TopicDetail = (props:{topic: string}) => {
    const topic = props.topic
    return (
      <button onClick={()=> setTopics([...topics, topic])}>
        <a>{topic}</a>
      </button>
  
    )
  }

  function highlightText(text:string, search:string) {
    return (
      <span style={{backgroundColor: 'yellow'}}>
        {text}
      </span>
    )
  }

  const ItemDetail = (props:Content) => {
    const {title, link, type, topics, description} = props;
    return (
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        {/* <p>{highlightText(description, search)}</p>   */}
        <p>{topics}</p>
      </div>
  
    )
  }

  return (
    <div className="App">
      <div className="title">
        <h1> Machine Learning Collection </h1>
      </div>
      <div className="search">
        {/* <input value={search} type="text" placeholder='Search...' onChange={handleChange} /> */}
        <Input value={search} type="text" placeholder='Search ...' onChange={handleChange}></Input>
      </div>
      <div className="topicFilter">
        {/* {allTopics.map((topic, idx) => (
          <TopicDetail key={idx} topic={topic} />
        ))}
        <h3>selected topics</h3>
          {topics} */}
        <div className="topicFilterHeader">
          <h4>topic</h4>
          <Button onClick={() => resetStates()} appearance="transparent" className={styles.topicHeader}>Reset</Button>
        </div>
        <Topic selectedTopics={topics} allTopics={allTopics} filterFunc={filterFunc}></Topic>
      </div>
      <div className="items">
      {/* {filteredItem.map((item, idx) => (
        <ItemDetail key={idx} {...item} />
      ))} */}
      <ItemList items={filteredItem}></ItemList>
      </div>
    </div>
  )
}


export default App;

