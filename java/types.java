// so because strings are used so often, even though they are 
// technically a non-primitvs, they are included 
class Types {
    public static void main(String[] args) {

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


        // type casting - widenign (automatic)
        int a = 10; // equal to 10
        double b = a; // equal to 10.0
        // so this is interesting, it reminds me of concepts of inheritance
        // in which int is a base calss and double is a derived class, but...

        // type casting - narrowing (manual)
        double myDouble = 4.623;
        int myInt = (int) myDouble;
        System.out.println(myInt);
        // int myInt = myDouble;
        // ... her ethere would be a 'slicing' issue (compilation erorr), since java
        //  doesnt know what to do with the extra digits and assume you are making a mistake
    }
}

// first compile file with java <filename>.java// 