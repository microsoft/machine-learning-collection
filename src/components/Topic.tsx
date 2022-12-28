import React from 'react'
import {Button, makeStyles} from "@fluentui/react-components";

interface ButtonProps{
    map: Map<string, boolean>
    selectedTopic: Array<string>
    topiclist: Array<string>
    topicFilter:Function
    disabled?: boolean;
    checked?: boolean;
}

const useStyles = makeStyles({
    buttons: {
        marginLeft: '2rem',
        marginRight: '2rem',
        marginBottom: '1rem',
    },
    button: {
        marginInline: '0.1rem',
    },
    buttonSelected: {
        marginInline: '0.05rem',
        backgroundColor: '#0078d4',
        color: "white",
        ':hover': { color: 'white', backgroundColor: '#0078d4'},
    },
    });

const Topic: React.FunctionComponent<ButtonProps> = ({map, selectedTopic, topiclist, topicFilter, disabled, checked}) =>{
    const styles = useStyles();
    console.log(selectedTopic);
    return (
        <div className={styles.buttons}>
            {
                topiclist.map((cat, i)=>{
                    if (selectedTopic.includes(cat)){
                        return <Button shape="circular" onClick={()=> topicFilter(cat)} className={styles.buttonSelected} key={cat}>{cat}</Button>
                    } else {
                        return <Button shape="circular" onClick={()=> topicFilter(cat)} className={styles.button} key={cat}>{cat}</Button>
                    }
                    
                })
            }
        </div>
    )

}

export default Topic;
