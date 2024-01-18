import styles from '../styles/Questionario.module.css'
import QuestaoModel from "@/model/questao"
import Questao from './Questao'
import Botao from './Botao'


interface QuestionarioProps{
    questao: QuestaoModel
    ultima: boolean
    QuestaoRespondida: (questao: QuestaoModel) => void
    irParaProximoPasso: () => void
}


export default function Questionario(props: QuestionarioProps){
    
    function respostaFornecida(indice: number){
        if(props.questao.naoRespondida){
            props.QuestaoRespondida(props.questao.responderCom(indice))
        }
    }
    
    return( 
        <div className={styles.questionario}>
            <Questao
                valor={props.questao}
                tempoParaResposta={6}
                respotaFornecida={respostaFornecida}
                tempoEsgotado={props.irParaProximoPasso}  
            />

            <Botao
                onClick={props.irParaProximoPasso}
                texto={props.ultima ? 'Finalizar' : 'Próxima'}
            
            />
        </div>
    )
}