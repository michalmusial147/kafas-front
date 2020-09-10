package elc;

import elc.data.UserRepository;
import elc.domain.AppUser;
import elc.domain.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Arrays;

@SpringBootApplication
public class Main implements CommandLineRunner {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);

    }
    @Override
    public void run(String... args) throws Exception {
        userRepository.save(AppUser.builder()
                .id(1)
                .username("test")
                .password(passwordEncoder.encode("test"))
                .roles(Arrays.asList(Role.ROLE_ADMIN))
                .build());
    }





}
