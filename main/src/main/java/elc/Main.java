package elc;

import elc.data.OfferRepository;
import elc.data.UserRepository;
import elc.domain.AppUser;
import elc.domain.Offer;
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

        userRepository.save(AppUser.builder()
                .id(2)
                .username("test2")
                .password(passwordEncoder.encode("test2"))
                .roles(Arrays.asList(Role.ROLE_ADMIN))
                .build());


        offerRepository.save(Offer.builder()
                .description("Przyjazdne miejsce, wolne od wirusa. Zapraszamy do kontaktu")
                .title("Wakacje pod grusza")
                .rooms("3")
                .type("Other")
                .datePosted(new Date())
                .city("Lodz")
                .country("PL").region("łódzkie")
                .street("Waryńskiego 4")
                .postalCode("91-075")
                .appuser(userRepository.findByUsername("test"))
                .build()
        );
        offerRepository.save(Offer.builder()
                .description("Mile widziane zwierzeta, ludzie lorum ipsum")
                .title("Przytulny pokoj blisko plazy")
                .rooms("1")
                .type("Room")
                .datePosted(new Date())
                .city("Władysławowo")
                .country("PL").region("morze bałtyckie")
                .street("Hryniewieckiego 7A")
                .postalCode("84-120")
                .appuser(userRepository.findByUsername("test2"))
                .build()
        );
        offerRepository.save(Offer.builder()
                .description("Mile widziane zwierzeta, ludzie lorum ipsum")
                .title("Przytulny pokoj blisko plazy")
                .rooms("3")
                .type("Apartment")
                .datePosted(new Date())
                .city("Władysławowo")
                .country("PL").region("Pomorze")
                .street("Hryniewieckiego 7A")
                .postalCode("84-120")
                .appuser(userRepository.findByUsername("test2"))
                .build()
        );
        offerRepository.save(Offer.builder()
                .description("Nice room close to center. Wilkommen meine freunde :)")
                .title("Room 2 persone")
                .rooms("1")
                .type("Room")
                .datePosted(new Date())
                .city("Hamburg")
                .country("GE").region("North Germany")
                .street("Billstrasse 100")
                .postalCode("20539")
                .appuser(userRepository.findByUsername("test2"))
                .build()
        );
        offerRepository.save(Offer.builder()
                .description("Fajny pokoj, zwierzeta mowimy NIE. BLisko duzo atrakcji turystycznych")
                .title("Pokoj z widokiem")
                .rooms("1")
                .type("Room")
                .datePosted(new Date())
                .city("Lodz")
                .country("PL").region("Lodzkie")
                .street("Podrzeczna 17/16")
                .postalCode("91-075")
                .appuser(userRepository.findByUsername("test2"))
                .build()
        );
        offerRepository.save(Offer.builder()
                .description("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore e")
                .title("ladny pokoj blisko plazy")
                .rooms("1")
                .type("Room")
                .datePosted(new Date())
                .city("Wladyslawowo")
                .country("PL").region("Pomorskie")
                .street("Portowa")
                .postalCode("84-120")
                .appuser(userRepository.findByUsername("test2"))
                .build()
        );
    }


}
