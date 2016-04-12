var toggles: NodeList;
var toggleIndex: number;
import eventBus = require('./eventBus');

function addToggleEvent(elem) {
    var target;
    elem.classList.remove('toggle');

    elem.addEventListener('click',function(){
        if (elem.dataset && elem.dataset.target && elem.dataset.set) {
            target = document.getElementById(elem.dataset.target);
            eventBus.on('test', 'dasdflkjsdfljk');
            if(target && elem.dataset.mode === 'add') {
                target.classList.add(elem.dataset.set);
            } else if (target && elem.dataset.mode === 'remove') {
                target.classList.remove(elem.dataset.set);
            } else if (target) {
                target.classList.toggle(elem.dataset.set);
            }
        }
    });
}

function init(){
    toggles = document.querySelectorAll('.toggle');
    toggleIndex = toggles.length || 0;

    while (toggleIndex--) {
        addToggleEvent(toggles[toggleIndex])

    }
}

init();

export = {
    update: () => init()
};