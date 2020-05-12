package mk.com.proekt.oglasnik.service;

import mk.com.proekt.oglasnik.model.Ad;

import java.util.List;

public interface AdService {
    List<Ad> findAll ();
    Ad save(Ad ad);
    Ad findById(Long id);
}
