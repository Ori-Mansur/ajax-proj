'use strict'

function onInitWorldCup() {

    getData(`https://worldcup.sfg.io/teams/`, renderCountry)
}

function renderCountry(teams) {
    var elcountry = document.querySelector('.country-area')

    var htmls = teams.map(team => {
        var country = team.country;
        var codes = getCountryCode()
        var code = codes[country]
        return `<div class="country ${team.country}" onclick="onShowTeamGames('${team.fifa_code}')">
                    <h3>${team.country}</h3>
                    <img src="https://www.countryflags.io/${code}/flat/64.png"/>
                </div>`
    })

    elcountry.innerHTML = htmls.join(' ')
}

function onShowTeamGames(fifaCode) {
    getData(`https://worldcup.sfg.io/matches/country?fifa_code=${fifaCode}`, renderTeamGames)

}

function renderTeamGames(teamGames) {
    var elGames = document.querySelector('.games')
    var elGamesArea = document.querySelector('.games-area')
    var htmls = teamGames.map(game => {
        return `<div class="game">
                    <ul>
                        <li>Date: ${game.datetime}</li>
                        <li>Location: ${game.venue}</li>
                        <li>Winner: ${game.winner}</li>
                    </ul>
                </div>`
    });
    elGames.innerHTML += htmls.join('')
    elGamesArea.classList.remove('hide')
}

function closeModal() {
    var elGamesArea = document.querySelector('.games-area')
    elGamesArea.classList.add('hide')
}