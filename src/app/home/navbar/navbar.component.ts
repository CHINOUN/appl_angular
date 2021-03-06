import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.addLangs(["en", "ar"]);
    translate.setDefaultLang('en');

   // let browserLang = translate.getBrowserLang(); ====> na7inah 5ater bach na5ou langue par default w hadhika ta5Ou language navigateur 
   let browserLang = translate.getDefaultLang();
    translate.use(browserLang.match(/en|ar/) ? browserLang : 'en');
   }
  
  ngOnInit() {
  }

}
