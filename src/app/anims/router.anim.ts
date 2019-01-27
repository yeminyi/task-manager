import {animate, state, style, transition, trigger, group, AnimationTriggerMetadata} from '@angular/animations';

export const slideToRight = trigger('routeAnim', [
  state('void', style({'position':'fixed','width': '100%', 'height': '80%'})),
  state('*', style({'position':'fixed','width': '100%', 'height': '80%'})),
  
  transition(':enter', [
    style({transform: 'translateX(-100%)'}),
    animate('.5s ease-in-out', style({transform: 'translateX(0)'}))
  ]),
  transition(':leave', [
    style({transform: 'translateX(0)'}),
    animate('.5s ease-in-out', style({transform: 'translateX(100%)'}))
  ]),
]);




// export const defaultRouteAnim: AnimationTriggerMetadata = slideToRight;
