let heroi = {
    nome: "Livia", // Nome do herói
    xp: 1001     // Quantidade de experiência (XP)s
};

if (heroi.xp < 1000){
    heroi.xp = "Ferro"
    console.log("O Herói de nome " + (heroi.nome) + " está no nível de " + (heroi.xp))
} else if (heroi.xp >= 1001 && heroi.xp <= 2000){
    heroi.xp = "Bronze"
    console.log("O Herói de nome " + (heroi.nome) + " está no nível de " + (heroi.xp))
} else if (heroi.xp >= 2001 && heroi.xp <= 5000){
    heroi.xp = "Prata"
    console.log("O Herói de nome " + (heroi.nome) + " está no nível de " + (heroi.xp))
} else if (heroi.xp >= 5000 && heroi.xp <= 7000){
    heroi.xp = "Ouro"
    console.log("O Herói de nome " + (heroi.nome) + " está no nível de " + (heroi.xp))
} else if (heroi.xp >= 7001 && heroi.xp <= 8000){
    heroi.xp = "Platina"
    console.log("O Herói de nome " + (heroi.nome) + " está no nível de " + (heroi.xp))
} else if (heroi.xp >= 8001 && heroi.xp <= 9000){
    heroi.xp = "Ascendente"
    console.log("O Herói de nome " + (heroi.nome) + " está no nível de " + (heroi.xp))
} else if (heroi.xp >= 9001 && heroi.xp <= 10000){
    heroi.xp = "Imortal"
    console.log("O Herói de nome " + (heroi.nome) + " está no nível de " + (heroi.xp))
} else {
    heroi.xp = "Radiante"
    console.log("O Herói de nome " + (heroi.nome) + " está no nível de " + (heroi.xp))
}
