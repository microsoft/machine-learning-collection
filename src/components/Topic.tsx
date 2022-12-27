import React from 'react'
import {Button, makeStyles} from "@fluentui/react-components";

interface ButtonProps{
    topic: Array<string>
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
        color: 'white'
    },
    });

const Topic: React.FunctionComponent<ButtonProps> = ({topic, topicFilter, disabled, checked}) =>{
    const styles = useStyles();
    return (
        <div className="buttons">
            {
                topic.map((cat, i)=>{
                    return <Button shape="circular" className={styles.buttonSelected} key={i}>{cat}</Button>
                })
            }
        </div>
    )

}

export default Topic;
