const scores = {
    home: 0,
    guest: 0
};

const scoreElements = {
    home: document.getElementById("homeScore"),
    guest: document.getElementById("guestScore")
};

function addScore(team, points) {
    scores[team] += points;
    scoreElements[team].textContent = scores[team];
}


