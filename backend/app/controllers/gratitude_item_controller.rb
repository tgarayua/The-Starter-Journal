class GratitudeItemController < ApplicationController

    def index 
        gratitude_items = GratitudeItem.all
        render json: gratitude_items
    end 

    def create
        current_user = User.first

        gratitude_item = current_user.gratitude_items.create(gratitude_item_params)
        if gratitude_item.valid?
            render json: gratitude_item
        else
            render json: { error: gratitude_item.errors.full_messages }, :status => :unprocessable_entity
        end
    end


    def update
        gratitude_item = GratitudeItem.find(params[:id])
        gratitude_item.update(gratitude_item_params)
    end

    def destroy
        gratitude_item = GratitudeItem.find(params[:id])
        gratitude_item.destroy
    end

    private

    def gratitude_item_params
        params.permit(:title)
    end

    def find_gratitude_item
        gratitude_item = GratitudeItem.find(params[:id])
    end

end