

# 🖥️ EC2 – Restart – Painel de Reboot de Instâncias EC2

**EC2 - Restart** é uma solução simples criada para o suporte de empresas que utilizam AWS, permitindo reiniciar instâncias EC2 diretamente pelo navegador.
O objetivo é reduzir a atuação do time de desenvolvimento em tarefas que o suporte pode realizar de forma segura. ⚡

---

## 📁 Estrutura do Projeto

```
project/
├─ public/
│  ├─ index.html             # Interface web
│  ├─ index.js               # Lógica front-end
│  └─ style.css              # Estilos
├─ src/
│  ├─ routes/ec2Routes.js         # Rotas da API
│  ├─ controllers/ec2Controller.js  # Lógica de controle do reboot
│  └─ services/ec2Service.js      # Serviço AWS EC2   
│  └─ config/awsConfig.js      # Configuração da AWS   
├─ server.js                    # Servidor Express
├─ package.json
└─ .env                         # Credenciais e configurações
```

---

## ⚙️ Configuração

Crie um arquivo `.env` na raiz do projeto com suas credenciais e configurações:

```
PORT=3000
API_KEY=seu_token_aqui
ALLOWED_INSTANCES=i-0123456789abcdef0,i-0abcdef1234567890
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=us-east-1
```

---

## 🔒 Segurança

Atualmente, o acesso à aplicação é protegido pelo uso de uma **API Key** definida no `.env`.

* Apenas requisições contendo a chave correta conseguem acionar o reboot das instâncias.
* Isso garante que o painel não seja acessado por qualquer pessoa na rede pública.

💡 **Futuro:** pretende-se adicionar uma camada de segurança adicional via **VPN**, permitindo que apenas usuários autorizados dentro da rede corporativa possam acessar a aplicação, tornando o acesso ainda mais seguro.

---

## 🚀 Inicialização

### 1️⃣ Localmente com Node

```bash
npm install
node app.js
```

Acesse em: [http://localhost:3000](http://localhost:3000)

### 2️⃣ Com Docker (recomendado)

```bash
# Build da imagem
sudo docker build -t ec2-restart .

# Rodar o container (porta 8080 mapeada para 3000 interno)
sudo docker run -d -p 8080:3000 ec2-restart
```

Acesse em: [http://localhost:8080](http://localhost:8080)

💡 **Por que Docker é uma boa solução para a empresa**:

* Isola a aplicação, evitando conflitos com outras dependências do servidor.
* Facilita deploy rápido em múltiplos ambientes (desenvolvimento, homologação, produção).
* Permite escalabilidade sem quebrar o ambiente local ou de outros serviços.
* Torna a manutenção mais simples: atualizar a aplicação é só rebuildar a imagem.

---

## 🛠️ Stack utilizada

* **Backend:** Node.js com Express
* **Integração AWS:** SDK AWS (AWS SDK for JavaScript v3)
* **Front-end:** HTML, CSS e JS simples
* **Containerização:** Docker

---

## 🔐 Boas práticas de segurança

Para aumentar a segurança do painel EC2 - Restart, recomenda-se:

1. **Restrição por VPN:** acesso ao painel apenas por usuários conectados à VPN corporativa.
2. **Restrição por IP:** limitar acesso apenas a IPs autorizados dentro da rede da empresa.
3. **Rotação periódica de API Key:** atualizar a chave usada para autenticação a cada período definido, evitando exposição caso seja comprometida.
4. **Monitoramento de logs:** registrar todas as ações do painel para auditoria e rastreabilidade.

Essas medidas ajudam a garantir que somente pessoas autorizadas consigam reiniciar instâncias EC2 e que a operação permaneça segura.

---

## 🌐 Redes Sociais

Entre em contato comigo ou acompanhe meus projetos:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-emanoelCarvalho-blue?logo=linkedin\&style=flat-square)](https://www.linkedin.com/in/emanoelCarvalho)

[![GitHub](https://img.shields.io/badge/GitHub-emanoelCarvalho-black?logo=github\&style=flat-square)](https://github.com/emanoelCarvalho)

[![Dev.to](https://img.shields.io/badge/Dev.to-emanoelCarvalho-0A0A0A?logo=dev.to\&style=flat-square)](https://dev.to/emanoelCarvalho)

---

