package elc.web;

import elc.domain.AppUser;
import elc.domain.LoginForm;
import elc.security.AuthenticationService;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/authentication")
@Slf4j
public class AuthenticationBoundary {
    private static Logger logger = LoggerFactory.getLogger(AuthenticationBoundary.class);

    private AuthenticationService authenticationService;

    @Autowired
    public AuthenticationBoundary(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping(value = "/login")
    public ResponseEntity<AppUser> login(@RequestBody LoginForm loginForm) {
        logger.info("login reached");
        AppUser resp =  authenticationService.signin(loginForm);
        if(resp==null){
            return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
        }
        else{
            return new ResponseEntity<>(resp, HttpStatus.OK);
        }
    }

//    @PostMapping(value = "/signup")
//    @ApiOperation(value = "${AuthenticationController.signup}")
//    @DefaultApiResponds
//    @ApiResponse(code = 201, message = "Created successfully")
//    public String signup(@ApiParam("Signup User") @RequestBody UserInputDataDTO user) {
//        return authenticationService.signup(modelMapper.map(user, User.class));
//    }
//
//    @PutMapping
//    @ApiOperation(value = "${AuthenticationController.editpassword}")
//    @DefaultApiResponds
//    public String editUserPassword(String password, HttpServletRequest req) {
//        return authenticationService.editPassword(password, req);
//    }
}
