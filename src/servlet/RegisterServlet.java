package servlet;

import JavaBean.User;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import dao.IUserDao;
import daoImpl.UserDaoImpl;
import com.alibaba.fastjson.JSON;

import javax.servlet.ServletException;
import javax.servlet.http.*;
import java.awt.desktop.ScreenSleepEvent;
import java.io.IOException;
import java.sql.SQLException;

public class RegisterServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //中文字符编码
        resp.setCharacterEncoding("utf8");
        resp.setContentType("application/json;charset=utf-8");
        //获取前端数据
        JSONObject json = new JSONObject();
        String userName = req.getParameter("userName");//用户名
        String password = req.getParameter("password");//密码
        IUserDao dao = new UserDaoImpl();
        boolean flag = dao.register(userName,password);
        System.out.println(flag);
        if(flag){
            HttpSession session = req.getSession();
            session.setAttribute("userId",dao.getId(userName,password));
            if(session.isNew()){
                System.out.println("session是new");
                json.put("code",1);//注册成0功
                json.put("userId",dao.getId(userName,password));
            }
        }else{
            json.put("code",0);//注册失败
            json.put("userId",0);
        }
        resp.getWriter().print(JSON.toJSONString(json));
    }
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req,resp);
    }

}
