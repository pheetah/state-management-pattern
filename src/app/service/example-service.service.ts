import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Resp1Model, Resp2Model } from '../models/service-response-models';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  emitResp1$ = new BehaviorSubject<Resp1Model>({
    parent1:{
      child1: 'asd',
      child2: 2,
      child3: ['1','2','3']
    },
    parent2: ['asd', 'asdas']
  });

  emitResp2$ = new BehaviorSubject<Resp2Model>({
    stepParent:{
      stepChild: 'string',
      stepChild2: 1,
      stepChild3: ['1', '2', '3']
    }
  });

  constructor() { }
}
