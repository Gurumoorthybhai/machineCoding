const express = require('express');
const router = express.Router();
const {getAllItems, getItemById, addItem, updateItem, deleteItem, getByIdModel}  = require('../controllers/itemController');
// const router = require('');


router.get('/', (req, res) => {

    const queryParams = req.query;
    console.log(' queryParams - ', queryParams.length);
    // query params id

    if(Object.keys(queryParams).length === 1) {
        const item = getItemById(queryParams.id);
    if(item) res.json(item);
    else res.status(404).json({ error: 'Item not found' });
    }
    else if(Object.keys(queryParams).length === 2) {
        const item = getByIdModel(queryParams);
        console.log(" item - ", item.length);
        
        if(item) res.json(item);
    else res.status(404).json({ error: 'Item not found' });
    }
    else {
    const getAllItemsData = getAllItems();
    res.json(getAllItemsData);
    }
});

router.get('/:id', (req, res) => {
    const item = getItemById(req.params.id);
    if(item) res.json(item);
    else res.status(404).json({ error: 'Item not found' });
});

router.post('/', (req, res) => {
    const { name } = req.body;
    if(!name) {
        res.status(400).json({ error: 'Name property is required'});
        return;
    }

    const newItem = addItem(req.body);
    res.status(201).json(newItem);
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const updatedItem = updateItem(id, body);

    if(updatedItem) {
        res.status(201).json(updatedItem);
    } else{
        res.status(404).json({ error: `Item with id:${req.body.id} not found`});
        return;
    }
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    // const body = req.body;
    
    const deletedItem = deleteItem(id);
    if(deletedItem) {
        res.status(200).json(deletedItem);
    } else {
        res.status(404).json({error: `Item with with id: ${id} not found `});
    }
} )

module.exports = router;