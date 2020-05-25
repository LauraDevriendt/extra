/* ----- Variables ----- */
/* buttons */
incrementButton = document.getElementById("increment-btn");
multiplierButton = document.getElementById("multiplier-button");
grannyButton = document.getElementById('granny-button')
bonusButton = document.getElementById('bonus-button')

/* other elements in DOM */
h2Cookies = document.getElementById("numberOfCookies");

multiplierItem = document.getElementById("multiplierFrequency");
multiplierPriceSetting = document.getElementById('multiplierPriceSetting');

grannyItem = document.getElementById("grannyFrequency");
grannyPriceSetting = document.getElementById('grannyPriceSetting');
perSecond = document.getElementById('perSecond');

bonusItem = document.getElementById("bonusFrequency");
bonusPriceSetting = document.getElementById('bonusPriceSetting');

timerSeconds = document.getElementById("countdown");

/* ----- functions ------*/

/* Increment cookie by 1 */
incrementButton.addEventListener("click",increment);

function increment() {
    let clicks = parseInt(multiplierItem.dataset.number_of_multiplier) + 1;

    if (timerSeconds.dataset.timerRunning === true) {
        clicks *= 2;
    }

    h2Cookies.dataset.number_of_cookies= parseInt(h2Cookies.dataset.number_of_cookies) + clicks;

    h2Cookies.innerHTML = `Number of cookies: ${h2Cookies.dataset.number_of_cookies}`;
   
};



/* buy multiplier */
multiplierButton.addEventListener("click", buyMultiplier);

function buyMultiplier (){
    
    if(h2Cookies.dataset.number_of_cookies<parseInt(multiplierPriceSetting.dataset.multiplier_price)){
        alert(" you can't buy this item yet, get more cookies");
        return
    };

      /* readjusting cookies value */
      h2Cookies.dataset.number_of_cookies-=parseInt(multiplierPriceSetting.dataset.multiplier_price);
      h2Cookies.innerHTML = `number of cookies: ${h2Cookies.dataset.number_of_cookies}`;
    //   multiplierItem.dataset.number_of_multiplier = parseInt(multiplierItem.dataset.number_of_multiplier)+1;
        /*
            // ! multiplierItem.dataset.number_of_multiplier = parseInt(multiplierItem.dataset.number_of_multiplier)++; 
            ? eerst in variable steken en dan kan dit wel zonder problemen 
        */   
      increment();
      /* display in bought sections bought item */
     multiplierItem.innerHTML = `${multiplierItem.dataset.number_of_multiplier}`
      /* making price more expensive */
      multiplierPriceSetting.dataset.multiplier_price = parseInt(multiplierPriceSetting.dataset.multiplier_price)+30;
      multiplierPriceSetting.innerHTML = `${multiplierPriceSetting.dataset.multiplier_price} cookies`



};

/* buy granny */
grannyButton.addEventListener("click", buyGranny);

function buyGranny (){
    if(h2Cookies.dataset.number_of_cookies<parseInt(grannyPriceSetting.dataset.granny_price)){
        alert(" you can't buy this item yet, get more cookies");
        return
    }
     /* readjusting cookies value */
     h2Cookies.dataset.number_of_cookies-=parseInt(grannyPriceSetting.dataset.granny_price);
     grannyCookieMaker();
     h2Cookies.innerHTML = `number of cookies: ${h2Cookies.dataset.number_of_cookies}`

     /* display in bought sections bought item */
     grannyItem.dataset.number_of_granny = parseInt(grannyItem.dataset.number_of_granny)+1;
     grannyItem.innerHTML = `${grannyItem.dataset.number_of_granny}`

     /* making price more expensive */
     grannyPriceSetting.dataset.granny_price = parseInt(grannyPriceSetting.dataset.granny_price)+30;
      grannyPriceSetting.innerHTML = `${grannyPriceSetting.dataset.granny_price} cookies`

};

/*  granny makes cookies automatically */
function grannyCookieMaker(){
    let perSecondValue = 0;
    perSecondValue++;
    setInterval(() => {
     incrementButton.click(); 
    }, 1000);
    if(perSecondValue<=1){
        perSecond.innerHTML=`per second: ${perSecondValue} cookie more by granny`
    }else{
    perSecond.innerHTML=`per second: ${perSecondValue} cookies more by granny`
    }  
 }

/* buy bonus */

bonusButton.addEventListener("click", buyBonus);

function buyBonus (){
    console.log('click')
    if(h2Cookies.dataset.number_of_cookies<parseInt(bonusPriceSetting.dataset.bonus_price)){
        alert(" you can't buy this item yet, get more cookies");
        return
    };    
     /* readjusting cookies value */
     h2Cookies.dataset.number_of_cookies-=parseInt(bonusPriceSetting.dataset.bonus_price);
     h2Cookies.innerHTML = `number of cookies: ${h2Cookies.dataset.number_of_cookies}`;    
     booster();
     /* display in bought sections bought item */
     bonusItem.dataset.number_of_bonus = parseInt(bonusItem.dataset.number_of_bonus)+1;
     bonusItem.innerHTML = `${bonusItem.dataset.number_of_bonus}`

     /* making price more expensive */
     bonusPriceSetting.dataset.bonus_price = parseInt(bonusPriceSetting.dataset.bonus_price)+30;
     bonusPriceSetting.innerHTML = `${bonusPriceSetting.dataset.bonus_price} cookies`


};

function booster(){
    let seconds=5;
var countdown = setInterval(function() {
        timerSeconds.dataset.timerRunning=true; 
        seconds--;
        timerSeconds.textContent = `00:${seconds}`;
        increment();
        console.log(timerSeconds.dataset.timerRunning)
        if (seconds === 0){
            clearInterval(countdown);
            seconds=5;
            timerSeconds.dataset.timerRunning=false;
            console.log(timerSeconds.dataset.timerRunning)
        } ;
        
    }, 1000); 

    
}




