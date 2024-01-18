import Link from 'next/link'
import styles from '../styles/Botao.module.css'


interface BotaoProps{
    href?: string
    texto: string
    onClick?: (e: any) => void
}




export default function Botao(props: BotaoProps){

    function renderizarBotao(){
        return(
            <button className={styles.botao} onClick={props.onClick}>
                {props.texto}
            </button>
        )
    }

    return props.href? ( //com href?: link com botao
        <Link href={props.href}>
            <button className={styles.botao} onClick={props.onClick}>
                {props.texto}
            </button>
        </Link>
    ) : renderizarBotao() //sem href: somente o botao
}