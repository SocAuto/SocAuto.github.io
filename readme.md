# SocAuto

A front-end app (SPA) for viewing and managing socialistic automobile listings. The application allows visitors to browse through different automobile listings. Users may register with a username and password, which allows them to create their own listings. Listing authors can also edit or delete their own publications at any time.

## Functionality
* Authentication of users (registration and login)
* All users (both authenticated and unauthenticated) can view the catalog page with the automobile listings posted by other users
* The catalog is paginated and shows 6 automobile listings per page
* Only authenticated users can create automobile listings
* Only the author (creator/owner) of the automobile listing can edit and delete it


## Used Technologies
* HTML 
* CSS
* JavaScript
* lit-html
* page
* GitHub Pages
* Back4App

## Views (Pages)
* **Home Page** (Welcome page)
* **Login/Register** - registration with username and password
* **All Automobiles** - catalog with all the cars paginated by 6 per page
* **Details Page** - additional information (photo, brand, model, year, country of origin, description) about the automobile listing available to all users and an ability for the listing author to edit or delete it
* **By Year** - filter automobiles by their production year
* **Create Page** - authenticated users can create automobile listings
* **Profile Page** - the logged-in user can view all automobile listings created by him

## Data Structures
### Collections
* Sessions (default)
* Users (default)

```JavaScript
{
    username: String,
    password: String
}
```

* Automobiles

```JavaScript
{
    brand: String,
    model: String,
    description: String,
    year: String,
    imageUrl: String,
    country: String,
}
```

## Authorization Control
* Guests can register and view the catalog, the automobile listing details and filter the automobile listings by year
* Registered users can create new automobile listings and view their own profile with all the listings they have personally created
* Only the author of an automobile listing can edit or delete it
