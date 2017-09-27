(() => { 
    const theImages = document.querySelectorAll('.image-holder'),
    theHeader = document.querySelector('.heading'),
    theSubhead = document.querySelector('.main-copy h2'),
    theSeasonText = document.querySelector('.main-copy p'),
    lightbox = document.querySelector('.lightbox'),
    lightboxImg = document.querySelector('.lightbox-img');
    let appliedClass;

    function poplightbox(e) {
        lightbox.style.display = 'block';
        lightbox.addEventListener('click', function() {
            this.style.display = 'none';
        }, 'false');
        
        lightboxImg.src = e.target.src;

    }

    function changeElements() {
        let subImages = document.querySelector('.subImagesContainer');
        let objectIndex = dynamicContent[this.id];

        // Delete any lingering thumbnails
        document.querySelectorAll('.thumb').forEach((el) => el.remove()); 
        objectIndex.images.forEach((el, index) => {
            let newSubImg = document.createElement('img');

            // Add CSS class
            newSubImg.classList.add('thumb');
            // Add an images sources
            newSubImg.src = "images/" + objectIndex.images[index];

            // add some event handling
            newSubImg.addEventListener('click', poplightbox, 'false');

            // Append it to the container
            subImages.appendChild(newSubImg);
        });

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
    
    // Init app 
    changeElements.call(document.querySelector('#spring')); // Call with param
})();