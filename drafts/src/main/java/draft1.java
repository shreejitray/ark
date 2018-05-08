/**
 * Created by schaud3 on 7/31/17.
 */
public class draft1 {
    public static void main(String[] args) {
        try {
            Long var = 3L;
            if (var == null) {
                System.out.println("first test successfull");
            }
            Long var2 = null;
            if (var2.equals(null)) {
                System.out.println("second test successfull");
            }
        } catch (Exception e ) {
            System.out.println("test unsuccessfull");
            e.printStackTrace();
        }

    }
}
