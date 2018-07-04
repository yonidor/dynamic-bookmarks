export default {
    itemsList: {
        items: [{
            id: "id1",
            name: "Product page",
            template: "http://www.google.com",
            parameters: ['catalogId', 'productId'],
            parameterValues: {}
        },{
            id: "id2",
            name: "Catalog page",
            template: "http://www.facebook.com",
            parameters: ['catalogId'],
            parameterValues: {}
        }],
        selectedItem: null
    }
}