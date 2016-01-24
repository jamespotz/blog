class HomeController < ApplicationController
  def index
  end

  def download_resume
    doc = "#{Rails.root}/bin/resume.pdf"
    send_data doc,
      :filename => "james_robert_rooke--resume.pdf",
      :type => 'application/pdf'
  end

  def send_mail
    UserMailer.contact_me(params[:name].downcase, params[:email], params[:message]).deliver
    render 'home'
  end
end
