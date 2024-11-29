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

    const icon = document.createElement('img')
    icon.src = "images/remove.svg"
    icon.className = "remove-icon"
    changecard.appendChild(icon)


    document.querySelector('.cards-grid').appendChild(changecard)

});





const emptycards = document.querySelectorAll('.card');

emptycards.forEach(cardd => {
    cardd.addEventListener('click', (f) => {

        if (cardd.innerHTML !== "") {
            cardd.innerHTML = ""
            removeEventListener('click', f)
        }
        if (cardd.innerHTML === "") {
            // document.getElementById('location').scrollIntoView({ behavior: "smooth" });


            const test = cardd.className;
            const classes = test.split(' ');
            const secondclass = classes[1];

            const changecards = document.querySelectorAll('.change-grid');
            const positions = document.querySelectorAll('.position');

            changecards.forEach(card => {

                card.style.display = "none";

                if (card.children[5].textContent === secondclass) {

                    card.style.display = "block";
                    card.addEventListener('click', (e) => {
                        // document.querySelector('header').scrollIntoView({ behavior: "smooth" });


                        cardd.innerHTML = card.innerHTML;
                        cardd.lastElementChild.style.display = "block"

                        document.getElementById('show-all').addEventListener('click', () => {


                    })


                    });
                }
            });

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
                "rating":document.getElementById('Rating').value ,
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
                "logo": clubb.src,
                "rating": document.getElementById('Rating').value,
                "pace": document.getElementById('Pace').value,
                "shooting": document.getElementById('Shooting').value,
                "passing": document.getElementById('Passing').value,
                "dribbling": document.getElementById('Dribling').value,
                "defending": document.getElementById('Defending').value,
                "physical": document.getElementById('Physical').value
            }
        }

        players.push(newplayer)
        localStorage.setItem('array', JSON.stringify(players))
        window.location.reload()
    }

})


