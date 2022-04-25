package mk.ukim.finki.emt.web.model.exceptions;

public class AuthorNotFountException extends RuntimeException{
    public AuthorNotFountException(Long id){
        super(String.format("Author with id: %d is not found", id));
    }
}
