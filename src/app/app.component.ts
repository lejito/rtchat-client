import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoaderComponent } from './components/loader/loader.component';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private appService: AppService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  public isLoading = true;
  private subscription: Subscription = new Subscription();

  ngOnInit() {
    this.subscription = this.appService.isLoading.subscribe((isLoading) => {
      this.isLoading = isLoading;
      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
