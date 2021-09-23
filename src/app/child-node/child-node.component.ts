import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output() childClick = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onChildDivClick(){
    console.log('?')
    this.childClick.emit();
    this.state.data.stepParent = {
      stepChild: 'yes it is wonderful',
      stepChild2: 1,
      stepChild3: []
    };
  }

  ngOnChanges(){
    console.log('are you curious?')
  }

}
