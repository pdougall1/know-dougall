class Post < ActiveRecord::Base
  include Markdownable

  before_create { |post| post.viewable = true }

  has_many :annotations


end
