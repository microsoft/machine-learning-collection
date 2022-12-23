import React from 'react'
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';

interface ButtonProps{
    topic: Array<string>
    topicFilter:Function
    disabled?: boolean;
    checked?: boolean;
}

const Button: React.FunctionComponent<ButtonProps> = ({topic, topicFilter, disabled, checked}) =>{
    const flag: boolean = true
    return (
        <div className="buttons">
            {
                topic.map((cat, i)=>{
                    return <DefaultButton type="button" onClick={()=> topicFilter(cat)} className="button" checked={flag} key={i}>{cat}</DefaultButton>
                })
            }
        </div>
    )

}

export default Button;
