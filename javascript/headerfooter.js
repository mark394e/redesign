//koden hernede genererer en fælles header, så alle sider har den samme header
//jeg viser hvor vi er henne i DOMmen med: /* */

/*window.addEventListener("load", pageLoad);
//note: pageLoad() er indtil videre slået fra, indtil vi finder på en bedre løsning, da det gav nogle problemer på om_os.html

function pageLoad() {*/
/* html > body */
//header
const myHeader = document.createElement("header"); //genererer header
myHeader.setAttribute("id", "header"); //header får attribut id="header"
document.body.insertBefore(myHeader, document.body.firstChild); //header indsættes før main

/* html > body > header */
//header har 1 child element

//nav
const navBar = document.createElement("nav"); //genererer nav
navBar.setAttribute("id", "navbar"); //nav får attribut id="navbar"
myHeader.appendChild(navBar); //nav er child til header

/* html > body > header > nav */
//nav har 3 child elementer

//div
const myLogo = document.createElement("div"); //genererer div (logo)
myLogo.setAttribute("id", "nav_logo"); //logoet får attribut id="nav_logo"
navBar.appendChild(myLogo); //logoet er child til nav

//ul
const navMenu = document.createElement("ul"); //genererer ul
navMenu.setAttribute("id", "nav_menu"); //ul får attribut id="nav_menu"
navBar.appendChild(navMenu); //ul er child til nav

//div
const burgerMenu = document.createElement("div"); //genererer div (burgermenu)
burgerMenu.setAttribute("id", "hamburger"); //div får attribut id="hamburger"
navBar.appendChild(burgerMenu); //burgermenuen er child til nav

/* html > body > header > nav > div */
//a har 2 child elementer

//div
const myIcon = document.createElement("div"); //genererer span (div)
myIcon.setAttribute("id", "nav_icon"); //div får attribut id="nav_icon"
myIcon.setAttribute("onclick", "window.location.href='index.html';"); //div får attribut onclick="window.location.href='index.html';"
myLogo.appendChild(myIcon); //div er child til logoet

//a
const myText = document.createElement("a"); //genererer a (navn)
myText.setAttribute("href", "index.html"); //logoet får attribut href="index.html"
myText.setAttribute("id", "nav_text"); //logoet får attribut id="nav_logo"
myText.textContent = "Claus Kastenskov"; //tekst
myLogo.appendChild(myText); //a er child til logoet

/* html > body > header > nav > ul */
//ul har 4 child elementer

//li[0]
const navItem1 = document.createElement("li"); //genererer li
navItem1.setAttribute("class", "nav_item"); //li får attribut class="nav_item"
navMenu.appendChild(navItem1); //li er child til ul

//li[1]
const navItem2 = document.createElement("li"); //genererer li
navItem2.setAttribute("class", "nav_item"); //li får attribut class="nav_item"
navMenu.appendChild(navItem2); //li er child til ul

//li[2]
const navItem3 = document.createElement("li"); //genererer li
navItem3.setAttribute("class", "nav_item"); //li får attribut class="nav_item"
navMenu.appendChild(navItem3); //li er child til ul

//li[3]
const navItem4 = document.createElement("li"); //genererer li
navItem4.setAttribute("class", "nav_item"); //li får attribut class="nav_item"
navMenu.appendChild(navItem4); //li er child til ul

/* html > body > header > nav > ul > li[0] */
//li[0] har 1 child element

//a
const toIndex = document.createElement("a"); //genererer a
toIndex.setAttribute("href", "index.html"); //a får attribut href="index.html"
toIndex.setAttribute("class", "nav_link"); //logoet får attribut class="nav_link"
toIndex.textContent = "Forside"; //tekst
navItem1.appendChild(toIndex); //logoet er child til navItem1

/* html > body > header > nav > ul > li[1] */
//li[1] har 1 child element

//a
const toAppointment = document.createElement("a"); //genererer a
toAppointment.setAttribute("href", "tidsbestilling.html"); //a får attribut href="tidsbestilling.html"
toAppointment.setAttribute("class", "nav_link"); //logoet får attribut class="nav_link"
toAppointment.textContent = "Tidsbestilling"; //tekst
navItem2.appendChild(toAppointment); //logoet er child til navItem2

/* html > body > header > nav > ul > li[2] */
//li[2] har 1 child element

//a
const toPrices = document.createElement("a"); //genererer a
toPrices.setAttribute("href", "priser.html"); //a får attribut href="priser.html"
toPrices.setAttribute("class", "nav_link"); //logoet får attribut class="nav_link"
toPrices.textContent = "Behandling & priser"; //tekst
navItem3.appendChild(toPrices); //logoet er child til navItem3

/* html > body > header > nav > ul > li[3] */
//li[3] har 1 child element

//a
const toAboutUs = document.createElement("a"); //genererer a
toAboutUs.setAttribute("href", "om_os.html"); //a får attribut href="om_os.html"
toAboutUs.setAttribute("class", "nav_link"); //logoet får attribut class="nav_link"
toAboutUs.textContent = "Om os"; //tekst
navItem4.appendChild(toAboutUs); //logoet er child til navItem4

/* html > body > header > nav > div */
//div har 3 child elementer

//span[0]
const barTop = document.createElement("span"); //genererer span
barTop.setAttribute("class", "bar_top"); //span[0] får attribut class="bar_top"
burgerMenu.appendChild(barTop); //span[0] er child til burgermenuen

