let find = document.getElementById("inp").value.trim().toUpperCase();
let inpN = document.getElementById("inp");

img = [
    "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJL_9C3moS0kfv7IbrdqWdY781lxOrH9tyl2APj_RFkYm6ncISWdw42ZwvX8wfoku3s15Tu6czKySZgu3U8pSGKi-NSbdE",
    "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjxPr7Dl2dV18hwmOvN8IXvjVCLpxo7Oy3tIdLEdgdqNAmBqFa_kO3mh8K9uJqbyiMy7HIn5H3VzUPl1B0dO7M7hOveFwvYitsMFw",
    "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAQ1JmMR1osbaqPQJz7ODYfi9W9eOxhoWOmcj4OrzZgiUGvpEn3-yUp9usiVXtqEJsZ2nycIaWdlU8aFHT_AO5yOu6hMTuvJic1zI97ZFyOF04",
    "https://steamcommunity-a.akamaihd.net/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf-jFk7uW-V6N4LvedB3WvzOtyufRkASuwzEl35Dvdw9yqIyjDb1UlC8d2Q7ZZ5BK7mtSyMrjj4QzcjIlNnyzgznQesHByhus",
    "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAQ1h3LAVbv6mxFABs3OXNYgJR_Nm1nYGHnuTgDL7ck3lQ5MFOnezDyoD8j1yg5UM9MGyldoDAd1BvN1jR8le-k7_rh8K8757KznpgvCl253_byxPjgR5SLrs4VQDGB6c",
    "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20hPbkI7PYhG5u5cRjiOXE_JbwjGu4ohQ0J3elJdWTdFI2Zg7R_Fftkuy615DotZjOzXJh7yRwtH7Vlkbi0x1ObOM6m7XAHnYa2D_s",
    "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJa_t2vq4yCkP_gfevUwGoFuccjibqQpdz32wy2r0RqZj3wIYWUIQVtYVrW_lK5k-67jZGi_MOeR3L3rXk",
    "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAQ1JmMR1osbaqPQJz7ODYfi9W9eOlmImFkOT8PK_ummJW4NE_jriSpYj03FHh_xFkYDrxLYOTJAc2MA3XqVbvlO-70cDp6M_IynI27j5iuyhw_vo_gA",
    "https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5GLEfCk4nReh8DEiv5daPq0_qrw_QfG9O-tu0Dw",
    "https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5WLCfCk4nReh8DEiv5deOK84rrw0Q_9tleI06A",
    "https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Ff5GPHfCk4nReh8DEiv5deO6g9qbc2SJvTkBtg",
    "https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5WLMfCk4nReh8DEiv5daO6o2r7MxR_69q4Sc-ZY",
    "https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835FY7GPFfCk4nReh8DEiv5dYOas-qLI1Qvq9_csclY4",
    "https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5WTAfCk4nReh8DEiv5daPKs-qrw1Q_i233e6VbI",
    "https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5WLNfCk4nReh8DEiv5daPa0_qrwwQ_puQEv11Q",
    "https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fc5GLGfCk4nReh8DEiv5daMag5qLU2QPi5xVewp5A",
    "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUluxpUWETvTO2j0IDEWGJgLFxoob-kOwhunOTDTilLtOOhkYGbmPmmfeqCwjkC6ZJ30-zD9IqljQbnqEdvZWjxIoCcJA46Zl_Y_1C7wem-h5Oi_MOeNr2Ud6c",
    "https://steamcommunity-a.akamaihd.net/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttydbPaERSR0Wqmu7LAocGIyi3kajH_zBxM2kJ3WW8EI6_pLz7WbzSEW-lIPn-h1P5qqRe7NiMvTBQDDHkrYu5LA4GSrixkwhtWjXyoypdijGOwMlCZsjEeILthHswdK2ZOn8p1uJPZCwGj0",
    "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcU2uxRKA1jZEduk2sLcQUl1KTtUt6qgZAplwPuHdS9N--Oinda0nvr5PKnFl2du68Rhj7iPodnz3gHt-hZtYmH6LdORJ1I5YlGB_lS2lOrs0JG1vZWYyntlsiEn7WGdwUJT2eppGw",
    "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUzsR4STVTVePS_1szHXE5LMgFWprWrZAZ41szYYzxB-NOlq5eOluf7PfWGzm8I7JIjjLHFrYql3gG1_0I4Yj_1dtTDegM6Zg6CrAK5kOq8hZ7uot2XnvR1EdxX",
    "https://steamcommunity-a.akamaihd.net/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttydbPaERSR0Wqmu7LAocGIyi3kajH_Tb1sS1LESf8Fhh8ZW7-1jrRRT_oZfz7iNI_Puge5tqLPGaGGLf0O96tOhncCighhw0oDSLibD-LSrOKFM-CZZ0QrRY4BCxw9OzMOixtQfd2Y8TmH75in9IvyZo5usEVaAs_KDV3BaBb-Mdyne2Lg",
    "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcU8rBhPQ0DJU-Hi3sLeXE9gJAhopbKqPgtk1uHbPjRP4dOkgIGHqOT8PK7dkm5D-5c_2OjA89Xx2FXsqUs_YGj6LNCRJlA-MFHYrgfrkOnq0ZG0tJmbyiFi6D5iuyjPTfyxSA",
    "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUivB9aSQPAUuCq0vDAWFh4IBBYuIWtJAhr7PHHdSQMu93iwIbbxqWnNejQw2gB6ZEnjO-UoNrx0AHgqkZkN2HzJ4_DI1M3ZEaQpAYWJ6NyKA",
    "https://steamcommunity-a.akamaihd.net/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttydbPaERSR0Wqmu7LAocGIyi3kajH_nW0MOlPHqZ2lJw55Pm5UDiU1L4k5vv7zZa4825baV9L_6sXyiZzON5ovVoQxakkBw3vDO6y974b3OfOAZyCJsmEeAJtUS7m9G2MOzm7gLc3d5GyXn3jSNLuitt47oKAPc7uvqAFZcoBNY"
];

