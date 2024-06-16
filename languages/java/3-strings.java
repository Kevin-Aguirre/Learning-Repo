public class Strings {
    public static void main(String[] args) {
        // string is an object that contains methods 

        String txt = "Kevin";
        System.out.println(txt);
        System.out.println(txt.length()); // gets length
        System.out.println(txt.toUpperCase()); // turns to uppercase
        System.out.println(txt.toLowerCase()); // turns to lower case
        System.out.println(txt.indexOf("vin")); // gets index

        // string concantenation same as c++ but there is also a method 
        String first = "Kevin ", last = "Aguirre";
        System.out.println(first.concat(last));
    }
}