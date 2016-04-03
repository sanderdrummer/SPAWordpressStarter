class Route {
    url: string;
    label: string;
    callback: any;


    constructor(config:any) {
        this.url = config.url;
        this.callback = config.callback;
        this.label = config.label;
    }
}

export = Route;
