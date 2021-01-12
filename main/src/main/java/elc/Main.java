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
import java.util.Date;

@SpringBootApplication
public class Main implements CommandLineRunner {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private OfferRepository offerRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private OfferImageRepository offerImageRepository;

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);

    }

    @Override
    public void run(String... args) throws Exception {
        userRepository.save(AppUser.builder()
                .id(1)
                .username("admin")
                .password(passwordEncoder.encode("test"))
                .roles(Arrays.asList(Role.ROLE_ADMIN))
                .firstName("Mariusz")
                .lastName("Pudzianowski")
                .build());

    }
}
