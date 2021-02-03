package elc;

import elc.data.OfferImageRepository;
import elc.data.OfferRepository;
import elc.data.UserRepository;
import elc.domain.AppUser;
import elc.domain.Offer;
import elc.domain.OfferImage;
import elc.domain.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Arrays;
import java.util.Collections;
import java.util.Date;

@SpringBootApplication
public class Main {


    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);

    }

}
