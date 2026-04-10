package br.com.senai.login.service;

import br.com.senai.login.model.Aluno;
import br.com.senai.login.repository.AlunoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AlunoService {
    private final AlunoRepository repository;
    public AlunoService(AlunoRepository repository) {
        this.repository = repository;
    }
    // Lista todos os alunos
    public List<Aluno> listar() {
        return repository.findAll();
    }
    // Salva aluno
    public Aluno salvar(Aluno aluno) {
        return repository.save(aluno);
    }
    // Exclui aluno
    public void excluir(Long id) {
        repository.deleteById(id);
    }
}
