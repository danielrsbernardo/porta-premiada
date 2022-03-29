import styles from '../styles/entradanumerica.module.css'
interface EntradaNumericaProps {
    text: string
    value: number
    onChange: (newValue: number) => void
}
export default function Entradanumerica(props:EntradaNumericaProps) {
    const dec = () => props.onChange(props.value - 1)
    const inc = () => props.onChange(props.value + 1)
    return (
        <div className={styles.entradanumerica}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.botoes}>
                <div className={styles.btn} onClick={dec}>-</div>
                <div className={styles.btn} onClick={inc}>+</div>
            </div>
        </div>
    )
}