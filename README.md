# Classificação De Níveis de Personagens 🦸🏻‍♂️

<p align="left">
  <img align="center" src="https://github.com/SerAnonimo01/Heroi/assets/168775836/7f53b9b8-8669-4c69-ae85-b1152044788e" alt="Imagem">
</p>


> *OBS: Este é um repositório desenvolvido durante o desafio do curso de Criação de Jogos da [DIO](https://www.dio.me/)* 

## Sumário
- Resumo ✍🏻
- Linguagem 💻
- Estudo 🤓
   - 1. Criar Personagem 🐉
   - 2. Lista de Heróis 📘
   - 3. Xp Por Nível (Classificação) 🕹️
   - 4. Saída (Mensagem Final) ⌨️
- Explicação dos Códigos 🚀
- Conclusão 🐜


## Resumo ✍🏻
Esse projeto é um protótipo que tem o objetivo de Classificar em Níveis os Personagens de acordo com o seu XP (Experiencia), era necessário utilizar:

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

E ao final exibir uma mensagem de saída certificando o funcionamento das linhas de códigos.

## Linguagem 💻

A linguagem utilizada nesse repositório foi o Java Script:

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="35" alt="javascript logo"  />
</div>

## Estudo 🤓
Para concluir o desafio foi necessário dividi-lo em 4 partes:
- Criar Heroi
- Lista de Heróis
- Xp Por Nível (Classificação)
- Saída (Mensagem Final)

### 1. Criar Personagem 🐉
Inicialmente escolhi produzir os personagens com Matriz, uma coleção de elementos (não necessáriamente do mesmo tipo) organizados em linhas e colunas, pois outras estratégias de variáveis demorariam e não seriam tão práticas.
```
let Heroi = [
    ["Luan Santana", "M", "Bardo", "violão", 1700],
    ["Albert Einstein", "M", "Mago", "cajado", 8765],
    ["Joelma", "F", "Bardo", "microfone", 4005],
    ["JorginhoGameplay", "M", "Monge", "mente", 10080]
]
```
Respectivamente, cada coluna é: Nome, Sexo, Classe, Equipamento e o XP (experiência)

### 2. Lista de Heróis 📘
Após criar a Matriz, eu precisava de alguma coisa que listasse essas variáveis e conectasse o nome com o XP (experiência) que mais para frente viraria uma classificação de nível, utilizei o `for` e criei novas váriaveis interligadas a minha Matriz anterior.
```
for (let i = 0; i < Heroi.length; i++) {
    let nome = Heroi[i][0]
    let xp = Heroi[i][4]
    let sexo = Heroi[i][1]
    let classe = Heroi[i][2]
    let equipamemto = Heroi[i][3]
```
### 3. Xp Por Nível (Classificação) 🕹️
Agora é o momento de elaborar a classificação, um dos objetivos principais do desafio, para isso criei a variável Classificacao e fiz uma "estrutura de decisão" de acordo com essas informações: 

- Se XP for menor do que 1.000 = Ferro
- Se XP for entre 1.001 e 2.000 = Bronze
- Se XP for entre 2.001 e 5.000 = Prata
- Se XP for entre 5.001 e 7.000 = Ouro
- Se XP for entre 7.001 e 8.000 = Platina
- Se XP for entre 8.001 e 9.000 = Ascendente
- Se XP for entre 9.001 e 10.000= Imortal
- Se XP for maior ou igual a 10.001 = Radiante

```
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
```
### 4. Saída (Mensagem Final) ⌨️
E para concluir o desafio era necessário apenas elaborar a mensagem final:
```
console.log(`O Herói de nome ${nome} está no nível de ${Classificacao}`)
}
```
## Explicação dos Códigos 🚀
```
let Heroi = [
    ["Luan Santana", "M", "Bardo", "violão", 1700],
    ["Albert Einstein", "M", "Mago", "cajado", 8765],
    ["Joelma", "F", "Bardo", "microfone", 4005],
    ["JorginhoGameplay", "M", "Monge", "mente", 10080]
]
```
> Objetivo principal: Criar os personagens e suas respectivas caracteristicas usando matriz

`let`: Cria uma nova variável.

`Heroi`: Nome da variável.

---
```
for (let i = 0; i < Heroi.length; i++) {
    let nome = Heroi[i][0]
    let xp = Heroi[i][4]
    let sexo = Heroi[i][1]
    let classe = Heroi[i][2]
    let equipamemto = Heroi[i][3]
```
> Objetivo principal: Percorrer uma lista (Matriz)

`for`: É um loop, ele vai percorrer por toda a Matrix.

`let`: Cria uma nova Variável. 

`i = 0`: A Variável `i` é o indice que usaremos para acessar cada herói da Matriz, colocamos `= 0` pois `i` começara na linha 0, ou seja, na primeira linha.

`i < Heroi.length`: Enquanto `i` for menor que `Heroi.lenght` o looping continua, isso garante que o loop não acesse um indice fora dos limites da Matriz; o `lenght` retorna o número de heróis dentro da Matriz.

`i++`: Esse código seria equivalente a i = i+i, isso move o indice para o próximo personagem na próxima interação do loop.

`let (nome da variável) = Heroi[i][Nº]`: A variável `i` indica a linha e o `Nº` o número da coluna, ou seja a linha vai variar mas as colunas sempre vão ter a informação do nome, xp, sexo, classe ou equipamento.

---
```
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
```
> Objetivo principal: Criar a estrutura de Classificação de acordo com o XP (Experiência) de cada herói

`let`: Cria uma nova Variável.

`Classificacao`: nome da Variável

`if` ou `else if`: Em inglês `if` significa "Se" e `else if` "Se não", então no código **if (xp < 1000)
        Classificacao = "Ferro"**
estamos na verdade dizendo: 
- Se o xp for menor que 1000 a Classificação vai ser igual a Ferro

e no código **else if (xp <= 2000)
        Classificacao = "Bronze"** 
dizemos: 
- Se não for menor que 1000 e xp for menor ou igual a 2000 a Classificação vai ser igual a Bronze.

---
```
console.log(`O Herói de nome ${nome} está no nível de ${Classificacao}`)
}
```
> Objetivo principal: Mensagem final para o herói atual

`console.log`: Tudo que quero ver na tela, ou seja, uma mensagem de saída pelo Terminal eu utilizo esse código.
```
(`O Herói de nome ${nome} está no nível de ${Classificacao}`)
```
Essa parte se utiliza a sintaxe de template string do JavaScript para inserir o nome e a classificação do herói na mensagem.


## Conclusão 🐜
Este projeto apresentou a implementação de um sistema de classificação de personagens para jogos, utilizando **JavaScript** como linguagem de programação. Através da criação de personagens e da atribuição de experiência (XP) a eles, foi possível classificá-los em diferentes níveis, desde "Ferro" até "Radiante".

Em resumo, este trabalho não só reforçou a compreensão dos conceitos básicos de programação, mas também proporcionou uma visão prática de como esses conceitos podem ser aplicados no desenvolvimento de jogos. Espero que este projeto sirva como um ponto de partida para explorações futuras na criação de sistemas mais complexos e envolventes para jogos. 😀

---
//Feito por Luke 🐉//
