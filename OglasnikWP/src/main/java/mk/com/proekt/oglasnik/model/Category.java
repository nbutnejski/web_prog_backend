package mk.com.proekt.oglasnik.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.List;
import javax.persistence.Id; import javax.persistence.Id;

@Entity
@Getter

@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "categories")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String categoryName;

    @OneToMany(mappedBy = "user",
            fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Ad>ads;




}
