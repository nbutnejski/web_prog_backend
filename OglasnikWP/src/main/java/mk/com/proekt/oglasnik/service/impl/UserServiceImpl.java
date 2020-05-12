package mk.com.proekt.oglasnik.service.impl;

import mk.com.proekt.oglasnik.model.User;
import mk.com.proekt.oglasnik.repository.UserRepository;
import mk.com.proekt.oglasnik.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class UserServiceImpl  implements UserService {
    @Autowired
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> findAll() {
        return this.userRepository.findAll();
    }

    @Override
    public User findById(Long id) {
        return this.userRepository.findById(id).orElse(null);
    }

    @Override
    public User findByUsername(String username) {
        return this.userRepository.findByUsername(username).orElse(null);
    }

    @Override
    public User findByEmail(String email) {
        return this.userRepository.findByEmail(email).orElse(null);
    }

    @Override       //SaveOrUpdate
    public User save(User user) {
        if(user.getId()==null){
            user.setDateCreated(LocalDateTime.now());
        }
        return this.userRepository.save(user);
    }

    @Override
    public void delete(Long id) {
        User user= this.findById(id);
        this.userRepository.delete(user);
    }

    @Override
    public List<User> findAllByEmailOrUsername(String email, String username) {
        return this.userRepository.findAllByEmailOrUsername(email ,username);
    }


}
