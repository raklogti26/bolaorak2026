fetch('data/participantes.json')
    .then(response => response.json())
    .then(data => {

        data.sort((a, b) => b.pontos - a.pontos)

        const tabela = document.getElementById('ranking-body')

        data.forEach((participante, index) => {

            const linha = document.createElement('tr')

            linha.innerHTML = `
                <td>${index + 1}</td>
                <td>${participante.nome}</td>
                <td>${participante.pontos}</td>
            `

            tabela.appendChild(linha)
        })
    })