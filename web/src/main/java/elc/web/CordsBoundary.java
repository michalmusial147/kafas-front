package elc.web;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cords")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CordsBoundary {

    RestClient restClient = new RestClient();

    String getKey(){
        return "&key=AIzaSyDk8p5awrCLoqEh2NKcLtbwdbJtp-5daxo";
    }

    @GetMapping
    public Object ordersForUser(@RequestParam(value = "city", required = true) String city,
                                @RequestParam(value = "street", required = true) String street) {

        String adresses = "address="+ city + "+" + street;

        String uri = adresses + getKey();
        return restClient.get(uri);
    }
}
