let containerList = document.querySelector('.g1-navi');
if(!containerList) close();

containerList.setAttribute("style", "padding-top: 100px");

let div = document.createElement('div');
let nav = document.createElement('nav');
let univ = document.createElement('ul');

g1List(univ);
nav.appendChild(univ);
div.appendChild(nav);
containerList.appendChild(div);

function g1List(univ){
    let logo = document.createElement('li');
    let name = document.createElement('li');

    logo.setAttribute("class", "li-logo");
    name.setAttribute("class", "li-name");

    let avt = document.createElement('img');
    avt.src = "images/LOGO-1.png";
    avt.style.blockSize = "50px";
    
    let overview = document.createElement('li');
    let products = document.createElement('li');
    let partners = document.createElement('li');
    let about = document.createElement('li');

    overview.setAttribute("class", "li-content");
    products.setAttribute("class", "li-content");
    partners.setAttribute("class", "li-content");
    about.setAttribute("class", "li-content");

    let login = document.createElement('li');
    let contact = document.createElement('li');

    login.setAttribute("class", "li-content");
    contact.setAttribute("class", "li-content");

    univ.setAttribute("style", "flex");

    univ.appendChild(logo);
    univ.appendChild(name);
    univ.appendChild(overview);
    univ.appendChild(products);
    univ.appendChild(partners);
    univ.appendChild(about);
    univ.appendChild(login);
    univ.appendChild(contact);

    about.setAttribute("style", "margin-right: 30%");
    
    name.style.paddingTop = "10px";
    overview.style.paddingTop = "10px";
    products.style.paddingTop = "10px";
    partners.style.paddingTop = "10px";
    about.style.paddingTop = "10px";
    login.style.paddingTop = "10px";
    contact.style.paddingTop = "10px";

    let name_a = document.createElement('a');
    let overview_a = document.createElement('a');
    let products_a = document.createElement('a');
    let partners_a = document.createElement('a');
    let about_a = document.createElement('a');
    let login_a = document.createElement('a');
    let contact_a = document.createElement('a');
    let avt_a = document.createElement('a');

    name_a.innerHTML = "AlphaVit";
    overview_a.innerHTML = "Overview";
    products_a.innerHTML = "Products";
    partners_a.innerHTML = "Partners";
    about_a.innerHTML = "About";
    login_a.innerHTML = "Login";
    contact_a.innerHTML = "Contact";
    avt_a.appendChild(avt);

    // Links
    avt_a.href = "#";                                       // HOMEPAGE
    name_a.href = avt_a.href;                               // HOMEPAGE
    overview_a.href = "#";                                  // OVERVIEW
    products_a.href = "#";                                  // PRODUCTS
    partners_a.href = "#";                                  // PARTNERS
    about_a.href = "group-1.html";                          // ABOUT
    login_a.href = "#";                                     // LOGIN
    contact_a.href = "#";                                   // CONTACT

    logo.appendChild(avt_a);
    name.appendChild(name_a);
    overview.appendChild(overview_a);
    products.appendChild(products_a);
    partners.appendChild(partners_a);
    about.appendChild(about_a);
    login.appendChild(login_a);
    contact.appendChild(contact_a);
}