import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('searchExpanded') searchExpanded!: ElementRef;
  @ViewChild('modal')  modal!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  showModal() {
    this.searchExpanded.nativeElement.style.display='block';
    this.modal.nativeElement.style.display='block';
  }

  closeModal() {
    this.searchExpanded.nativeElement.style.display='none';
    this.modal.nativeElement.style.display='none';
  }
}
