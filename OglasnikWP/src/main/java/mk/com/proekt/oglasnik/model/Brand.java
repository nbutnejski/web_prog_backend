package mk.com.proekt.oglasnik.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.List;
import javax.persistence.Id;


@Entity
@Getter
@Setter
@Table(name = "brands")
@AllArgsConstructor

@NoArgsConstructor
public class Brand {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String vehicleName;

    @OneToMany(mappedBy = "user",
            fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Ad> ads;


}
