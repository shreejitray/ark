import com.mysql.cj.jdbc.ConnectionImpl;
import com.mysql.cj.jdbc.MysqlDataSource;
import com.mysql.cj.jdbc.StatementImpl;
import com.mysql.cj.jdbc.result.ResultSetImpl;

import java.sql.SQLException;
import java.util.Properties;

/**
 * Created by schaud3 on 7/26/16.
 */
public class DataBaseAdapter {
    String user;
    String password;
    String url;
    MysqlDataSource mysqlDataSource;
    ConnectionImpl connection;
    StatementImpl statement;

    public DataBaseAdapter(){

    }

    public void setUpConnection(Properties properties) throws SQLException {
        mysqlDataSource = new MysqlDataSource();
        mysqlDataSource.initializeProperties(properties);
//        mysqlDataSource.setUser(properties.getProperty("user"));
//        mysqlDataSource.setPassword(properties.getProperty("password"));
//        mysqlDataSource.setURL(properties.getProperty("url"));
        connection = (ConnectionImpl) mysqlDataSource.getConnection();
        statement = (StatementImpl) connection.createStatement();
    }
    public ResultSetImpl getResult(String query) throws SQLException {
        ResultSetImpl result = (ResultSetImpl) statement.executeQuery(query);
        return result;
    }
}
