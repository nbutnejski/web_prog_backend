package mk.com.proekt.oglasnik.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import mk.com.proekt.oglasnik.model.enumeration.OglasType;
import javax.persistence.Id;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;


@Entity

@Table(name = "ads")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Ad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @ManyToOne
    private User user;
    @ManyToOne
    private City city;
    @ManyToOne
    private Brand brand;
    @ManyToOne
    private Category category;
    @Enumerated(EnumType.STRING)
    private OglasType type;         // basic premium top

    private String title;
    private String description;
    private String image;
    private LocalDateTime dateStarted;
    private LocalDateTime dateEnding;
    private String aboutPrice;      //cena/dog
// ________________________________________________

    private Date godinaProizvod;
    private String engType;
    private String km;
    private String gearbox;
    private String carosery;
    private String color;
    private String reg;
    private Date regDo;
    private int kw;
    private short ems;  //emisija





}
