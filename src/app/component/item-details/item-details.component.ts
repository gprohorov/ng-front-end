import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ItemService} from '../../service/item.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  currentItem = null;


  constructor( private service: ItemService,
               private route: ActivatedRoute,
               private router: Router) { }


  ngOnInit(): void {
    this.getItem(this.route.snapshot.paramMap.get('id'));
  }


  getItem(id): void {
    this.service.get(id)
      .subscribe(
        data => {
          this.currentItem = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateItem(): void {
    this.service.update(this.currentItem._id, this.currentItem)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/items']);
        },
        error => {
          console.log(error);
        });
  }
}
