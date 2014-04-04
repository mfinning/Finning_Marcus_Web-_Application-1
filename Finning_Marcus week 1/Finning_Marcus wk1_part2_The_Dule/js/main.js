/**
 * Created by Marcus Finning on 4/2/14.
 * week 1
 * The Dual
 */
//self exc/

(function(){

   console.log("Lets Fight !!!");


    //players

    var fighter1 = ["Hawkeye",20, 100];
    var fighter2 = ["CaptenAmrica",20,100];

    //DMG
    //var player1Damage = 20;
    //var player2Damage = 20;

    //life

   // var playerOneHealth = 100;
    //var playerTwoHealth = 100;

    //counter

    var round=0;

    function fight(){

    //console.log("the fight");
    alert(fighter1+":"+fighter1+" * Fight * "+fighter2+":"+fighter2);

        for (var i=0;i<10;i++)
        {
      //dmg formula Math.floor(Math.random()*(max - min) + min);
            var minDamage1 = fighter1 *.5;
            var minDamage2 = fighter2 *.5;
            var f1 = Math.floor(Math.random()*(fighter1-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighter2-minDamage2)+minDamage2);

            //console.log(f1);
            //console.log(f2);

            //dmg inflicted
            fighter1-=f1;
            fighter2-=f2;

            //console.log(playerOneHealth);
            //console.log(playerTwoHealth);

            console.log(fighter1+":"+fighter1+" "+fighter2+":"+fighter2);

            var result = winnerCheck();
            console.log(result);
            if (result ==="no winner")
            {
                round++;
                alert(fighter1+":"+fighter1+" *ROUND "+round+" OVER"+"* "+fighter2+":"+fighter2);
            } else{
                alert(result);
                break;
            };


        };
    };

    //winchk

    function winnerCheck(){
        //console.log("the winner checkFN")
        var result="no winner";
        console.log(result);

        if(fighter1<1 && fighter2<1)
        {
            result = "no survivers";
          }else if(fighter1<1){
            result = fighter2+" is The Chapinon"
          }else if(fighter2<1)
        {
            result = fighter1+" is The Chapinon"
        }
        return result;
       };

// start
    console.log("program start");
    fight();

})();