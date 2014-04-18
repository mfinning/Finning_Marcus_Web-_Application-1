/**
 * Created by Marcus Finning on 4/17/14.
 * week 3
 * The Dual part 3
 */
//self exc/

(function(){

   console.log("Lets Fight !!!");

//dom defined
    var fighter1_text = document.querySelector("#kratos").querySelector("p");//query select fighter 1
    var fighter2_text = document.querySelector("#kabal").querySelector("p");// query select fighter 2
    var round_txt = document.querySelector("h4");       //round indacater
    var buttion = document.getElementById("fight_btn"); //buttion selelct

    console.log()

    // click event setup
    buttion.addEventListener("click", fight, false);

    //fighter array
    var fighters =[
        {
            name:"Hawkeye",
            damage:20,
            health:100
            },
        {
            name:"CaptenAmrica",
            damage:20,
            health:100
        }];
    var round = 1;

    //dom start for html inner
    round_txt.innerHTML="Click To Start The Fight";
    fighter1_text.innerHTML = fighters[0].name + ":" + fighters[2].health;
    fighter2_text.innerHTML = fighters[0].name + ":" + fighters[2].health;



    function fight(){

    //console.log("the fight");
   // alert(villin[0]+":"+villin[2]+" * Fight * "+hero[0]+":"+hero[2]);


        fighter1_text.innerHTML = fighters[0].name + ":" + fighters[2].health;
        fighter2_text.innerHTML = fighters[0].name + ":" + fighters[2].health;

        //for (var i=0;i<10;i++)

      //dmg formula Math.floor(Math.random()*(max - min) + min);

            var f1 = Math.floor(Math.random() * (fighters[1].damage + fighters[1].damage * .5);
            var f2 = Math.floor(Math.random() * (fighters[1].damage + fighters[1].damage * .5);

           // console.log(f1);
            //console.log(f2);

            //dmg inflicted
            fighters[2].health -= f1;
            fighters[2]. health -= f2;

           // console.log(playerOneHealth);
           // console.log(playerTwoHealth);

            console.log(fighters[0].health, fighters[1].health);

            var result = winnerCheck();
            console.log(result);

            round_txt.innerHTML = "Round" + round + "complete";

            if (result ==="no winner")
            {
                fighter1_text.innerHTML = fighters[0].name + ":" + fighters[0].health;
                fighter2_text.innerHTML = fighters[1].name + ":" + fighters[1].health;


            } else{
                fighter1_text.innerHTML = result;
                fighter2_text.innerHTML = "";
                 // buttion diabled
                buttion.removeEventListener("click", fight(), false);

                document.querySelector('.buttionblue').innerHTML = 'Done!!!';
            };



    };

    //winchk

    function winnerCheck(){
       // console.log("the winner checkFN")
        var result="no winner";
       // console.log(result);

        if(fighters[0].health <1 && fighters[1].health <1)
        {
            result = "no survivers";
          }else if(fighters[0].health < 1){
            result = fighters[1].name +" is The Chapinon"
          }else if(fighters[1].health < 1)
        {
            result = fighters[0].name +" is The Chapinon"
        }
        return result;
       };

// start
    console.log("program start");
    fight();

})();