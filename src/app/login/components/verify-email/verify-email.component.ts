import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  typeText = new Array();

  textThank: string
  textConfirmation: string
  textVoyage: string
  textContinue: string

  textPrint: string = ""

  textSpeed: number
  currentIndex: number
  currentArrLength: number
  currentScrollAt: number
  currentTextPos: number
  stringContent: string
  currentRow: number

  isDisabled: boolean

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
    this.textThank = "Thank you for creating an account with us and welcome to the AstroWhirled family."
    this.textConfirmation = "A confirmation email awaits you in your email account."
    this.textContinue = "You are ready to choose your adventures. You may continue to your profile now."
    this.textVoyage = "We wish you a fair voyage...."

    this.typeText.push(this.textThank, this.textConfirmation, this.textContinue, this.textVoyage)

    this.textSpeed = 30
    this.currentIndex = 0
    this.currentArrLength = this.typeText[0].length
    this.currentScrollAt = 0
    this.currentTextPos = 0
    this.stringContent = ''
    this.currentRow = 0

    this.isDisabled = true
  }

  ngOnInit(): void {
    this.typewriter()
  }

  public continueClick() {
    this.router.navigate(['/'])
  }

  private flashYellow() {
    document.querySelectorAll(".white").forEach(
      (element) => {
        element.classList.add("yellow")
        element.classList.remove("white")
      }
    )
    setTimeout(() => {
      this.flashWhite()
    }, 500);
  }

  private flashWhite() {
    document.querySelectorAll(".yellow").forEach(
      (element) => {
        element.classList.add("white")
        element.classList.remove("yellow")
      }
    )
    setTimeout(() => {
      this.flashYellow()
    }, 500);
  }

  private typewriter() {

    this.stringContent = '  '
    this.currentRow = Math.max(0, this.currentIndex - this.currentScrollAt)

    while (this.currentRow < this.currentIndex) {
      this.stringContent += this.typeText[this.currentRow++] + "<br/>"
    }

    this.textPrint = this.stringContent + this.typeText[this.currentIndex].substring(0, this.currentTextPos) + "_"

    if (this.currentTextPos++ == this.currentArrLength) {
      this.currentTextPos = 0
      this.currentIndex++
      if (this.currentIndex != this.typeText.length) {
        this.currentArrLength = this.typeText[this.currentIndex].length
        setTimeout(() => {
          this.typewriter()
        }, 700);
      }
      else {
        this.isDisabled = false
        document.querySelectorAll(".button").forEach(
          (element) => {
            element.classList.add("visible")
          }
        )
        this.flashYellow()
      }
    }
    else {
      setTimeout(() => {
        this.typewriter()
      }, this.textSpeed);

    }
  }

}
