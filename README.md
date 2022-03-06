# Ascii Faces E-Commerce Site
> This is an ecommerce site, where you can buy all sorts of ascii faces like `(ノ・∀・)ノ` and `¯_(ツ)_/¯`, in a wide variety of font sizes. The homepage should display a list of products for people to browse.

## Getting Started

### Tools/Stacks

1. React
2. json-server
3. Material-ui
4. Axios

### Start Application

- Clone project and cd into it
- Install all dependencies `npm install`
- Run `npm start` to start the application
- Access the application on [http:localhost:3000](http:localhost:3000)

### Features

 ### Products features
 * Products are displayed in a grid.
 * User have an option to sort the products in ascending order. Can sort by "size", "price" or "id". The products list would be reloaded when a new sorting option is chosen.
 * Each product has a "size" field, which is the font-size (in pixels). The ascii faces are displayed in their correct size, to give customers a realistic impression of what they're buying.
 * Each product has a "price" field, in cents. Formatted as dollars like `$3.51`.
 * Each product has a "date" field, which is the date the product was added to the catalog. Dates are displayed in relative time (eg. "3 days ago") unless they are older than 1 week, in which case the full date is displayed.
 * The product grid automatically loads more items as you scroll down.
 * An animated "loading..." message is displayed while the user waits for the data to load.
 * To improve the user's experience, the next batch of results are pre-emptively fetch in advance, making use of idle-time. But they still are not displayed until the user has scrolled to the bottom of the product grid.
 * When the user reaches the end and there are no more products to display, "~ end of catalogue ~" message is shown.

 ### Ads features
 * After every 20 products an advertisement from one of our sponsors is inserted.
 * Ads are randomly selected


## Author
*  [Frank Ezeh](https://www.linkedin.com/in/frank-ezeh-7a79a0182)

## License
This project is licensed under the MIT license - see the LICENSE.md file for details.
```