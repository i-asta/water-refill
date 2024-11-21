let userName = document.getElementById('user-name');
let addScore = document.getElementById('add');
let userCards = document.querySelectorAll('.score-card')




addScore.addEventListener('click',()=>{

  let inputValue = userName.value;
  const lowerCaseValue = inputValue.toLowerCase().trim();


  userName.value = "";

  let nameMatched = false;

  userCards.forEach((userCard)=>{
    let cardName = userCard.querySelector('.user-name').textContent.trim().toLowerCase(); 
    let cardScore = userCard.querySelector('.user-score');

    if(lowerCaseValue === cardName){
        nameMatched = true;

        let currentScore = parseInt(cardScore.textContent.trim(),10);
        currentScore += 1;
        cardScore.textContent = currentScore.toString();
    }

  });

  if(!nameMatched){
    alert("Entered name not found")
  }
});
