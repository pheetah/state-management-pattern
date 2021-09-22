export interface Resp1Model{
    parent1: Parent1Type,
    parent2: Array<string>
}

export interface Resp2Model{
    stepParent: StepParentModel
}

export interface StateModel extends Resp1Model, Resp2Model{}

export interface Parent1Type{
    child1: string,
    child2: number,
    child3: Array<string>
}

export interface StepParentModel{
    stepChild: string,
    stepChild2: number,
    stepChild3: Array<string>
}