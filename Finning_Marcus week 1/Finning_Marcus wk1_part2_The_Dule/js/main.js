/**
 * Created by Marcus Finning on 4/2/14.
 * week 1
 * The Dual part 2
 */
//self exc/

(function(){

   console.log("Lets Fight !!!");


    //players 1

    var Villin = ["Hawkeye", 20,100];

    //player 2
    var Hero = ["CaptenAmrica",20,100];

    //DMG
    //var VillinDamage = 20;
    //var HeroDamage = 20;

    //life

    //var playerOneHealth = 100;
    //var playerTwoHealth = 100;

    //counter

    var round=0;

    function fight(){

    console.log("the fight");
    alert(Villin+":"+Villin+" * Fight * "+Hero+":"+Hero);

        for (var i=0;i<10;i++)
        {
      //dmg formula Math.floor(Math.random()*(max - min) + min);
            var minDamage1 = Villin *.5;
            var minDamage2 = Hero *.5;
            var f1 = Math.floor(Math.random()*(Villin-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(Hero-minDamage2)+minDamage2);

            //console.log(f1);
            //console.log(f2);

            //dmg inflicted
            VillinHealth-=f1;
            HeroHealth-=f2;

            //console.log(playerOneHealth);
            //console.log(playerTwoHealth);

            //console.log(Villin+":"VillinHealth+" "+Hero+":"+HeroHealth);

            var result = winnerCheck();
            console.log(result);
            if (result ==="no winner")
            {
                round++;
                alert(Villin+":"+VillinHealth+" *ROUND "+round+" OVER"+"* "+Hero+":"+HeroHealth);
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

        if(VillinHealth<1 && HeroHealth<1)
        {
            result = "no survivers";
          }else if(VillinHealth<1){
            result = Hero+" is The Chapinon"
          }else if(HeroHealth<1)
        {
            result = Villin+" is The Chapinon"
        }
        return result;
       };

// start
    console.log("program start");
    fight();

})();