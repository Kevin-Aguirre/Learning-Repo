public class Maths {
    public static void main(String[] args) {
        // ternaries same as cpp 
        boolean highTestGrade = true;
        String result = (highTestGrade) ? "Good Job" : "Needs Improvemnet";
        System.out.println(result);

        int day = 1;
        switch (day) {
            case 1: 
                System.out.println("day 1");
                break;
            case 2: 
                System.out.println("day 2");
                break;
            default:
                System.out.println("done");
        }
    }
}