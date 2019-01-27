import {animate, state, style, transition, trigger, group, AnimationTriggerMetadata} from '@angular/animations';

export const slideToRight = trigger('routeAnim', [
  state('void', style({'width': '100%', 'height': '80%'})),
  state('*', style({'width': '100%', 'height': '80%'})),
  transition(':enter', [
    style({transform: 'translateX(-100%)'}),
    group([
      animate('.5s ease-in-out', style({transform: 'translateX(0)'}))
    ])
  ]),
  transition(':leave', [
    style({transform: 'translateX(0)'}),
    group([
      animate('.5s ease-in-out', style({transform: 'translateX(100%)'})),
    ])
  ]),
]);




// export const defaultRouteAnim: AnimationTriggerMetadata = slideToRight;
