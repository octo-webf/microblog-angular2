import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MessageListComponent} from "./message-list/message-list.component";
import {MessageItemComponent} from "./message-item/message-item.component";
import {MessageInputComponent} from "./message-input/message-input.component";

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MessageListComponent,
        MessageItemComponent,
        MessageInputComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));
});