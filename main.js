const box = document.querySelector('.box')
const names = document.querySelector('.ism')
const familiya = document.querySelector('.familiya')
const yosh = document.querySelector('.yosh')


let ism = prompt('ismini kirgiz ')
let age = prompt('Yoshin kirgiz')
let surname = prompt('familiya')
let Bigsmall = +prompt('1) katta qilib beradi  \n 2) kichkina qilib berimi ')

box.style.backgroundColor = 'yellow';
box.style.width = '30%';
box.style.height = '200px';
box.style.padding = '15px'
box.style.borderRadius = '12px'


if (Bigsmall === 1) {
    ism = ism.toLocaleUpperCase()
    surname = surname.toLocaleUpperCase()

} else if (Bigsmall === 2) {
    ism = ism.toLocaleLowerCase()
    surname = surname.toLocaleLowerCase()
} else {
    alert('iltmos faqat 1 yokid 2 raqam kiriting')
}

names.innerHTML = `isim: ${ism} `
familiya.innerHTML = (`Familiya: ${surname}`)
yosh.innerHTML = (`Yoshi: ${age}`)
console.log(box);

box.append(names,yosh,familiya)




