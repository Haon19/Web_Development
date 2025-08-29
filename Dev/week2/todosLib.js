console.log("Running todoLib.js...")
let shopingArray = [];
let nextId = 1;


function addOne(task,completed,dueDate){
    if(!task||completed !== true && completed !== false||!dueDate){
        return false;
    }
    const newList = {
        id:nextId++,
        task,
        completed,
        dueDate
    };
    shopingArray.push(newList);
    return newList;
};

function getAll(){
    return shopingArray;
};

function findById(id){
    const numericId = Number(id);
    const shopingList = shopingArray.find(item => item.id === numericId);
    return shopingList || false;
}

function updateOneById(id,updatedData){
    const shopingList = findById(id);
    if(shopingList){
        if(updatedData.task) shopingList.task = updatedData.task;
        if(updatedData.completed) shopingList.completed = updatedData.completed;
        if(updatedData.dueDate) shopingList.dueDate = updatedData.dueDate;
        return shopingList;
    };
    return false;
}

function deleteOneById(id){
    const shopingList = findById(id);
    if(shopingList){
        const initialLength = shopingArray.length;
        shopingArray = shopingArray.filter(shopingList => shopingList.id !== Number(id));
        return shopingArray.length < initialLength;
    }
    return false;
}
function getAll() {
    return shopingArray;
}

if (require.main === module) {
    console.log(addOne("Buy groceries",false,"2025-08-30"))
    addOne("Watch movie",false,"2025-08-30")
    console.log("getAll called:", getAll());
}
const ToDos = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = ToDos;