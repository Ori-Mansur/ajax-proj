'use strict'

function onClashInit() {
    getDataFromApi('http://www.clashapi.xyz/api/chests', renderChests)

}
function renderChests(dataChests) {
    var html = ''
    dataChests.forEach(chest => {
        if (chest.name != 'Season Reward Chest') {

            var idName = chest.name.toLowerCase()
            idName = idName.split(' ')
            idName = idName.join('-')
            if (idName.includes('\'')) idName = idName.split('\'').join('')
            html += `<div class="chest">
                        <h4>${chest.name}</h4>
                        <h5>Price:${chest.unlock.gemCost}</h5>
                        <img src="http://www.clashapi.xyz/images/chests/${idName}.png">
                    </div>`
        }
    });
    $('.chests').html(html)
}
