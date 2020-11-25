import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items: any;
  currentItem = null;
  currentIndex = -1;
  name = '';

  constructor(private service: ItemService) { }

  ngOnInit(): void {
    this.retrieveItems();
  }

  retrieveItems(): void {
    this.service.getAll()
      .subscribe(
        data => {
          this.items = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }




  setActiveItem(item, index): void {
    this.currentItem = item;
    this.currentIndex = index;
  }


  deleteItem() {

  }
}
