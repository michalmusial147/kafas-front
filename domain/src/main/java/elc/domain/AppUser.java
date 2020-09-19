package elc.domain;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.
                                          SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
@Data
@NoArgsConstructor(access=AccessLevel.PUBLIC, force=true)
@AllArgsConstructor
@Builder
@Table(name = "appusers")
public class AppUser{

  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int id;
  private String username;
  private String password;
  private String firstName;
  private String lastName;
  private String token;

  @JsonManagedReference
  @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "appuser")
  private List<Offer> offers;


  @ElementCollection(fetch = FetchType.EAGER)
  @Setter
  private List<Role> roles;

  public AppUser(int i, String username, String encode, String firstName, String lastName, String token, List<Role> roles) {

  }


}
