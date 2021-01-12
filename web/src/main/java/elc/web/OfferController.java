package elc.web;

import elc.data.OfferRepository;
import elc.data.UserRepository;
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
            offers = offerRepository.findAllByOrderByDateAddedDesc();
       }
        else if(sortBy.equals("oldest")){
             offers = offerRepository.findAllByOrderByDateAddedAsc();
        }
        else if(sortBy.equals("low_price")){
            offers = offerRepository.findAllByOrderByPriceAsc();
        }
       else if(sortBy.equals("high_price")){
            offers = offerRepository.findAllByOrderByPriceDesc();
        }

        List<Offer> array = StreamSupport
                .stream(offers.spliterator(), false)
                .collect(Collectors.toList());
        return array;
    }

    @PostMapping
    public Offer addOne(@RequestBody Offer offer){
        offer.setDateAdded(new Date());
        return offerRepository.save(offer);
    }

    @PutMapping
    public Offer editOne(@RequestBody Offer offer){
        return offerRepository.save(offer);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity deleteOne(@PathVariable Integer id){
        offerRepository.deleteById(id);
        return new ResponseEntity(HttpStatus.OK);
    }

}
