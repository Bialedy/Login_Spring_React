package br.com.senai.login.controller;

import br.com.senai.login.model.Aluno;
import br.com.senai.login.service.AlunoService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class AlunoController {
    private final AlunoService service;

    public AlunoController(AlunoService service) {
        this.service = service;
    }

    // GET - listar
    @GetMapping
    public List<Aluno> listar() {
        return service.listar();
    }
// POST - salvar

    @PostMapping
    public Aluno salvar(@RequestBody Aluno aluno) {
        return service.salvar(aluno);
    }

    // DELETE - excluir
    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Long id) {
        service.excluir(id);
    }
}