import React from 'react'
import {makeStyles} from "@fluentui/react-components"
import {Card} from '@fluentui/react-components/unstable'

export type ContentItem = {
    title: string;
    link: string;
    type: string;
    topics: Array<string>;
    description: string;
}



interface ContentListProps{
    items: Array<ContentItem>
}

const useStyles = makeStyles({
    card: {
        width: '480px',
        maxWidth: '100%',
        height: 'fit-content'
    },
    });

const ItemList: React.FunctionComponent<ContentListProps> = ({items}) =>{
    return (
        <div className="items">
            {items.map((item) => {
                const onClick = () => {
                    window.open(item.link, "_blank")
                }
                return <Card onClick={onClick}>
                        <h2>{item.title}</h2>
                        {item.description}
                       </Card>
            })
            }
            
        </div>
    )

}

export default ItemList;