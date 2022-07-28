var newname = [];

document.getElementById("myBtn").onclick = function() {
    newname = document.getElementById("player-name").value;
    console.log(newname);
    hSArray = JSON.parse(localStorage.getItem('score'));
    hSArray.name.push(newname);
    console.log(hSArray);    
    var li1 = document.createElement('li');
    var listE1 = document.getElementById('highScore-list');
    li1.textContent = hSArray.score + "  " +hSArray.name;
    listE1.appendChild(li1);
    localStorage.setItem("score", JSON.stringify(hSArray));
    
}



