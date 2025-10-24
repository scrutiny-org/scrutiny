import { Pipe, PipeTransform } from '@angular/core';
import {formatNumber} from '@angular/common';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {
    static celsiusToFahrenheit(celsiusTemp: number): number {
        return celsiusTemp * 9.0 / 5.0 + 32;
    }
    static formatTemperature(celsiusTemp: number, unit: string, includeUnits: boolean): number|string {
        let convertedTemp
        let convertedUnitSuffix
        switch (unit) {
            case 'celsius':
                convertedTemp = celsiusTemp
                convertedUnitSuffix = '°C'
                break
            case 'fahrenheit':
                convertedTemp = TemperaturePipe.celsiusToFahrenheit(celsiusTemp)
                convertedUnitSuffix = '°F'
                break
        }
        if(includeUnits){
            return formatNumber(convertedTemp, 'en-US') + convertedUnitSuffix
        } else {
            return formatNumber(convertedTemp, 'en-US',)
        }
    }

  transform(celsiusTemp: number, unit = 'celsius', includeUnits = false): number|string {
        let temperature;
        switch (unit) {
            case 'celsius':
                temperature = celsiusTemp;
                break
            case 'fahrenheit':
                temperature = TemperaturePipe.celsiusToFahrenheit(celsiusTemp)
                break
        }
        return TemperaturePipe.formatTemperature(temperature, unit, includeUnits)
  }

}
