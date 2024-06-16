// method overloading here: https://www.w3schools.com/java/java_methods_overloading.asp

/**
 * Methods in java are quite similar to cpp
 * 
 */
class Arrays {
    /**
     * static - means that the method belongs to the main class 
     * and is not an object of the main class
     * 
     * void - return type of the function, void return type 
     * 
     * foo name of function 
     * 
     * String name - paramter 
     */
    static void foo(String name) {
        System.out.println("Hello there, " + name + '.');
        return;
    }
    public static void main(String[] args) {

        // for (int i = 0; i < 3; ++i) {
        //     foo();
        // }

        // String[] args in the main function represents argumetn 
        // you pass when executing the java file
        for (int i = 0; i < args.length; i++) {
            System.out.println(args[i]);
        }

        foo("maria");
        foo("john");
        foo("kevin");
    }
}
