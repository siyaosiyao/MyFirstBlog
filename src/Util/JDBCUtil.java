package Util;

import JavaBean.Blog;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.List;

public class JDBCUtil {
    public static String url = "jdbc:mysql://localhost:3306/blog?serverTimezone=GMT%2B8&characterEncoding=UTF-8";
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
    public static void close(Connection conn, Statement statement, ResultSet rs) {
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
    public static List<Blog> sortByYearMonthDay(List<Blog> list){
        for (int i = 0; i < list.size() - 1; i++) {
            for (int j = 0; j < list.size() - i - 1; j++) {
                if (Integer.parseInt(list.get(j).getYear()) < Integer.parseInt(list.get(j + 1).getYear())) {
                    Blog temp = list.get(j);
                    list.set(j,list.get(j+1));
                    list.set(j+1,temp);
                } else {
                    if (Integer.parseInt(list.get(j).getMonth()) < Integer.parseInt(list.get(j + 1).getMonth())) {
                        Blog temp = list.get(j);
                        list.set(j,list.get(j+1));
                        list.set(j+1,temp);
                    } else {
                        if (Integer.parseInt(list.get(j).getDay()) < Integer.parseInt(list.get(j + 1).getDay())) {
                            Blog temp = list.get(j);
                            list.set(j,list.get(j+1));
                            list.set(j+1,temp);
                        }
                    }
                }
            }
        }
        return list;
    }
}
