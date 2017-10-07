(() => { 
    const theImages = document.querySelectorAll('.image-holder'),
    theHeader = document.querySelector('.heading'),
    theSubhead = document.querySelector('.main-copy h2'),
    theSeasonText = document.querySelector('.main-copy p'),
    lightbox = document.querySelector('.lightbox'),
    lightboxImg = document.querySelector('.lightbox-img'),
    lightboxDescription = document.querySelector('.lightbox-description'),
    lightboxClose = document.querySelector('.lightbox-close');
    let appliedClass;

    const data = dynamicContent; // globals scare me

    // STEPS

    //  1. show content based off image selected;

    //  2. Set initial data to spring
    
    //  3. onClick subImg > show the lightbox

    //  4. Pass content off into the lightbox and display it

    //  5. Add functinoality to the lightbox

    const DOMmethods = {
        
        // Set initial value to spring
        init() {
            this.changeSeasons('spring');
        },

        changeSeasons(id) {
            let currentSeasonData = dynamicContent[id];

            // change the data
            theSubhead.innerHTML = currentSeasonData.headline;
            theSeasonText.innerHTML = currentSeasonData.text;

            // Clear out thumbnails that maybe left over
            this.clearThumbnails();

            // build the thumbnails
            // for each image in the data create a thumbnail 
            currentSeasonData.images.forEach((el, index) => {
                // Create image with a class of thumb and an image src
                let newThumbnail = document.createElement('img')
                newThumbnail.classList.add('thumb');
                newThumbnail.src = `images/${currentSeasonData.images[index]}`; 
                
                // Add it the page
                document.querySelector(".subImagesContainer").appendChild(newThumbnail);
                
                // create a context object to hold details for lightbox
                let context = {
                    image : newThumbnail.src,
                    description : currentSeasonData.imageDescriptions[index]
                };

                // lightbox trigger
                newThumbnail.addEventListener('click', () => this.lightboxController.toggleLightbox(context));
            });
        },

        clearThumbnails() {
            document.querySelectorAll('.thumb')
                    .forEach(el => el.remove());
        },

        lightboxController : {
            getCSS(isToggled) {
                return isToggled ? 'flex' : 'none';
            },

            toggleLightbox(context) {
                // Set css for the lightbox
                lightbox.style.display = this.getCSS(true);

                // Init elements
                lightboxDescription.innerHTML = context.description;
                lightboxImg.style.background = `url(${context.image}) no-repeat`;
                lightboxImg.style.backgroundSize = "cover";
                
                // Add close handler
                lightboxClose.addEventListener('click', this.closeLightbox)
            },

            closeLightbox() {
                console.log("event fired");
                // Turn off the element
                lightbox.style.display = DOMmethods.lightboxController.getCSS(false); // For some reason refer explicitly to the method works, but no other way
            }
        }
    }

    
    // Add changeSeasons to event
    theImages.forEach( el => {
        // Add a click listener that passes the current index off the the change
        // change seasons function
        el.addEventListener('click', () => {
            DOMmethods.changeSeasons(el.id);
        });
    });

    // Intialize gallery to spring
    DOMmethods.init();
})();