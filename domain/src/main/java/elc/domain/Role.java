package elc.domain;

import org.springframework.security.core.GrantedAuthority;

public enum Role implements GrantedAuthority {
    ROLE_ADMIN, ROLE_VOTER;

    public String getAuthority() {
        return name();
    }

}
