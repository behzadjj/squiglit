import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from 'src/app/service/language/language.service';

@Pipe({
  name: 'language',
  pure: false
})
export class LanguagePipe implements PipeTransform {

  constructor(private languageService: LanguageService){

  }

  transform(value: any, ...args: any[]): string {
    return this.languageService.get(value);
  }

}
