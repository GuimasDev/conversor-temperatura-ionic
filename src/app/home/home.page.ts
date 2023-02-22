import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  escalaDe!: string;
  temperaturaDe!: number;
  escalaPara!: string;
  temperaturaPara!: number;

  constructor() {}

  async bt_converter() {
    if (this.escalaDe != null && this.temperaturaDe != null && this.escalaPara != null) {
      if (this.escalaDe != this.escalaPara) {
        switch (this.escalaPara) {
          case "celsius":
            this.temperaturaPara = this.converterParaCelsius();
            break;
          case "fahrenheit":
            this.temperaturaPara = this.converterParaFahrenheit();
            break;
          case "kelvin":
            this.temperaturaPara = this.converterParaKelvin();
            break;
        }
      } else {
        alert("A segunda escala não pode ser igual a primeira!")
      }
    } else {
      alert("Preencha todos os campos!")
    }
  }

  converterParaFahrenheit(): number {
    switch (this.escalaDe) {
      case "celsius":
        return ((this.temperaturaDe * 1.8) + 32);
        break;
      case "kelvin":
        return ((this.temperaturaDe - 273) * 1.8) + 32;
        break;
    }
    alert("Erro ao fazer a conversão");
    return 0;
  }

  converterParaKelvin(): number {
    switch (this.escalaDe) {
      case "fahrenheit":
        return (5 * (this.temperaturaDe - 32) / 9) + 273;
        break;
      case "celsius":
        return (this.temperaturaDe + 273);
        break;
    }
    alert("Erro ao fazer a conversão");
    return 0;
  }

  converterParaCelsius(): number {
    switch (this.escalaDe) {
      case "fahrenheit":
        return (5 * (this.temperaturaDe - 32) / 9);
        break;
      case "kelvin":
        return (this.temperaturaDe - 273);
        break;
    }
    alert("Erro ao fazer a conversão");
    return 0;
  }

  async bt_limpar(){
    this.escalaDe = "";
    this.temperaturaDe = 0;
    this.escalaPara = "";
    this.temperaturaPara = 0;
  }

}
