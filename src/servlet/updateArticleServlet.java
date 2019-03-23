package servlet;

import JavaBean.Blog;
import dao.IBlogDao;
import daoImpl.BlogDaoImpl;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.JSON;

import javax.servlet.http.*;
import java.io.IOException;

public class updateArticleServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp){
        //中文字符编码
        resp.setCharacterEncoding("utf8");
        resp.setContentType("application/json;charset=utf-8");

//        //数据跨域申请
//        resp.setHeader("Access-Control-Allow-Origin","*");
//        //
//        resp.setHeader("Access-Control-Allow-Methods", "*");
//        /* 重新预检验跨域的缓存时间 (s) */
//        resp.setHeader("Access-Control-Max-Age", "3600");
//        /* 允许跨域的请求头 */
//        resp.setHeader("Access-Control-Allow-Headers", "*");
//        /* 是否携带cookie */
//        resp.setHeader("Access-Control-Allow-Credentials", "true");
        int userId = 0;
        HttpSession session = req.getSession();
        userId = (int) session.getAttribute("userId");
//        for(int i = 0;i<cookies.length;i++){
//            if(cookies[i].getName().equals("userId")){
//                userId = Integer.parseInt(cookies[i].getValue());
//                break;
//            }
//        }
        Blog blog = new Blog();
        int blogId = Integer.parseInt(req.getParameter("blogId"));
        String Title = req.getParameter("Title");
        String content = req.getParameter("content");
        String year = req.getParameter("year");
        String month = req.getParameter("month");
        String day = req.getParameter("day");

        System.out.println(userId+"   "+blogId+"   "+Title+"   "+content);
        blog.setUserId(userId);
        blog.setBlogId(blogId);
        blog.setTitle(Title);
        blog.setContent(content);
        blog.setYear(year);
        blog.setMonth(month);
        blog.setDay(day);

        IBlogDao dao = new BlogDaoImpl();
        boolean flag = dao.updateArticle(blog);
        System.out.println("1");
        JSONObject json = new JSONObject();
        System.out.println("2");
        if(flag){
            json.put("code",1);
        }else{
            json.put("code",0);
        }
        System.out.println("3");
        try {
            resp.getWriter().print(JSON.toJSONString(json));
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp){
        doPost(req,resp);
    }
}
