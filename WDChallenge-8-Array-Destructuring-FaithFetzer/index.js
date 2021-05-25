let shoppingList = [[ 'eggs', 'milk', 'butter' ], [ 'cleaner', 'trash bags', 'detergent' ], [ 'thank you card', 'pens', 'gift wrapping' ], [ 'shoes', 't-shirt', 'slacks' ]];
const [[var00, var01, var02] , [var10, var11, var12], [var20, var21, var22], [var30, var31, var32]]=shoppingList;
shoppingList = [var00, var01, var02, var10, var11, var12, var20, var21, var22, var30, var31, var32];
console.log(shoppingList);

let obj = {
cleaning: [],
gifts: [],
clothing: [],
grocery: []
};

const checkList = shoppingList.map((item, index) =>{
        if(index<3){
            return obj.grocery.push(item)
        } else if (index< 6) {
            return obj.cleaning.push(item)
        } else if(index<9){
            return obj.gifts.push(item)
        } else {
            return obj.clothing.push(item)
        }
    }
)
console.log(obj);