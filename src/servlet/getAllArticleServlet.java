package servlet;

import JavaBean.Blog;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import dao.IBlogDao;
import daoImpl.BlogDaoImpl;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class getAllArticleServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) {
        //中文字符编码
        resp.setCharacterEncoding("utf8");
        resp.setContentType("application/json;charset=utf-8");

        int userId = 0;
        Cookie[] cookies = req.getCookies();
        for(int i=0;i<cookies.length;i++){
            if(cookies[i].getName().equals("userId")){
                userId = Integer.parseInt(cookies[i].getValue());
            }
        }
        IBlogDao dao = new BlogDaoImpl();
        List<Blog> list = new ArrayList<>();
        list = dao.getAllArticles(userId);
        //把list中的所有blog对象都转成json返还给前端
        JSONObject json = new JSONObject();
        for(Blog blog : list){
            json.put("blogId",blog.getBlogId());
            json.put("Title",blog.getTitle());
            json.put("content",blog.getContent());
            try {
                resp.getWriter().print(JSON.toJSONString(json));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
    @Override
    protected void doGet(HttpServletRequest req,HttpServletResponse resp){
        doPost(req,resp);
    }
}
