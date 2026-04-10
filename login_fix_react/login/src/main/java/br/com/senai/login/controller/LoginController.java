package br.com.senai.login.controller;

import br.com.senai.login.model.Login;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {
    @PostMapping("/login")
    public boolean autenticar(@RequestBody Login login) {
        if (login.getUsuario().equals("admin") &&
                login.getSenha().equals("1234")) {
            return true;
        }
        return false;
    }
}


