import { embaralhar } from "@/functions/array";
import questoes from "../bancoDeQuestoes";

export default function questinario(req: any, res: any){
    const ids = questoes.map( questao => questao.id)
    res.status(200).json(embaralhar(ids))
}