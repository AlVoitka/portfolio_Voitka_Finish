window.addEventListener('DOMContentLoaded', function() {
    const tabs = require('./modules/tabs'),
          modal = require('./modules/modal'),
          cards = require('./modules/cards'),
          forms = require('./modules/forms'),
          slider = require('./modules/slider');

    tabs();
    modal();
    cards();
    forms();
    slider();
});