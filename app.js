// тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 0;

// тоглогчдийн цуглуулсан оноо хадгалах хувьсагч
var scores = [0, 0]
// тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0
// шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.




// prepare to start game
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

var diceDom = document.querySelector('.dice');
diceDom.style.display = 'none';
// shoog shideh event listiner
document.querySelector('.btn-roll').addEventListener('click',function(){
    // 1-6 hoorond sanamsargui too
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    // shoonii zurgiin gargaj irne
    diceDom.style.display = 'block';
    // buusan sanamsargui toog hargalzah zurgiig gargana
    diceDom.src ='dice-'+diceNumber+'.png'
    // buusan too 1 ees yalgaatai bol idevhtei toglogchiin onoog nemegduulne
    if(diceNumber!==1){
        // 1 ees yalgaatai too buulaa. Buusan toog toglogchid nemj ugnu
        roundScore = roundScore+ diceNumber
        document.getElementById('current-'+activePlayer).textContent=roundScore
    }else {
        diceDom.style.display = 'none';
        document.getElementById('current-'+activePlayer).textContent = 0;
        switchToNextPlayer()
        
    }
    
});
// hold button event listener
document.querySelector('.btn-hold').addEventListener('click', function(){
    // ug toglogchiin eeljnii onoog global onoo deer nemj ugnu
    scores[activePlayer] = scores[activePlayer]+roundScore;
    document.getElementById('score-'+activePlayer).textContent=scores[activePlayer]
    if(scores[activePlayer]>=100){
        document.getElementById('name-'+activePlayer).textContent='Winner!!!'
        
    }else {
        switchToNextPlayer()
    }
    
});
function switchToNextPlayer(){
    roundScore = 0;
    document.getElementById('current-'+activePlayer).textContent=0
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0)
    document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    diceDom.style.display = 'none';
}
// new game button eventlistener
document.querySelector('.btn-new').addEventListener