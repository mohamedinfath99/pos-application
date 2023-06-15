const Item = require('../models/itemSchema');

const createItem = async (req, res) => {
    try {
        const newItem = req.body;

        const createItem = new Item(newItem);
        const createItemData = await createItem.save();

        res.status(201).send({
            success: true,
            code: 200,
            message: "New item created",
            data: createItemData
        });
    }
    catch (error) {
        console.log("Error to create item:", error);

        res.status(500).send({
            success: false,
            code: 500,
            message: "Failed to create item",
            error
        });
    };
};


const getItems = async (req, res) => {
    try {
        const getItems = await Item.find();

        res.status(200).send({
            success: true,
            code: 200,
            message: "Successfully get items",
            data: getItems
        });

    }
    catch (error) {
        console.log("Error to get items:", error);

        res.status(500).send({
            success: false,
            code: 500,
            message: "Failed to get items",
            error
        });
    };
    ;
}


module.exports = { createItem, getItems }