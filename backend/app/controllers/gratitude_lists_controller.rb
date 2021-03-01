class GratitudeListsController < ApplicationController

    def index
        @gratitude_lists = GratitudeList.all
    end

    def create
        @user = User.create!(user_params)
    
        redirect_to user_path(@user)
      end

end