class GratitudeListsController < ApplicationController

    def create
        current_user = User.first

        gratitude_item = current_user.gratitude_item.create(gratitude_item_params)
        if gratitude_item.valid?
            render json: gratitude_item
        else
            render json: { error: gratitude_item.errors.full_messages }, :status => :unprocessable_entity
        end
    end


    def update
        gratitude_item = JournalPost.find(params[:id])
        gratitude_item.update(gratitude_item_params)
    end

    def destroy
        gratitude_item = GratitudeList.find(params[:id])
        gratitude_item.destroy
    end

    private

    def gratitude_item_params
        params.permit(:title, :content)
    end

    def find_gratitude_item
        gratitude_item = JournalPost.find(params[:id])
    end

end