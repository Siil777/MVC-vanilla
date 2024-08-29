document.addEventListener('DOMContentLoaded', () => {
        const model = new taskModel();
        const view = new viewModel();

        view.renderTasks(model.tasks);
        model.addListener(tasks=> view.renderTasks(tasks));
        view.bindAddTask(task => model.addTask(task));
        //all
        view.renderAllTasks(model.tasks);
        model.addListener(tasks=>view.renderAllTasks(tasks));


        function getData(){
            const di = localStorage.getItem('tasks');
            const li = JSON.parse(di);
            console.log(li);
        }
        getData();
});