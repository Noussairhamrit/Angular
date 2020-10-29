import { Component, OnInit ,Input,Inject} from '@angular/core';
/** */
import {Dish } from '../shared/dish'
import { DishService } from '../srevices/dish.service';
/** */

import { Params, ActivatedRoute } from '@angular/router'; /// pour peux utiliser les 'ActivatedRoute'
import { Location } from '@angular/common'; ////pour revenir a la page precedente
/** */
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';
import {Comment} from '../shared/comment';
/** */

import { switchMap } from 'rxjs/operators';

/** */
import {visibility,expand} from '../animations/app.animation'


/** */

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  animations: [
    visibility(),
    expand()
  ]
})
export class DishdetailComponent implements OnInit {
  commentForm:FormGroup
  comment:Comment 
  @ViewChild('Cform') commentFormDirective;

  visibility = 'shown';


    //@Input()
    /**Maintenant, ce module d'entrée me permet de déclarer 
     un décorateur pour cette variable de plat que j'ai défini ici, 
    comme ceci, en entrée avec la parenthèse ici à ce plat ici. */

  dishh : Dish;
  dishIds :string[];
  prev: string;
  next : string;
  errMess: string;

  dishcopy :Dish;
  

  formErrors = {
    'author': '',
    'comment': ''
    
  };
  validationMessages = {
    'author': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'comment': {
      'required':      'Last Name is required.'
      
    }
  };


  constructor(private _route:ActivatedRoute,
              private _dishservice:DishService,
              private _location:Location,
              private fb: FormBuilder,
              @Inject('baseURL') private baseURL) {
                this.createForm();
               }

              ngOnInit() {
                this._dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
                this._route.params.pipe(switchMap((params: Params) => {this.visibility = 'hidden'; 
                return this._dishservice.getDish(params['id'])}))
                .subscribe(dishh => { this.dishh = dishh;this.dishcopy=dishh; this.setPrevNext(dishh.id);
                  this.visibility = 'shown';
                  errmess => this.errMess = <any>errmess});///// setPrevNext dans le subscribe pour qu'a chaque fois en test sur le dish courant
               
              }
              
            

              setPrevNext(dishId: string) {
                const index = this.dishIds.indexOf(dishId);
                this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
                this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
              }

              createForm() :void {
                this.commentForm = this.fb.group({
                  author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
                  rating :'',
                  comment: ['', Validators.required ]
                 
                });
                this.commentForm.valueChanges
                  .subscribe(data => this.onValueChanged(data));
            
                this.onValueChanged();
              }

              onValueChanged(data?: any) {
                if (!this.commentForm) { return; }
                const form = this.commentForm;
                for (const field in this.formErrors) {
                  if (this.formErrors.hasOwnProperty(field)) {
                    // clear previous error message (if any)
                    this.formErrors[field] = '';
                    const control = form.get(field);
                    if (control && control.dirty && !control.valid) {
                      const messages = this.validationMessages[field];
                      for (const key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                          this.formErrors[field] += messages[key] + ' ';
                        }
                      }
                    }
                  }
                }
                this._route.params.pipe(switchMap((params: Params) => this._dishservice.getDish(params['id'])))
                .subscribe(dishh => { this.dishh = dishh; this.setPrevNext(dishh.id); 
                  if (this.comment){ this.dishh.comments.push(this.comment)}
                  });
              }
                  
                 
              onSubmit() {
                this.comment = this.commentForm.value;
                this.comment.date = new Date().toISOString();
                this.dishcopy.comments.push(this.comment);
    this._dishservice.putDish(this.dishcopy)
      .subscribe(dishh => {
        this.dishh = dishh; this.dishcopy = dishh;
      },
      errmess => { this.dishh = null; this.dishcopy = null; this.errMess = <any>errmess; });
                console.log(this.comment);
                this.comment = null;
                this.commentForm.reset({
                  author: '',
                  comment: '',
                  rating: 5
                });
              }


  ///////methode pour retourne a la page precedente
  goBack(): void {
    this._location.back();
  }
}
