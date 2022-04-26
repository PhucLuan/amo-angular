import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-asset-filter',
  templateUrl: './asset-filter.component.html',
  styleUrls: ['./asset-filter.component.css']
})
export class AssetFilterComponent implements OnInit {

  @ViewChild(MatSelect) MySelect!: MatSelect;
  constructor() { }

  ngOnInit(): void {
  }

  toppings = new FormControl();
  
  typesOfShoes: {name: string, id: number }[] = [
    {name: 'Boots', id: 1}, 
    {name: 'Clogs', id: 2},
    {name: 'Loafers', id: 3 },
    {name: 'Moccasins', id: 4},
    {name: 'Sneakers', id:5}
  ];
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  onSelected(res : any){
    console.log(res)
  }
  ngAfterViewInit(): void{
    this.MySelect.selectionChange.subscribe(res => console.log(res))
  }
}
