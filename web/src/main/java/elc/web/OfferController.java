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
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@RestController
@RequestMapping("/offers")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class OfferController {

    @Autowired
    OfferRepository offerRepository;
    @Autowired
    UserRepository userRepository;

    @GetMapping
    public Iterable<Offer> getAll(@RequestParam(value = "sortBy", required = false) String sortBy,
                                  @RequestParam(value = "destination", required = false) String destination,
                                  @RequestParam(value = "rooms", required = false) String rooms) {
        System.out.println("getall reached rooms= "+ rooms);
       if(sortBy==null)
            System.out.println(sortBy);
        Iterable<Offer> offers = null;
        if(sortBy==null){
            offers = offerRepository.findAll();
        }
       else if(sortBy.equals("newest")){
            offers = offerRepository.findAllByOrderByDatePostedDesc();
       }
        else if(sortBy.equals("oldest")){
             offers = offerRepository.findAllByOrderByDatePostedAsc();
        }
        else if(sortBy.equals("low_price")){
            offers = offerRepository.findAllByOrderByPriceAsc();
        }
       else if(sortBy.equals("high_price")){
            offers = offerRepository.findAllByOrderByPriceDesc();
        }
        offers.forEach(offer -> {offer.setUserId(offer.getAppuser().getId());});

        if(destination!=null && !destination.equals("undefined") && !destination.equals("") && !destination.equals("any")){
            Iterable<Offer> finalOffers = offers;
            offers = () -> StreamSupport.stream(finalOffers.spliterator(), false)
                    .filter(offer -> offer.getTitle().toLowerCase().contains(destination.toLowerCase())
                            || offer.getCity().toLowerCase().contains(destination.toLowerCase())
                            || offer.getRegion().toLowerCase().contains(destination.toLowerCase()))
                    .iterator();
        }

        if(rooms!=null && !rooms.equals("undefined") && !rooms.equals("") && !rooms.equals("any")){
            Iterable<Offer> finalOffers = offers;
            offers = () -> StreamSupport.stream(finalOffers.spliterator(), false)
                    .filter(offer -> offer.getRooms().equals(rooms))
                    .iterator();
        }
        List<Offer> array = StreamSupport
                .stream(offers.spliterator(), false)
                .collect(Collectors.toList());
        return array;
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
