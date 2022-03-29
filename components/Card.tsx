import styles from '../styles/card.module.css'
interface CartaoProps {
    bgColor?: string
    children?:any
  }
export default function Card(props:CartaoProps){
    return(
        <div className={styles.card}
            style={{backgroundColor:props.bgColor ?? "#fff"}}
        >
            {props.children}
        </div>
    )
}