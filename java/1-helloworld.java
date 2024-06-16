// by convention, name of class in java must match name of file, 
// so this file should be named HelloWorld.java

// main method is required, in every java class

// like in c++ every line must end with semicolon
// single line comments and multi line comments are same as in cpp

class HelloWorld {
    public static void main(String[] args) {

        // System -> built in java class, makes sense 
        // out -> attribute within class most likely 
        // prtinln -> a method 
        System.out.println("Hello, World!"); 

        // way to declare multiple vars of same type, not sure if in cpp?
        int c = 5, b = 2, a = 1;
        System.out.println(a + b + c);


        // primtiive data types 
        byte d = 1; // whole numbers from pos to neg 2^7, size 1 byte 
        short e = 2; // whole num from pos to neg -32k, 32k, size 2 bytes
        int f = 3; // whol nums frmo pos to neg 2 billion
        long g = 1; // whol num from -9 to 9 quintillion 
        float h = 1; //  floats, store 6 to 7 digits
        double i = 0; // flaots, store 15 digits
        boolean j = true; // one bit boolean
        char k = 'a'; // single character 

        // non primitives

        String myText = "Hello World";
    }
}

// first compile file with java <filename>.java// 