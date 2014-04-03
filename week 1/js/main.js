/**
 * Created by Marcus Finning on 4/2/14.
 * week 1
 * The Dual
 */
//self exc/

(function(){

   console.log("Lets Fight !!!");


    //players

    var playerOneName = "Hawkeye";
    var playerTwoName = "Captenamrica";

    //DMG
    var player1Damage = 20;
    var player2Damage = 20;

    //life

    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //counter

    var round=0;

    function fight(){

    //console.log("the fight");
    alert(playerOneName+":"+playerOneHealth+" * Fight * "+playerTwoName+":"+playerTwoHealth);

        for (var i=0;i<10;i++)
        {
      //dmg formula Math.floor(Math.random()*(max - min) + min);
            var minDamage1 = player1Damage *.5;
            var minDamage2 = player2Damage *.5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //console.log(f1);
            //console.log(f2);

            //dmg inflicted
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            //console.log(playerOneHealth);
            //console.log(playerTwoHealth);

            console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth);

            var result = winnerCheck();
            console.log(result);
            if (result ==="no winner")
            {
                round++;
                alert(playerOneName+":"+playerOneHealth+" *ROUND "+round+" OVER"+"* "+playerTwoName+":"+playerTwoHealth);
            } else{
                alert(result);
                break;
            }


        };
    };

    //winchk

    function winnerCheck(){
        //console.log("the winner checkFN")
        var result="no winner";
        console.log(result);

        if(playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "no survivers";
          }else if(playerOneHealth<1){
            result = playerTwoName+" is The Chapinon"
          }else if(playerTwoHealth<1)
        {
            result = playerOneName+" is The Chapinon"
        }
        return result;
       };

// start
    console.log("program start");
    fight();

})();