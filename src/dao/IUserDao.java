package dao;

import JavaBean.User;

import java.sql.SQLException;

public interface IUserDao {
    //1、注册
    boolean register(String userName,String password);
     //2、登陆
    boolean login(int userId,String password);
    //3、返回id
    int getId(String userName,String password);
    //4、更新信息
    boolean messageUpdate(User user,int id);
}
