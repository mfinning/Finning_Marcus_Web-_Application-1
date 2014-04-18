/**
 * Created by Marcus Finning on 4/17/14.
 * week 3
 * The Dual part 3
 */
//self exc/

(function(){

   console.log("Lets Fight !!!");

//dom defined
    var villin_text = document.querySelector("#villin").querySelector("p");
    var hero_text = document.querySelector("#hero").querySelector("p");
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