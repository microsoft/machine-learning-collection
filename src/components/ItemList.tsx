import React from 'react'
import {makeStyles} from "@fluentui/react-components"
import {Card, CardHeader, CardPreview} from '@fluentui/react-components/unstable'
import GitHubIcon from '../images/github-logo.svg'

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
        verticalAlign: "top",
        textAlign: "left"
    },
    header: {
        display:"flex",
        height: "30%",
        verticalAlign: "middle"
    },
    headerImage: {
        height: "30%",
        maxWidth: '2rem',
        maxHeight: '2rem',
    },
    headerTitle: {
        height: "30%",
        textAlign: "left",
    }
    });

const ItemList: React.FunctionComponent<ContentListProps> = ({items}) =>{
    const styles = useStyles();
    return (
        <div className="items">
            {items.map((item) => {
                const onClick = () => {
                    window.open(item.link, "_blank")
                }
                return <Card onClick={onClick} className={styles.card} key={item.title}>
                        <CardHeader image={<img src={GitHubIcon} className={styles.headerImage}/>} header={<h3 className={styles.headerTitle}>{item.title}</h3>} className={styles.header}></CardHeader>
                        {item.description}
                       </Card>
            })
            }
            
        </div>
    )

}

export default ItemList;