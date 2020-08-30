package elc.web;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ho")
public class HelloWorldBoundary {
//    @Autowired
//    private CandidateRepository repo;
    @GetMapping
    public String ordersForUser() {
        return "Hello world";
    }
}
