window.onload = function(){

    var Player = {
        name: "",
        age: "",
        position: "",
        pace: "",
        shooting:"",
        passing:"",
        dribbling:"",
        defence:"",
        physical:"",
    };
    

    
    var playerList = [];

    var button1 = document.getElementById("team1submit");

    button1.onclick = AddPlayer;
    

    function AddPlayer(){

        
        if (playerList.length === 2){
            document.getElementById("form1").innerHTML = "Team is FULL!!";
        }

        Player.name = document.getElementById("name").value;
        Player.age = document.getElementById("age").value;
        Player.position = document.getElementById("position").value;
        Player.pace = document.getElementById("pace").value;
        Player.shooting = document.getElementById("shooting").value;
        Player.passing = document.getElementById("passing").value;
        Player.dribbling = document.getElementById("dribbling").value;
        Player.defence = document.getElementById("defence").value;
        Player.physical = document.getElementById("physical").value;

        playerList.push({...Player});
        document.getElementById("team1").reset();

        console.log(playerList);
        displayMyTeam();

    }

    

    function displayMyTeam(){
        var table1 = document.getElementById("table1");
        
        table1.innerHTML = "";
        for (var i = 0; i < playerList.length ; i++){

            var abc = document.createElement("tr");
            abc.innerHTML = `<td><input type = "radio" id="compare" name="compare" value="${i}"></td><td> ${playerList[i].name} </td><td> ${playerList[i].age} </td><td> ${playerList[i].position} </td>
            <td> ${playerList[i].pace} </td> <td> ${playerList[i].shooting} </td> <td> ${playerList[i].passing} </td> 
            <td> ${playerList[i].dribbling} </td> <td> ${playerList[i].defence} </td> <td> ${playerList[i].physical} </td>`;

            table1.appendChild(abc);
        }


    }

    var opponentList = [];

    var button2 = document.getElementById("team2submit");

    button2.onclick = AddOpponent;
    

    function AddOpponent(){

        
        if (opponentList.length === 2){
            document.getElementById("form2").innerHTML = "Team is FULL!!";
        }

        Player.name = document.getElementById("name2").value;
        Player.age = document.getElementById("age2").value;
        Player.position = document.getElementById("position2").value;
        Player.pace = document.getElementById("pace2").value;
        Player.shooting = document.getElementById("shooting2").value;
        Player.passing = document.getElementById("passing2").value;
        Player.dribbling = document.getElementById("dribbling2").value;
        Player.defence = document.getElementById("defence2").value;
        Player.physical = document.getElementById("physical2").value;

        opponentList.push({...Player});
        document.getElementById("team2").reset();

        console.log(opponentList);
        displayOpponentTeam();

    }

    

    function displayOpponentTeam(){
        var table2 = document.getElementById("table2");
        
        table2.innerHTML = "";
        for (var i = 0; i < opponentList.length ; i++){

            var xyz = document.createElement("tr");
            xyz.innerHTML = `<td><input type = "radio" id="compare2" name="compare2" value="${i}"></td><td> ${opponentList[i].name} </td><td> ${opponentList[i].age} </td><td> ${opponentList[i].position} </td>
            <td> ${opponentList[i].pace} </td> <td> ${opponentList[i].shooting} </td> <td> ${opponentList[i].passing} </td> 
            <td> ${opponentList[i].dribbling} </td> <td> ${opponentList[i].defence} </td> <td> ${opponentList[i].physical} </td>`;

            table2.appendChild(xyz);
        }


    }

    var comparison = document.getElementById("comparison");

    comparison.onclick = playerCompare;

    function playerCompare(){

        var radio1 = document.querySelector('input[name="compare"]:checked').value;

        console.log(radio1);

        var selected1 = document.getElementById("player1");
        selected1.innerHTML = `<p>Name: ${playerList[radio1].name} </p> <p>Age: ${playerList[radio1].age} </p> <p>Position: ${playerList[radio1].position} </p>`;

        var radio2 = document.querySelector('input[name="compare2"]:checked').value;

        console.log(radio2);

        var selected2 = document.getElementById("player2");
        selected2.innerHTML = `<p>Name: ${opponentList[radio2].name} </p> <p>Age: ${opponentList[radio2].age} </p> <p>Position: ${opponentList[radio2].position} </p>`;

    } 
   







}