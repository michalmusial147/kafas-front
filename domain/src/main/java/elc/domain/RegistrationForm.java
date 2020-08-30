package elc.domain;
import lombok.Setter;
import org.springframework.security.crypto.password.PasswordEncoder;
import lombok.Data;

import javax.persistence.ElementCollection;
import javax.persistence.FetchType;
import java.util.List;


@Data
public class RegistrationForm {

  private int id;
  private String username;
  private String password;
  private String firstName;
  private String lastName;
  private String token;
  private List<Role> roles;

  public AppUser toUser(PasswordEncoder passwordEncoder) {
    return new AppUser(0,
        username, passwordEncoder.encode(password),
            firstName, lastName, token, roles);
  }
  
}
