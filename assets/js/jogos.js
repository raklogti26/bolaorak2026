fetch('data/jogos.json')
    .then(response => response.json())
    .then(jogos => {

        const container = document.getElementById('jogos-container')

        jogos.forEach(jogo => {

            const card = document.createElement('div')
            card.classList.add('jogo-card')

            card.innerHTML = `
                <div class="time">
                    <span>${jogo.timeA}</span>
                    <span class="placar">${jogo.placarA} x ${jogo.placarB}</span>
                    <span>${jogo.timeB}</span>
                </div>

                <p>Status: ${jogo.status}</p>
            `

            container.appendChild(card)
        })
    })