import React from 'react'

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
const ItemList: React.FunctionComponent<ContentListProps> = ({items}) =>{
    return (
        <div className="item">
            {items.map((item) => {
                return <div className="item" key={item.title}>
                        <h2>{item.title}</h2>
                        {item.description}
                       </div>
            })
            }
        </div>
    )

}

export default ItemList;