package daoImpl;

import JavaBean.User;
import Util.JDBCUtil;
import com.mysql.jdbc.util.ResultSetUtil;
import dao.IUserDao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UserDaoImpl implements IUserDao {
    @Override
    public boolean register(String userName,String password) {
        Connection conn = null;
        PreparedStatement ps = null;
        int num=0;
        boolean flag = false;
        try {
            //1、加载注册驱动
            //2、链接数据库
            conn = JDBCUtil.getConn();
            //3、创建sql语句
            String sql = "insert into user(userName,password) values(?,?)";
            ps = conn.prepareStatement(sql);
            ps.setString(1,userName);
            ps.setString(2,password);
            //4、执行sql
            System.out.println("1");
            num = ps.executeUpdate();
            System.out.println("2");
            if(num>0){
                flag = true;
            }
            System.out.println("3");
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            JDBCUtil.close(conn,ps,null);
        }
        return flag;
    }
    @Override
    public boolean login(int userId,String password){
        boolean flag = false;
        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        System.out.println("尝试");
        try{
            System.out.println("尝试2");
            conn = JDBCUtil.getConn();
            System.out.println("尝试3");
            if(conn==null){
                System.out.println("conn空的");
            }
            String sql = "select * from user where userId=? and password=?";
            ps = conn.prepareStatement(sql);
            ps.setInt(1,userId);
            ps.setString(2,password);
            rs = ps.executeQuery();

            if(rs.next()) {
                if(rs.getInt("userId")==userId && rs.getString("password").equals(password)){
                    flag = true;
                }
            }
        }catch (Exception e){
            e.printStackTrace();
        }finally{
            JDBCUtil.close(conn,ps,rs);
        }
        return flag;
    }

    @Override
    public int getId(String userName,String password){
        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        int id=0;
        try {
            conn = JDBCUtil.getConn();
            String sql = "select * from user where userName=? and password=?";
            ps = conn.prepareStatement(sql);
            ps.setString(1,userName);
            ps.setString(2,password);
            rs = ps.executeQuery();
            if(rs.next()){
                id = rs.getInt("userId");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return id;
    }

    @Override
    public boolean messageUpdate(User user,int id){
        Connection conn = null;
        PreparedStatement ps = null;
        int num=0;
        boolean flag = false;
        try {
            //1、加载注册驱动
            //2、链接数据库
            conn = JDBCUtil.getConn();
            //3、创建sql语句
            String sql = "update user set userName=?,realName=?,region=?,sex=?,signature=? where userId=?";
            ps = conn.prepareStatement(sql);
            ps.setString(1,user.getUserName());
            ps.setString(2,user.getRealName());
            ps.setString(3,user.getRegion());
            ps.setString(4,user.getSex());
            ps.setString(5,user.getSignature());
            ps.setInt(6,id);
            //4、执行sql
            num = ps.executeUpdate();
            if(num>0){
                flag = true;
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            JDBCUtil.close(conn,ps,null);
        }
        return flag;
    }
}
