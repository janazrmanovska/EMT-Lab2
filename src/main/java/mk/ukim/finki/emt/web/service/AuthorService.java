package mk.ukim.finki.emt.web.service;

import mk.ukim.finki.emt.web.model.Author;

import java.util.List;
import java.util.Optional;

public interface AuthorService {

    Optional<Author> findById(Long id);

    List<Author> findAll();

    Optional<Author> save(String name, String surname, Long country);

    void deleteById(Long id);
}
