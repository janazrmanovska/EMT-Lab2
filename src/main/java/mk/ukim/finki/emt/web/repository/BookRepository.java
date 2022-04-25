package mk.ukim.finki.emt.web.repository;

import mk.ukim.finki.emt.web.model.Book;
import mk.ukim.finki.emt.web.model.enumerations.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    Optional<Book> findByName(String name);
    void deleteByName(String name);
}
