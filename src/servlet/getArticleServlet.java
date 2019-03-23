package servlet;

import JavaBean.Blog;
import dao.IBlogDao;
import daoImpl.BlogDaoImpl;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.JSON;

import javax.servlet.http.*;
import java.io.IOException;

public class getArticleServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) {
        //中文字符编码
        resp.setCharacterEncoding("utf8");
        resp.setContentType("application/json;charset=utf-8");

        HttpSession session = req.getSession();
        int userId = 0;
//        for(int i =0;i<cookies.length;i++){
//            if(cookies[i].getName().equals("userId")){
//                userId = Integer.parseInt("userId");
//                break;
//            }
//        }
        userId = (int) session.getAttribute("userId");
        int blogId = Integer.parseInt(req.getParameter("blogId"));
        IBlogDao dao = new BlogDaoImpl();

        Blog blog = dao.getArticle(userId,blogId);
        JSONObject json = new JSONObject();
        json.put("Title",blog.getTitle());
        json.put("content",blog.getContent());

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

