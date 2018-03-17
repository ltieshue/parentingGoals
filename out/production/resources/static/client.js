$(document).ready(function () {
    // console.log("This is only a test[###]");
    init();
});
function init(){
    enabled();
    //getGames(); =Active displays entire database upon initial access to screen.
    getGames();

}

function enabled() {
    $("#createGame").on("click", postGame);
    // $("#createGame").on("click", postGame);
    // $("#delGame").on("click","deleteBtn", deleteGame);
    $("#fullGameList").on("click", ".deleteBtn",deleteGame);
    // / Scott's = $("#fullTaskList").on("click", ".deleteBtn", deleteTask);
    // $("#viewHist").on("click", postGame);


}
//postOne function - Lori created to have just the 1 new entry appear of DOM when the
// "Create an Event" button is clicked
// function postOne(){
//     $.ajax({
//         type: "POST",
//         contentType: "application/json; charset=utf-8",
//         dataType: "json",
//         url: "/games",
//         data: JSON.stringify({
//             gameDate: $("#txtDate").val(),
//             gameTime: $("#txtTime").val(),
//             gameName: $("#txtName").val(),
//             gameLoca: $("#txtLoca").val()
//         }),
//         success: function(response){
//             return this.game;
//         }
//     });
//     $("#txtDate").val("");
//     $("#txtTime").val("");
//     $("#txtName").val("");
//     $("#txtLoca").val("");
// }


//AJAX Request
function getGames () {
    // console.log("View History/Get Games")
    $.ajax({
        type: "GET",
        url: "/games",
        success: function (response) {
            appendGames(response._embedded.games);
        }
    });
}
//Lori wants this to go along with 'View History' button

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
            helloMenu();
        }

    });


    $("#txtDate").val("");
    $("#txtTime").val("");
    $("#txtName").val("");
    $("#txtLoca").val("");

}

function helloMenu() {


}



// function deleteGame(){
//    // /console.log("deleteGame");
//     $.ajax({
//         type: "DELETE",
//         url: "/games/" + $(this).data("id"),
//         success: function (response) {
//             getGames();
//         }
//     })
// }

// function playFunc() {
//     document.getElementById("myDropdown1").classList.toggle("show");
//
// }
//
// window.onclick=function (event) {
//     if(!event.target.matches('.dropbtn')){
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i<dropdowns.length; i++){
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')){
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }




///DOM Methods
    function appendGames (gameList) {
        $("#fullGameList").empty();
        for (var i = 0; i < gameList.length; i++) {
            var game = gameList[i];

            $("#fullGameList").append("<div class='container'></div>");
            var el = $("#fullGameList").children().last();
            el.append("<div class='col-md-offset-1'></div>");
            el=el.children().last();
            el.append("<span>" + "Date: " + game.gameDate + " Time: " + game.gameTime + " Descr: " +  game.gameName + " Location: " + game.gameLoca + "<span>");

            el.append('<button id = "dropdownPlay" >Key PlayDD</button>');
            el.children().last().data("id", game.id);

            el.append('<button id = "playName" >Player</button>');
            el.children().last().data("id", game.id);

            el.append('<button id = "viewStat" >View Stats</button>');
            el.children().last().data("id", game.id);

            el.append('<button id = "hideStat" >Hide Stats</button>');
            el.children().last().data("id", game.id);

            el.append("<button class='deleteBtn' >Delete</button>");
            el.children().last().data("id", game.id); //Imprints, data-id="game.id" onto the button element


        }

}

















