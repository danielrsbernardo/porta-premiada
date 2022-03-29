
import Card from '../components/Card'
import styles from '../styles/formulario.module.css'
import Link from 'next/link'
import Entradanumerica from '../components/EntradaNumerica'
import { useState } from 'react'

export default function Formulario() {
  const [qtdePortas, setQtdePortas]= useState(3)
  const [comPresente, setComPresente]= useState(1)

  return (
    <div className={styles.formulario}>
      <div>
        <Card bgColor="#c0392c"><h1>Monty Hall</h1></Card>
        <Card>
          <Entradanumerica text="Quantidade de Portas" value={qtdePortas} onChange={novaQtde=>setQtdePortas(novaQtde)}/>
        </Card>
      </div>
      <div>
        <Card>
          <Entradanumerica text={"Porta com Presente"}value={comPresente} onChange={novaPortaComPresente=>setComPresente(novaPortaComPresente)}/>

        </Card>
        <Card bgColor="#28a085">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`} passHref>
            <h2 className={styles.link} style={{flex:"1",margin:"0"}}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
