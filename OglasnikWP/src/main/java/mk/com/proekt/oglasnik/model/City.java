package mk.com.proekt.oglasnik.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.List;


@Entity
@Getter

@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "cities")
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String name;
    private String region;
    @OneToMany(mappedBy = "user",
            fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Ad> ads;



}
