import React from 'react'

interface ButtonProps{
    topic: Array<string>
    topicFilter:Function
}

const Button: React.FunctionComponent<ButtonProps> = ({topic, topicFilter}) =>{
    return (
        <div className="buttons">
            {
                topic.map((cat, i)=>{
                    return <button type="button" onClick={()=> topicFilter(cat)} className="btn" key={i}>{cat}</button>
                })
            }
        </div>
    )

}

export default Button;
