require 'google-id-token'

class GoogleTokenVerifier
  def initialize(app)
    @app = app
    # path to exclude from verification
    @excluded_paths = ['/up', '/welcome/index']
  end

  def call(env)
    request = Rack::Request.new(env)
    if @excluded_paths.include?(request.path)
      @app.call(env)
    else
      auth_header = request.get_header('HTTP_AUTHORIZATION')
      return unauthorized_response unless auth_header

      token = auth_header.split(' ').last
      validator = GoogleIDToken::Validator.new

      begin
        payload = validator.check(token, ENV['GOOGLE_CLIENT_ID'])
        env['google_user_id'] = payload['sub']
        @app.call(env)
      rescue GoogleIDToken::ValidationError => e
        unauthorized_response
      end
    end
  end

  private

  def unauthorized_response
    [401, { 'Content-Type' => 'application/json' }, [{ error: 'Unauthorized' }.to_json]]
  end
end
