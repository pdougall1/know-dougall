class Annotation < ActiveRecord::Base
	include Markdownable

	belongs_to :post

end
