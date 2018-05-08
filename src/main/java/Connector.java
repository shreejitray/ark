/**
 * Created by schaud3 on 7/26/16.
 */
import com.mysql.cj.jdbc.ConnectionImpl;
import com.mysql.cj.jdbc.StatementImpl;
import com.mysql.cj.jdbc.result.ResultSetImpl;
import com.mysql.cj.jdbc.MysqlDataSource;

import java.sql.SQLException;
import java.util.Properties;

public class Connector {
    private static Properties properties = new Properties();
    static {
        properties.put("user","root");
        properties.put("password","");
        properties.put("url","jdbc:mysql://localhost:3307/test");
    }
    public static void main(String[] args) {
        System.out.println("Loading driver...");


        try {
            DataBaseAdapter dataBaseAdapter = new DataBaseAdapter();
            dataBaseAdapter.setUpConnection(properties);
            ResultSetImpl rs = dataBaseAdapter.getResult("select * from personal");
            rs.last();
            System.out.println("The number of rows"+ rs.getRow());
            rs.beforeFirst();
            while(rs.next()){
                System.out.println("name: "+rs.getString("name")+" age: "+rs.getInt("age"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
