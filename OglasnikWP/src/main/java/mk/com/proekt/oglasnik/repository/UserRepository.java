package mk.com.proekt.oglasnik.repository;

import mk.com.proekt.oglasnik.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

//@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    List<User> findAll();
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
    Optional<User> findById(Long Id);
    List<User> findAllByEmailOrUsername(String email, String username);



}

