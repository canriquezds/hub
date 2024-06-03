class ApplicationController < ActionController::API
  before_action :authenticate_google_user

  private

  def authenticate_google_user
    @google_user = request.env['google_user']
    unless @google_user
      render json: { error: 'Unauthorized access attempt. Sorry.' }, status: :unauthorized
    end
  end
end
