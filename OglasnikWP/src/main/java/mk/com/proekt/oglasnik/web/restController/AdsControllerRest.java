package mk.com.proekt.oglasnik.web.restController;

import mk.com.proekt.oglasnik.model.Ad;
import mk.com.proekt.oglasnik.model.User;
import mk.com.proekt.oglasnik.service.AdService;
import mk.com.proekt.oglasnik.service.UserService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.List;


@RestController
@RequestMapping("/api/ads")

@CrossOrigin
public class AdsControllerRest {
    private AdService adService;

    public AdsControllerRest(AdService adService) {
        this.adService=adService;
    }
    //      HTTP_GET
    @GetMapping
    public List<Ad> findAll(){
        List<Ad> ads = this.adService.findAll();
        System.out.println(ads);
        int p=2;
        p=p+2;
        return  ads;
    }

    @PostMapping////     @RequestParam String name, @RequestParam String address,@RequestParam String Name
    public Ad save(  Ad ad){//ManDto
        return this.adService.save(ad);
    }


    @GetMapping("/{id}/id")
    public Ad findById(@PathVariable Long id){
        return this.adService.findById(id);
    }




//    //      HTTP_POST
//    @ResponseBody
//    @PostMapping////     @RequestParam String name, @RequestParam String address,@RequestParam String Name
//    public User save(  User user){//ManDto
//        return this.userService.save(user);
//    }
//
//    @DeleteMapping("/{id}")
//    public void delete(@PathVariable Long id){
//        this.userService.delete(id);
//    }






}
