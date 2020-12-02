import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  item = {
    name: '',
    description: ''
  };
  submitted = false;

  constructor(private service: ItemService) {
  }

  ngOnInit(): void {
  }


  saveItem(): void {
    const data = {
      name: this.item.name,
      description: this.item.description
    };

    this.service.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }


  newItem(): void {
    this.submitted = false;
    this.item = {
      name: '',
      description: ''
    };
  }

}
