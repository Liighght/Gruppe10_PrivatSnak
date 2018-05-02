<<<<<<< HEAD

=======
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
    $("#martin_sprite2").hide();
    $("#sara_sprite2").hide();
    $("#sara_sprite3").hide();


}


function startHistorie() {



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

    $("#sara_container").removeClass("sara_move_entrance");

    $("#sara_sprite").removeClass("sara_walkcycle");

    /*



    Stop anim: sara_walkcycle

    Start anim: sara_speakcycle

    Start anim: martin_speakcycle

    Start lyd: #mumlesnak



    */

}



function shots() {

    /*



   Man kan klikke på shots via on click

   Vis: shotsglas via .Show

   Stop anim: sara_speakcycle

   Stop anim: martin_speakcycle



   */



}



function taeller() {

    /*



    Tæl antal shots +1

    Show tomt_shotsflas

    Start lyd: slurp

    Start anim: Sara drikker

    Valg: Er der taget 7 shots?



    */

}



function saraFaarDetDaarligt() {

    /*



    Start anim: sara_walk_2

    Start anim: .sara_walkcycle



    */



}



function saraBesvimer() {

    /*



    Stop Anim: sara_walkcycle

    Vis:: sara ligger i sofaen

    Start anim: .martin_walkcycle

    Start anim: martin går mod Sara



    */

}



/* VALG, Martin finder Sara på sofaen og skal tage et valg om at stoppe en gæst til festen, da han kan se personen skal til at tage et billede, Han kan vælge imellem at stoppe det via at ringe til privatsnak eller ikke at gøre noget.   */





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
>>>>>>> origin/master
