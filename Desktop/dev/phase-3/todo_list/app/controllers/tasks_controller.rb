class TasksController < ApplicationController
  def index
  	@tasks = Task.all
  end


  def create
  	@task = Task.new(task_params)
  	@task.save
  	redirect_to tasks_path
  end

  def new
  	
  end

  def show
  	
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    redirect_to tasks_path

  end

  private

  def task_params
  	params.require(:task).permit(:description)
  end
end
