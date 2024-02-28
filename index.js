var audio = document.getElementById('audio');
var loaded = false;

var jogarbtn = document.getElementById('jogarbtn');
var pausebtn = document.getElementById('pausebtn');

pausebtn.addEventListener('click',(e)=>{
    e.preventDefault();

    jogarbtn.style.display = 'inline';
    pausebtn.style.display = 'none';
    audio.pause();

    return false
});

jogarbtn.addEventListener('click',(e)=>{
    e.preventDefault();

    jogarbtn.style.display = 'none';
    pausebtn.style.display = 'inline';
    audio.play();

    return false

});

const tocarMusica = (file) => {
    if (loaded == false) {
        audio.innerHTML = '<source src="' + file + '" type="audio/mp3"/>';
        loaded = true;
    }

    audio.play(); 

    jogarbtn.style.display = "none";
    pausebtn.style.display = "inline";
}

document.querySelectorAll('.colunas').forEach(item => {
    item.addEventListener('click', event => {
        let image = item.getAttribute('data-image');
        let artist = item.getAttribute('data-artist');
        let song = item.getAttribute('data-song');
        let file = item.getAttribute('data-file');

        let playerArtistComponent = document.getElementsByClassName('artista');
        
        playerArtistComponent[0].innerHTML = `
            <img src="${image}" />
            <h3>${artist}<br/><span>${song}</span></h3>
        `;

        tocarMusica(file); 
    });
});



