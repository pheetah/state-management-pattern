import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../service/example-service.service';
import { StateModels } from '../state-management-tools/models/state-models';
import { StateTree } from '../state-management-tools/structures/tree';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-parent-node',
  templateUrl: './parent-node.component.html',
  styleUrls: ['./parent-node.component.css']
})
export class ParentNodeComponent implements OnInit {

  state = new StateTree<StateModels.StateModel>();

  constructor(
    private testService: ExampleService
  ) { }

  ngOnInit(): void {

    this.testService.emitResp1$.pipe(
      delay(2000)
    ).subscribe(response => {
      this.state.setState(response);
      
      //console.log(this.state)
    })

    this.testService.emitResp2$.pipe(
      delay(2000)
    ).subscribe(response => {
      this.state.setNode('subParent', response);
      
      //console.log(this.state)
    })

  }

}
