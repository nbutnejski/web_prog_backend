package mk.com.proekt.oglasnik.web.restController;

import mk.com.proekt.oglasnik.model.User;
import mk.com.proekt.oglasnik.service.UserService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.List;


@RestController
@RequestMapping("/api/users")

@CrossOrigin
public class UserControllerRest {
    private  UserService userService;

    public UserControllerRest(UserService userService) {
        this.userService = userService;
    }
    //      HTTP_GET
    @GetMapping
    public List<User> findAll(){
        List<User> users = this.userService.findAll();
        System.out.println(users);
        int p=2;
        p=p+2;
        return  userService.findAll();
    }

    @GetMapping("/{username}/user")
    public User findByUsername(@PathVariable String username){
        return this.userService.findByUsername(username);
    }

    @GetMapping("/{id}/id")
    public User findById(@PathVariable Long id){
        return this.userService.findById(id);
    }

    @GetMapping("/{email}/email")
    public User findById(@PathVariable String email){
        return this.userService.findByEmail(email);
    }

    //      HTTP_POST

    @PostMapping////     @RequestParam String name, @RequestParam String address,@RequestParam String Name
    public User save( @RequestBody User user){//ManDto
        return this.userService.save(user);
    }

    @PatchMapping("/{id}")
    public void delete( @PathVariable Long id){
         this.userService.delete(id);
    }


    @GetMapping("/findByEmOrUsr")
    public List<User> findByEmailOrUsername(@PathVariable String email,@PathVariable String username){
        return this.userService.findAllByEmailOrUsername( email, username);
    }







}
