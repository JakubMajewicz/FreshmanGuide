import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.css'],
})
export class BanerComponent {
  banerTitle!: string;
  banerText!: string;

  banerTitleHome: string = 'Dlaczego warto studiować?';
  banerTextHome: string = 'Kilka powodów dlaczego warto studiować';
  banerImageHome: string = `url('/assets/images/umg1.jpeg')`;
  banerTitleAttractions: string = 'Atrakcje w Gdyni';
  banerTextAttractions: string = 'Kilka pomysłów na spędzenie wolnego czasu';
  banerImageAttractions: string = `url('/assets/images/attractions1.jpeg')`;
  banerTitleteachers: string = 'Prowadzący';
  banerTextteachers: string =
    'Informacje o prowadzących pracujących na naszej uczelni';
  banerImageteachers: string = `url('/assets/images/teacher1.jpeg')`;
  banerTitleMap: string = 'Znajdź salę';
  banerTextMap: string =
    'Sprawdź, w którym miejscu znajduje się sala, której szukasz';
  banerImageMap: string = `url('/assets/images/map1.jpeg')`;
  banerTitleFormalities: string = 'Sprawy studenckie';
  banerTextFormalities: string =
    'Przeczytaj informacje na temat formalności i kół naukowych';
  banerImageFormalities: string = `url('/assets/images/students1.jpeg')`;
  banerTitleDictionary: string = 'Słownik studenckiego slangu';
  banerTextDictionary: string =
    'Znajdziesz tu pojęcia, którymi posługują się starsi studenci';
  banerImageDictionary: string = `url('/assets/images/dictionary1.jpeg')`;
  banerTitleCanteen: string = 'Menu uczelnianej stołówki';
  banerTextCanteen: string = 'Sprawdź co możesz zjeść na uczelnianej stołówce';
  banerImageCanteen: string = `url('/assets/images/canteen1.jpeg')`;
  banerTitleInternship: string = 'Lista praktyk';
  banerTextInternship: string =
    'Znajdziesz tu praktyki polecane przez starszych studentów';
  banerImageInternship: string = `url('/assets/images/internship1.jpeg')`;
  banerTitleForum: string = 'Forum';
  banerTextForum: string = 'Zadaj pytanie starszym studentom';
  banerImageForum: string = `url('/assets/images/forum1.jpeg')`;

  @ViewChild('banerImage') banerImage!: ElementRef;

  constructor(private router: Router) {}

  ngDoCheck(): void {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        switch (event.url) {
          case '/atrakcje':
            this.banerImage.nativeElement.style.backgroundImage =
              this.banerImageAttractions;
            this.banerTitle = this.banerTitleAttractions;
            this.banerText = this.banerTextAttractions;
            break;
          case '/prowadzacy':
            this.banerImage.nativeElement.style.backgroundImage =
              this.banerImageteachers;
            this.banerTitle = this.banerTitleteachers;
            this.banerText = this.banerTextteachers;
            break;
          case '/znajdz-sale':
            this.banerImage.nativeElement.style.backgroundImage =
              this.banerImageMap;
            this.banerTitle = this.banerTitleMap;
            this.banerText = this.banerTextMap;
            break;
          case '/sprawy-studenckie':
            this.banerImage.nativeElement.style.backgroundImage =
              this.banerImageFormalities;
            this.banerTitle = this.banerTitleFormalities;
            this.banerText = this.banerTextFormalities;
            break;
          case '/slownik':
            this.banerImage.nativeElement.style.backgroundImage =
              this.banerImageDictionary;
            this.banerTitle = this.banerTitleDictionary;
            this.banerText = this.banerTextDictionary;
            break;
          case '/stolowka':
            this.banerImage.nativeElement.style.backgroundImage =
              this.banerImageCanteen;
            this.banerTitle = this.banerTitleCanteen;
            this.banerText = this.banerTextCanteen;
            break;
          case '/praktyki':
            this.banerImage.nativeElement.style.backgroundImage =
              this.banerImageInternship;
            this.banerTitle = this.banerTitleInternship;
            this.banerText = this.banerTextInternship;
            break;
          case '/forum':
            this.banerImage.nativeElement.style.backgroundImage =
              this.banerImageForum;
            this.banerTitle = this.banerTitleForum;
            this.banerText = this.banerTextForum;
            break;
          default:
            this.banerImage.nativeElement.style.backgroundImage =
              this.banerImageHome;
            this.banerTitle = this.banerTitleHome;
            this.banerText = this.banerTextHome;
            break;
        }
      });
  }
}
