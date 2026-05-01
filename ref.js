

function createParticles() {
  const symbols = [ '💲', '⭐', '✨', '💸'];
  for (let i = 0; i < 10; i++) {
    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = 8 + Math.random() * 10 + 's';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.fontSize = 0.8 + Math.random() * 1.5 + 'rem';
    document.body.appendChild(particle);
  }
}
createParticles();

function home(){
  window.location.href = 'home.html'
}

function btn(c){
  switch(c){
           case 1:
        window.open("reg.html")
        break;
    }
}

const trigger = document.getElementById('trigger');
const target = document.getElementById('target');
const dropm = document.getElementById('dropm');

trigger.addEventListener('mouseenter', () => {
  target.classList.add('flip');
  target.style.color= "white"
  target.style.marginTop = "0.5%"
  dropm.style.display = "flex"
  
});
trigger.addEventListener('mouseleave', () => {
  target.classList.remove('flip');
target.style.color= "#798491"
target.style.marginTop = "0%"
dropm.style.display = "none"
});
dropm.addEventListener('mouseenter', () => {

dropm.style.display = "flex"
});
dropm.addEventListener('mouseleave', () => {

dropm.style.display = "none"
});
function refka(){
   window.location.href = 'ref.html'
}

function social(c){
  switch(c){
           case 1:
        window.open(url = "https://discord.com/")
        break;
      case 2:
        window.open(url = "https://web.telegram.org/")
        break;
      case 3:
        window.open(url = 'https://vk.com/')
        break;
      case 4:
        window.open(url = 'https://store.steampowered.com/?l=russian')
        break;
      case 5:
        window.open(url = 'https://store.steampowered.com/?l=russian')
        break;
    }
}