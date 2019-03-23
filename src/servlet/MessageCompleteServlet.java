package servlet;

import JavaBean.User;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import dao.IUserDao;
import daoImpl.UserDaoImpl;

import javax.servlet.http.*;
import java.io.IOException;

public class MessageCompleteServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp){
        //中文字符编码
        resp.setCharacterEncoding("utf8");
        resp.setContentType("application/json;charset=utf-8");
        //获取前端数据
        String userName = req.getParameter("userName");
        String realName = req.getParameter("realName");
        String region = req.getParameter("region");
        String sex = req.getParameter("sex");
        String signature = req.getParameter("signature");

        User user = new User();
        user.setUserName(userName);
        user.setRealName(realName);
        user.setRegion(region);
        user.setSex(sex);
        user.setSignature(signature);

        HttpSession session = req.getSession();
        IUserDao dao = new UserDaoImpl();
        int id = (int)session.getAttribute("userId");
        System.out.println("id是"+id);
        JSONObject json = new JSONObject();
        if(dao.messageUpdate(user,id)){
            json.put("code",1);
        }else{
            json.put("code",0);
        }
        try {
            resp.getWriter().print(JSON.toJSONString(json));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    @Override
    protected  void doGet(HttpServletRequest req,HttpServletResponse resp){
        doPost(req,resp);
    }
}