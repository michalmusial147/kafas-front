package elc.data;

import elc.domain.Offer;
import org.springframework.data.repository.CrudRepository;

public interface OfferRepository extends CrudRepository<Offer, String> {

    Iterable<Offer> findAllByOrderByDatePostedDesc();


}
