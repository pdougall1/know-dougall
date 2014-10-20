class Annotation < ActiveRecord::Base
	include Markdownable

	before_save { |annotation| format(annotation.entry) }
	belongs_to :post

end