//span[1]
const barMiddle = document.createElement("span"); //genererer span
barMiddle.setAttribute("class", "bar_middle"); //span[1] får attribut class="bar_middle"
burgerMenu.appendChild(barMiddle); //span[1] er child til burgermenuen

//span[2]
const barBottom = document.createElement("span"); //genererer span
barBottom.setAttribute("class", "bar_bottom"); //span[2] får attribut class="bar_bottom"
burgerMenu.appendChild(barBottom); //span[2] er child til burgermenuen

//koden hernede genererer en fælles footer, så alle sider har den samme footer

/* html > body */
//footer
const myFooter = document.createElement("footer"); //genererer footer
myFooter.setAttribute("id", "footer"); //footer får attribut id="footer"
document
  .getElementById("main")
  .parentNode.insertBefore(
    myFooter,
    document.getElementById("main").nextSibling
  ); //footer indsættes efter main

/* html > body > footer */
//footer har 1 child element

//section
const footerFlex = document.createElement("section"); //genererer section
footerFlex.setAttribute("id", "footer_flex"); //section får attribut id="footer_flex"
myFooter.appendChild(footerFlex); //section er child til footer

/* html > body > footer > section */
//section har 3 child elementer

//article[0]
const columnOne = document.createElement("article"); //genererer article
columnOne.setAttribute("id", "footer_column1"); //article[0] får attribut id="footer_column1"
footerFlex.appendChild(columnOne); //article[0] er child til section
columnOne.innerHTML =
  '<h3 class="footer_h3">Kontaktinformation</h3>' +
  '<hr class="footer_hr">' +
  "<address>" +
  '<p class="footer_p">+45 49 21 21 56</p><br>' +
  '<a href="mailto:klinik@kastenskov.dk"><p class="footer_p">klinik@kastenskov.dk</p></a><br>' +
  '<a href="https://www.facebook.com/pages/Tandklinikken-Claus-Kastenskov/754821831261917?pnref=lhc"><p class="footer_p">Find os på Facebook</p></a>' +
  "</address>"; //genererer content til article[0]

//article[1]
const columnTwo = document.createElement("article"); //genererer article
columnTwo.setAttribute("id", "footer_column2"); //article[1] får attribut id="footer_column2"
footerFlex.appendChild(columnTwo); //article[1] er child til section
columnTwo.innerHTML =
  '<h3 class="footer_h3">Find vej</h3>' +
  '<hr class="footer_hr">' +
  "<address>" +
  '<p class="footer_p">Tandlæge Claus Kastenskov</p>' +
  '<p class="footer_p">Stengade 57,</p>' +
  '<p class="footer_p">3000 Helsingør</p><br>' +
  '<a href="https://www.google.com/maps/place/Tandl%C3%A6ge+Claus+Kastenskov/@56.0347192,12.6117115,18.25z/data=!4m5!3m4!1s0x4652311147d38b79:0x50b46739b41bfe7!8m2!3d56.034712!4d12.612648"><p class="footer_p">Vis på kort</p></a>' +
  '<p class="footer_p"><small>4 minutter fra Helsingør St.</small></p>' +
  "</address>"; //genererer content til article[1]

//article[2]
const columnThree = document.createElement("article"); //genererer article
columnThree.setAttribute("id", "footer_column3"); //article[2] får attribut id="footer_column3"
footerFlex.appendChild(columnThree); //article[2] er child til section
columnThree.innerHTML =
  '<h3 class="footer_h3">Åbningstider</h3>' +
  '<hr class="footer_hr">' +
  '<div id="time_table">' +
  '<div class="time_row"><p class="footer_p">Mandag:</p><p class="footer_p">08:00 - 16:00</p></div>' +
  '<div class="time_row"><p class="footer_p">Tirsdag:</p><p class="footer_p">08:00 - 17:00</p></div>' +
  '<div class="time_row"><p class="footer_p">Onsdag:</p><p class="footer_p">08:00 - 16:00</p></div>' +
  '<div class="time_row"><p class="footer_p">Torsdag:</p><p class="footer_p">08:00 - 16:00</p></div>' +
  '<div class="time_row"><p class="footer_p">Fredag:</p><p class="footer_p">08:00 - 12:00</p></div>' +
  '<div class="time_row"><p class="footer_p">Lørdag:</p><p class="footer_p">Lukket</p></div>' +
  '<div class="time_row"><p class="footer_p">Søndag:</p><p class="footer_p">Lukket</p></div>' +
  "</div>"; //genererer content til article[2]

// // // // // //
// Burgermenu: //
// // // // // //

burgerMenu.addEventListener("click", mobileMenu); //gør burgermenuen klikbart

function mobileMenu() {
  burgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
} //toggler mellem åbent og lukket

const navLink = document.querySelectorAll(".nav_link");
navLink.forEach((n) => n.addEventListener("click", closeMenu)); //giver hvert links under menuen en eventlistener der lytter på klik, hænger sammen med funktionen nedenunder
function closeMenu() {
  //fjerner klassen "active" når man klikker på et link, altså menuen lukker når man går til en anden side
  burgerMenu.classList.remove("active");
  navMenu.classList.remove("active");
}
/*}*/ //parentesstop på pageLoad()
