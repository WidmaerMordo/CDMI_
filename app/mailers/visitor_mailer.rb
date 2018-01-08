class VisitorMailer < ApplicationMailer
 default from: 'info@cdmionline.com'
  def visitor_query(fname, lname, email, msg)
      @fname = fname
      @lname = lname
      @email = email
      @msg = msg
      mail(to: 'dr.michael@cdmionline.com', subject: "#{fname} #{lname} says")
  end
end
