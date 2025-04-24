const dados = {
    A: [
      { nome: "Alice", pontos: 120, nivel: 5, curso: "Engenharia", avatar: "public/avatars/alice.png" },
      { nome: "Bruno", pontos: 110, nivel: 4, curso: "Medicina", avatar: "public/avatars/bruno.png" }
    ],
    B: [
      { nome: "Carlos", pontos: 130, nivel: 6, curso: "Direito", avatar: "public/avatars/carlos.png" },
      { nome: "Diana", pontos: 100, nivel: 3, curso: "Design", avatar: "public/avatars/diana.png" }
    ]
  };
  
  const turmaSelect = document.getElementById("turmaSelect");
  const alunoList = document.getElementById("alunoList");
  const top3List = document.getElementById("top3List");
  const fichaSecao = document.getElementById("ficha");
  const fichaDetalhes = document.getElementById("fichaDetalhes");
  
  function renderizarTurma(turma) {
    const alunos = [...dados[turma]].sort((a, b) => b.pontos - a.pontos);
  
    // Ranking Top 3
    top3List.innerHTML = "";
    alunos.slice(0, 3).forEach(aluno => {
      const li = document.createElement("li");
      li.textContent = `${aluno.nome} - ${aluno.pontos} pts`;
      top3List.appendChild(li);
    });
  
    // Lista de alunos
    alunoList.innerHTML = "";
    alunos.forEach((aluno, index) => {
      const li = document.createElement("li");
      li.textContent = `${index + 1}. ${aluno.nome}`;
      li.onclick = () => mostrarFicha(aluno);
      alunoList.appendChild(li);
    });
  }
  
  function mostrarFicha(aluno) {
    fichaDetalhes.innerHTML = `
      <img src="${aluno.avatar}" alt="Avatar de ${aluno.nome}" class="ficha-avatar"/>
      <p><strong>Nome:</strong> ${aluno.nome}</p>
      <p><strong>Pontos:</strong> ${aluno.pontos}</p>
      <p><strong>Nível:</strong> ${aluno.nivel}</p>
      <p><strong>Curso Desejado:</strong> ${aluno.curso}</p>
    `;
    fichaSecao.classList.remove("hidden");
  }
  
  turmaSelect.addEventListener("change", () => {
    renderizarTurma(turmaSelect.value);
  });
  
  renderizarTurma("A");
  