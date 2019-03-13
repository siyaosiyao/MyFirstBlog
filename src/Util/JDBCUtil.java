package Util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class JDBCUtil {
    public static String url = "jdbc:mysql://localhost:3306/blog?serverTimezone=GMT%2B8";
    public static String user = "root";
    public static String pwd = "123456";
    public static String drivername = "com.mysql.jdbc.Driver";

    static {
        try {
            //1、加载注册驱动
            Class.forName(JDBCUtil.drivername);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static Connection getConn() {
        try {
            //2、链接数据库
            return DriverManager.getConnection(JDBCUtil.url, JDBCUtil.user, JDBCUtil.pwd);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
    public static void close(Connection conn, Statement statement, ResultSet rs){
        if (rs != null) {
            try {
                rs.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        if (statement != null) {
            try {
                statement.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
            if (conn != null) {
                try {
                    conn.close();
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
