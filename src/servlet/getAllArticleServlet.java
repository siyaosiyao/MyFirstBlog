package servlet;

import JavaBean.Blog;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import dao.IBlogDao;
import daoImpl.BlogDaoImpl;

import javax.servlet.http.*;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class getAllArticleServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) {
        //中文字符编码
        resp.setCharacterEncoding("utf8");
        resp.setContentType("application/json;charset=utf-8");

        int userId = 0;
        HttpSession session = req.getSession();
//        for(int i=0;i<cookies.length;i++){
//            if(cookies[i].getName().equals("userId")){
//                userId = Integer.parseInt(cookies[i].getValue());
//            }
//        }
        userId = (int) session.getAttribute("userId");
        IBlogDao dao = new BlogDaoImpl();
        List<Blog> list = new ArrayList<>();
        list = dao.getAllArticles(userId);

        List<JSON> jsonList = new ArrayList<>();
        //把list中的所有blog对象都转成json返还给前端
        for(Blog blog : list){
            JSONObject json = new JSONObject();
            json.put("Title",blog.getTitle());
            json.put("blogId",blog.getBlogId());
            json.put("content",blog.getContent());
            jsonList.add(json);
        }
        try {
            resp.getWriter().print(JSON.toJSONString(jsonList));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    @Override
    protected void doGet(HttpServletRequest req,HttpServletResponse resp){
        doPost(req,resp);
    }
}
