var shotsDrukket = 0;

$(window).on("load", startSkaerm);





/*



Elementer:

scene

baggrundsgaester

sara_walk_1

sara_walkcycle

sara_speakcycle

martin_speakcycle









animationer:



baggrundsgaester

sara_walk_1

sara_walkcycle

sara_speakcycle

martin_speakcycle

tomt_shotglas

baggrunds_grin

baggrunds_idle




lyd:


tekno_musik

mumlesnak



*/



function startSkaerm() {

    console.log("startSkaerm");

    /* her skal der være en startskærm + knap til at starte historien*/
    $("#scene2").hide();

    $("#floss_sprite").addClass("floss_dance");
    $("#beerpong_sprite").addClass("beerpong_walkcycle");

    startHistorie();


}


function startHistorie() {
    console.log("startHistorie");

    $("#sara_container").addClass("sara_move_entrance");
    $("#sara_sprite").addClass("sara_walkcycle");

    $("#sara_container").on("animationend", ankommet);

    /*

	teknomusik begynder

	start anim: af scene, baggrundgaester

	start anim: sara kommer ind via .sara_walk_1

	start anim: .sara_walkcycle



	*/

}



function ankommet() {
    console.log("ankommet");

    $("#sara_container").off("animationend", ankommet);
    $("#sara_sprite").removeClass("sara_walkcycle");

    $("#sara_sprite").addClass("sara_speakcycle");
    $("#martin_sprite").addClass("martin_speakcycle");


    setTimeout(saraSidder, 10000);
    /*



    Stop anim: sara_walkcycle

    Start anim: sara_speakcycle

    Start anim: martin_speakcycle

    Start lyd: #mumlesnak



    */

}



function saraSidder() {
    console.log("saraSidder");

    $("#sara_sprite").removeClass("sara_speakcycle");
    $("#martin_sprite").removeClass("martin_speakcycle");

    $("#sara_sprite").addClass("sara_sidder");
    $("#martin_sprite").addClass("martin_drinkcycle");

    kanKlikke();

    /*



   Man kan klikke på shots via on click

   Vis: shotsglas via .Show

   Stop anim: sara_speakcycle

   Stop anim: martin_speakcycle



   */



}

function kanKlikke() {
    console.log("kanKlikke");

    $(".shot").addClass("shot_puls");
    $(".shot").on("click", klikPaaShot);

}

function klikPaaShot() {
    $(this).hide();
    shotsDrukket++;
    console.log("Der er blevet drukket " + shotsDrukket + " shots");


    $(".shot").removeClass("shot_puls");
    $(".shot").off("click", klikPaaShot);

    $("#sara_sprite").addClass("sara_drink");
    $("#sara_container").on("animationend", taeller);
}

function taeller() {
    console.log("taeller, der er blevet drukket et shot");

    if (shotsDrukket == 1) {
        console.log("Der er blevet drukket 3 shots! if statement opfyldt");
        $("#sara_sprite").removeClass("sara_drink");
        $("#sara_container").off("animationend", taeller);

        saraBesvimer();

    } else {
        console.log("Drik flere shots");
        $("#sara_sprite").removeClass("sara_drink");
        $("#sara_container").off("animationend", taeller);

        kanKlikke();
    }


    /*



    Tæl antal shots +1

    Show tomt_shotsflas

    Start lyd: slurp

    Start anim: Sara drikker

    Valg: Er der taget 7 shots?



    */

}



function saraBesvimer() {
    console.log("saraBesvimer");

    $("#sara_sprite").removeClass("sara_sidder");
    $("#sara_container").addClass("sara_sofa_pos");

    $("#sara_sprite").addClass("sara_shirt");
    $("#sara_container").on("animationend", saraLigger);



    /*



    Start anim: sara_walk_2

    Start anim: .sara_walkcycle



    */



}



function saraLigger() {
    console.log("saraLigger");

    $("#sara_sprite").removeClass("sara_shirt");
    $("#sara_container").off("animationend", saraLigger);

    $("#sara_sprite").addClass("sara_ligger");
    $("#martin_sprite").removeClass("martin_drinkcycle");

    martinValg();

    /*



    Stop Anim: sara_walkcycle

    Vis:: sara ligger i sofaen

    Start anim: .martin_walkcycle

    Start anim: martin går mod Sara



    */

}



/* VALG, Martin finder Sara på sofaen og skal tage et valg om at stoppe en gæst til festen, da han kan se personen skal til at tage et billede, Han kan vælge imellem at stoppe det via at ringe til privatsnak eller ikke at gøre noget.   */


function martinValg() {
    console.log("martinValg");

    $("#martin_sprite").addClass("martin_reacts");


}


function martinTagerbillede() {

    /*

    Stop anim: martin_walkcycle

    Start anim: martin tager billede

    Stop anim: baggrund_idle

    Start anim: baggrunds_grund

    Start lyd: kamera linse

    Start lyd: baggrunds_grin



    */



}



function fadeToBlack() {

    /*



    Vis: Sortskærm med tekst

    2 sek timer



    */

}



function dagenEfter() {

    /*

    skift baggrund alle objekter skal hides

    alle lyde slutter

    */

}



function katastrofen() {

    /*

    martin reagere

    dramatisk musik

    */



}



function trist() {

    /*



    Stop anim: martin_reagere

    Start anim: martin_grader

    start lyd: graeder



    */



}



function privatSnak() {

    /*

    martin_grader

    Show PrivatSnak telefon med link



    */



}
