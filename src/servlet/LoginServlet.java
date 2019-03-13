package servlet;

import com.alibaba.fastjson.JSONObject;
import dao.IUserDao;
import daoImpl.UserDaoImpl;
import com.alibaba.fastjson.JSON;

import javax.servlet.http.*;
import java.io.IOException;

public class LoginServlet extends HttpServlet{
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp){
        //中文字符编码
        resp.setCharacterEncoding("utf8");
        resp.setContentType("application/json;charset=utf-8");

        JSONObject jso = new JSONObject();
        String userId = req.getParameter("userId");
        String password = req.getParameter("password");
        IUserDao dao = new UserDaoImpl();
        //把前端的userId字符型转成数值型
        int id = Integer.parseInt(userId);
        boolean flag = dao.login(id,password);
        if(flag){
            HttpSession session = req.getSession();
            session.setAttribute("userId",userId);
            session.setAttribute("password",password);
            session.setAttribute("session","new");
            Cookie cookie = new Cookie("userId",userId);
            if(session.isNew()){
                cookie.setMaxAge(24*60*60);  //cookie最长存活24h
                resp.addCookie(cookie);
                jso.put("code",1);
                jso.put("userId",userId);
                jso.put("session","new");
            }else{
                jso.put("code",1);
                jso.put("userId",userId);
                jso.put("session","old");
            }
        }else{
            jso.put("code",0);
            jso.put("userId",0);
            jso.put("session","false");
        }
        try{
            resp.getWriter().print(JSON.toJSONString(jso));
        }catch (Exception e){
            e.printStackTrace();
        }

    }
    @Override
    protected  void doGet(HttpServletRequest req,HttpServletResponse resp){
        doPost(req,resp);
    }
}
