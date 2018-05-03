var shotsDrukket = 0;
var idiot = 0;

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

    /* elementer der skal hides*/
    $("#scene2").hide();
    $("#fadetoblack").hide();

    $("#valg").hide();
    $("#valg1_container").hide();
    $("#valg2_container").hide();

    /*baggrunds karakterer*/
    $("#floss_sprite").addClass("floss_dance");
    $("#beerpong_sprite").addClass("beerpong_walkcycle");

    $("#tramp_musik")[0].play();
    $("#tramp_musik")[0].volume = 0.2;
    $("#telefon_container").hide();

    startHistorie();

}


function startHistorie() {
    console.log("startHistorie");

    $("#martin_container").addClass("martin_start_pos");
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

    console.log("ankommet + snak");
    $("#sarafest")[0].play();
    $("#sara_container").off("animationend", ankommet);
    $("#sara_sprite").removeClass("sara_walkcycle");

    $("#sara_sprite").addClass("sara_speakcycle");
    $("#martin_sprite").addClass("martin_speakcycle");

    $("#sarafest").on("ended", saraSidder);

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
    $("#saa_der_shots")[0].play();
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
    $("#sara_container").removeClass("sara_move_entrance");
    $("#sara_container").addClass("sara_sofa_pos");

    $("#sara_sprite").addClass("sara_shirt_off");
    $("#sara_container").on("animationend", saraLigger);



    /*



    Start anim: sara_walk_2

    Start anim: .sara_walkcycle



    */



}



function saraLigger() {
    console.log("saraLigger");

    $("#sara_sprite").removeClass("sara_shirt_off");
    $("#sara_container").off("animationend", saraLigger);

    $("#sara_sprite").addClass("sara_ligger");
    $("#martin_sprite").removeClass("martin_drinkcycle");

    martinReacts();

    /*



    Stop Anim: sara_walkcycle

    Vis:: sara ligger i sofaen

    Start anim: .martin_walkcycle

    Start anim: martin går mod Sara



    */

}



/* VALG, Martin finder Sara på sofaen og skal tage et valg om at stoppe en gæst til festen, da han kan se personen skal til at tage et billede, Han kan vælge imellem at stoppe det via at ringe til privatsnak eller ikke at gøre noget.   */


function martinReacts() {
    console.log("martinReacts");

    $("#martin_sprite").addClass("martin_reacts");
    $("#martin_container").on("animationend", martinValg);



}


function martinValg() {
    console.log("martinValg");
    $("#martin_container").off("animationend", martinValg);

    $("#valg").show();
    $("#valg1_container").show();
    $("#valg2_container").show();

    $("#valg1").addClass("knap_puls1");
    $("#valg2").addClass("knap_puls2");

    $("#valg1_container").on("click", hjaelpValgt);
    $("#valg2_container").on("click", billedeValgt);

}

function hjaelpValgt() {
    console.log("hjaelpValgt");

    $("#martin_sprite").removeClass("martin_reacts");
    $("#valg1_container").off("click", hjaelpValgt);
    $("#valg2_container").off("click", billedeValgt);

    $("#valg1").removeClass("knap_puls1");
    $("#valg2").removeClass("knap_puls2");

    $("#valg").hide();
    $("#valg1_container").hide();
    $("#valg2_container").hide();

    martinHjaelp();
}


function martinHjaelp() {
    console.log("martinHjaelp");

    $("#martin_container").removeClass("martin_start_pos");
    $("#martin_container").addClass("martin_cover_move");
    $("#martin_sprite").addClass("martin_cover");

    setTimeout(saraShirtOn, 2250);


}

function saraShirtOn() {
    console.log("saraShirtOn");

    $("#sara_sprite").removeClass("sara_ligger");
    $("#sara_sprite").addClass("sara_shirt_on");

    setTimeout(fadeToBlack, 3500);
}


function billedeValgt() {
    idiot++;

    console.log("billedeValgt");
    console.log(idiot);


    $("#martin_sprite").removeClass("martin_reacts");
    $("#valg1_container").off("click", hjaelpValgt);
    $("#valg2_container").off("click", billedeValgt);

    $("#valg1").removeClass("knap_puls1");
    $("#valg2").removeClass("knap_puls2");

    $("#valg").hide();
    $("#valg1_container").hide();
    $("#valg2_container").hide();

    martinBillede();

    /*

    Stop anim: martin_walkcycle

    Start anim: martin tager billede

    Stop anim: baggrund_idle

    Start anim: baggrunds_grund

    Start lyd: kamera linse

    Start lyd: baggrunds_grin

    */
}


function martinBillede() {
    console.log("martinBillede");

    $("#martin_sprite").addClass("martin_pic");
    $("#martin_container").on("animationend", martinBilledePos);

}

function martinBilledePos() {
    console.log("martinBilledePos");
    $("#martin_sprite").removeClass("martin_pic");
    $("#martin_container").off("animationend", martinBilledePos);

    $("#martin_sprite").addClass("martin_pic_pos");

    setTimeout(fadeToBlack, 2100);
}


function fadeToBlack() {

    console.log("fadeToBlack");
    $("#fadetoblack").show();


    $("#martin_container").removeClass("martin_cover_move");
    $("#martin_sprite").removeClass("martin_cover");


    $("#martin_container").removeClass("martin_start_pos");
    $("#martin_sprite").removeClass("martin_pic_pos");

    $("#sara_container").removeClass("sara_sofa_pos");
    $("#sara_sprite").removeClass("sara_shirt_on");

    $("#sara_container").hide();
    $("#martin_container").hide();

    setTimeout(dagenEfter, 2000);
    $("#martin_container").addClass("fade_to_black_pos");


    /*



    Vis: Sortskærm med tekst

    2 sek timer



    */


}



function dagenEfter() {
    console.log("dagen efter");

    $("#fadetoblack").hide();
    $("#scene2").show();
    $("#martin_container").show();


    $("#martin_sprite").addClass("sidderISengen");
    $("#iphone")[0].play();
    $("#iphone")[0].volume = 0.1;
    $("#iphone").on("ended", katastrofen);


    /*

    skift baggrund alle objekter skal hides

    alle lyde slutter

    */


}



function katastrofen() {
    console.log("se besked");
    $("#martin_sprite").addClass("martin_morgen");
    $("#martin_sprite").on("animationend", trist);


    /*

    martin reagere

    dramatisk musik

    */



}



function trist() {
    console.log("beskeder");
    $("#martin_sprite").removeClass("martin_morgen");
    $("#telefon_container").show();
    $("#telefon").addClass("telefon_positivt");


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
