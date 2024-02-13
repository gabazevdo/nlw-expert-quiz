const perguntas = [
    {
        pergunta: "O que é um loop 'for' utilizado para fazer?",
        respostas: [
            "Executar uma ação repetidamente enquanto uma condição for verdadeira",
            "Executar uma ação um número específico de vezes",
            "Executar uma ação baseada em uma condição",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o objetivo principal do uso de funções em programação?",
        respostas: [
            "Dividir o código em partes menores e reutilizáveis",
            "Aumentar a complexidade do código",
            "Reduzir a legibilidade do código",
        ],
        correta: 0
    },
    {
        pergunta: "O que é uma variável na programação?",
        respostas: [
            "Um valor constante",
            "Um nome associado a um valor ou referência a um valor armazenado na memória",
            "Uma estrutura de controle de fluxo",
        ],
        correta: 1
    },
    {
        pergunta: "O que é o conceito de 'escopo' em programação?",
        respostas: [
            "A área de um programa onde você pode encontrar erros",
            "O processo de organização de arquivos de código-fonte",
            "O contexto em que as variáveis ​​e funções são definidas e acessíveis",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
        respostas: [
            "Nenhuma diferença, ambos são operadores de igualdade",
            "O operador '===' compara o valor e o tipo de dados, enquanto '==' compara apenas o valor",
            "O operador '===' compara apenas o valor, enquanto '==' compara o valor e o tipo de dados",
        ],
        correta: 1
    },
    {
        pergunta: "O que é um algoritmo?",
        respostas: [
            "Uma sequência finita de instruções bem definidas e não ambíguas",
            "Uma linguagem de programação",
            "Um tipo de variável",
        ],
        correta: 0
    },
    {
        pergunta: "O que é 'debugging' em programação?",
        respostas: [
            "Um processo de otimização de código",
            "Um processo de remover bugs ou erros de um programa",
            "Um método para criar cópias de segurança do código",
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma estrutura condicional 'if-else' usada para?",
        respostas: [
            "Executar uma ação repetidamente enquanto uma condição for verdadeira",
            "Executar uma ação baseada em uma condição",
            "Executar uma ação um número específico de vezes",
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma matriz (array) em programação?",
        respostas: [
            "Uma coleção de dados não ordenados",
            "Um tipo de variável que pode armazenar múltiplos valores",
            "Um tipo de loop em programação",
        ],
        correta: 1
    },
    {
        pergunta: "O que é a recursão em programação?",
        respostas: [
            "Um tipo de estrutura de controle de fluxo",
            "Um tipo de função que chama a si mesma",
            "Um tipo de algoritmo de ordenação",
        ],
        correta: 1
    }
];

const quiz = document.querySelector('#quiz')
const templete = document.querySelector('template')


const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')

mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(let item of perguntas){
    const quizItem = templete.content.cloneNode(true)
    
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-'+perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (e) => {
            const estaCorreto = e.target.value == item.correta

            corretas.delete(item)
            if(estaCorreto){
                corretas.add(item)
            }
            
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

        }        
        
        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}