class Post < ActiveRecord::Base
  include Markdownable

  has_many :annotations


end
