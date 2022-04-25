package mk.ukim.finki.emt.web.repository;

import mk.ukim.finki.emt.web.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CountryRepository extends JpaRepository<Country, Long> {
}
