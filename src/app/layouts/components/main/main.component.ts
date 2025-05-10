import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonServiceService } from 'src/app/shared/services/common-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public searchForm: FormGroup = new FormGroup({});
  public user: any = null;
  public repos: any[] = [];
  public error: any = '';
  public loading: boolean = false;
  public page = 1;
  public perPage = 5;

  constructor(
    private _commonService: CommonServiceService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createSearchForm();
  }


  public createSearchForm() {
    this.searchForm = this._formBuilder.group({
      username: new FormControl('', [Validators.required]),

    })
  }

  public search() {
    if (this.searchForm.invalid) return;
    this.loading = true;
    this.error = '';
    const username = this.searchForm.value.username;
    this._commonService.getUser(username).subscribe({
      next: (res: any) => {
        this.user = res;
        this.getRepos(1);
      },
      error: () => {
        this.user = null;
        this.repos = [];
        this.error = 'User not found';
        this.loading = false;
      }
    });
  }

  public getRepos(page: any) {
    this.page = page;
    this._commonService.getRepos(this.searchForm.value.username, this.page, this.perPage).subscribe({
      next: ((res: any) => {
        this.repos = res;
        this.loading = false;

      }),
      error: ((error) => {
        console.log(error);

      })
    })
  }
}
