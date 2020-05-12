package mk.com.proekt.oglasnik.service;

import mk.com.proekt.oglasnik.model.User;

import java.util.List;

public interface UserService {

    List<User> findAll();
    User findById(Long id);
    User findByUsername(String username);
    User findByEmail(String email);
    User save(User user);
    void delete(Long id);
    List<User> findAllByEmailOrUsername(String email,String username);

}
