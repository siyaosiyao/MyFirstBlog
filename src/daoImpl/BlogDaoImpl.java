package daoImpl;

import JavaBean.Blog;
import Util.JDBCUtil;
import dao.IBlogDao;
import dao.IUserDao;

import javax.sql.rowset.JdbcRowSet;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class BlogDaoImpl implements IBlogDao {
    @Override
    public boolean uploadNewArticle(Blog blog) {
        Connection conn = null;
        PreparedStatement ps = null;
        boolean flag = false;
        try{
            conn = JDBCUtil.getConn();
            String sql = "insert into blog(userId,Title,content) values(?,?,?)";
            ps = conn.prepareStatement(sql);
            ps.setInt(1,blog.getUserId());
            ps.setString(2,blog.getTitle());
            ps.setString(3,blog.getContent());
            int num = ps.executeUpdate();
            if(num>0){
                flag = true;
            }
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            JDBCUtil.close(conn,ps,null);
        }
        return flag;
    }

    @Override
    public boolean updateArticle(Blog blog) {
        Connection conn = null;
        PreparedStatement ps = null;
        boolean flag = false;
        try{
            conn = JDBCUtil.getConn();
            String sql = "update blog set Title=?,content=? where userId=? and blogId=?";
            ps = conn.prepareStatement(sql);
            ps.setString(1,blog.getTitle());
            ps.setString(2,blog.getContent());
            ps.setInt(3,blog.getUserId());
            ps.setInt(4,blog.getBlogId());
            System.out.println(blog.getTitle()+"    "+blog.getContent()+"    "+blog.getUserId()+"     "+blog.getBlogId());
            int num = ps.executeUpdate();
            System.out.println("********"+num);
            if(num>0){
                flag = true;
            }
            System.out.println(flag);
        }catch(Exception e){
            e.printStackTrace();
        }finally {
            JDBCUtil.close(conn,ps,null);
        }
        return flag;
    }

    @Override
    public int getblogId(String Title,String content) {
        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        int blogId=0;
        try{
            conn = JDBCUtil.getConn();
            String sql = "select * from blog where Title=? and content=?";
            ps = conn.prepareStatement(sql);
            ps.setString(1,Title);
            ps.setString(2,content);
            rs = ps.executeQuery();
            if(rs.next()){
                blogId = rs.getInt("blogId");
            }
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            JDBCUtil.close(conn,ps,rs);
        }
        return blogId;
    }

    @Override
    public Blog getArticle(int userId, int blogId) {
        boolean flag = false;
        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        Blog blog = new Blog();
        try{
            conn = JDBCUtil.getConn();
            String sql = "select * from blog where userId=? and blogId=?";
            ps = conn.prepareStatement(sql);
            ps.setInt(1,userId);
            ps.setInt(2,blogId);
            rs = ps.executeQuery();
            if(rs.next()){
                blog.setTitle(rs.getString("Title"));
                blog.setContent(rs.getString("content"));
                blog.setUserId(rs.getInt("userId"));
                blog.setBlogId(rs.getInt("blogId"));
            }
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            JDBCUtil.close(conn,ps,rs);
        }
        return blog;
    }

    @Override
    public List<Blog> getAllArticles(int userId) {
        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        List<Blog> list = new ArrayList<>();
        try {
            conn = JDBCUtil.getConn();
            String sql = "select * from blog where userId=?";
            ps = conn.prepareStatement(sql);
            ps.setInt(1,userId);
            rs = ps.executeQuery();
            while(rs.next()){
                Blog blog = new Blog();
                blog.setBlogId(rs.getInt("blogId"));
                blog.setTitle(rs.getString("Title"));
                blog.setUserId(rs.getInt("userId"));
                blog.setContent(rs.getString("content"));
                list.add(blog);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            JDBCUtil.close(conn, ps, rs);
        }
        return list;
    }

    @Override
    public boolean deleteArticle(int userId,int blogId) {
        boolean flag = false;
        Connection conn = null;
        PreparedStatement ps = null;
        try{
            conn = JDBCUtil.getConn();
            String sql = "delete from blog where blogId=? and userId=?";
            ps = conn.prepareStatement(sql);
            ps.setInt(1,blogId);
            ps.setInt(2,userId);
            int num = ps.executeUpdate();
            if(num>0){
                flag = true;
            }
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            JDBCUtil.close(conn,ps,null);
        }
        return flag;
    }
}
