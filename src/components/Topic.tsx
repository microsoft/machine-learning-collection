import React from 'react'
import {Button, makeStyles} from "@fluentui/react-components";
import internal from 'stream';

interface ButtonProps{
    selectedTopics: Array<string>
    allTopics: Array<string>
    filterFunc: Function
}

const useStyles = makeStyles({
    buttons: {
        marginLeft: '2rem',
        marginRight: '2rem',
        marginBottom: '1rem',
    },
    button: {
        marginInline: '0.1rem',
        marginBlock: '0.1rem'
    },
    buttonSelected: {
        marginInline: '0.05rem',
        backgroundColor: '#0078d4',
        color: "white",
        ':hover': { color: 'white', backgroundColor: '#0078d4'},
    },
    });


const Topic: React.FunctionComponent<ButtonProps> = (props) =>{
    const styles = useStyles();
    console.log(props);
    return (
        <div className={styles.buttons}>
            {props.allTopics.map((topic, i) =>{
                return <Button onClick={()=> props.filterFunc(topic)} shape="circular" className={props.selectedTopics.includes(topic) ? `${styles.buttonSelected}` : `${styles.button}`} key={i}>{topic}</Button>
            })}
        </div>
    )

}


// const Topic: React.FunctionComponent<ButtonProps> = (selectedTopic, topiclist) =>{
//     const styles = useStyles();
//     console.log(selectedTopic);
//     return (
//         <div className={styles.buttons}>
//             {
//                 topiclist.map((cat:string, i:number)=>{
//                     if (selectedTopic.includes(cat)){
//                         return <Button shape="circular"  className={styles.buttonSelected} key={cat}>{cat}</Button>
//                     } else {
//                         return <Button shape="circular"  className={styles.button} key={cat}>{cat}</Button>
//                     }
                    
//                 })
//             }
//         </div>
//     )

// }

export default Topic;
