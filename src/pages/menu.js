import item_1 from "../foodImages/item1.png"
import item_2 from "../foodImages/item2.png"
import item_3 from "../foodImages/item3.png"
import item_4 from "../foodImages/item4.png"
import item_5 from "../foodImages/item5.png"

const pageName = document.createElement("h1")
pageName.innerText = "Menu"

const list = document.createElement("ul")

function createEl(foodImg,foodName,foodDesc,foodPrice){
    const el = document.createElement("li")
    const img = document.createElement("img")
    const wrapper = document.createElement("div")
    const title = document.createElement("h3")
    const desc = document.createElement("p")
    const price = document.createElement("p")
    
    img.src = foodImg
    title.innerText = foodName
    desc.innerText = foodDesc
    price.innerText = "$" + foodPrice
    
    wrapper.append(title)
    wrapper.append(desc)
    el.append(img)
    el.append(wrapper)
    el.append(price)
    list.append(el)
}

createEl(item_1,"coffee","what else do you need", 15)
createEl(item_2,"strawberry cacke","with srawberryes", 3)
createEl(item_3,"strawberry cacke","with srawberryes", 30)
createEl(item_4,"strawberry cacke","with srawberryes", 3)
createEl(item_5,"strawberry cacke","with srawberryes", 3)

const menuCont = document.createElement("div")

menuCont.append(pageName)
menuCont.append(list)
export { menuCont }