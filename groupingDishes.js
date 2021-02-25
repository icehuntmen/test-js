const { task } = require('./util');
const taskDescription = {
    name: 'groupingDishes',
    description: "You are given a list `dishes`, where each element consists of a list of strings beginning with the name of the dish, followed by all the ingredients used in preparing it. You want to group the dishes by ingredients, so that for each ingredient you'll be able to find all the dishes that contain it (if there are at least `2` such dishes). Return an array where each element is a list beginning with the ingredient name, followed by the names of all the dishes that contain this ingredient. The dishes inside each list should be sorted lexicographically, and the result array should be sorted lexicographically by the names of the ingredients.\n"
}
/**
 * Task: groupingDishes
 * @description You are given a list `dishes`, where each element consists of a list of strings beginning with the name of the dish,
 * followed by all the ingredients used in preparing it. You want to group the dishes by ingredients,
 * so that for each ingredient you'll be able to find all the dishes that contain it (if there are at least `2` such dishes).
 * Return an array where each element is a list beginning with the ingredient name, followed by the names of all
 * the dishes that contain this ingredient. The dishes inside each list should be sorted
 * lexicographically, and the result array should be sorted lexicographically by the names of the ingredients.
 * @param dishes {Array}
 * @return {Array<Array.string>}
 */
const groupingDishes = dishes =>{

    let basket = {}

    dishes.forEach((prop)=>{
        let name = prop[0]

        for(let i=1; i<prop.length; i++){
            if(!basket[prop[i]]){
                basket[prop[i]]=[]
                basket[prop[i]].push(name)
            }else{
                basket[prop[i]].push(name)
            }
        }
    })
    /** sort basket  **/
    function sortBasket(food){
        let box = []
        for(const [key,target] of Object.entries(food)){
            if(target.length>1){
                let arr = []
                arr.push(key)
                arr = arr.concat(target.sort())
                box.push(arr)
            }
        }
        return box.sort((a, b) => a[0] < b[0] ? -1 : a[0] === b[0] ? 0 : 1)
    }

    return sortBasket(basket)
}

// Run task
dishes1 = [["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
    ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
    ["Quesadilla", "Chicken", "Cheese", "Sauce"],
    ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]]

dishes2 = [["Pasta", "Tomato Sauce", "Onions", "Garlic"],
    ["Chicken Curry", "Chicken", "Curry Sauce"],
    ["Fried Rice", "Rice", "Onions", "Nuts"],
    ["Salad", "Spinach", "Nuts"],
    ["Sandwich", "Cheese", "Bread"],
    ["Quesadilla", "Chicken", "Cheese"]]

task.run(groupingDishes).set(dishes1,dishes2)

