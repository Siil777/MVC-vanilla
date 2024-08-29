class taskModel {
    constructor(){
        this.tasks = JSON.parse(localStorage.getItem('tasks'));
        this.listeners = [];
    }
    addTask(task) {
        this.tasks.push(task);
        this._commit(this.tasks);
        this.notify();
    }
    _commit(tasks){
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    getTasks(){
        return this.tasks;
    }
    addListener(listener){
        this.listeners.push(listener);
    }
    notify(){
        this.listeners.forEach(listener=>listener(this.listeners));
    }
}