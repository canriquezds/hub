class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

  # GET /posts
  def index
    render json: all_posts.map { |post| post.as_json.merge(metadata: parse_metadata(post)) }
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
