class TaskController < ApplicationController

    def index 
        task_list = Task.all
        render json: task_list
    end 

    def create
        current_user = User.first

        task = current_user.tasks.create(task_params)
        if task.valid?
            render json: task
        else
            render json: { error: task.errors.full_messages }, :status => :unprocessable_entity
        end
    end


    def update
        task = Task.find(params[:id])
        task.update(task_params)
    end

    def destroy
        task = Task.find(params[:id])
        task.destroy
    end

    private

    def task_params
        params.permit(:title, :complete)
    end

    def find_task
        task = Task.find(params[:id])
    end

end
