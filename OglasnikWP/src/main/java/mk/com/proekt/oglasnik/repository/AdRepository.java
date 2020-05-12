package mk.com.proekt.oglasnik.repository;

import mk.com.proekt.oglasnik.model.Ad;
import mk.com.proekt.oglasnik.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

//@Repository
public interface AdRepository extends JpaRepository<Ad,Long> {
    List<Ad> findAll();


}
