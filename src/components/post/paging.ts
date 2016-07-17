import Config = require('../../config');


class Paging {

    pagingElem: HTMLElement;

    constructor(category){
        var id = 'postsPaging' + category;
        this.pagingElem = document.getElementById(id);
        if (!this.pagingElem) {
            this.pagingElem = this.createNewPagingElem(id);
        }
    }

    createNewPagingElem(id) {
        var div = document.createElement('div');
        div.id=id;
        div.className = 'postsPaging';
        div.innerHTML = 'weitere Posts laden';
        document.getElementById('pagingContainer').appendChild(div);

        return div;
    }

    showPaging() {
        this.pagingElem.style.display = 'block';
    }

    hidePaging() {
        this.pagingElem.style.display = 'none';
    }

    processPaging(currentPages, totalPages) {
        var pagingActive = Number(currentPages) < Number(totalPages);
        
        if (pagingActive) {
            this.showPaging();
        } else {
            this.hidePaging();
        }

        return pagingActive;
    }
}

export = Paging;