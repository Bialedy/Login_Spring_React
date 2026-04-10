import { useEffect, useState } from "react";
import { Container, TextField, Button, Snackbar, Alert } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");

  // 🔹 Carregar alunos
  const carregar = () => {
    fetch("http://localhost:8080/api")
      .then(res => res.json())
      .then(data => setAlunos(data))
      .catch(err => console.error("Erro ao carregar:", err));
  };

  useEffect(() => {
    carregar();
  }, []);

  // 🔹 Adicionar aluno
  const adicionar = () => {
    fetch("http://localhost:8080/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ nome, curso })
    })
      .then(() => {
        setMsg("Aluno cadastrado!");
        setOpen(true);
        setNome("");
        setCurso("");
        carregar();
      })
      .catch(err => console.error("Erro ao adicionar:", err));
  };

  // 🔹 Excluir aluno
  const excluir = (id) => {
    fetch(`http://localhost:8080/api/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        setMsg("Aluno removido!");
        setOpen(true);
        carregar();
      })
      .catch(err => console.error("Erro ao excluir:", err));
  };

  const columns = [
    { field: "matricula", headerName: "ID", flex: 1 },
    { field: "nome", headerName: "Nome", flex: 2 },
    { field: "curso", headerName: "Curso", flex: 2 },
    {
      field: "acoes",
      headerName: "Ações",
      flex: 1,
      renderCell: (params) => (
        <Button
          color="error"
          onClick={() => excluir(params.row.matricula)}
        >
          Excluir
        </Button>
      )
    }
  ];

  return (
    <Container>
      <h2>Cadastro de Alunos</h2>

      <TextField
        label="Nome"
        fullWidth
        value={nome}
        onChange={e => setNome(e.target.value)}
        margin="normal"
      />

      <TextField
        label="Curso"
        fullWidth
        value={curso}
        onChange={e => setCurso(e.target.value)}
        margin="normal"
      />

      <Button
        variant="contained"
        onClick={adicionar}
        style={{ marginTop: "10px" }}
      >
        Salvar
      </Button>

      <div style={{ height: 400, marginTop: 20 }}>
        <DataGrid
          rows={alunos}
          columns={columns}
          getRowId={(row) => row.matricula}
        />
      </div>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="success">{msg}</Alert>
      </Snackbar>
    </Container>
  );
}

export default Alunos;