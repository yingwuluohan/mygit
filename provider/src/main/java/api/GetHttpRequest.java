package main.java.api;




import java.util.List;

public interface GetHttpRequest {

     String getAreaStr(  );

     List<String> getAreaListBy(int level, String pid);
}
