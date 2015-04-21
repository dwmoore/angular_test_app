class WidgetsController < ApplicationController
  respond_to :json
  before_action :set_widget, only: [:show, :edit, :update, :destroy]

  def index
    @widgets = Widget.all
    respond_with(@widgets)
  end

  def show
    respond_with(@widget)
  end

  def new
    @widget = Widget.new
    respond_with(@widget)
  end

  def edit
  end

  def create
    @widget = Widget.new(widget_params)
    flash[:notice] = 'Widget was successfully created.' if @widget.save
    respond_with(@widget)
  end

  def update
    flash[:notice] = 'Widget was successfully updated.' if @widget.update(widget_params)
    respond_with(@widget)
  end

  def destroy
    @widget.destroy
    respond_with(@widget)
  end

  private
    def set_widget
      @widget = Widget.find(params[:id])
    end

    def widget_params
      params.require(:widget).permit(:name, :price)
    end
end
