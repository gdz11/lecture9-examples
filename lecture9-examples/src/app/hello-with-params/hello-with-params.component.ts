import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hello-with-params',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './hello-with-params.component.html',
  styleUrl: './hello-with-params.component.css'
})
export class HelloWithParamsComponent implements OnInit {
  id?: number = undefined;
  order: string | null = null;
  page: number = 1;

  data: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(c => {
      this.id = +c.get('id')!;
      this.order = c.get('order');
    });

    this.route.queryParamMap.subscribe(c => {
      if (c.has('page')) {
        this.page = +c.get('page')!;
      }
    });

    this.route.data.subscribe(c => {
      this.data = c;
    });

  }
}
