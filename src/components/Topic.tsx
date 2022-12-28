import React from 'react'
import {Button, makeStyles} from "@fluentui/react-components";

interface ButtonProps{
    map: Map<string, boolean>
    topiclist: Array<string>
    topicFilter:Function
    disabled?: boolean;
    checked?: boolean;
}

const useStyles = makeStyles({
    button: {
        marginInline: '0.05rem',
    },
    buttonSelected: {
        marginInline: '0.05rem',
        backgroundColor: '#0078d4',
        color: "white"
    },
    });

const Topic: React.FunctionComponent<ButtonProps> = ({map, topiclist, topicFilter, disabled, checked}) =>{
    const styles = useStyles();
    return (
        <div className="buttons">
            {
                topiclist.map((cat, i)=>{
                    if (map.get(cat) == true) {
                        return <Button shape="circular" onClick={()=> topicFilter(cat)} className={styles.buttonSelected} key={cat}>{cat}</Button>
                    } else {
                        return <Button shape="circular" onClick={()=> topicFilter(cat)}  key={cat}>{cat}</Button>
                    }
                    
                })
            }
        </div>
    )

}

export default Topic;
