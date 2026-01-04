import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DetailSettingsComponent } from './detail-settings.component';

describe('DetailSettingsComponent', () => {
  let component: DetailSettingsComponent;
  let fixture: ComponentFixture<DetailSettingsComponent>;

  const matDialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        NoopAnimationsModule
      ],
      declarations: [ DetailSettingsComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { curMuted: false } },
        { provide: MatDialogRef, useValue: matDialogRefSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
