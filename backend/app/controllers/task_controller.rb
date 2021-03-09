class TaskController < ApplicationController

    def index 
        task_list = Task.all
        render json: task_list
    end 

    def create
        current_user = User.first
        
        task = current_user.tasks.create(task_params)
        if task.valid?
            render json: current_user
        else
            render json: { error: task.errors.full_messages }, :status => :unprocessable_entity
        end
    end
    
    
    def update
        current_user = User.first
        
        task = Task.find(params[:id])
        task.update(task_params)
        
        render json: current_user
    end
    
    def destroy
        current_user = User.first
        
        task = Task.find(params[:id])
        task.destroy

        render json: current_user
    end

    private

    def task_params
        params.permit(:title, :complete)
    end

    def find_task
        task = Task.find(params[:id])
    end

end
