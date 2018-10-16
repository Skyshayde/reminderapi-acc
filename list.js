class ListItem {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}

class List {
    constructor(id, name) {
        this.items = [];
        this.id = id;
        this.name = name;
    }
}

// Export our classes so that they can be used in another file
module.exports.List = List;
module.exports.ListItem = ListItem;