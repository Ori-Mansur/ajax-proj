'use strict'


$(document).ready(function(){
    $('.result').hide()
})
$(document).on('input', 'input:text', function() {
    $('.result').hide()
    if(this.value.includes('?')&&this.value.length>3){
        getAnswer('https://yesno.wtf/api',renderAnswer)
    }
    
});

function renderAnswer(dataAnswer){
    if(dataAnswer.answer==='yes'){
        getAnswer('http://api.icndb.com/jokes/random',renderJoke)
    }else{
        getAnswer('https://dog.ceo/api/breeds/image/random',renderImg)
    }
    $('.answer').html(`<h3>${dataAnswer.answer}</h3>`)
    
}

function renderJoke(dataJoke){
    $('.result').show()
    $('.result').html(`<p>${dataJoke.value.joke}</p>`)

}
function renderImg(dataImg){
    $('.result').show()
    $('.result').html(`<img src="${dataImg.message}">`)
}