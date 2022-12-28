import React from 'react'
// import {makeStyles} from "@fluentui/react-components"
import {Card, CardHeader, CardPreview} from '@fluentui/react-components/unstable'
import GitHubIcon from '../images/github-logo.svg'
import {Open24Filled} from "@fluentui/react-icons"
import {Button, makeStyles} from "@fluentui/react-components";

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
    verticalCard: {
        textAlign: "left",
        maxWidth: "100%"
    },
    container: {
    },
    header: {
        display: "grid",
        gridTemplateColumns: "0.5fr 9fr 1fr",
        gridTemplateRows: "5rem",
        rowGap: "0rem",
        overflowY: "scroll",
    },
    headerImage: {
        maxWidth: '1rem',
        maxHeight: '1rem',
    },
    headerTitle: {
        fontSize: "1rem",

        textOverflow: "ellipsis",
    },
    headerOpen: {
        alignContent: "right",
        height: "0.8rem",
        width: "0.8rem",
        color: "grey",
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
                return <Card className={styles.verticalCard} key={item.title}>
                        {/* <CardHeader onClick={onClick} image={<img src={GitHubIcon} className={styles.headerImage}/>} header={<h3 className={styles.headerTitle}>{item.title}</h3>} action={<Open24Filled className={styles.headerOpen}/>} className={styles.header}></CardHeader> */}
                        <CardHeader onClick={onClick} image={<img src={GitHubIcon} className={styles.headerImage}/>} header={<h3 className={styles.headerTitle}>{item.title}</h3>} action={<Button appearance="transparent" icon={<Open24Filled className={styles.headerOpen}/>} aria-label="go to website" />} className={styles.header}></CardHeader>
                        {item.description}
                        
                       </Card>
            })
            }
            
        </div>
    )

}

export default ItemList;