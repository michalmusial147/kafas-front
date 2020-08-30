package elc.domain;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Candidate {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;

    private String name;
}
