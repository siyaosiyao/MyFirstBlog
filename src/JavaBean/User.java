package JavaBean;

public class User {
    int userId;       //用户的id
    String userName;  //用户名
    String realName;  //实名
    String password;  //用户密码
    String signature; //个性签名
    String sex;       //用户性别
    String region;    //用户所在地

    public User(){
    }

    public User(int userId, String userName, String realName, String password, String signature, String sex, String region) {
        this.userId = userId;
        this.userName = userName;
        this.realName = realName;
        this.password = password;
        this.signature = signature;
        this.sex = sex;
        this.region = region;
    }

    public int getUserId() {
        return userId;
    };

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getRealName() {
        return realName;
    }

    public void setRealName(String realName) {
        this.realName = realName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getSignature() {
        return signature;
    }

    public void setSignature(String signature) {
        this.signature = signature;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }
}
