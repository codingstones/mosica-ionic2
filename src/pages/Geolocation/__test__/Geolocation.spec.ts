import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {GeolocationPage} from '../Geolocation';
import {GeolocationService} from '../../../services/GeolocationService';

describe('GeolocationPage', () => {

  let fixture: ComponentFixture<GeolocationPage>;
  let instance: GeolocationPage;

  const geolocationStub = {
    currentPosition: ()=> {
      return Promise.resolve({latitude: 'lat', longitude: 'lang'})
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      declarations: [
        GeolocationPage
      ],
      providers: [
        {provide: GeolocationService, useValue: geolocationStub}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeolocationPage);
    instance = fixture.debugElement.componentInstance;
  });

  it('shows geolocation', async () => {
    instance.ngOnInit();
    await geolocationStub.currentPosition();
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML).toContain('lat');
  });
  //
  // it('should show a title', () => {
  //   const h2: HTMLHeadingElement = fixture.debugElement.query(By.css('ion-title')).nativeElement;
  //   expect(h2.textContent).toContain('Home');
  // });
  //
  // it('should show a greeting', () => {
  //   const h2: HTMLHeadingElement = fixture.debugElement.query(By.css('h2')).nativeElement;
  //   expect(h2.textContent).toContain('Testing Ionic2 with Jest!');
  // });
  //
  // it('should show a link to the Ionic\'s home page', () => {
  //   const anchors: HTMLAnchorElement[] = fixture.debugElement.queryAll(By.css('a'))
  //     .map(a => a.nativeElement)
  //     .filter(a => a.href === 'https://ionicframework.com/');
  //   expect(anchors.length).toEqual(1);
  // });
  //
  // it('should show a link to the Jest\'s home page', () => {
  //   const anchors: HTMLAnchorElement[] =
  //     fixture.debugElement.queryAll(By.css('a'))
  //       .map(a => a.nativeElement)
  //       .filter(a => a.href === 'https://facebook.github.io/jest/');
  //   expect(anchors.length).toEqual(1);
  // });
  //
  // it('should open all links on a new tab', () => {
  //   const anchors: HTMLAnchorElement[] =
  //     fixture.debugElement.queryAll(By.css('a'))
  //       .map(a => a.nativeElement);
  //   anchors.map(a => expect(a.target).toBe('_blank'));
  // });
  //
  // it('should fetch undefined from the storage on init if nothing was stored previously', fakeAsync(() => {
  //   const spy = jest.spyOn(storage, 'get');
  //   instance.ngOnInit();
  //   tick();
  //   expect(spy).toHaveBeenCalledTimes(2);
  //   expect(spy).toHaveBeenCalledWith('userName');
  //   expect(spy).toHaveBeenLastCalledWith('lastUpdated');
  //   expect(instance.userName).toBeUndefined();
  //   expect(instance.lastUpdated).toBeUndefined();
  // }));
  //
  // it('should fetch the data previously stored on the storage on init', fakeAsync(() => {
  //   const spy = jest.spyOn(storage, 'get')
  //     .mockReturnValueOnce(Promise.resolve('John Doe'))
  //     .mockReturnValueOnce(Promise.resolve('2017-05-28T00:00:00.000Z'));
  //   instance.ngOnInit();
  //   tick();
  //   expect(spy).toHaveBeenCalledTimes(2);
  //   expect(spy).toHaveBeenCalledWith('userName');
  //   expect(spy).toHaveBeenLastCalledWith('lastUpdated');
  //   expect(instance.userName).toBe('John Doe');
  //   expect(instance.lastUpdated).toContain(' at ');
  // }));
  //
  // it('should clear the storage', fakeAsync(() => {
  //   const spy = jest.spyOn(storage, 'clear');
  //   instance.clear();
  //   tick();
  //   expect(spy).toHaveBeenCalled();
  //   expect(instance.userName).toBeUndefined();
  //   expect(instance.lastUpdated).toBeUndefined();
  // }));
  //
  // it('should call the clear function when the user clicks the clear button', () => {
  //   const spy = jest.spyOn(instance, 'clear');
  //   const clearButton: HTMLButtonElement = fixture.debugElement.queryAll(By.css('button'))[1].nativeElement;
  //   clearButton.click();
  //   expect(spy).toHaveBeenCalled();
  // });
  //
  // it('should save the entered username & current date into the storage ', fakeAsync(() => {
  //   const spiedStorage = jest.spyOn(storage, 'set');
  //   const spiedMoment = jest.spyOn(moment.fn, 'toISOString').mockReturnValue('2017-05-28T00:00:00.000Z');
  //   instance.userName = 'John Doe';
  //   instance.save();
  //   tick();
  //   expect(spiedStorage).toHaveBeenCalledTimes(2);
  //   expect(spiedStorage).toHaveBeenCalledWith('userName', instance.userName);
  //   expect(spiedStorage).toHaveBeenLastCalledWith('lastUpdated', '2017-05-28T00:00:00.000Z');
  //   spiedMoment.mockReset();
  // }));
  //
  // it('should update the last updated date on save', fakeAsync(() => {
  //   const oldValue: string = instance.lastUpdated;
  //   instance.save();
  //   tick();
  //   expect(instance.lastUpdated).toContain(' at ');
  //   expect(instance.lastUpdated).not.toBe(oldValue);
  // }));
  //
  // it('should call the save function when the user clicks the save button', () => {
  //   const spy = jest.spyOn(instance, 'save');
  //   const saveButton: HTMLButtonElement = fixture.debugElement.queryAll(By.css('button'))[0].nativeElement;
  //   saveButton.click();
  //   expect(spy).toHaveBeenCalled();
  // });
  //
  // it('should update the view with the last updated date on save', fakeAsync(() => {
  //   const oldValue: string = fixture.debugElement.queryAll(By.css('ion-item'))[0].nativeElement.textContent.trim();
  //   instance.save();
  //   tick();
  //   fixture.detectChanges();
  //   const newValue: string = fixture.debugElement.queryAll(By.css('ion-item'))[0].nativeElement.textContent.trim();
  //   expect(newValue).not.toBe(oldValue);
  // }));

});
