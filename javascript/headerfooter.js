//koden hernede genererer en fælles header, så alle sider har den samme header
//jeg viser hvor vi er henne i DOMmen med: /* */

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

//a
const myLogo = document.createElement("a"); //genererer a (logo)
myLogo.setAttribute("href", "index.html"); //logoet får attribut href="index.html"
myLogo.setAttribute("id", "nav-logo"); //logoet får attribut id="nav-logo"
myLogo.textContent = "Claus Kastenskov"; //tekst
navBar.appendChild(myLogo); //logoet er child til nav

//ul
const navMenu = document.createElement("ul"); //genererer ul
navMenu.setAttribute("id", "nav-menu"); //ul får attribut id="nav-menu"
navBar.appendChild(navMenu); //ul er child til nav

//div
const burgerMenu = document.createElement("div"); //genererer div (burgermenu)
burgerMenu.setAttribute("id", "hamburger"); //div får attribut id="hamburger"
navBar.appendChild(burgerMenu); //burgermenuen er child til nav

/* html > body > header > nav > ul */
//ul har 4 child elementer

//li[0]
const navItem1 = document.createElement("li"); //genererer li
navItem1.setAttribute("class", "nav-item"); //li får attribut class="nav-item"
navMenu.appendChild(navItem1); //li er child til ul

//li[1]
const navItem2 = document.createElement("li"); //genererer li
navItem2.setAttribute("class", "nav-item"); //li får attribut class="nav-item"
navMenu.appendChild(navItem2); //li er child til ul

//li[2]
const navItem3 = document.createElement("li"); //genererer li
navItem3.setAttribute("class", "nav-item"); //li får attribut class="nav-item"
navMenu.appendChild(navItem3); //li er child til ul

//li[3]
const navItem4 = document.createElement("li"); //genererer li
navItem4.setAttribute("class", "nav-item"); //li får attribut class="nav-item"
navMenu.appendChild(navItem4); //li er child til ul

/* html > body > header > nav > ul > li[0] */
//li[0] har 1 child element

//a
const toIndex = document.createElement("a"); //genererer a
toIndex.setAttribute("href", "index.html"); //a får attribut href="index.html"
toIndex.setAttribute("class", "nav-link"); //logoet får attribut class="nav-link"
toIndex.textContent = "Forside"; //tekst
navItem1.appendChild(toIndex); //logoet er child til navItem1

/* html > body > header > nav > ul > li[1] */
//li[1] har 1 child element

//a
const toAppointment = document.createElement("a"); //genererer a
toAppointment.setAttribute("href", "tidsbestilling.html"); //a får attribut href="tidsbestilling.html"
toAppointment.setAttribute("class", "nav-link"); //logoet får attribut class="nav-link"
toAppointment.textContent = "Tidsbestilling"; //tekst
navItem2.appendChild(toAppointment); //logoet er child til navItem2

/* html > body > header > nav > ul > li[2] */
//li[2] har 1 child element

//a
const toPrices = document.createElement("a"); //genererer a
toPrices.setAttribute("href", "priser.html"); //a får attribut href="priser.html"
toPrices.setAttribute("class", "nav-link"); //logoet får attribut class="nav-link"
toPrices.textContent = "Behandling & priser"; //tekst
navItem3.appendChild(toPrices); //logoet er child til navItem3

/* html > body > header > nav > ul > li[3] */
//li[3] har 1 child element

//a
const toAboutUs = document.createElement("a"); //genererer a
toAboutUs.setAttribute("href", "om_os.html"); //a får attribut href="om_os.html"
toAboutUs.setAttribute("class", "nav-link"); //logoet får attribut class="nav-link"
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
  "<h3>Kontaktinformation</h3>" +
  "<address>" +
  "<p>+45 49 21 21 56</p><br>" +
  '<a href="mailto:klinik@kastenskov.dk"><p>klinik@kastenskov.dk</p></a><br>' +
  '<a href="https://www.facebook.com/pages/Tandklinikken-Claus-Kastenskov/754821831261917?pnref=lhc"><p>Find os på Facebook</p></a>' +
  "</address>"; //genererer content til article[0]

//article[1]
const columnTwo = document.createElement("article"); //genererer article
columnTwo.setAttribute("id", "footer_column2"); //article[1] får attribut id="footer_column2"
footerFlex.appendChild(columnTwo); //article[1] er child til section
columnTwo.innerHTML =
  "<h3>Find vej</h3>" +
  "<address>" +
  "<p>Tandlæge Claus Kastenskov</p><br>" +
  "<p>Stengade 57,</p><br>" +
  "<p>3000 Helsingør</p><br>" +
  '<a href="https://www.google.com/maps/place/Tandl%C3%A6ge+Claus+Kastenskov/@56.0347192,12.6117115,18.25z/data=!4m5!3m4!1s0x4652311147d38b79:0x50b46739b41bfe7!8m2!3d56.034712!4d12.612648"><p>Vis på kort</p></a><br>' +
  "<p>4 minutter fra Helsingør St.</p>" +
  "</address>"; //genererer content til article[1]

//article[2]
const columnThree = document.createElement("article"); //genererer article
columnThree.setAttribute("id", "footer_column3"); //article[2] får attribut id="footer_column3"
footerFlex.appendChild(columnThree); //article[2] er child til section
columnThree.innerHTML =
  "<h3>Åbningstider</h3>" +
  '<div id="time_table">' +
  '<div class="time_row"><p>Mandag:</p><p>08:00 - 16:00</p></div>' +
  '<div class="time_row"><p>Tirsdag:</p><p>08:00 - 17:00</p></div>' +
  '<div class="time_row"><p>Onsdag:</p><p>08:00 - 16:00</p></div>' +
  '<div class="time_row"><p>Torsdag:</p><p>08:00 - 16:00</p></div>' +
  '<div class="time_row"><p>Fredag:</p><p>08:00 - 12:00</p></div>' +
  '<div class="time_row"><p>Lørdag:</p><p>Lukket</p></div>' +
  '<div class="time_row"><p>Søndag:</p><p>Lukket</p></div>' +
  "</div>"; //genererer content til article[2]
