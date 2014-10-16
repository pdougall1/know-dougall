class PrettyHTML < Redcarpet::Render::HTML
	include Redcarpet::Render::SmartyPants

  def block_code(code, language)
    Pygments.highlight(code, lexer:language)
  end

  # format to apply to markdown 
	# BBBB  annotation_id  || text_to_show_as_link   EEEE
  def postprocess(text)
    if link = /(?<=BBB).+(?=EEE)/.match(text)
			link = link.to_s.split("||").map(&:strip)
      new_link = "<a class='annotationLink' data-annotation-id='#{link[0]}'>#{link[1]}</a>"
      text.gsub!(/(BBB).+(EEE)/, new_link)
    end
    text
  end

end

