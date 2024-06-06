class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

  # GET /posts
  # GET /posts
  def index
    user_id = current_user.id
    all_posts_with_likes = Post.includes(:likes).all

    likes_for_user = Like.where(user_id: user_id).pluck(:post_id).to_set

    render json: all_posts_with_likes.map do |post|
      post.as_json.merge(
        metadata: parse_metadata(post),
        likes_count: post.likes.size,
        liked_by_current_user: likes_for_user.include?(post.id)
      )
    end
  end

  # GET /posts/:id
  def show
    render json: @post
  end

  # POST /posts
  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/:id
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/:id
  def destroy
    @post.destroy
  end

  private

    def set_post
      @post = Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:post_id, :hash_id, :source, :metadata, :filename)
    end

    def all_posts
      @all_posts ||= Post.all
    end

    def parse_metadata(post)
      JSON.parse(post.metadata)
    rescue JSON::ParserError
      {}
    end
end
