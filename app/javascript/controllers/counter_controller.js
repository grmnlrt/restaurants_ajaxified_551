import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['count']

  connect() {
    setInterval(this.refresh, 5000);
  }

  refresh = () => {
    // fetch the number of restaurants
    fetch('/restaurants', { headers: { accept: "application/json" } })
      .then(response => response.json())
      .then(data => {
        this.countTarget.innerHTML = data.restaurants.length;
      });
  }
}
