/**
 * Created by Marcus Finning on 4/2/14.
 * week 1
 * The Dual
 */
//self exc/

(function(){

   console.log("it works so far");


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

    var round=1;

    function fight(){

    console.log("the fight");

    alert(playerOneName+":"+playerOneHealth+"*Fight*"+playerTwoName+":"+playerTwoHealth);

        for (var i=0;i<10;i++){


         //dmg formula Math.floor(Math.random()*(max - min) + min);
            var minDamage1 = player1Damage *.5;
            var minDamage2 = player2Damage *.5;
            var f1 = Math.floor(math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(math.random()*(player2Damage-minDamage2)+minDamage2);

            console.log(f1);
            console.log(f2);

            //dmg inflicted

          play
        };
    };

    //winchk

    function winnerCheck(){

    };

// start
    console.log("program start");
    fight();

})();