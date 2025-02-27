import RestaurantController from '../controllers/RestaurantController.js'

const loadFileRoutes = function (app) {
  // TODO: Include routes for restaurant described in the lab session README
  app.route('/restaurants')
    .get(
      RestaurantController.index) //  FR1: List all restaurants
    .post(
      RestaurantController.create) // FR3: Create a restaurant
  app.route('/restaurants/:restaurantId')
    .put(
      RestaurantController.update) // FR3: Update a restaurant
    .delete(
      RestaurantController.destroy) // FR3: Delete a restaurant
    .get(
      RestaurantController.show) // FR3: Show a restaurant
}
export default loadFileRoutes
