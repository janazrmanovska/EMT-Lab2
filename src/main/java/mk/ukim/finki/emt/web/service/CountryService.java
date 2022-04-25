package mk.ukim.finki.emt.web.service;

import mk.ukim.finki.emt.web.model.Country;


import java.util.List;
import java.util.Optional;

public interface CountryService {

    Optional<Country> findById(Long id);

    List<Country> findAll();

    Optional<Country> save(String name, String continent);

    void deleteById(Long id);

}
