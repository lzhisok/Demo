
$(document).ready(function() {
    $('.popup-with-zoom-anim').magnificPopup({
        items: [
          {
            src: 'images/wsystem1.png',
            type: 'image'
          },
          {
            src: 'images/wsystem2.png',
            type: 'image' // this overrides default type
          },
          {
            src: 'images/wsystem3.png', // Dynamically created element
            type: 'image'
          },
          {
            src: 'images/wsystem4.png', // HTML string
            type: 'image'
          },
          {
            src: 'images/wsystem5.png', // CSS selector of an element on page that should be used as a popup
            type: 'image'
          }
        ],
        gallery: {
          enabled: true
        },
        type: 'image' // this is a default type
    });
            
    $('.popup-with-zoom-anim1').magnificPopup({
        items: [
          {
            src: 'images/card1.png',
            type: 'image'
          },
          {
            src: 'images/card2.png',
            type: 'image' // this overrides default type
          },
          {
            src: 'images/card3.png', // Dynamically created element
            type: 'image'
          },
          {
            src: 'images/card4.png', // HTML string
            type: 'image'
          },
          {
            src: 'images/card5.png', // CSS selector of an element on page that should be used as a popup
            type: 'image'
          },
          {
            src: 'images/card6.png', // CSS selector of an element on page that should be used as a popup
            type: 'image'
          }
        ],
        gallery: {
          enabled: true
        },
        type: 'image' // this is a default type
    });

    $('.popup-with-zoom-anim2').magnificPopup({
        items: [
          {
            src: 'images/relationship1.png',
            type: 'image'
          },
          {
            src: 'images/relationship2.png',
            type: 'image' // this overrides default type
          },
          {
            src: 'images/relationship3.png', // Dynamically created element
            type: 'image'
          },
          {
            src: 'images/relationship4.png', // HTML string
            type: 'image'
          }
        ],
        gallery: {
          enabled: true
        },
        type: 'image' // this is a default type
    });

    $('.popup-with-zoom-anim3').magnificPopup({
        items: [
          {
            src: 'images/intelligent_storage1.png',
            type: 'image'
          },
          {
            src: 'images/intelligent_storage2.png',
            type: 'image' // this overrides default type
          },
          {
            src: 'images/intelligent_storage3.png', // Dynamically created element
            type: 'image'
          },
          {
            src: 'images/intelligent_storage4.png', // HTML string
            type: 'image'
          },
          {
            src: 'images/intelligent_storage5.png', // CSS selector of an element on page that should be used as a popup
            type: 'image'
          },
          {
            src: 'images/intelligent_storage6.png', // CSS selector of an element on page that should be used as a popup
            type: 'image'
          },
        ],
        gallery: {
          enabled: true
        },
        type: 'image' // this is a default type
    });
});