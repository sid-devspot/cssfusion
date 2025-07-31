import { Component, Input } from '@angular/core';
import * as Prism from 'prismjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-motion-code',
  templateUrl: './motion-code.component.html',
  styleUrl: './motion-code.component.scss'
})
export class MotionCodeComponent {
@Input() showCode: string = '';
  @Input() compCodeHead: boolean = true;
  showLang: string = '';
  flowerOpen: string = '{{';
  flowerClose: string = '}}';

  constructor(private snackBar: MatSnackBar) {}

  ngAfterViewChecked() {
    Prism.highlightAll();
  }

  copyCode(codeBlock: HTMLElement): void {
    const code = codeBlock.innerText.trim();
    navigator.clipboard.writeText(code).then(
      () =>
        this.snackBar.open('Code copied to clipboard!', 'Close', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right',
        }),
      (err) =>
        this.snackBar.open('Failed to copy code: ' + err, 'Close', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right',
        })
    );
  }

  switchLang(param: string) {
    this.showLang = param;
    Prism.highlightAll();
  }
}
