
// Dom variables
let displayTime =document.getElementById('time'),
    displayMoney =document.getElementById('money'),
    displayDevSkill =document.getElementById('dev-skill'),
    displayHappiness =document.getElementById('happiness'),
    displayProjectPoints =document.getElementById('project-points'),
    buttonWork =document.getElementById('work'),
    buttonStudy = document.getElementById('study'),
    buttonLesuire = document.getElementById('lesuire'),
    buttonSleep = document.getElementById('sleep'),
    buttonProject = document.getElementById('project'),
    buttonNewGame = document.getElementById('new-game'),
    upgradeButton1 = document.getElementById('upgrade-button-1'),
    upgradeButton2 = document.getElementById('upgrade-button-2'),
    upgradeButton3 = document.getElementById('upgrade-button-3'),
    upgradeStatusView = document.getElementById('upgrade-status');


    // Game variables
let date= new Date(2019, 0, 1, 0),
    money = 100,
    devSkill = 0,
    happiness = 50,
    time='',
    projectPoints = 0,
    lowMoneyWarning = 0,
    lowHappinessWarning = 0,
    upgradesAvailable = ['Align Text', 'Add Low Money Warning','Add Low Happiness Warning','other upgrade','turn into minecraft'],
    upgradeCost = 10;

    
//Upgrade Functions
function alignText(){
        document.getElementsByTagName('style')[0].innerHTML =
            'html, body {'+
                'height: 100%;'+
            '}'+    
            'html {'+
                'display: table;'+
                'margin: auto;'+
            '}'+
            
            'body {'+
                'display: table-cell;'+
                'vertical-align: middle;'+
            '}';
}

function lowHappinessWanrningFn(){
    lowHappinessWarning =1;
}

function lowMoneyWarningFn(){
lowMoneyWarning = 1;
}



function upgradeFunction(upgrade){
    switch(upgrade) {
        case 'Align Text':
         return alignText();
          break;
        case 'Add Low Money Warning':
          return lowMoneyWarningFn();
          break;
        case 'Add Low Happiness Warning':
          return lowHappinessWanrningFn();
        default:
          // code block
      };
};



function updateStats (){
    if(happiness>100) happiness =100;
    time = date.toDateString();    
    displayTime.innerHTML= 'Time: '+time;
    displayMoney.innerHTML= 'Money: €'+money;
    displayMoney.style.color= 'black';
    displayDevSkill.innerHTML= 'Coding Skill Level: '+devSkill;
    displayHappiness.innerHTML= 'Happiness:' +happiness+'%';
    displayHappiness.style.color= 'black';
    displayProjectPoints.innerHTML= 'Project points to spend: ' +projectPoints;

    buttonLesuire.style.display = 'inline';
    buttonProject.style.display = 'inline';
    buttonStudy.style.display = 'inline';
    buttonWork.style.display = 'inline';
    buttonNewGame.style.display ='none';

    if(projectPoints) {document.getElementById('spend-points').innerHTML= 'Now that you have Project points, you can spend them upgrading your project! <br/> Upgrades available:';
    upgradeButton1.style.display ='inline';
    upgradeButton1.innerHTML =upgradesAvailable[0]+', Cost : '+upgradeCost+'points';
    upgradeButton2.style.display ='inline';
    upgradeButton2.innerHTML =upgradesAvailable[1]+', Cost : '+upgradeCost+'points';
    upgradeButton3.style.display ='inline';
    upgradeButton3.innerHTML =upgradesAvailable[2]+', Cost : '+upgradeCost+'points';
    };


    if(money<=0) {
        alert('Your money reached 0, you loose');
        buttonLesuire.style.display = 'none';
        buttonProject.style.display = 'none';
        buttonStudy.style.display = 'none';
        buttonWork.style.display = 'none';
        document.getElementById('today').innerText= 'GAME OVER';
        buttonNewGame.style.display ='inline';
        upgradeButton1.style.display ='none';
        upgradeButton2.style.display ='none';
        upgradeButton3.style.display ='none';
        document.getElementById('spend-points').style.display='none';
        upgradeStatusView.style.display='none';
    };

    if(happiness<=0) {
        alert('Your happiness reached 0, you loose');
        buttonLesuire.style.display = 'none';
        buttonProject.style.display = 'none';
        buttonStudy.style.display = 'none';
        buttonWork.style.display = 'none';
        document.getElementById('today').innerText= 'GAME OVER';
        buttonNewGame.style.display ='inline';
        upgradeButton1.style.display ='none';
        upgradeButton2.style.display ='none';
        upgradeButton3.style.display ='none';
        document.getElementById('spend-points').style.display='none';
        upgradeStatusView.style.display='none';
    };
   
    
    if(lowHappinessWarning){
        if(happiness<20){
            document.getElementById('happiness').style.color='red';
            document.getElementById('happiness').textContent += " WARNING! low happiness, take some time for yourself!";
    };}; 

    if(lowMoneyWarning){
        if(money<150){
            document.getElementById('money').style.color='red';
            document.getElementById('money').textContent += " WARNING! low money, go back to work!";
    };}; 
};

