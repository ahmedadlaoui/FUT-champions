players = JSON.parse(localStorage.getItem('array'))


document.getElementById('forms').addEventListener('change', () => {

    if (document.getElementById('forms').value === "442") {

        document.querySelector('.players-board-442').style.display = "flex";
        console.log(1);
        document.querySelector('.players-board-433').style.display = "none";
    } else {
        document.querySelector('.players-board-433').style.display = "flex";
        document.querySelector('.players-board-442').style.display = "none"
    }
});

players.forEach(player => {


    const changecard = document.createElement('div')
    changecard.className = "change-grid"


    const profil = document.createElement('img')
    profil.src = player.photo
    profil.className = "pic"
    changecard.appendChild(profil)


    const divname = document.createElement('div')
    divname.className = "name-div"

    const playername = document.createElement('p')
    playername.textContent = player.name
    playername.className = "name"
    divname.appendChild(playername)
    changecard.appendChild(divname)

    const flag = document.createElement('img')
    flag.src = player.flag
    flag.className = "flag"
    changecard.appendChild(flag)

    const rating = document.createElement('p')
    rating.textContent = player.rating
    rating.className = "rating"
    changecard.appendChild(rating)

    const club = document.createElement('img')
    club.src = player.logo
    club.className = "club"
    changecard.appendChild(club)

    const posi = document.createElement('p')
    posi.textContent = player.position
    posi.className = "position"
    changecard.appendChild(posi)

    const grid = document.createElement('div')
    grid.className = "stats"

    if (player.position === "GK") {
        const dynamichtml = `
        <p>Kic:${player.kicking}</p>
        <p>Div:${player.diving}</p>
        <p>Han:${player.handling}</p>
        <p>Ref:${player.reflexes}</p>
        <p>Spe:${player.speed}</p>
        <p>Pos:${player.positioning}</p>
        `
        grid.innerHTML = dynamichtml
        changecard.appendChild(grid)
    }
    else {
        const dynamichtml = `
    <p>Sho:${player.shooting}</p>
    <p>Pac:${player.pace}</p>
    <p>Pas:${player.passing}</p>
    <p>Dri:${player.dribbling}</p>
    <p>Def:${player.defending}</p>
    <p>Phy:${player.physical}</p>
    `
        grid.innerHTML = dynamichtml
        changecard.appendChild(grid)
    }



    document.querySelector('.cards-grid').appendChild(changecard)

});


const emptycards = document.querySelectorAll('.card');

emptycards.forEach(card => {
    card.addEventListener('click', () => {

        document.getElementById('location').scrollIntoView({ behavior: "smooth" });

        const test = card.className;
        const classes = test.split(' ');
        const secondclass = classes[1];

        const changecards = document.querySelectorAll('.change-grid');
        const positions = document.querySelectorAll('.position');

        const noPlayersMessage = document.getElementById('no-players-message');

        // display all 
        changecards.forEach(card => {
            card.style.display = "block";
        });

        let anyVisible = false;

        positions.forEach((pos, index) => {
            if (secondclass !== pos.textContent) {
                changecards[index].style.display = "none";
            } else {
                anyVisible = true;
                changecards[index].addEventListener('click', () => {
                    document.querySelector('header').scrollIntoView({ behavior: "smooth" });
                    let player;
                    player = changecards[index].innerHTML;
                    card.innerHTML = player;

                });
            }
        });

        if (!anyVisible) {
            noPlayersMessage.style.display = "block";
        } else {
            noPlayersMessage.style.display = "none";
        }
    });
});

let pic = document.getElementById('imgplace')
let picfile = document.getElementById('player-picture')

let flagg = document.querySelector('.addedflag')
let flagfile = document.getElementById('flag-picture')

let clubb = document.querySelector('.addedclub')
let clubfile = document.getElementById('club-picture')

picfile.onchange = function () {

    pic.src = URL.createObjectURL(picfile.files[0]);
}

flagfile.onchange = function () {

    flagg.src = URL.createObjectURL(flagfile.files[0]);
}

clubfile.onchange = function () {

    clubb.src = URL.createObjectURL(clubfile.files[0]);

}


document.getElementById('positions').addEventListener('change', () => {
    if (document.getElementById('positions').value === "GK") {
        document.getElementById('normal-form').style.display = "none"
        document.getElementById('GK-form').style.display = "grid"
    } else {
        document.getElementById('normal-form').style.display = "grid"
        document.getElementById('GK-form').style.display = "none"
    }
})




document.getElementById('Submition-button').addEventListener('click', () => {

    if (document.getElementById('positions').value && document.getElementById('player-name').value) {

        let newplayer;
        if (document.getElementById('positions').value === "GK") {
            newplayer = {
                "name": document.getElementById('player-name').value,
                "photo": pic.src,
                "position": document.getElementById('positions').value,
                "flag": flagg.src,
                "logo": clubb.src,
                "rating": "",
                "diving": document.getElementById('Diving').value,
                "handling": document.getElementById('Handling').value,
                "kicking": document.getElementById('Kicking').value,
                "reflexes": document.getElementById('Reflexes').value,
                "speed": document.getElementById('Speed').value,
                "positioning": document.getElementById('Positioning').value
            }

        } else {
            newplayer = {
                         "name": document.getElementById('player-name').value,
                         "photo": pic.src,
                         "position": document.getElementById('positions').value,
                         "flag": flagg.src,
                         "logo" :clubb.src,
                         "rating": "",
                         "pace": document.getElementById('Pace').value,
                         "shooting": document.getElementById('Shooting').value,
                         "passing": document.getElementById('Passing').value,
                         "dribbling": document.getElementById('Dribling').value,
                         "defending": document.getElementById('Defending').value,
                         "physical": document.getElementById('Physical').value
            }
        }

        players.push(newplayer)
        localStorage.setItem('array',JSON.stringify(players))
    }

})

