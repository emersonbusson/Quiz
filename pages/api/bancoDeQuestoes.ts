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
    new QuestaoModel(208, 'Qual foi o último Presidente do Período da ditadura militar do Brasil?', [
        RespostaModel.errada('Ernesto Geisel'),
        RespostaModel.errada('Costa e Silva'),
        RespostaModel.errada('Emílio Médici'),
        RespostaModel.certa('João Fiqueiredo'),
    ]),

    new QuestaoModel(210, 'Que nome se dá à purificação por meio da água?', [
        RespostaModel.errada('Ablução'),
        RespostaModel.errada('Abnegação'),
        RespostaModel.errada('Abrupção'),
        RespostaModel.certa('Abolição'),

    ]),
    
    new QuestaoModel(212, 'Que nome se dá à purificação por meio da água?', [
        RespostaModel.errada('Ablução'),
        RespostaModel.errada('Abnegação'),
        RespostaModel.errada('Abrupção'),
        RespostaModel.certa('Abolição'),

    ]),

    new QuestaoModel(215, 'Quem compôs o Hino da indepêndencia?', [
        RespostaModel.errada('Carlos Gomes'),
        RespostaModel.errada('Castro Alves'),
        RespostaModel.errada('Manuel Bandeira'),
        RespostaModel.certa('Dom Pedro I'),
    ]),
    
    new QuestaoModel(218, 'Em que país nasceu Carmen Miranda?', [
        RespostaModel.errada('Argentina'),
        RespostaModel.errada('Brasil'),
        RespostaModel.errada('Espanha'),
        RespostaModel.certa('Portugal'),
    ]),


   //outras novas questões a cadastrar

]

export default questoes