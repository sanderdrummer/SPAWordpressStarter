import PostList = require('../post/postList');
import template = require('./searchTemplate');

class SearchComponent {

    triggerElem: HTMLButtonElement;
    searchButtonElem: HTMLButtonElement;
    searchInputElem: HTMLInputElement;
    endSearchElem: HTMLElement;
    containerElem: HTMLElement;

    constructor(triggerElemId:string){
        this.triggerElem = <HTMLButtonElement>document.getElementById(triggerElemId);
        this.triggerElem.addEventListener('click', () => this.showSearchForm());
    }

    showSearchForm(){
        if(this.containerElem) {
            this.containerElem.style.display = 'block';
            this.searchInputElem.focus();
        } else {
            this.containerElem = document.createElement('DIV');
            this.containerElem.innerHTML = template;
            document.body.insertBefore( this.containerElem, document.body.firstChild );
            this.bindSearchFormHandler();
            this.searchInputElem.focus();
        }

    }

    bindSearchFormHandler(){
        this.endSearchElem = document.getElementById('endSearch');
        this.endSearchElem.addEventListener('click', () => this.close());
        document.addEventListener('keyup', (event) => {
            if (event.keyCode === 27 ) {
                this.close();
            }
        });

        this.searchButtonElem = <HTMLButtonElement>document.getElementById('searchContainerButton');
        this.searchInputElem = <HTMLInputElement>document.getElementById('searchContainerInput');

        this.searchButtonElem.addEventListener('click', () => this.triggerSearch());
        this.searchInputElem.addEventListener('keyup', (event) => {
            if (event.keyCode === 13) {
                this.triggerSearch()
            }
        });
    }


    close() {
        this.containerElem.style.display = 'none';
    }

    triggerSearch() {
        var searchString = this.searchInputElem.value;
        window.location.hash = `#/search/all/${searchString}`;
        this.searchInputElem.value = '';
        this.close();
    }
}

export = SearchComponent;