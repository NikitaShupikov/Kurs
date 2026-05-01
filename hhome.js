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
function infoblock(a) {
  const targetinfo = document.querySelector(".blockinfo .boxinfo" + a);
  const arrow = document.querySelector(".blockinfo .arrowimg" + a);
  
  const borderWidth = getComputedStyle(targetinfo).borderTopWidth;

  if (borderWidth !== '0px') {
    targetinfo.style.border = "none";
    targetinfo.style.backgroundColor = "#2c303a";
    arrow.src = './images/arrowd.png';
    targetinfo.style.height = '13%';
  } else {
    targetinfo.style.border = "1px solid #FBD506";
    targetinfo.style.backgroundColor = "#1F2228";
    arrow.src = './images/arrowup.png';
    switch(a) {
      case 1: targetinfo.style.height = '28%'; break;
      case 2: targetinfo.style.height = '37.5%'; break;
      case 3: targetinfo.style.height = '42.8%'; break;
      case 4: targetinfo.style.height = '42%'; break;
      case 5: targetinfo.style.height = '27.6%'; break;
      case 6: targetinfo.style.height = '27.5%'; break;
    }
  }
}

function home(){
  window.location.href = 'home.html'
}

function infoblock1(a) {
  console.log("fewfewfefef  ")
  const targetinfo = document.querySelector(".boxinfo" + a);
  const arrow = document.querySelector(".arrowimg" + a);

  const borderWidth = getComputedStyle(targetinfo).borderTopWidth;

  if (borderWidth !== '0px') {
    targetinfo.style.border = "none";
    targetinfo.style.backgroundColor = "#2c303a"; 
    arrow.src = './images/arrowd.png';
    targetinfo.style.height = '17%'
  } 
  else {
    targetinfo.style.border = "1px solid #FBD506";
    targetinfo.style.backgroundColor = "#1F2228";
    arrow.src = './images/arrowup.png';
    switch(a){
           case 1:
        targetinfo.style.height = '42%';
        break;
      case 2:
        targetinfo.style.height = '50%';
        break;
      case 3:
        targetinfo.style.height = '48%';
        break;
      case 4:
        targetinfo.style.height = '64%';
        break;
      case 5:
        targetinfo.style.height = '39%';
        break;
      case 6:
        targetinfo.style.height = '39%';
        break; 
    }
  }
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