import { Component, Input, OnInit } from '@angular/core';
import { StateModels } from '../state-management-tools/models/state-models';
import { StateTree } from '../state-management-tools/structures/tree';

@Component({
  selector: 'app-child-node',
  templateUrl: './child-node.component.html',
  styleUrls: ['./child-node.component.css']
})
export class ChildNodeComponent implements OnInit {

  @Input() state = 
  new StateTree<StateModels.Resp2Model>() as StateTree<Pick<Partial<StateModels.StateModel>, 'stepParent'>>;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.state.data.stepParent = {
      stepChild: 'changed',
      stepChild2: 1,
      stepChild3: []
    };
    
    //console.log(this.state)

  }

}
