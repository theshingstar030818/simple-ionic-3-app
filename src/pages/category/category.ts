import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

// Import pages to allow links to the page
import { SingleItem } from '../../pages/single-item/single-item';

// Service import for items
import { ItemApi } from '../../services/service';

// The component imports the specific parts from the html and scss file.
// The Http provider is included to make the API call to the service.
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
  providers: [Http]
})

export class CategoryPage {

  // The items array to populate with data is created
  category: any;
  items: any;
  modifiedData: any;
  categoryFilter: any;

  constructor(
              public navCtrl: NavController,
              private navParams:NavParams,
              private itemApi: ItemApi
            )
            {
              this.category = this.navParams.data;
              console.log(this.category);
            }

  // ------------------------------------------------------------------------------------------
  // FUNCTIONS
  // ------------------------------------------------------------------------------------------

  // This is where the data loads from the service.
  // It happens when the view loads for the first time.
  ionViewDidLoad() {

    // Get the JSON data from our itemApi
    this.itemApi.getFilteredItems(this.category).then(data => this.items = data);
    console.log(this.items);
  }

  // This function filters the array to only include items in the specified category
  filterData() {
    this.items = this.items.filter(item => item.category == 'Fantasticness')
  }

  // This works but changes all the categories of the data
  filterData2($event, categoryName) {
    this.items = this.items.filter(item => item.category == 'categoryName')
  }

  // This function is an event to listen to clicks on elements.
  // The SingleItem Page has been included to be passed in this function.
  itemTapped($event, item) {
    this.navCtrl.push(SingleItem, item);
  }


}