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
                .username("admin@gmail.com")
                .password(passwordEncoder.encode("test"))
                .roles(Collections.singletonList(Role.ROLE_ADMIN))
                .firstName("Piotr")
                .lastName("Michalak")
                .address1("Katarzyna")
                .address2("20")
                .postcode("61-650")
                .telephone("652025987")
                .build());

        userRepository.save(AppUser.builder()
                .username("testowy_klient@gmail.com")
                .password(passwordEncoder.encode("test"))
                .roles(Arrays.asList(Role.ROLE_USER))
                .firstName("Adam")
                .lastName("Kowalski")
                .address1("Piernikowa")
                .address2("3/24")
                .postcode("11-222")
                .telephone("987645312")
                .build());
    }
}
