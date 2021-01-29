CXX   = g++
OUT   = *
FILES = $(OUT).cpp

build: $(FILES) run
	$(CXX) -o $(OUT) $(FILES)

run: 
	./OUT  
