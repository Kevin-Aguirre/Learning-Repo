class Arrays {
    public static void main(String[] args) {
        String[] names = {"Tom", "Tam", "Tim"};



        for (String name : names) {
            System.out.println(name);
        }

        for (int i = 0; i < names.length; ++i) {
            System.out.println(names[i]);
        }

        int[][] board = {{1, 2, 3, 4, 5}, {3, 56, 1, 2, 3}};

        for (int i = 0; i < board.length; i++) {
            for (int j = 0; i < board[i].length; j++) {
                System.out.println(board[i][j]);
            }
        }
    }
}
