//koden hernede genererer en fælles header, så alle sider har den samme header
//jeg viser hvor vi er henne i DOMmen med: /* */

/* html > body */
//header
const myHeader = document.createElement("header"); //genererer header i html
myHeader.setAttribute("id", "header"); //header får attribut id="header"
document.body.insertBefore(myHeader, document.body.firstChild); //header indsættes før main

/* html > body > header */
//header har 1 child element

//nav
const navBar = document.createElement("nav"); //genererer nav i html
navBar.setAttribute("id", "navbar"); //nav får attribut id="navbar"
myHeader.appendChild(navBar); //nav er child til header

/* html > body > header > nav */
//nav har 3 child elementer

//a
const myLogo = document.createElement("a"); //genererer a (logo) i html
myLogo.setAttribute("href", "index.html"); //logoet får attribut href="index.html"
myLogo.setAttribute("id", "nav-logo"); //logoet får attribut id="nav-logo"
myLogo.textContent = "Claus Kastenskov"; //tekst
navBar.appendChild(myLogo); //logoet er child til nav

//ul
const navMenu = document.createElement("ul"); //genererer ul i html
navMenu.setAttribute("id", "nav-menu"); //ul får attribut id="nav-menu"
navBar.appendChild(navMenu); //ul er child til nav

//div
const burgerMenu = document.createElement("div"); //genererer div (burgermenu) i html
burgerMenu.setAttribute("id", "hamburger"); //div får attribut id="hamburger"
navBar.appendChild(burgerMenu); //burgermenuen er child til nav

/* html > body > header > nav > ul */
//ul har 4 child elementer

//li[0]
const navItem1 = document.createElement("li"); //genererer li i html
navItem1.setAttribute("class", "nav-item"); //li får attribut class="nav-item"
navMenu.appendChild(navItem1); //li er child til ul

//li[1]
const navItem2 = document.createElement("li"); //genererer li i html
navItem2.setAttribute("class", "nav-item"); //li får attribut class="nav-item"
navMenu.appendChild(navItem2); //li er child til ul

//li[2]
const navItem3 = document.createElement("li"); //genererer li i html
navItem3.setAttribute("class", "nav-item"); //li får attribut class="nav-item"
navMenu.appendChild(navItem3); //li er child til ul

//li[3]
const navItem4 = document.createElement("li"); //genererer li i html
navItem4.setAttribute("class", "nav-item"); //li får attribut class="nav-item"
navMenu.appendChild(navItem4); //li er child til ul

/* html > body > header > nav > ul > li[0] */
//li[0] har 1 child element

//a
const toIndex = document.createElement("a"); //genererer a i html
toIndex.setAttribute("href", "index.html"); //a får attribut href="index.html"
toIndex.setAttribute("class", "nav-link"); //logoet får attribut class="nav-link"
toIndex.textContent = "Forside"; //tekst
navItem1.appendChild(toIndex); //logoet er child til navItem1

/* html > body > header > nav > ul > li[1] */
//li[1] har 1 child element

//a
const toAppointment = document.createElement("a"); //genererer a i html
toAppointment.setAttribute("href", "tidsbestilling.html"); //a får attribut href="tidsbestilling.html"
toAppointment.setAttribute("class", "nav-link"); //logoet får attribut class="nav-link"
toAppointment.textContent = "Tidsbestilling"; //tekst
navItem2.appendChild(toAppointment); //logoet er child til navItem2

/* html > body > header > nav > ul > li[2] */
//li[2] har 1 child element

//a
const toPrices = document.createElement("a"); //genererer a i html
toPrices.setAttribute("href", "priser.html"); //a får attribut href="priser.html"
toPrices.setAttribute("class", "nav-link"); //logoet får attribut class="nav-link"
toPrices.textContent = "Behandling & priser"; //tekst
navItem3.appendChild(toPrices); //logoet er child til navItem3

/* html > body > header > nav > ul > li[3] */
//li[3] har 1 child element

//a
const toAboutUs = document.createElement("a"); //genererer a i html
toAboutUs.setAttribute("href", "om_os.html"); //a får attribut href="om_os.html"
toAboutUs.setAttribute("class", "nav-link"); //logoet får attribut class="nav-link"
toAboutUs.textContent = "Om os"; //tekst
navItem4.appendChild(toAboutUs); //logoet er child til navItem4

/* html > body > header > nav > div */
//div har 3 child elementer

//span[0]
const barTop = document.createElement("span"); //genererer span i html
barTop.setAttribute("class", "bar_top"); //span[0] får attribut class="bar_top"
burgerMenu.appendChild(barTop); //span[0] er child til burgermenuen

//span[1]
const barMiddle = document.createElement("span"); //genererer span i html
barMiddle.setAttribute("class", "bar_middle"); //span[1] får attribut class="bar_middle"
burgerMenu.appendChild(barMiddle); //span[1] er child til burgermenuen

//span[2]
const barBottom = document.createElement("span"); //genererer span i html
barBottom.setAttribute("class", "bar_bottom"); //span[2] får attribut class="bar_bottom"
burgerMenu.appendChild(barBottom); //span[2] er child til burgermenuen