descr = ["FN / 0.0624","ST / FN/ 0.0545","MW / 0.0152","ST / MW/ 0.0564","FN / 0.1311","FN / 0.1231","FN / 0.0055","FN / 0.1277","Броня","Разное","Оружие","Оружие","Броня","Разное","Оружие","Оружие","Украшение","Украшение","Предмет","Предмет","Предмет","Украшение","Предмет","Предмет"];
Prise = ["9935 ","2344 ","1235 ","4434 ","5234 ","2564 ","1423 ","1264 ","1435 ","4434 ","5234 ","2434 ","9423 ","6994 ","1034 ","4434 ","5234 ","2434 ","1913 ","1654 ","1823 ","1124 ","2415 ","4434 "];
val = [" ,45 $",",33 $",",45 $",",33 $",",23 $"," ,12 $",",31 $",",77 $",",45 $",",33 $",",23 $",",12 $",",31 $",",77 $",",45 $",",33 $",",23 $",",12 $",",31 $",",65 $",",31 $",",77 $",",45 $",",33 $"];
Name = ["Дикий лотос","Гамма волны","Живая изгородь","Гунгнир","Изумрудная сеть","Волны  Sapphire","Рентген","Мясник","Big Grin","Horror Bag","Banana Eoka","Gold Rock","legendary Gol...","Rustigé Egg - Blue","halloween Bat","Glory AK47","Inscribed Cri...","Inscribed Crim...","Golden Sile..","Genuine Axe of ...","Heroic Qaldi...","Genuine Golden Sul...","Inscribed Drago...","Inscribed Gol..."];

for (i = 0; i < 24; i++) {
    document.getElementById("cbi"+i).src = img[i];
    document.getElementById("cbb"+i).innerHTML = Prise[i];
    document.getElementById("cb$"+i).innerHTML = val[i];
    document.getElementById("cbc"+i).innerHTML = Name[i];
}
for (i = 0; i < 24; i++) {
    document.getElementById("cba"+i).innerHTML = descr[i];
}
for (i = 8; i < 24; i++) {
    document.getElementById("crd"+i).style.display = "none";
    document.getElementById("crd"+i).style.opacity = "0";
}

 
function setfiltr(set) {
    for (let i = 0; i <= 8; i++) {
        const filterdiv = document.getElementById("filtrs"+i);
        if (filterdiv) {
            if (set.includes(i)) {
                filterdiv.style.display = "flex";
            } else {
                filterdiv.style.display = "none";
            }
        }
    }
}

 
function uncheck() {
    const allCheckboxes = document.querySelectorAll('.filtr input[type="checkbox"]');
    allCheckboxes.forEach(cb => cb.checked = false);
}

