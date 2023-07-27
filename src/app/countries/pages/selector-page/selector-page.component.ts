import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/country.interfaces';
import { filter, startWith, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  public countriesByRegion: SmallCountry[] = [];
  public borders: SmallCountry[] = [];

  public myForm : FormGroup = this.fb.group({
    region : ['', Validators.required],
    country : ['', Validators.required],
    border : ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
              private countriesService: CountriesService){  }


  ngOnInit(): void {
    this.onRegionChanged();
    this.onCountryChanged();

  }


  get regions(): Region[]{
    return this.countriesService.regions;
  }

   onRegionChanged(): void{
    this.myForm.get('region')!.valueChanges
    .pipe(
      tap( () => this.myForm.get('country')!.setValue('')),
      tap( () => this.borders = []),
      switchMap( (region) => this.countriesService.getcountriesByRegion(region)),
      //switchMap( this.countriesService.getcountriesByRegion) // Esto tb serviria, pq sabemos que es el unico que se pasa como parametro y es lo que devuelve la funcion onRegionChanged
    )
    .subscribe(
      countries => {
       this.countriesByRegion = countries;
   });
  }

  onCountryChanged(): void{
    this.myForm.get('country')!.valueChanges
    .pipe(
      tap( () => this.myForm.get('border')!.setValue('')),
      filter((value: string) => value.length > 0),
      switchMap( (alphaCode) => this.countriesService.getcountryByAlphaCode(alphaCode)),
      switchMap( (country) => this.countriesService.getcountriesBordersByCodes( country.borders)),
    )
    .subscribe(
      countries => {
      //  console.log({ borders : country.borders})
       this.borders = countries;
   });
  }
}
