/**
 * Created by Marcus Finning on 4/17/14.
 * week 3
 * The Dual part 3
 */
//self exc/

(function(){

   console.log("Lets Fight !!!");

//dom defined
    var fighter1_text = document.querySelector("#villin").querySelector("p");//query select fighter 1
    var fighter2_text = document.querySelector("#hero").querySelector("p");// query select fighter 2
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
            name:CaptenAmrica,
            damage:20,
            health:100
        }];
    var round = 1;

    //dom start for html inner
    round_txt.innerHTML="Click To Start The Fight";
    fighter1_text.innerHTML = fighters[0].name + ":" + fighters[0].health;
    fighter2_text.innerHTML = fighters[1].name + ":" + fighters[1].health;




    //players

    var villin = ["Hawkeye",20,100];
    var hero   = ["CaptenAmrica",20,100];

    //DMG
    //var player1Damage = 20;
    //var player2Damage = 20;

    //life

   //var playerOneHealth = 100;
   //var playerTwoHealth = 100;

    //counter

    var round=0;

    function fight(){

    //console.log("the fight");
    alert(villin[0]+":"+villin[2]+" * Fight * "+hero[0]+":"+hero[2]);

        for (var i=0;i<10;i++)
        {
      //dmg formula Math.floor(Math.random()*(max - min) + min);
            var minDamage1 = villin[1] * .5;
            var minDamage2 = hero[1] * .5;
            var f1 = Math.floor(Math.random()*(villin[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(hero[1]-minDamage2)+minDamage2);

           // console.log(f1);
            //console.log(f2);

            //dmg inflicted
            villin[2]-=f1;
            hero[2]-=f2;

           // console.log(playerOneHealth);
           // console.log(playerTwoHealth);

            console.log(villin[2]+" "+hero[2]);

            var result = winnerCheck();
            console.log(result);
            if (result ==="no winner")
            {
                round++;
                alert(villin[0]+":"+villin[2]+" *ROUND "+round+" OVER"+"* "+hero[0]+":"+hero[2]);
            } else{
                alert(result);
                break;
            };


        };
    };

    //winchk

    function winnerCheck(){
       // console.log("the winner checkFN")
        var result="no winner";
       // console.log(result);

        if(villin[2]<1 && hero[2]<1)
        {
            result = "no survivers";
          }else if(villin[2]<1){
            result = hero[0]+" is The Chapinon"
          }else if(hero[2]<1)
        {
            result = villin[0]+" is The Chapinon"
        }
        return result;
       };

// start
    console.log("program start");
    fight();

})();