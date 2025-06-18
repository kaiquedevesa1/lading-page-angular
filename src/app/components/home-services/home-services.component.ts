import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'home-services',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './home-services.component.html',
  styleUrl: './home-services.component.scss',
})
export class HomeServicesComponent {}
