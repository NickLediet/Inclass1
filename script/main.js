(() => { 
    const theImages = document.querySelectorAll('.image-holder'),
    theHeader = document.querySelector('.heading'),
    theSubhead = document.querySelector('.main-copy h2'),
    theSeasonText = document.querySelector('.main-copy p');
    let appliedClass;

    function changeElements() {
        let subImages = document.querySelector('.subImagesContainer');
        let objectIndex = dynamicContent[this.id];

        theSubhead.classList.remove(appliedClass);
        theHeader.classList.remove(appliedClass);
        
        theSubhead.classList.add(this.id);
        theHeader.classList.add(this.id);

        theSubhead.firstChild.nodeValue = objectIndex.headline;
        theSeasonText.firstChild.nodeValue = objectIndex.text;

        appliedClass = this.id;
    }

    theImages.forEach((el, index) => {
        // Loop through the photos and do some stuff
        el.addEventListener('click', changeElements, false);
    });
})();