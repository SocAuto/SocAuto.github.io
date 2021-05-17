import {page, render } from './lib.js';

import { logout as apiLogout } from './api/data.js';
import { getUserData } from './utility.js';
import { loginPage, registerPage } from './views/auth.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { profilePage } from './views/profile.js';
import { searchPage } from './views/search.js';

import * as api from './api/data.js';
window.api = api;

const main = document.getElementById('site-content');
document.getElementById('logoutBtn').addEventListener('click', logout);

setUserNav();

page('/', decorateContext, homePage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/all-listings', decorateContext, catalogPage);
page('/details/:id', decorateContext, detailsPage);
page('/create', decorateContext, createPage);
page('/edit/:id', decorateContext, editPage);
page('/my-listings', decorateContext, profilePage);
page('/search', decorateContext, searchPage);



page.start();


function decorateContext(ctx, next) {
    ctx.render = (context) => render(context, main);
    ctx.setUserNav = setUserNav;
    ctx.user = getUserData();

    next();
}

function setUserNav() {
    const user = getUserData();
    if (user) {
        document.getElementById('profile').style.display = 'block';
        document.getElementById('guest').style.display = 'none';
        document.getElementById('user-greeting').textContent = `Welcome, ${user.username}`;
    } else {
        document.getElementById('profile').style.display = 'none';
        document.getElementById('guest').style.display = 'block';
    }
}

function logout() {
    apiLogout();
    setUserNav();
    page.redirect('/');
}