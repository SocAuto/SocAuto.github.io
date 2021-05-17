import { html } from '../../node_modules/lit-html/lit-html.js';

const homeTemplate = () => html`
<section id="main">
    <div id="welcome-container">
        <h1>Welcome to SocAuto</h1>
        <h2>Revisit your Eastern European childhood</h2>
        <img class="hero" src="/images/kisspng-vaz-2106.png" alt="carIntro">
        <h2>To see the retro collection click on the link below:</h2>
        <div>
            <a href="/all-listings" class="button">Automobiles</a>
        </div>
    </div>
</section>`;

export async function homePage(ctx) {
    ctx.render(homeTemplate())
}