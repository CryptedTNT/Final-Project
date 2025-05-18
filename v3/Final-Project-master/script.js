
//Body
const containerBg = document.getElementById('container');
const contentBoxBg = document.getElementById('contentBox');

//Toolbar body
const buttonGroupBg = document.getElementById('buttonGroup');
const canvasBodyBg = document.getElementById('canvasBody');
const rightSidebarBg = document.getElementById('rightSidebar');

//History toolbar
const historyButtonBg = document.getElementById('historyButton');

//Settings toolbar
const settingsButtonBg = document.getElementById('settingsButton');
const settingsContainerBg = document.getElementById('settingsContainer');
const settingsCollapseBg = document.getElementById('settingsCollapse');

//light and dark mode button
const lightModeBtnBg = document.getElementById('lightModeBtn');
const darkModeBtnBg = document.getElementById('darkModeBtn');

//Contact toolbar
const contactButtonBg = document.getElementById('contactButton'); //contact button
const contactPrevBg = document.getElementById('contactPrevButton'); //previous button
const contactNextBg = document.getElementById('contactNextButton'); //nextbutton
const cardBody1Bg = document.getElementById('slide1');
const cardBody2Bg = document.getElementById('slide2');
const cardBody3Bg = document.getElementById('slide3');
const cardBody4Bg = document.getElementById('slide4');
const cardBody5Bg = document.getElementById('slide5');

//About toolbar
const aboutButtonBg = document.getElementById('aboutButton');
const aboutCollapseBg = document.getElementById('aboutCollapse');

//separate elements
//TOOLBAR
const lighttoolbar = document.querySelector('.lighttoolbar');
const darktoolbar = document.querySelector('.darktoolbar');

//PARAGRAPH (ABOUT)
const aboutTextDark = document.querySelector('.aboutTextDark');
const aboutTextLight = document.querySelector('.aboutTextLight');



// Select all of the id's
const modeElements = [contentBoxBg, containerBg, rightSidebarBg, canvasBodyBg, buttonGroupBg,
    historyButtonBg, settingsButtonBg, settingsCollapseBg, settingsContainerBg, contactButtonBg, aboutButtonBg,
    aboutCollapseBg, lightModeBtnBg, darkModeBtnBg, contactPrevBg, contactNextBg, cardBody1Bg, cardBody2Bg, cardBody3Bg,
cardBody4Bg, cardBody5Bg];

function toggleModeClasses(elements, removeClasses, addClasses) {
    elements.forEach(el => {
        el.classList.remove(...removeClasses);
        el.classList.add(...addClasses);
    });
}

//Lightmode button function
function setLightMode() {
    toggleModeClasses(modeElements, ['bg-dark', 'text-light', 'border-light'],
        ['bg-light', 'text-dark', 'border-dark']);


    //separate elements
    //TOOLBAR
    lighttoolbar.style.display = 'block';
    darktoolbar.style.display = 'none';

    //ABOUT
    aboutTextDark.style.display = 'none';
    aboutTextLight.style.display = 'block';

}

//Darkmode button function
function setDarkMode() {
    toggleModeClasses(modeElements, ['bg-light', 'text-dark', 'border-dark'],
        ['bg-dark', 'text-light', 'btn-outline-dark', 'border-light']);

    //separate elements
    //TOOLBAR
    lighttoolbar.style.display = 'none';
    darktoolbar.style.display = 'block';

    //ABOUT
    aboutTextDark.style.display = 'block';
    aboutTextLight.style.display = 'none';


}
async function handleSubmit(){
    const input = document.querySelector('input[type="search"]').value;
    const predictedEmotion = 'sad'
    const response = await fetch('http://localhost:63342/api/history', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            tweet: input,
            emotion: predictedEmotion
        })
    });
    const result = await response.json();
    console.log(result);
}

async function fetchHistory() {
    const response = await fetch('http://localhost:63342/api/history');
    const data = await response.json();
    console.log(data); // or update DOM
}

