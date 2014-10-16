require 'spec_helper'

describe Post do

	subject { described_class.new }

	it { should respond_to(:annotations)}
  
end