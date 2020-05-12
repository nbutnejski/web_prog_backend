package mk.com.proekt.oglasnik.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import javax.persistence.Id;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter

@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long Id;
    private String username;
    private String password;
    private LocalDateTime dateCreated;
    @OneToMany(mappedBy = "user",
            fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Ad> ads;

    private String email;


}
