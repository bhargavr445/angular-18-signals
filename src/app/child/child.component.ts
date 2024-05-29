import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  value = input(0,{
    transform: (val: number) => (val * 10),
    alias: 'newValue'
  });

  age = input.required<number>();

  derivedAge = computed(() => this.age() * 2);

}
