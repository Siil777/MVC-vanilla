class viewModel {
    constructor(){
    this.taskInput = document.getElementById('input');
    this.taskBtn = document.getElementById('btn');
    this.taskList = document.getElementById('list');
    //all tasks output
    this.AlltasksList = document.getElementById('allTasks');
    this.allTaskBtn = document.getElementById('allTasksBtn');
    }

    getInput(){
        return this.taskInput.value;
    }
    clearInput(){
        this.taskInput.value = '';
    }
    renderTasks(tasks){
        this.taskList.textContent = '';
        const li = document.createElement('li');
        tasks.forEach(task => {
            li.textContent = task;
            this.taskList.appendChild(li);
        });
    }
    bindAddTask(handler){
        this.taskBtn.addEventListener('click', ()=>{
            const btn = this.getInput();
            if(btn){
                handler(btn);
                this.clearInput();
            }
        });
    
    }
    renderAllTasks(tasks){
        this.AlltasksList.textContent = '';
        tasks.forEach((task)=>{
            const lii = document.createElement('li');
            lii.textContent = task;
            lii.style.display = 'none';
            this.AlltasksList.appendChild(lii);
            if(lii) {
                this.allTaskBtn.addEventListener('click', (event)=>{
                    const ifLiClicked = event.target;
                    console.log('button clicked!',ifLiClicked);
                    if(lii.style.display === 'none' || lii.style.display === ''){
                        lii.style.display = 'block';
                        lii.classList.remove('hide');
                        lii.classList.add('show');
                    }else{
                        lii.style.display = 'none';
                        lii.classList.remove('show');
                        lii.classList.add('hide');

                    }
                });
            }
        });
    }
    
}