const bttnbx1 = document.getElementById("buttnbox1");
const arrowbx1 = document.getElementById("arrowbox1");
const menu = document.getElementById("menu");

bttnbx1.addEventListener('click', (event) => {
    event.stopPropagation();
    arrowbx1.style.transform = "rotateX(180deg)";
    arrowbx1.style.marginTop = "9%";
    menu.style.display = "flex";
});

document.addEventListener('click', () => {
    arrowbx1.style.transform = "rotateX(0deg)";
    arrowbx1.style.marginTop = "-10%";
    menu.style.display = "none";
});

let currentCategory = { start: 0, end: 7 };

function ch(x) {
    const choise = document.getElementById("choise"+x);
    const boximg = document.getElementById("boximg");
    uncheck();
    switch(x) {
        case 1:  
            setfiltr([0,1,2,3]); 
            inpN.value = '';
            notifbox.style.display = "none";
            choise.style.backgroundColor = "rgb(54, 54, 63)";
            document.getElementById("choise2").style.backgroundColor = "rgb(21, 21, 26)";
            document.getElementById("choise3").style.backgroundColor = "rgb(21, 21, 26)";
            boximg.src = "./images/icons8-counter-strike-100.png";
            for (i = 16; i < 24; i++) {
                const el = document.getElementById("crd"+i);
                el.style.display = "none";
                el.style.opacity = "0";
            }
            for (i = 8; i < 16; i++) {
                const el = document.getElementById("crd"+i);
                el.style.display = "none";
                el.style.opacity = "0";
            }
            for (i = 0; i < 8; i++) {
                const el = document.getElementById("crd"+i);
                el.style.display = "flex";
                el.style.opacity = "1";
                currentCategory = { start: 0, end: 7 };
            }
            break;
        case 2:  
            setfiltr([4,5]); 
            inpN.value = '';
            notifbox.style.display = "none";
            choise.style.backgroundColor = "rgb(54, 54, 63)";
            document.getElementById("choise1").style.backgroundColor = "rgb(21, 21, 26)";
            document.getElementById("choise3").style.backgroundColor = "rgb(21, 21, 26)";
            boximg.src = "./images/icons8-dota.png";
            for (i = 16; i < 24; i++) {
                const el = document.getElementById("crd"+i);
                el.style.display = "flex";
                el.style.opacity = "1";
                currentCategory = { start: 16, end: 23 };
            }
            for (i = 8; i < 16; i++) {
                const el = document.getElementById("crd"+i);
                el.style.display = "none";
                el.style.opacity = "0";
            }
            for (i = 0; i < 8; i++) {
                const el = document.getElementById("crd"+i);
                el.style.display = "none";
                el.style.opacity = "0";
            }
            break;
        case 3: 
            setfiltr([6,7,8]); 
            inpN.value = '';
            notifbox.style.display = "none";
            choise.style.backgroundColor = "rgb(54, 54, 63)";
            document.getElementById("choise1").style.backgroundColor = "rgb(21, 21, 26)";
            document.getElementById("choise2").style.backgroundColor = "rgb(21, 21, 26)";
            boximg.src = "./images/icons8-ржавчина-100.png";
            for (i = 16; i < 24; i++) {
                const el = document.getElementById("crd"+i);
                el.style.display = "none";
                el.style.opacity = "0";
            }
            for (i = 8; i < 16; i++) {
                const el = document.getElementById("crd"+i);
                el.style.display = "flex";
                el.style.opacity = "1";
                currentCategory = { start: 8, end: 15 };
            }
            for (i = 0; i < 8; i++) {
                const el = document.getElementById("crd"+i);
                el.style.display = "none";
                el.style.opacity = "0";
            }
            break;
    }
}



function home() {
    window.location.href = 'home.html';
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

function social(c) {
    switch(c) {
        case 1:
            window.open("https://discord.com/");
            break;
        case 2:
            window.open("https://web.telegram.org/");
            break;
        case 3:
            window.open('https://vk.com/');
            break;
        case 4:
            window.open('https://store.steampowered.com/?l=russian/');
            break;
        case 5:
            window.open('https://store.steampowered.com/?l=russian');
            break;
    }
}

const contnotif = document.getElementById("contnotif");
const buyBtns = document.querySelectorAll('.button');
buyBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.stopPropagation();
        contnotif.classList.add('active');
        contnotif.style.display = "flex";
    });
});

