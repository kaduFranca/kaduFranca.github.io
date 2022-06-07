

function calcularAluno() {
    var tot = parseFloat(totalDeAulas.value)
    var falta = parseFloat(faltas.value)
    var mediaSemestre = (parseFloat(media1.value) + parseFloat(media2.value)) / 2
    var exame = false
    var presenca = tot > falta * 4


    if (presenca && mediaSemestre >= 7) {
        resultado.value = "Aprovado"
    } else if (tot > falta * 4 && mediaSemestre < 7) {
        exame = true
        resultado.value = "exame"

    } else {
        resultado.value = "Reprovado"
    }
}

function calcularExame() {
    var mediaSemestre = (parseFloat(media1.value) + parseFloat(media2.value)) / 2
    var notaExame = parseFloat(exameNota.value)
    if (exame = true) {
        if ((mediaSemestre + notaExame) / 2 > 5) {
            resultadoExame.value = "Aprovado pelo exame"
        } else {
            resultadoExame.value = "Reprovado pelo exame"
        }
    }
    if(exame = false) {
        resultadoExame.value = "Você não está em exame"
    }   
}
