CXX = g++
CXXFLAGS = -std=c++17 -o
OUT = *
FILES = $(OUT).cpp
RUN = ./$(OUT)

$(OUT): build
	$(CXX) $(CXXFLAGS) $(OUT) $(FILES)

build:
	./$(OUT)
