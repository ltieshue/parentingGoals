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
    // $("#hideDet").on("click", hideDetail);
    $("#goHome").on("click", gohome);
    $("#goSoccer").on("click", toSoccer);
    $("#goDance").on("click", toDance);

    $("#postADance").on("click", postOneDance);
    $("#createDance").on("click", postDance);
    $("#viewDance").on("click", getDances);
    $("#fullDanceList").on("click", ".deleteBtnD", deleteDance);
    $("#navGlosD").on("click", goGlosD);
    $("#submDance").on("click", postDance);






   }

    function gohome() {
        window.location.href = "/";
    }

   function toSoccer() {
       window.location.href = "index";

   }

    function toDance() {
        window.location.href = "dance";

    }



//postOneGame function - Lori created to have just the 1 new entry appear of DOM when the
// 'postAGame' button is clicked but is not working
function postOneGame(event){
    event.preventDefault();
    console.log("Post One Game")
    console.log('game.List[0]')
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
function appendGame(){
    $("#fullGameList").empty();
        $("#fullGameList").append("<div class='container'></div>");

    var ell = this.data;

        ell.append("<div class='col-md-10 col-md-offset-1'></div>");
        ell.append("<span>" + "Date: " + this.data.gameDate + " Time: " + this.data.gameTime + " Descr: " + this.data.gameName + " Location: " + this.data.gameLoca + "<span>");

        // merged original append button with original drop down button
        ell.append('<div class="dropdown">' +
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

        ell.last().data("id", this.data.id);


        ell.append('<div class="testDropdown1"> ' +
            '<select id="list2" class="custom-select" onchange="postOneGame()">' +
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


        ell.last().data("id", this.data.id);


        ell.append('<button class="btn btn-primary submPlay">Submit Play/Player</button>');
        ell.last().data("id", this.id);

        ell.append('<button class="btn btn-warning deleteBtn">Delete</button>');
        ell.last().data("id", this.id); //Imprints, data-id="game.id" onto the button element


}

///DOM Methods
    function appendGames(gameList) {
        $("#fullGameList").empty();
        for (var i = 0; i < gameList.length; i++) {
            var game = gameList[i];

            $("#fullGameList").append("<div class='container'></div>");
            var el = $("#fullGameList").children().last();

            el.append("<div class='col-md-10'></div>");
            el = el.children().last();
            el.append("<span>" + "Date: " + game.gameDate + " Time: " + game.gameTime + " Descr: " + game.gameName + " Location: " + game.gameLoca + "     " + "<span>");

            el.append('<button class="btn btn-warning deleteBtn">Delete Game</button>');
            el.children().last().data("id", game.id); //Imprints, data-id="game.id" onto the button element


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

            el.children().last().data("id", game.id);


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


            el.children().last().data("id", game.id);

            el.append('<button class="btn btn-primary submPlay">Submit Play/Player</button>');
            el.children().last().data("id", game.id);



            // el.append('<button id = "viewStat" >View Stats</button>');
            // el.children().last().data("id", game.id);
            //
            // el.append('<button id = "hideStat" >Hide Stats</button>');
            // el.children().last().data("id", game.id);


        }


    }

    function postPlay() {
        var selectedValue = document.getElementById("list").value;
        console.log(selectedValue);


        var selectedValue = document.getElementById("list2").value;
        console.log(selectedValue);



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
                // getPlays();
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
//
//

//postOneDance function - Lori created to have just the 1 new entry appear of DOM when the
// 'postADance' button is clicked but is not working
function postOneDance(event){
    event.preventDefault();
    console.log("Post One Dance")
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: "/dances",
        data: JSON.stringify({
            danceDate: $("#txtDateD").val(),
            danceTime: $("#txtTimeD").val(),
            danceName: $("#txtNameD").val(),
            danceLoca: $("#txtLocaD").val()
        }),
        success: function(response){
            console.log("Post response" + response);
            console.log("this data" + this.data);
            appendDance();

        }
    });
    $("#txtDateD").val("");
    $("#txtTimeD").val("");
    $("#txtNameD").val("");
    $("#txtLocaD").val("");
}


//AJAX Request
function getDances () {
    console.log("View History/Get Dances")
    $.ajax({
        type: "GET",
        url: "/dances",
        success: function (response) {
            appendDances(response._embedded.dances);
        }
    });
}




function deleteDance (){
    console.log("deleteDance")
    $.ajax({
        type: "DELETE",
        url: "/dances/" + $(this).data("id"),
        success: function (response) {
            getDances();
        }
    });
}
///DOM Methods - NOTE: the appendDance NOT posting anything to the DOM (as of 3/29/18)
function appendDance(danceList){
    console.log("Append Dance")
    $("#danceOne").empty();
    // for (var i = 0; i ==danceList.length; i++) {
    //     var dance = danceList[i];

    for (var i = 0; i < danceList.length; i++) {
        var dance = danceList[i];


        $("#danceOne").append("<div class='container'></div>");
        var el = $("#danceOne").last();

        el.append("<div class='col-md-10 col-md-offset-1'></div>");
        el = el.last();
        el.append("<span>" + "Date: " + game.gameDate + " Time: " + game.gameTime + " Descr: " + game.gameName + " Location: " + game.gameLoca + "<span>");

        // merged original append button with original drop down button
        el.append('<div class="dropdownD">' +
            '<select id="listD" class="custom-select">' +
            '<option value="Level">Level </option>' +
            '<option value="Bad">Bad </option>' +
            '<option value="Good">Good </option>' +
            '<option value="Great">Great</option>' +
            '<option value="Awesome">Awesome</option>' +
           '</select>' +
            '</div>');

        el.last().data("id", dance.id);


        el.append('<div class="testDropdownD"> ' +
            '<select id="list2D" class="custom-select" onchange="postOneDance">' +
            '<option value="Dancer">Select Dancer </option>' +
            '<option value="Alex" >Alex</option>' +
            '<option value="Jane" >Jane</option>' +
            '<option value="Mary" >Mary</option>' +
            '<option value="Susan">Susan</option>' +
            '</select>' +
            '</div>');


        el.last().data("id", dance.id);


        el.append('<button class="btn btn-primary submDance">Submit Level/Dancer</button>');
        el.last().data("id", dance.id);

        el.append('<button class="btn btn-warning deleteBtnD">Delete</button>');
        el.last().data("id", dance.id); //Imprints, data-id="dance.id" onto the button element

    }
}

///DOM Methods
function appendDances(danceList) {
    $("#fullDanceList").empty();
    for (var i = 0; i < danceList.length; i++) {
        var dance = danceList[i];

        $("#fullDanceList").append("<div class='container'></div>");
        var el = $("#fullDanceList").children().last();

        el.append("<div class='col-md-10'></div>");
        el = el.children().last();
        el.append("<span>" + "Date: " + dance.danceDate + " Time: " + dance.danceTime + " Descr: " + dance.danceName + " Location: " + dance.danceLoca + "     " + "<span>");

        el.append('<button class="btn btn-warning deleteBtnD">Delete</button>');
        el.children().last().data("id", dance.id); //Imprints, data-id="dance.id" onto the button element


        // merged original append button with original drop down button
        el.append('<div class="entryField2">' +
            '<input type="text" id = "attitudeDance" placeholder="Dance"/>' +
            '</div>');

        el.children().last().data("id", dance.id);


        el.append('<div class="entryField2"> ' +
            '<input type="text" id = "attitudeDancer" placeholder="Dancer"/>' +
            '</div>');
        el.children().last().data("id", dance.id);

        el.append('<button class="btn btn-primary submDance">Submit Level/Dancer</button>');
        el.children().last().data("id", dance.id);

    }


}

function postDance() {
    var selectedValue = document.getElementById("listD").value;
    console.log(selectedValue);

    var selectedValue = document.getElementById("list2D").value;
    console.log(selectedValue);


    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: "/detailD",
        data: JSON.stringify({
            attitudeDance: $("#txtAttitudeDance").val(),
            attitudeDancer: $("#txtAttitudeDancer").val()
        }),
        success: function (response) {
            getDances();
        }
    });

    $("#txtAttitudeDance").val("");
    $("#txtAttitudeDancer").val("");

}


function goGlosD(event) {
    event.preventDefault();
    console.log("Go D Glossary was clicked")
    window.location.href = 'http://www.centralhome.com/ballroomcountry/dance_terms.htm';
}

    function getAttitudeDances() {
        console.log("Get Detail Dances");


   }












        // function hideDetail(gameList) {
        //     console.log("Hide Detail was clicked")
        //     $("#fullGameList").empty();
        //     for (var i = 0; i < gameList.length; i++) {
        //         var game = gameList[i];
        //
        //         $("#fullGameList").append("<div class='container'></div>");
        //         var el = $("#fullGameList").children().last();
        //
        //         el.append("<div class='col-md-10'></div>");
        //         el = el.children().last();
        //         el.append("<span>" + "Date: " + game.gameDate + " Time: " + game.gameTime + " Descr: " + game.gameName + " Location: " + game.gameLoca + "     " + "<span>");
        //
        //         el.append('<button class="btn btn-warning deleteBtn">Delete Game</button>');
        //         el.children().last().data("id", game.id); //Imprints, data-id="game.id" onto the button element
        //
        //     }
        // }

















