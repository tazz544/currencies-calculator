import {animate, style, transition, trigger} from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate('.3s ease-in-out', style({
      opacity: 1
    }))
  ])
]);

export const fadeOut = trigger('fadeOut', [
  transition(':leave', [
    style({
      opacity: 1
    }),
    animate('.3s ease-in-out', style({
      opacity: 0
    }))
  ])
]);

export const fadeLeftIn = trigger('fadeLeftIn', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(100%)'
    }),
    animate('.3s ease-in-out', style({
      opacity: 1,
      transform: 'translateX(0)'
    }))
  ])
]);

export const fadeLeftOut = trigger('fadeLeftOut', [
  transition(':leave', [
    style({
      opacity: 1,
      transform: 'translateX(0)'
    }),
    animate('.3s ease-in-out', style({
      opacity: 0,
      transform: 'translateX(100%)'
    }))
  ])
]);

export const fadeRightIn = trigger('fadeRightIn', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(-100%)'
    }),
    animate('.3s ease-in-out', style({
      opacity: 1,
      transform: 'translateX(0)'
    }))
  ])
]);

export const fadeRightOut = trigger('fadeRightOut', [
  transition(':leave', [
    style({
      opacity: 1,
      transform: 'translateX(0)'
    }),
    animate('.3s ease-in-out', style({
      opacity: 0,
      transform: 'translateX(-100%)'
    }))
  ])
]);
