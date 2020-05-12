package mk.com.proekt.oglasnik.service.impl;

import mk.com.proekt.oglasnik.model.Ad;
import mk.com.proekt.oglasnik.repository.AdRepository;
import mk.com.proekt.oglasnik.service.AdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdServiceImpl implements AdService {
    @Autowired
    private final AdRepository adRepository;

    public AdServiceImpl(AdRepository adRepository) {
        this.adRepository = adRepository;
    }


    @Override
    public List<Ad> findAll() {
        return this.adRepository.findAll();
    }

    @Override
    public Ad save(Ad ad) {
        return this.adRepository.save(ad);
    }

    @Override
    public Ad findById(Long id) {
        return this.adRepository.findById(id).orElse(null);
    }
}
