(() => { 
    const theImages = document.querySelectorAll('.image-holder'),
    theHeader = document.querySelectorAll('.header'),
    theSubhead = document.querySelectorAll('.main-copy h2'),
    theSeasonText = document.querySelector('.main-copy p');
    let appliedClass;

    function changeElements() {
    console.log('good');
    debugger;
    }

    theImages.forEach((el, index) => {
    // Loop through the photos and do some stuff
    el.addEventListener('click', changeElements, false);
    });
})();