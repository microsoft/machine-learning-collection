import React from 'react'
// import {makeStyles} from "@fluentui/react-components"
import {Card, CardHeader, CardPreview} from '@fluentui/react-components/unstable'
import GitHubIcon from '../images/github-logo.svg'
import {Open24Filled} from "@fluentui/react-icons"
import {Button, makeStyles} from "@fluentui/react-components";

type CATEGORY =  'github' | 'youtube' | 'other';

interface Content {
    title: string,
    link: string,
    type: CATEGORY,
    topics: string[],
    description: string
  }

interface ContentListProps{
    items: Array<Content>
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

        
    },
    headerOpen: {
        alignContent: "right",
        height: "0.8rem",
        width: "0.8rem",
        color: "grey",
    }
    });

function highlightText(text:string, search:string) {
    return (
        <span style={{backgroundColor: 'yellow'}}>
        {text}
        </span>
    )
    }

const ItemList: React.FunctionComponent<ContentListProps> = (props) =>{
    const styles = useStyles();
    const items = props.items;
    return (
        <div className="items">
            {items.map((item) => {
                const onClick = () => {
                    window.open(item.link, "_blank")
                }
                return <Card className={styles.verticalCard} key={item.title}>
                        <CardHeader onClick={onClick} image={<img src={GitHubIcon} className={styles.headerImage}/>} header={<h3 className={styles.headerTitle}>{item.title}</h3>} action={<Button appearance="transparent" icon={<Open24Filled className={styles.headerOpen}/>} aria-label="go to website" />} className={styles.header}></CardHeader>
                        {highlightText(`${item.description}`, "")}
                        
                       </Card>
            })
            }
            
        </div>
    )

}


export default ItemList;