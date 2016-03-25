class Route {
    url: string;
    title: string;
    callback: any;


    constructor(url: string, title: string, callback) {
        this.url = url;
        this.title = title;
        this.callback = callback;
    }
}

export = Route;
