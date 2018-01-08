class WelcomeController < ApplicationController

  def index
  end

  def sendmail
    VisitorMailer.visitor_query(params[:newsletter][:first_name], params[:newsletter][:last_name], params[:newsletter][:email], params[:newsletter][:message]).deliver_later
    respond_to do |format|
        format.js { render json: 'submitted', status: :sent }
        format.json { render json: 'submitted', status: :sent }
    end
  end

end
