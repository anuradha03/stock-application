import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-project';
  charactersLeft = 400;
  maxCharacters = 400;
  counterColor = ''; 
  textareaContent = ''; 
  showTable = false; 
  buttonEnabled = true; 
  

enableButton(): void {
  this.buttonEnabled = true;
}

  onInput(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    const enteredText = target.value;
    const remainingCharacters = this.maxCharacters - enteredText.length;
    this.showTable=false;

    if (remainingCharacters >= 0) {
      this.charactersLeft = remainingCharacters;
      this.counterColor = remainingCharacters === 0 ? 'red' : ''; 
      this.textareaContent = enteredText.trim(); 
    } else {
      target.value = enteredText.slice(0, this.maxCharacters);
      this.charactersLeft = 0;
      this.counterColor = 'red';
      this.textareaContent = enteredText.slice(0, this.maxCharacters).trim(); 
    }
  }

  evaluate(): void {
    
  if (this.textareaContent.length > 0) {
    this.showTable = true;
    this.buttonEnabled = false; 
  }
  }
  
}
