class JournalPostController < ApplicationController

    def index 
        journal_posts = JournalPost.all
        render json: journal_posts
    end 

    def show
        journal_post = JournalPost.find_by(id: params[:id])
        if journal_post
            render json: journal_post
        else
            render json: { error: "Journal post not found" }, :status => :not_found
        end
    end

    def create
        current_user = User.first

        journal_post = current_user.journal_posts.create(journal_post_params)
        if journal_post.valid?
            render json: journal_post
        else
            render json: { error: journal_post.errors.full_messages }, :status => :unprocessable_entity
        end
    end


    def update
        journal_post = JournalPost.find(params[:id])
        journal_post.update(journal_post_params)
    end

    def destroy
        journal_post = JournalPost.find(params[:id])
        journal_post.destroy
    end

    private

    def journal_post_params
        params.permit(:title, :content)
    end

end
