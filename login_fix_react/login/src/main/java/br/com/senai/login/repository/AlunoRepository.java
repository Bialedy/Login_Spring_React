package br.com.senai.login.repository;

import br.com.senai.login.model.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {
}