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

        
        if (playerList.length === 11){
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

        
        if (opponentList.length === 11){
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

    comparison.onclick = playerCompareDisplay;

    function playerCompareDisplay(){


        var radio1 = document.querySelector('input[name="compare"]:checked').value;

        console.log(radio1);

        var myPlayerOverall = Math.ceil((parseInt(playerList[radio1].pace) 
        + parseInt(playerList[radio1].shooting) 
        + parseInt(playerList[radio1].passing) 
        + parseInt(playerList[radio1].dribbling) 
        + parseInt(playerList[radio1].defence) 
        + parseInt(playerList[radio1].physical)) / 6);

        console.log("my player overall = " + myPlayerOverall);

        var selected1 = document.getElementById("player1");
        selected1.innerHTML = `<p>${playerList[radio1].name} </p>
        <p>${playerList[radio1].age} </p>
        <p>${playerList[radio1].position} </p>
        <p id="playerPace">${playerList[radio1].pace} </p>
        <p id="playerShooting">${playerList[radio1].shooting} </p>
        <p id="playerPassing">${playerList[radio1].passing} </p>
        <p id="playerDribbling">${playerList[radio1].dribbling} </p>
        <p id="playerDefence">${playerList[radio1].defence} </p>
        <p id="playerPhysical">${playerList[radio1].physical} </p>
        <p id="playerOverall">${myPlayerOverall}</p>`;



        var radio2 = document.querySelector('input[name="compare2"]:checked').value;

        console.log(radio2);

        var wishlistOverall = Math.ceil((parseInt(opponentList[radio2].pace) 
        + parseInt(opponentList[radio2].shooting) 
        + parseInt(opponentList[radio2].passing) 
        + parseInt(opponentList[radio2].dribbling) 
        + parseInt(opponentList[radio2].defence) 
        + parseInt(opponentList[radio2].physical)) / 6);

        console.log("Wishlist overall = " + wishlistOverall);



        var selected2 = document.getElementById("player2");
        selected2.innerHTML = `<p>${opponentList[radio2].name} </p> 
        <p>${opponentList[radio2].age} </p> 
        <p>${opponentList[radio2].position} </p>
        <p id="oppPace">${opponentList[radio2].pace} </p>
        <p id="oppShooting">${opponentList[radio2].shooting} </p>
        <p id="oppPassing">${opponentList[radio2].passing} </p>
        <p id="oppDribbling">${opponentList[radio2].dribbling} </p>
        <p id="oppDefence">${opponentList[radio2].defence} </p>
        <p id="oppPhysical">${opponentList[radio2].physical} </p> 
        <p id="oppOverall">${wishlistOverall}</p>`;

        /*var myPlayerOverall = Math.ceil((parseInt(playerList[radio1].pace) + parseInt(playerList[radio1].shooting) + parseInt(playerList[radio1].passing) + 
        parseInt(playerList[radio1].dribbling) + parseInt(playerList[radio1].defence) + parseInt(playerList[radio1].physical)) / 6);

        console.log("my player overall = " + myPlayerOverall);

        var wishlistOverall = Math.ceil((parseInt(opponentList[radio2].pace) + parseInt(opponentList[radio2].shooting) + parseInt(opponentList[radio2].passing) + 
        parseInt(opponentList[radio2].dribbling) + parseInt(opponentList[radio2].defence) + parseInt(opponentList[radio2].physical)) / 6);

        console.log("Wishlist overall = " + wishlistOverall);*/

        if (playerList[radio1].pace > opponentList[radio2].pace){
            document.getElementById("playerPace").style.backgroundColor = "#7CFC00";
            document.getElementById("oppPace").style.backgroundColor = "#FF0049";
            document.getElementById("oppPace").style.color = "#FFFFFF";

        } else if (playerList[radio1].pace < opponentList[radio2].pace){
            document.getElementById("playerPace").style.color = "#FFFFFF";
            document.getElementById("playerPace").style.backgroundColor = "#FF0049";
            document.getElementById("oppPace").style.backgroundColor = "#7CFC00";
        }else{
            document.getElementById("playerPace").style.backgroundColor = "#FFFFFF";
            document.getElementById("oppPace").style.backgroundColor = "#FFFFFF";
        }
        ///////////
        if (playerList[radio1].shooting > opponentList[radio2].shooting){
            document.getElementById("playerShooting").style.backgroundColor = "#7CFC00";
            document.getElementById("oppShooting").style.backgroundColor = "#FF0049";
            document.getElementById("oppShooting").style.color = "#FFFFFF";

        } else if (playerList[radio1].shooting < opponentList[radio2].shooting){
            document.getElementById("playerShooting").style.color = "#FFFFFF";
            document.getElementById("playerShooting").style.backgroundColor = "#FF0049";
            document.getElementById("oppShooting").style.backgroundColor = "#7CFC00";
        }else{
            document.getElementById("playerShooting").style.backgroundColor = "#FFFFFF";
            document.getElementById("oppShooting").style.backgroundColor = "#FFFFFF";
        }
        ////////////////
        if (playerList[radio1].passing > opponentList[radio2].passing){
            document.getElementById("playerPassing").style.backgroundColor = "#7CFC00";
            document.getElementById("oppPassing").style.backgroundColor = "#FF0049";
            document.getElementById("oppPassing").style.color = "#FFFFFF";

        } else if (playerList[radio1].passing < opponentList[radio2].passing){
            document.getElementById("playerPassing").style.color = "#FFFFFF";
            document.getElementById("playerPassing").style.backgroundColor = "#FF0049";
            document.getElementById("oppPassing").style.backgroundColor = "#7CFC00";
        }else{
            document.getElementById("playerPassing").style.backgroundColor = "#FFFFFF";
            document.getElementById("oppPassing").style.backgroundColor = "#FFFFFF";
        }
        ////////////
        if (playerList[radio1].dribbling > opponentList[radio2].dribbling){
            document.getElementById("playerDribbling").style.backgroundColor = "#7CFC00";
            document.getElementById("oppDribbling").style.backgroundColor = "#FF0049";
            document.getElementById("oppDribbling").style.color = "#FFFFFF";

        } else if (playerList[radio1].dribbling < opponentList[radio2].dribbling){
            document.getElementById("playerDribbling").style.color = "#FFFFFF";
            document.getElementById("playerDribbling").style.backgroundColor = "#FF0049";
            document.getElementById("oppDribbling").style.backgroundColor = "#7CFC00";
        }else{
            document.getElementById("playerDribbling").style.backgroundColor = "#FFFFFF";
            document.getElementById("oppDribbling").style.backgroundColor = "#FFFFFF";
        }
        ////////////////
        if (playerList[radio1].defence > opponentList[radio2].defence){
            document.getElementById("playerDefence").style.backgroundColor = "#7CFC00";
            document.getElementById("oppDefence").style.backgroundColor = "#FF0049";
            document.getElementById("oppDefence").style.color = "#FFFFFF";

        } else if (playerList[radio1].defence < opponentList[radio2].defence){
            document.getElementById("playerDefence").style.color = "#FFFFFF";
            document.getElementById("playerDefence").style.backgroundColor = "#FF0049";
            document.getElementById("oppDefence").style.backgroundColor = "#7CFC00";
        }else{
            document.getElementById("playerDefence").style.backgroundColor = "#FFFFFF";
            document.getElementById("oppDefence").style.backgroundColor = "#FFFFFF";
        }

        ////////////////
        if (playerList[radio1].physical > opponentList[radio2].physical){
            document.getElementById("playerPhysical").style.backgroundColor = "#7CFC00";
            document.getElementById("oppPhysical").style.backgroundColor = "#FF0049";
            document.getElementById("oppPhysical").style.color = "#FFFFFF";

        } else if (playerList[radio1].physical < opponentList[radio2].physical){
            document.getElementById("playerPhysical").style.color = "#FFFFFF";
            document.getElementById("playerPhysical").style.backgroundColor = "#FF0049";
            document.getElementById("oppPhysical").style.backgroundColor = "#7CFC00";
        }else{
            document.getElementById("playerPhysical").style.backgroundColor = "#FFFFFF";
            document.getElementById("oppPhysical").style.backgroundColor = "#FFFFFF";
        }

        ////////////////
        if (myPlayerOverall > wishlistOverall){
            document.getElementById("playerOverall").style.backgroundColor = "#7CFC00";
            document.getElementById("oppOverall").style.backgroundColor = "#FF0049";
            document.getElementById("oppOverall").style.color = "#FFFFFF";

        } else if (myPlayerOverall < wishlistOverall){
            document.getElementById("playerOverall").style.color = "#FFFFFF";
            document.getElementById("playerOverall").style.backgroundColor = "#FF0049";
            document.getElementById("oppOverall").style.backgroundColor = "#7CFC00";
        }else{
            document.getElementById("playerOverall").style.backgroundColor = "#FFFFFF";
            document.getElementById("oppOverall").style.backgroundColor = "#FFFFFF";
        }

        var result = document.getElementById("result-display");

        if (myPlayerOverall > wishlistOverall){
            result.innerHTML = `<p> ${playerList[radio1].name} is the better player.</p>`;

        }else{
            result.innerHTML = `<p> ${opponentList[radio2].name} is the better player. </p>`;
        }
        
        
    } 
   
   

}