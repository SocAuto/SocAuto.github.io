import { html } from '../lib.js';

import { deleteListing, getListingById } from '../api/data.js';

const detailsTemplate = (car, isOwner, onDelete) => html`
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src=${car.imageUrl}>
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${car.brand}</li>
            <li><span>Model:</span>${car.model}</li>
            <li><span>Year:</span>${car.year}</li>
            <li><span>Country:</span>${car.country}</li>
        </ul>

        <p class="description-para">${car.description}</p>

        ${isOwner ? html`<div class="listings-buttons">
            <a href="/edit/${car.objectId}" class="button-list">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button-list">Delete</a>
        </div>` : ''}

    </div>
</section>`;

export async function detailsPage(ctx) {
    const carId = ctx.params.id;
    const car = await getListingById(carId);
    const isOwner = ctx.user && car.owner.objectId == ctx.user.objectId;
    ctx.render(detailsTemplate(car, isOwner, onDelete));

    async function onDelete() {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            await deleteListing(carId);
            ctx.page.redirect('/all-listings');
        }
    }
}