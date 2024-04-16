const items = [
    {id: 1, name: 'Car 1', model: 'sedan'},
    {id: 2, name: 'Car 2', model: 'sedan'},
    {id: 3, name: 'Car 3', model: 'sedan'},
    {id: 4, name: 'Car 4', model: 'sedan'},
    {id: 5, name: 'Car 5', model: 'sedan'},
];


const getAllItems = () => {
    return items;
}

const getItemById = (id) => {
    return items.find(item => item.id === parseInt(id));
}

const addItem = ({name, model}) => {
    const newItem = { id:items.length + 1, name, model};
    items.push(newItem);
    return newItem;
}

const updateItem = (id, {name, model}) => {
    console.log({id});
    
    const index = items.findIndex(item => item.id === parseInt(id));
    if(index!== -1) {
        items[index].name = name;
        items[index].model = model;
        return items[index];
    }
return null;
};

const deleteItem = (id) => {
    const index = items.findIndex(item => item.id === parseInt(id));
    if(index!== -1) {
        const deletedItem = items.splice(index, 1);
        return deletedItem;
    }
    return null;
}


const getByIdModel = ({id, model}) => {

    const filteredItem = items.filter(item => {
        const byId = id ? item.id === parseInt(id) : true;
        const byModel = model ? item.model === model : true;
        return byId && byModel;
    })

    return filteredItem;

}
module.exports = {getAllItems, getItemById, addItem, updateItem, deleteItem, getByIdModel};