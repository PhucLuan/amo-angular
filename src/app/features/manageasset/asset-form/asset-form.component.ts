import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';

@Component({
  selector: 'app-asset-form',
  templateUrl: './asset-form.component.html',
  styleUrls: ['./asset-form.component.css']
})
export class AssetFormComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.GetAsset();
  }

  GetAsset(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
  }

}
