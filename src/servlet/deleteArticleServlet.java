package servlet;

import dao.IBlogDao;
import daoImpl.BlogDaoImpl;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.JSON;

import javax.servlet.http.*;
import java.io.IOException;

public class deleteArticleServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp){
        //中文字符编码
        resp.setCharacterEncoding("utf8");
        resp.setContentType("application/json;charset=utf-8");

        int userId = 0;
        HttpSession sessioni = req.getSession();
        userId = (int) sessioni.getAttribute("userId");
        int blogId = Integer.parseInt(req.getParameter("blogId"));
        IBlogDao dao = new BlogDaoImpl();
        boolean flag = dao.deleteArticle(userId,blogId);
        JSONObject json = new JSONObject();
        if(flag){
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
    protected void doGet(HttpServletRequest req,HttpServletResponse resp){
        doPost(req,resp);
    }
}
