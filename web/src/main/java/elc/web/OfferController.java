package elc.web;

import elc.data.OfferRepository;
import elc.data.UserRepository;
import elc.domain.AppUser;
import elc.domain.Offer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public Iterable<Offer> getAll(@RequestParam String sortBy) {
       if(sortBy!=null)
            System.out.println(sortBy);
        Iterable<Offer> offers = null;
       if(sortBy.equals("newest")){
            offers = offerRepository.findAllByOrderByDatePostedDesc();
       }
        if(sortBy.equals("oldest")){
             offers = offerRepository.findAllByOrderByDatePostedAsc();
        }
        if(sortBy.equals("low_price")){
            offers = offerRepository.findAllByOrderByPriceAsc();
        }
        if(sortBy.equals("high_price")){
            offers = offerRepository.findAllByOrderByPriceDesc();
        }
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

    @DeleteMapping(value = "/{id}")
    public ResponseEntity deleteOne(@PathVariable Integer id){
        offerRepository.deleteById(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}
