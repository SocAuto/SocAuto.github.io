import { getUserData } from '../utility.js';
import * as api from './api.js';

const host = 'https://parseapi.back4app.com';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

function createPointer(name, id) {
    return {
        __type: 'Pointer', 
        className: name,
        objectId: id 
        }
}

function addOwner(object) {
    const userId = getUserData().objectId;
    object.owner = createPointer('_User', userId);
    
}

//Application-specific requests
// needs fix to show cars in desc order
//get all ads
export async function getAllListings() {
    const response = await api.get(host + `/classes/Automobile`);
    const result = response.results
    return result.sort(function(a, b){return b.createdAt - a.createdAt});
}

//for pagination
export async function getCollectionSize() {
    const response = await api.get(host + '/classes/Automobile?count=1');
    return response.count;
}

//get listing by id
export async function getListingById(id) {
    return await api.get(host + '/classes/Automobile/' + id + '?include=owner');
}

//create listing
export async function createListing(listing) {
    const userId = getUserData().objectId;
    addOwner(listing);
    return await api.post(host + '/classes/Automobile', listing);
}

//edit listing by id
export async function updateListing(id, listing) {
    return await api.put(host + '/classes/Automobile/' + id, listing);
}

//delete listing by id
export async function deleteListing(id) {
    return await api.del(host + '/classes/Automobile/' + id);
}
// needs fix
//get my listings
export async function getMyListings(userId) {
    const query = JSON.stringify({owner: createPointer('Automobile', userId)});
    return await api.get(host + '/classes/Automobile?where=' + encodeURIComponent(query));
}
// needs fix
export async function search(query) {
    return await api.get(host + '/classes/Automobile?where=' + encodeURIComponent(query))
}