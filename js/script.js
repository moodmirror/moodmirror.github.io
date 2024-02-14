// api


// .catch(err=>console.log(err));
var buttons = document.getElementsByClassName('btn-feel');
var hText = document.getElementById('h-text');
function changeTextAndButtons() {

    var buttonsDiv = document.querySelector('.btn-div');

    hText.innerText = "What do you want to do now?";
    hText.style.textAlign='center';

    // Update button texts
    buttons[0].getElementsByTagName('span')[0].innerText = "Play Games";
    buttons[1].getElementsByTagName('span')[0].innerText = "Listen to music";
    buttons[2].getElementsByTagName('span')[0].innerText = "Nothing";

    // Remove last two buttons
    var buttonsToRemove = document.querySelectorAll('.btn-feel:nth-last-child(-n+2)');
    buttonsToRemove.forEach(function (button) {
        button.remove();
    });

    // Remove onclick 
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].removeAttribute('onclick');
    }

    // New Buttons' Functions
    buttons[0].addEventListener('click', function () {
        hText.innerHTML = "Here Are Some Games For You";
        var newLink = document.createElement('a');
        newLink.href = 'https://play.google.com/store/games';
        // var gameImg = document.createElement('img');
        // gameImg.src = '../img/image2.png';
        // gameImg.alt = 'Game Image';
        // gameImg.style.width="100%";
        // newLink.appendChild(gameImg);
        buttonsDiv.innerHTML = ' ';
        buttonsDiv.appendChild(newLink);
        fetch('../data/games.json')
        .then(res=>res.json())
        .then(data=>{
            let img ="";
            data.map(item=>{
                img+=`<div><a href="${item.link}"><img src="${item.image}"></></a></div>`;
            })
            document.getElementById('game-div').innerHTML=img;
        })

    });
    buttons[1].addEventListener('click', function () {
        hText.innerHTML = "Here's The Playlist For You!";
        var newLink2 = document.createElement('a');
        newLink2.href = 'https://open.spotify.com/';
        var musicImg = document.createElement('img');
        musicImg.src = '../img/image3.png';
        musicImg.alt = 'Game Image';
        musicImg.style.width="100%";
        newLink2.appendChild(musicImg);
        buttonsDiv.innerHTML = ' ';
        buttonsDiv.appendChild(newLink2);
    });
    buttons[2].addEventListener('click', function () {
        hText.innerHTML = " OH! c’mon, don't be like that. Try something";
        buttonsDiv.innerHTML = ' ';
        var okBtn = document.createElement('button');
        okBtn.className = 'btn-feel';
        okBtn.style.width = "300px";
        okBtn.innerHTML = '<a href="../index.html"><span>Okay</span></a>';
        buttonsDiv.appendChild(okBtn);
    });
}


