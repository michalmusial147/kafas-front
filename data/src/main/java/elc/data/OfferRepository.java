package elc.data;

import elc.domain.Offer;
import org.springframework.data.repository.CrudRepository;

public interface OfferRepository extends CrudRepository<Offer, Integer> {

    Iterable<Offer> findAllByOrderByDateAddedDesc();
    Iterable<Offer> findAllByOrderByDateAddedAsc();
    Iterable<Offer> findAllByOrderByPriceDesc();
    Iterable<Offer> findAllByOrderByPriceAsc();
}
