import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/resposta";

const questoes: QuestaoModel[] = [
    
    new QuestaoModel(306, 'Qual Bicho Transite a Doença de Chagas?', [
        new RespostaModel('Abelha', false),
        new RespostaModel('Barata', false),
        new RespostaModel('Pulga', false),
        new RespostaModel('Barbeiro', true), //sem o método estático: funciona como abstração para trechos de código
    ]),

    new QuestaoModel(202, 'Qual é o fruto conhecido no Norte e Nordeste como "Jerimum"?', [
        RespostaModel.errada('Caju'),
        RespostaModel.errada('Cocô'),
        RespostaModel.errada('Chuchu'),
        RespostaModel.certa('Abóbora'),
    ]),
    
    new QuestaoModel(203, 'Qual é o coletivo de cães?', [
        RespostaModel.errada('Manada'),
        RespostaModel.errada('Alcateia'),
        RespostaModel.errada('Rebanho'),
        RespostaModel.certa('Matilha'),
    ]),
    
    new QuestaoModel(204, 'Qual é o Triângulo que tem todos os lados diferentes?', [
        RespostaModel.errada('Equilátero'),
        RespostaModel.errada('Isóceles'),
        RespostaModel.errada('Trapézio'),
        RespostaModel.certa('Escaleno'),
    ]),

   //outras novas questões a cadastrar

]

export default questoes