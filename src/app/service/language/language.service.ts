import { Injectable } from '@angular/core';
import * as data from './lang.json';


export enum AppLanguages {
  ENGLISH = 'eng',
  ARABIC = 'ar'
}


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  static DEFAULT_LANGUAGE = data['default']['mainLanguage'];

  private currentLanguage = LanguageService.DEFAULT_LANGUAGE

  constructor() {
  }

  get(key: string): string {
    if (this.currentLanguage === LanguageService.DEFAULT_LANGUAGE) {
      return key;
    }
    const object = data['default']['dictionary'][key] || {};
    
    const languageIndex = data['default']['languages'][this.currentLanguage];

    return object[languageIndex] || 'unset word';
  }

  changeLanguage(language: AppLanguages) {
    this.currentLanguage = language;
  }


}
