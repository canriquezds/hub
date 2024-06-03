class UsersController < ApplicationController

  def sign_in
    user_info = @google_user

    user = User.find_or_initialize_by(uid: user_info['sub'])

    if user.new_record?
      user.name = user_info['name']
      user.email = user_info['email']
      user.image = user_info['picture']
      user.username = user_info['email'].split('@').first
      user.save!
      new_user = true
    else
      new_user = false
    end

    render json: { user: user, new_user: new_user }
  end
end
