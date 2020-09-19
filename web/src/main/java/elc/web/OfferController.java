package elc.web;

import elc.data.OfferRepository;
import elc.data.UserRepository;
import elc.domain.AppUser;
import elc.domain.Offer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@RequestMapping("/offers")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class OfferController {

    @Autowired
    OfferRepository offerRepository;
    @Autowired
    UserRepository userRepository;

    @GetMapping
    public Iterable<Offer> getAll() {
        Iterable<Offer> offers =   offerRepository.findAllByOrderByDatePostedDesc();
        offers.forEach(offer -> {offer.setUserId(offer.getAppuser().getId());});
        return offers;
    }

    @PostMapping
    public Offer addOne(@RequestBody Offer offer){
        offer.setDatePosted(new Date());
        return offerRepository.save(offer);
    }

    @PutMapping
    public Offer editOne(@RequestBody Offer offer){
        offer.setDatePosted(new Date());
        return offerRepository.save(offer);
    }
}
