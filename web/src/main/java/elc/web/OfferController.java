package elc.web;

import elc.data.OfferRepository;
import elc.domain.Offer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/offers")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class OfferController {

    @Autowired
    OfferRepository offerRepository;

    @GetMapping
    public Iterable<Offer> getAll() {
        return offerRepository.findAll();
    }
}
