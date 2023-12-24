import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  @Input() selectedCompany: any;
  @Output() closePopup = new EventEmitter<void>();
  onClosePopup(): void {
    this.closePopup.emit();
}
}
