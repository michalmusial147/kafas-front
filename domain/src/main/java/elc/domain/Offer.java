package elc.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.springframework.data.rest.core.annotation.RestResource;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor(access= AccessLevel.PUBLIC, force=true)
@AllArgsConstructor
@Builder
@Table(name = "offers")
public class Offer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String title;
    private String type;
    private String rooms;

    private String street;
    private String city;
    private String region;
    private String postalCode;
    private String country;
    @Column(columnDefinition="TEXT")
    private String description;
    private Date datePosted;
    @Column(columnDefinition="TEXT")
    private String photo;
    private int prize;
    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "appuser_id", nullable = false)
    private AppUser appuser;

    private int userId;
}