document.body.addEventListener( 'click', function ( event ) {
    if( event.srcElement.id == 'work' ) {
        money += 200;
        happiness += -10;
        devSkill += 0;
        projectPoints +=0;              
        date.setDate(date.getDate()+1); 
        updateStats();
    };

    if(event.srcElement.id =='study'){
        money += -50;
        happiness += -2;
        devSkill += 8;
        projectPoints +=0;
        date.setDate(date.getDate()+1);  
        updateStats();  
    };

    if(event.srcElement.id =='lesuire'){
        money += -50;
        happiness += 25;
        devSkill += 0;
        projectPoints +=0;
        date.setDate(date.getDate()+1);   
        updateStats();
    };

    if(event.srcElement.id =='project'){
        money += -50;
        happiness += -2;
        devSkill += 2;
        projectPoints += devSkill;
        date.setDate(date.getDate()+1);    
        updateStats();
    };

    if(event.srcElement.id =='new-game'){
        location.reload();
        return;
    };    

    if(event.srcElement.id =='upgrade-button-1'){
        if(projectPoints>upgradeCost){
          upgradeFunction(upgradesAvailable[0]);
          upgradesAvailable.shift();
          projectPoints -=upgradeCost;
          upgradeCost *= 10;
          upgradeStatusView.innerHTML='Success! Upgraded!';
          upgradeStatusView.style.color='green';          
        }  else {
            upgradeStatusView.innerHTML='Not enough Project Points, do more work on project!';
            upgradeStatusView.style.color='red';
        }
     updateStats();
    };

    if(event.srcElement.id =='upgrade-button-2'){
        if(projectPoints>upgradeCost){
        upgradeFunction(upgradesAvailable[1]);
        upgradesAvailable.shift();
        projectPoints -=upgradeCost;
        upgradeCost *= 10;
        upgradeStatusView.innerHTML='Success! Upgraded!';
        upgradeStatusView.style.color='green';  
      } else {
          upgradeStatusView.innerHTML='Not enough Project Points, do more work on project!';
          upgradeStatusView.style.color='red';
      }  
      updateStats();    
    };

   if(event.srcElement.id =='upgrade-button-3'){
      if(projectPoints>upgradeCost){
       upgradeFunction(upgradesAvailable[2]);
       upgradesAvailable.shift();
       projectPoints -=upgradeCost;
       upgradeCost *= 10;
       upgradeStatusView.innerHTML='Success! Upgraded!';
       upgradeStatusView.style.color='green';  
        }  else {
            upgradeStatusView.innerHTML='Not enough Project Points, do more work on project!';
            upgradeStatusView.style.color='red';
        };
    updateStats();
    };


 
  
});

updateStats();
