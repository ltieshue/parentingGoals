$(document).ready(function () {
       init();
});

function init(){
    enabled();
    //getGames(); =Active displays entire database upon initial access to screen.
}

function enabled() {
    $("#postAGame").on("click", postOneGame);
    $("#createGame").on("click", postGame);
    $("#viewHist").on("click", getGames);
    $("#fullGameList").on("click", ".deleteBtn", deleteGame);
    $("#navGlos").on("click", goGlos);
    $("#submPlay").on("click", postPlay);


}

//postOneGame function - Lori created to have just the 1 new entry appear of DOM when the
// 'postAGame' button is clicked but is not working
function postOneGame(event){
    event.preventDefault();
    console.log("Post One Game")
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: "/games",
        data: JSON.stringify({
            gameDate: $("#txtDate").val(),
            gameTime: $("#txtTime").val(),
            gameName: $("#txtName").val(),
            gameLoca: $("#txtLoca").val()
        }),
        success: function(response){
            console.log("Post response" + response);
            console.log("this data" + this.data);
            appendGame();

        }
    });
    $("#txtDate").val("");
    $("#txtTime").val("");
    $("#txtName").val("");
    $("#txtLoca").val("");
}


//AJAX Request
function getGames () {
    console.log("View History/Get Games")
    $.ajax({
        type: "GET",
        url: "/games",
        success: function (response) {
            appendGames(response._embedded.games);
        }
    });
}

function postGame(event){
    event.preventDefault();

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: "/games",
        data: JSON.stringify({
            gameDate: $("#txtDate").val(),
            gameTime: $("#txtTime").val(),
            gameName: $("#txtName").val(),
            gameLoca: $("#txtLoca").val()
        }),
        success: function(response){
             getGames();
        }
    });

    $("#txtDate").val("");
    $("#txtTime").val("");
    $("#txtName").val("");
    $("#txtLoca").val("");
}


function deleteGame (){
    console.log("deleteGame")
    $.ajax({
        type: "DELETE",
        url: "/games/" + $(this).data("id"),
        success: function (response) {
            getGames();
        }
    });
}
///DOM Methods - NOTE: the appendGame NOT posting anything to the DOM (as of 3/29/18)
function appendGame(gameList){
    $("#gameOne").empty();
    // for (var i = 0; i ==gameList.length; i++) {
    //     var game = gameList[i];

    for (var i = 0; i < gameList.length; i++) {
        var game = gameList[i];


        $("#gameOne").append("<div class='container'></div>");
        var el = $("#gameOne").last();

        el.append("<div class='col-md-10 col-md-offset-1'></div>");
        el = el.last();
        el.append("<span>" + "Date: " + game.gameDate + " Time: " + game.gameTime + " Descr: " + game.gameName + " Location: " + game.gameLoca + "<span>");

        // merged original append button with original drop down button
        el.append('<div class="dropdown">' +
            '<select id="list" class="custom-select">' +
            '<option value="Select Play">Select Play </option>' +
            '<option value="Offense | Sco">Offense | Scored</option>' +
            '<option value="Offense | Ast">Offense | Assist</option>' +
            '<option value="General | Yel">General | Yellow Card</option>' +
            '<option value="General | Red">General | Red Card</option>' +
            '<option value="General | Pen">General | Penalty Against</option>' +
            '<option value="General | PeK">General | Penalty Kick</option>' +
            '<option value="Defense | Pri">Defense | Primary Blocker</option>' +
            '<option value="Defense | Sec">Defense | Secondary Blocker</option>' +
            '</select>' +
            '</div>');

        el.last().data("id", game.id);


        el.append('<div class="testDropdown1"> ' +
            '<select id="list2" class="custom-select" onchange="postPlay()">' +
            '<option value="Select Player">Select Player </option>' +
            '<option value="Ben"    >Ben     - 27 </option>' +
            '<option value="Brevin" >Brevin  - 06 </option>' +
            '<option value="Bryn"   >Bryn    - 63 </option>' +
            '<option value="Connor" >Connor  - 37</option>' +
            '<option value="Dominic">Dominic - 17 </option>' +
            '<option value="Jakey"  >Jakey   - 24</option>' +
            '<option value="Joey"   >Joey    - 72 </option>' +
            '<option value="Josh"   >Josh    - 22 </option>' +
            '<option value="Julius" >Julius  - 08 </option>' +
            '<option value="Keahi"  >Keahi   - 14</option>' +
            '<option value="Logan"  >Logan   - 07</option>' +
            '<option value="Luke"   >Luke    - 00 </option>' +
            '<option value="Nick C.">Nick C. - 03</option>' +
            '<option value="Nick P.">Nick P. - 10 </option>' +
            '<option value="Shane"  >Shane   - 05</option>' +
            '<option value="Tyler"  >Tyler   - 25 </option>' +
            '<option value="Wyatt"  >Wyatt   - 09 </option>' +
            '<option value="Zach"   >Zach    - 73 </option>' +
            '</select>' +
            '</div>');


        el.last().data("id", game.id);


        el.append('<button class="btn btn-primary submPlay">Submit Play/Player</button>');
        el.last().data("id", game.id);

        el.append('<button class="btn btn-warning deleteBtn">Delete</button>');
        el.last().data("id", game.id); //Imprints, data-id="game.id" onto the button element


        // el.append('<button id = "viewStat" >View Stats</button>');
        // el.children().last().data("id", game.id);
        //
        // el.append('<button id = "hideStat" >Hide Stats</button>');
        // el.children().last().data("id", game.id);

    }
}

///DOM Methods
    function appendGames(gameList) {
        $("#fullGameList").empty();
        for (var i = 0; i < gameList.length; i++) {
            var game = gameList[i];

            $("#fullGameList").append("<div class='container'></div>");
            var el = $("#fullGameList").children().last();

            el.append("<div class='col-md-10 col-md-offset-1'></div>");
            el = el.children().last();
            el.append("<span>" + "Date: " + game.gameDate + " Time: " + game.gameTime + " Descr: " + game.gameName + " Location: " + game.gameLoca + "<span>");

            // merged original append button with original drop down button
            el.append('<div class="dropdown">' +
                '<input type="text" id = "detailPlay" placeholder="Play"/>' +
               '</div>');

            el.children().last().data("id", game.id);


            el.append('<div class="testDropdown1"> ' +
                '<input type="text" id = "detailPlayer" placeholder="Player"/>' +
                '</div>');

            el.children().last().data("id", game.id);


            el.append('<button class="btn btn-primary submPlay">Submit Play/Player</button>');
            el.children().last().data("id", game.id);

            el.append('<button class="btn btn-warning deleteBtn">Delete</button>');
            el.children().last().data("id", game.id); //Imprints, data-id="game.id" onto the button element


            // el.append('<button id = "viewStat" >View Stats</button>');
            // el.children().last().data("id", game.id);
            //
            // el.append('<button id = "hideStat" >Hide Stats</button>');
            // el.children().last().data("id", game.id);


        }


    }

    function postPlay() {
            $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: "/detail",
            data: JSON.stringify({
                detailPlay: $("#txtPlay").val(),
                detailPlayer: $("#txtPlayer").val()
            }),
            success: function (response) {
                getPlays();
            }
        });

        $("#txtPlay").val("");
        $("#txtPlayer").val("");

    }

    function goGlos(event) {
        event.preventDefault();
        console.log("Go Glossary was clicked")
        window.location.href = 'https://www.socceramerica.com/glossary/';
    }

    function getPlays() {
        console.log("Get Plays")


   }


















