//Criar Heroi
let Heroi = [
    ["Luan Santana", "M", "Bardo", "violão", 1700],
    ["Albert Einstein", "M", "Mago", "cajado", 8765],
    ["Joelma", "F", "Bardo", "microfone", 4005],
    ["JorginhoGameplay", "M", "Monge", "mente", 10080]
]


//Lista de Heróis
for (let i = 0; i < Heroi.length; i++) {
    let nome = Heroi[i][0]
    let xp = Heroi[i][4]
    let sexo = Heroi[i][1]
    let classe = Heroi[i][2]
    let equipamemto = Heroi[i][3]

    
//XP POR NÍVEL (Classificação)
let Classificacao
    if (xp < 1000)
        Classificacao = "Ferro"
    
    else if (xp <= 2000)
        Classificacao = "Bronze"
    
    else if (xp <= 5000)
        Classificacao = "Prata"
    
    else if (xp <= 7000)
        Classificacao = "Ouro"
    
    else if (xp <= 8000)
        Classificacao = "Platina"
    
    else if (xp <= 9000)
        Classificacao = "Ascendente"
    
    else if (xp <= 10000)
        Classificacao = "Imortal"
    
    else if (xp > 10000)
        Classificacao = "Radiante"

    
//Saída (Mensagem Final)
    console.log(`O Herói de nome ${nome} está no nível de ${Classificacao}`)
}