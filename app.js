// тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 1;

// тоглогчдийн цуглуулсан оноо хадгалах хувьсагч
var scores = [0, 0]
// тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0
// шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var dice = Math.floor(Math.random() * 6) + 1;



// prepare to start game
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;

document.querySelector('.dice').style.display = 'none';
