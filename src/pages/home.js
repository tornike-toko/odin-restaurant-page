const pageName = document.createElement("h1")
pageName.innerText = "Home Page"
const h2 = document.createElement("h2")
h2.innerText = "experience the taste of TOKO's Restaurant"
const desc = document.createElement("p")
desc.innerText = `Step into a world of delightful aromas and exquisite tastes. At TOKO's Restaurant,
we craft each dish with passion and the finest imaginary ingredients.`


const homeCont = document.createElement("div")

homeCont.append(pageName)
homeCont.append(h2)
homeCont.append(desc)


export { homeCont }