import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {



  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
  }


}
