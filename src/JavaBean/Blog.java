package JavaBean;

public class Blog {
    int blogId;        //文章的id，不能变更
    int userId;        //用户id
    String Title;      //文章标题
    String content;    //文章内容


    public int getUserId(){return userId;}

    public void setUserId(int userId){this.userId = userId;}

    public String getTitle() {
        return Title;
    }

    public void setTitle(String title) {
        this.Title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getBlogId() { return blogId; }

    public void setBlogId(int blogId) { this.blogId = blogId;}

}
