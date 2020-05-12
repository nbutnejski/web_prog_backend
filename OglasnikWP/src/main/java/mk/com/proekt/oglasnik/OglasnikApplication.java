package mk.com.proekt.oglasnik;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class OglasnikApplication {

    public static void main(String[] args) {
        SpringApplication.run(OglasnikApplication.class, args);
    }

}
