export class TreeNode<T>{
    data?: T
    children?: Map<string, TreeNode<Partial<T>>> | null
}

// type Inside<P, T> = T extends P ? P : undefined;

export class StateTree<K> implements TreeNode<K>{

    data:K = {} as K;
    children:Map<string, StateTree<Partial<K>>> = new Map();

    constructor(){}

    protected addNode<ModelType>(stateName:string, stateData:ModelType){
        const newState = new StateTree<ModelType>();
        newState.data = stateData;

        this.children.set(stateName, newState);
    }

    public findChild(childStateName:string){
        return this.children.get(childStateName);
    }

    public getChild(childStateName:string){
        return this.children.get(childStateName)!;
    }

    public setState(data:K | Partial<K>){
        this.data = {...this.data, ...data};
    }

    public setNode(name:string, state:Partial<K>){
        this.addNode<Partial<K>>(name, state);
    }

}