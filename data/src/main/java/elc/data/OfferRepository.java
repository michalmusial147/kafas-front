package elc.data;

import elc.domain.Offer;
import org.springframework.data.repository.CrudRepository;

public interface OfferRepository extends CrudRepository<Offer, Integer> {

    Iterable<Offer> findAllByOrderByDatePostedDesc();
    Iterable<Offer> findAllByOrderByDatePostedAsc();
    Iterable<Offer> findAllByOrderByPriceDesc();
    Iterable<Offer> findAllByOrderByPriceAsc();
}
