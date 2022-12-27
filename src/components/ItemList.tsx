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
        width: '480px',
        maxWidth: '100%',
        height: 'fit-content'
    },
    header: {
        height: "30%"
    },
    headerImage: {
        maxWidth: '2rem',
        maxHeight: '2rem'
    },
    headerTitle: {
        textAlign: "left"
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
                return <Card onClick={onClick}>
                        <CardHeader image={<img src={GitHubIcon} className={styles.headerImage}/>} header={<h3 className={styles.headerTitle}>{item.title}</h3>} className={styles.header}></CardHeader>
                        {item.description}
                       </Card>
            })
            }
            
        </div>
    )

}

export default ItemList;