document.addEventListener('click', (event) => {
    const notification = document.getElementById('notif');
    if (!notification.contains(event.target)) {
        contnotif.classList.remove('active');
        contnotif.style.display = "none";
    }
});

const notifbox = document.getElementById("notifbox");
function poisk() {
    let kart = document.querySelectorAll(".cards");
    let name = document.querySelectorAll(".name");
    let find = document.getElementById("inp").value.trim().toUpperCase();
    let visible = false;
    
    for (let i = 0; i < kart.length; i++) {
        kart[i].style.display = "none";
    }
    
    if (find === "") {
        for (let i = currentCategory.start; i <= currentCategory.end; i++) {
            kart[i].style.display = "flex";
            visible = true;
        }
    } else {
        for (let i = currentCategory.start; i <= currentCategory.end; i++) {
            if (name[i].innerHTML.toUpperCase().indexOf(find) > -1) {
                kart[i].style.display = "flex";
                visible = true;
            }
        }
    }
    
    if (find !== "" && !visible) {
        notifbox.style.display = "flex";
    } else {
        notifbox.style.display = "none";
    }
}
 let filtrsetcard = [];  

function filtr(n) {
    inpN.value = '';
    const current = document.getElementById('cb' + n);
    if (current && current.checked) {
        const allcb = document.querySelectorAll('.filtr input[type="checkbox"]');
        allcb.forEach(cb => {
            if (cb !== current) {
                cb.checked = false;
            }
        });
    }

    switch (n) {
        case 1:
            filtrsetcard = [0, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
            break;
        case 2:
            filtrsetcard = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
            break;
        case 3:
            filtrsetcard = [0, 1, 2, 6, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
            break;
        
        case 4:
            filtrsetcard = [0, 1, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
            break;
        case 5:
            filtrsetcard = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 22, 23];
            break;
        case 6:
             filtrsetcard = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 21, ];
            break;
        case 7:
            filtrsetcard = [0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
            break;
        case 8:
            filtrsetcard = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23];
            break;
        case 9:
            filtrsetcard = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
            break;
    }
    let visible = false;
        if (find !== "" && !visible) {
        notifbox.style.display = "flex";
    } else {
        notifbox.style.display = "none";
    }
    hidecard(filtrsetcard);   
}

function hidecard(cardsToShow) {   
    for (let i = 0; i <= 23; i++) {
        const carddiv = document.getElementById("crd" + i);
        if (carddiv) {
            if (cardsToShow.includes(i)) {
                carddiv.style.display = "none";
            } else {
                carddiv.style.display = "flex";
            }
        }
    }
}   

    
    
let box3 = document.getElementById("box3");
let currentRotation = 0; 

box3.addEventListener("click", () => {
    let rel = document.getElementById("rel");
    currentRotation += 360;  
    rel.style.rotate = currentRotation + "deg";
});
 


function restart() {
    inpN.value = '';
    let visible = false;
    let kart = document.querySelectorAll(".cards");
    const cbx = document.querySelectorAll(".checkbox")
    const allcb = document.querySelectorAll('.filtr input[type="checkbox"]');
for(let i = currentCategory.start; i <= currentCategory.end; i++){
        kart[i].style.display = "flex";
}
allcb.forEach(cbx => {
    if (cbx) {
        cbx.checked = false;
    }
});

    if (find !== "" && !visible) {
        notifbox.style.display = "flex";
    } else {
        notifbox.style.display = "none";
    }

}

setfiltr([0,1,2,3]);
uncheck();



let krd1 = document.getElementById("crd1")
let img2 = document.getElementById("cbi1")

krd1.addEventListener('mouseenter', () => {
img2.src ="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20hPbkI7PYhG5u5cRjiOXE_JbwjGu4ohQ0J3elJdWTdFI2Zg7R_Fftkuy615DotZjOzXJh7yRwtH7Vlkbi0x1ObOM6m7XAHnYa2D_s"

  
});
krd1.addEventListener('mouseleave', () => {
img2.src ="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjxPr7Dl2dV18hwmOvN8IXvjVCLpxo7Oy3tIdLEdgdqNAmBqFa_kO3mh8K9uJqbyiMy7HIn5H3VzUPl1B0dO7M7hOveFwvYitsMFw"

});