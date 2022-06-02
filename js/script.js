'use strict';
let filterAll = document.getElementById('all');
let filterWebs = document.getElementById('webs');
let filterApps = document.getElementById('apps');
let filterDesign = document.getElementById('design')
let filterMarketing = document.getElementById('marketing');

let choiceWeb = document.getElementsByClassName('web');
let choiceApps = document.getElementsByClassName('app');
let choiceDesign = document.getElementsByClassName('des');
let choiceMarketing = document.getElementsByClassName('mark');

let categoriesWebHide = () => {
    for (let i=0; i < choiceWeb.length; i++) {
        choiceWeb[i].style.display='none';
    }
}
let categoriesWebOpen = () => {
    for (let i=0; i < choiceWeb.length; i++) {
        choiceWeb[i].style.display='inline-block';
    }
}

let categoriesAppHide = () => {
    for (let i=0; i < choiceApps.length; i++) {
        choiceApps[i].style.display='none';
    }
}
let categoriesAppOpen = () => {
    for (let i=0; i < choiceApps.length; i++) {
        choiceApps[i].style.display='inline-block';
    }
}

let categoriesDesHide = () => {
    for (let i=0; i < choiceDesign.length; i++) {
        choiceDesign[i].style.display='none';
    }
}
let categoriesDesOpen = () => {
    for (let i=0; i < choiceDesign.length; i++) {
        choiceDesign[i].style.display='inline-block';
    }
}

let categoriesMarkHide = () => {
    for (let i=0; i < choiceMarketing.length; i++) {
        choiceMarketing[i].style.display='none';
    }
}
let categoriesMarkOpen = () => {
    for (let i=0; i < choiceMarketing.length; i++) {
        choiceMarketing[i].style.display='inline-block';
    }
}

function addActiveClass(button) {
    button.classList.add('active');
}
function removeActiveClass(button) {
    button.classList.remove('active');
}

let choiceFilterWebs = () => {
    categoriesWebOpen();
    categoriesAppHide();
    categoriesDesHide();
    categoriesMarkHide(); 
    addActiveClass(filterWebs);
    removeActiveClass(filterAll);
    removeActiveClass(filterApps);
    removeActiveClass(filterDesign);
    removeActiveClass(filterMarketing);
}
let choiceFilterApps = () => {
    categoriesWebHide();
    categoriesAppOpen();
    categoriesDesHide();
    categoriesMarkHide();
    addActiveClass(filterApps);
    removeActiveClass(filterAll);
    removeActiveClass(filterWebs);
    removeActiveClass(filterDesign);
    removeActiveClass(filterMarketing);
} 

let choiceFilterDesign = () => {
    categoriesWebHide();
    categoriesAppHide();
    categoriesDesOpen();
    categoriesMarkHide();
    addActiveClass(filterDesign);
    removeActiveClass(filterAll);
    removeActiveClass(filterWebs);
    removeActiveClass(filterApps);
    removeActiveClass(filterMarketing);
}
let choiceFilterMarketing = () => {
    categoriesWebHide();
    categoriesAppHide();
    categoriesDesHide();
    categoriesMarkOpen();
    addActiveClass(filterMarketing);
    removeActiveClass(filterAll);
    removeActiveClass(filterWebs);
    removeActiveClass(filterApps);
    removeActiveClass(filterDesign);
} 

let choiceFilterAll = () => {
    categoriesWebOpen();
    categoriesAppOpen();
    categoriesDesOpen();
    categoriesMarkOpen();
    addActiveClass(filterAll);
    removeActiveClass(filterWebs);
    removeActiveClass(filterApps);
    removeActiveClass(filterDesign);
    removeActiveClass(filterMarketing);
}

filterAll.onclick = choiceFilterAll;    
filterWebs.onclick = choiceFilterWebs;
filterApps.onclick = choiceFilterApps;
filterDesign.onclick = choiceFilterDesign;
filterMarketing.onclick = choiceFilterMarketing;

let descripText = [ document.getElementById('web0'), document.getElementById('des0'), document.getElementById('app0'),
                     document.getElementById('mark0'), document.getElementById('app1'), document.getElementById('web1'),
                     document.getElementById('des1'), document.getElementById('mark1'), document.getElementById('app2'),];
                     
function descriptionOpen(param) {
    descripText[param].style.display = 'inline-block';
};
function descriptionClose(param) {
    descripText[param].style.display = 'none';
};

choiceWeb[0].onmouseover = () => descriptionOpen(0);
choiceWeb[0].onmouseout = () => descriptionClose(0);
choiceDesign[0].onmouseover = () => descriptionOpen(1);
choiceDesign[0].onmouseout = () =>  descriptionClose(1);
choiceApps[0].onmouseover = () => descriptionOpen(2);
choiceApps[0].onmouseout = () => descriptionClose(2);
choiceMarketing[0].onmouseover = () => descriptionOpen(3);
choiceMarketing[0].onmouseout = () => descriptionClose(3);
choiceApps[1].onmouseover = () => descriptionOpen(4);
choiceApps[1].onmouseout = () => descriptionClose(4);
choiceWeb[1].onmouseover = () => descriptionOpen(5);
choiceWeb[1].onmouseout = () => descriptionClose(5);
choiceDesign[1].onmouseover = () => descriptionOpen(6);
choiceDesign[1].onmouseout = () =>  descriptionClose(6);
choiceMarketing[1].onmouseover = () => descriptionOpen(7);
choiceMarketing[1].onmouseout = () => descriptionClose(7);
choiceApps[2].onmouseover = () => descriptionOpen(8);
choiceApps[2].onmouseout = () => descriptionClose(8);


