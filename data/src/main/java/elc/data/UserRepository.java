package elc.data;

import elc.domain.AppUser;
import org.springframework.data.repository.CrudRepository;

import java.util.Map;

public interface UserRepository extends CrudRepository<AppUser, String> {

    AppUser findByUsername(String userName);
}
