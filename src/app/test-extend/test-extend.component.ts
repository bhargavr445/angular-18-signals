import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-test-extend',
  standalone: true,
  imports: [],
  templateUrl: './test-extend.component.html',
  styleUrl: './test-extend.component.scss'
})
export class TestExtendComponent {

  router = inject(Router);
  act = inject(ActivatedRoute)

  // constructor(public router: Router, public act: ActivatedRoute, public http: HttpClient) {

  // }

}
